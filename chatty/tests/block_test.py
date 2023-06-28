from rest_framework import status
from rest_framework.test import APITestCase, APIClient


class QuestionBlockTestCase(APITestCase):
    def setUp(self):
        self.register_url = "/api/v1/user/register"
        self.login_url = "/api/v1/user/login"
        self.logout_url = "/api/v1/user/logout"
        self.follow_url = "/api/v1/user/follow"

        self.block_url = "/api/v1/user/block"

        self.question_post_url = "/api/v1/chatty"

        self.question_rejected_url = "/api/v1/chatty/refuse"
        self.question_answer_url = "/api/v1/chatty/answer"
        self.timeline_url = "/api/v1/chatty/timeline"

        self.username = "test"
        self.profile_name = "test"
        self.password = "a123456789!"
        self.email = "test@chatty.kr"

        self.username2 = "test2"
        self.email2 = "test2@chatty.kr"

        self.username3 = "test3"
        self.email3 = "test3@chatty.kr"

    def register_user(self, username, profile_name, password, email):
        # First User Register
        # self.client.post(self.email_verify_url, {"email": self.email, "username": self.username})
        self.test_case = {
            "username": username,
            'profile_name': profile_name,
            "password": password,
            "password2": password,
            "email": email,
        }
        response = self.client.post(self.register_url, self.test_case)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def question_post(self, username, password, target, content, anonymous):
        response = self.client.post(self.login_url, {"username": username, "password": password})
        self.client = APIClient(HTTP_AUTHORIZATION='Bearer ' + response.data["access_token"])
        response = self.client.post(self.question_post_url,
                                    {'username': target, 'content': content, 'anonymous': anonymous})
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def user_block(self, username, password, target):
        response = self.client.post(self.login_url, {"username": username, "password": password})
        self.client = APIClient(HTTP_AUTHORIZATION='Bearer ' + response.data["access_token"])
        response = self.client.post(self.block_url,
                                    {'username': target})
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def timeline_check(self, username, password, content):
        response = self.client.post(self.login_url, {"username": username, "password": password})
        self.client = APIClient(HTTP_AUTHORIZATION='Bearer ' + response.data["access_token"])
        response = self.client.get(self.timeline_url)
        self.assertEqual(response['results'][0]['content'], content)

    def test_timeline_block(self):
        self.register_user(self.username, self.profile_name, self.password, self.email)
        self.register_user(self.username2, self.profile_name, self.password, self.email2)
        self.register_user(self.username3, self.profile_name, self.password, self.email3)
        self.question_post(self.username, self.password, self.username2, content="anonymous True", anonymous=True)
        self.question_post(self.username, self.password, self.username2, content="anonymous False", anonymous=False)
        self.user_block(self.username3, self.password, self.username)
        # User 1 Follow User 2
        response = self.client.post(self.follow_url, {"username": self.username2})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.timeline_check()