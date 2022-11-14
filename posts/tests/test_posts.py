from django.test import TestCase
from rest_framework import status
from rest_framework.test import APITestCase, APIClient
from django.core.cache import cache


class PostTestCase(APITestCase):
    def setUp(self):
        self.register_url = "/api/v1/users/register"
        self.profile_url = "/api/v1/users/profile/"
        self.profile_put_url = "/api/v1/users/profile"
        self.email_verify_url = "/api/v1/users/email/verify"
        self.follow_url = "/api/v1/users/follow"
        self.login_url = "/api/v1/users/login"
        self.logout_url = "/api/v1/users/logout"

        self.question_url = "/api/v1/posts/question/"
        self.question_post_url = "/api/v1/posts/question"
        self.question_unanswered_url = "/api/v1/posts/unanswered"
        self.question_answer_url = "/api/v1/posts/answer"

        self.username = "test"
        self.password = "a123456789!"
        self.email = "tests@chatty.kr"

        self.question_data = {
            "target_profile": self.username,
            "content": "test question"
        }

    def test(self):
        # First User Register
        self.client.post(self.email_verify_url, {"email": self.email, "username": self.username})
        self.test_case = {
            "username": self.username,
            "password": self.password,
            "password2": self.password,
            "email": self.email,
            "verification_code": str(cache.get(self.email))
        }
        response = self.client.post(self.register_url, self.test_case)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # Check User 1 Profile
        response = self.client.get(self.profile_url + self.username)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # User 1 Question Post
        response = self.client.post(self.question_post_url, self.question_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check User 1 Question
        response = self.client.get(self.profile_url + self.username)
        self.assertEqual(response.data["question_count"]["unanswered"], 1)

        # User 1 Login
        response = self.client.post(self.login_url, {"username": self.username, "password": self.password})
        self.client = APIClient(HTTP_AUTHORIZATION='Token ' + response.data["token"])

        # User 1 Check Unanswered
        response = self.client.get(self.question_unanswered_url)
        self.assertEqual(len(response.data['results']), 1)

        # User 1 Answer
        self.answer_data = {
            "question_id": response.data['results'][0]['pk'],
            "content": "test answer"
        }
        response = self.client.post(self.question_answer_url, self.answer_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
