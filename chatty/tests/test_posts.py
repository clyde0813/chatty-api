from rest_framework import status
from rest_framework.test import APITestCase, APIClient
from user.tests.test_users import UserTestCase


class PostTestCase(UserTestCase):
    def setUp(self):
        super().setUp()
        self.question_url = "/api/v1/chatty/user/"
        self.question_post_url = "/api/v1/chatty"
        self.question_unanswered_url = "/api/v1/chatty/arrived"
        self.question_rejected_url = "/api/v1/chatty/refuse"
        self.question_answer_url = "/api/v1/chatty/answer"

        self.question_data = {
            "username": self.username,
            "content": "test question"
        }

    def test_question_post(self):
        self.register_user(self.username, self.profile_name, self.password, self.email)

        # User 1 Question Post
        response = self.client.post(self.question_post_url, self.question_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_question_unanswered(self):
        self.test_question_post()
        # Check User 1 Question
        response = self.client.get(self.profile_url + self.username)
        self.assertEqual(response.data["question_count"]["unanswered"], 1)

        self.login(self.username, self.password)

        # User 1 Check Unanswered
        response = self.client.get(self.question_unanswered_url)
        self.assertEqual(len(response.data['results']), 1)

    def test_question_rejected(self):
        self.test_question_post()
        # Check User 1 Question
        response = self.client.get(self.profile_url + self.username)
        self.assertEqual(response.data["question_count"]["unanswered"], 1)

        self.login(self.username, self.password)

        response = self.client.get(self.question_unanswered_url)
        response = self.client.post(self.question_rejected_url, {"question_id": response.data["results"][0]["pk"]})
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        response = self.client.get(self.profile_url + self.username)
        self.assertEqual(response.data["question_count"]["rejected"], 1)

    def test_question_answer_post(self):
        self.test_question_post()
        self.login(self.username, self.password)

        response = self.client.get(self.question_unanswered_url)
        # User 1 Answer
        self.answer_data = {
            "question_id": response.data['results'][0]['pk'],
            "content": "test answer"
        }
        response = self.client.post(self.question_answer_url, self.answer_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        response = self.client.get(self.question_url + self.username)
        self.assertEqual(len(response.data["results"]), 1)

