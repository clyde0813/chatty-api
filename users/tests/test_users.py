from rest_framework import status
from rest_framework.test import APITestCase, APIClient
from django.core.cache import cache


# Create your tests here.

class UserTestCase(APITestCase):
    def setUp(self):
        self.register_url = "/api/v1/users/register"
        self.profile_url = "/api/v1/users/profile/"
        self.profile_put_url = "/api/v1/users/profile"
        # self.email_verify_url = "/api/v1/users/email/verify"
        self.follow_url = "/api/v1/users/follow"
        self.login_url = "/api/v1/users/login"
        self.logout_url = "/api/v1/users/logout"

        self.username = "test"
        self.password = "a123456789!"
        self.email = "test@chatty.kr"

        self.username2 = "test2"
        self.email2 = "test2@chatty.kr"

    def test(self):
        # First User Register
        # self.client.post(self.email_verify_url, {"email": self.email, "username": self.username})
        self.test_case = {
            "username": self.username,
            "password": self.password,
            "password2": self.password,
            "email": self.email,
        }
        response = self.client.post(self.register_url, self.test_case)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # Check User 1 Profile
        response = self.client.get(self.profile_url + self.username)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Second User Register
        # self.client.post(self.email_verify_url, {"email": self.email2, "username": self.username2})
        self.test_case = {
            "username": self.username2,
            "password": self.password,
            "password2": self.password,
            "email": self.email2,
            # "verification_code": str(cache.get(self.email2))
        }
        response = self.client.post(self.register_url, self.test_case)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # Check User 2 Profile
        response = self.client.get(self.profile_url + self.username2)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # User 1 Login
        response = self.client.post(self.login_url, {"username": self.username, "password": self.password})
        self.client = APIClient(HTTP_AUTHORIZATION='Token ' + response.data["token"])

        # User 1 Follow User 2
        response = self.client.post(self.follow_url, {"username": self.username2})
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check User 2 Follower is 1
        response = self.client.get(self.profile_url + self.username2)
        self.assertEqual(len(response.data["follower"]), 1)

        # User 1 Unfollow User 2
        response = self.client.post(self.follow_url, {"username": self.username2})
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check User 2 Follower is 0
        response = self.client.get(self.profile_url + self.username2)
        self.assertEqual(len(response.data["follower"]), 0)

        # User 1 Logout
        response = self.client.get(self.logout_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.client = APIClient()

        # User 1 Login
        response = self.client.post(self.login_url, {"username": self.username, "password": self.password})
        self.client = APIClient(HTTP_AUTHORIZATION='Token ' + response.data["token"])

        # User 1 Change profile_message
        response = self.client.put(self.profile_put_url, {"profile_message": "test"})
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check User 1 profile_message
        response = self.client.get(self.profile_url + self.username)
        self.assertEqual(response.data["profile_message"], "test")
