from rest_framework import status
from rest_framework.test import APITestCase, APIClient


# Create your tests here.

class UserTestCase(APITestCase):
    def setUp(self):
        self.register_url = "/api/v1/users/register"
        self.profile_url = "/api/v1/users/profile/"
        self.profile_put_url = "/api/v1/users/profile"
        self.follow_url = "/api/v1/users/follow"
        self.login_url = "/api/v1/users/login"
        self.logout_url = "/api/v1/users/logout"

        self.username = "test"
        self.password = "a123456789!"
        self.email = "test@chatty.kr"

        self.username2 = "test2"
        self.email2 = "test2@chatty.kr"

    def register_user(self, username, password, email):
        # First User Register
        # self.client.post(self.email_verify_url, {"email": self.email, "username": self.username})
        self.test_case = {
            "username": username,
            "password": password,
            "password2": password,
            "email": email,
        }
        response = self.client.post(self.register_url, self.test_case)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def login(self, username, password):
        # User 1 Login
        response = self.client.post(self.login_url, {"username": username, "password": password})
        self.client = APIClient(HTTP_AUTHORIZATION='Token ' + response.data["token"])

    def test_register(self):
        self.register_user(self.username, self.password, self.email)

    def test_forbidden_username_register(self):
        self.test_case = {
            "username": "admin",
            "password": self.password,
            "password2": self.password,
            "email": self.email2,
        }
        response = self.client.post(self.register_url, self.test_case)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_duplicate_username_register(self):
        self.register_user(self.username, self.password, self.email)
        self.test_case = {
            "username": self.username,
            "password": self.password,
            "password2": self.password,
            "email": self.email2,
        }
        response = self.client.post(self.register_url, self.test_case)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_duplicate_email_register(self):
        self.register_user(self.username, self.password, self.email)
        self.test_case = {
            "username": self.username2,
            "password": self.password,
            "password2": self.password,
            "email": self.email,
        }
        response = self.client.post(self.register_url, self.test_case)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_login(self):
        self.register_user(self.username, self.password, self.email)
        self.login(self.username, self.password)

    def test_profile(self):
        self.register_user(self.username, self.password, self.email)
        self.register_user(self.username2, self.password, self.email2)
        # Check User 1 Profile
        response = self.client.get(self.profile_url + self.username)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check User 2 Profile
        response = self.client.get(self.profile_url + self.username2)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_follow(self):
        self.register_user(self.username, self.password, self.email)
        self.register_user(self.username2, self.password, self.email2)

        self.login(self.username, self.password)

        # User 1 Follow User 2
        response = self.client.post(self.follow_url, {"username": self.username2})
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check User 2 Follower is 1
        response = self.client.get(self.profile_url + self.username2)
        self.assertEqual(len(response.data["follower"]), 1)

    def test_unfollow(self):
        self.test_follow()
        # User 1 Unfollow User 2
        response = self.client.post(self.follow_url, {"username": self.username2})
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check User 2 Follower is 0
        response = self.client.get(self.profile_url + self.username2)
        self.assertEqual(len(response.data["follower"]), 0)

    def test_logout(self):
        self.register_user(self.username, self.password, self.email)
        self.login(self.username, self.password)
        # User 1 Logout
        response = self.client.get(self.logout_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_profile_message_update(self):
        self.register_user(self.username, self.password, self.email)
        self.login(self.username, self.password)

        # User 1 Change profile_message
        response = self.client.put(self.profile_put_url, {"profile_message": "test"})
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check User 1 profile_message
        response = self.client.get(self.profile_url + self.username)
        self.assertEqual(response.data["profile_message"], "test")

    def test_profile_username_update(self):
        self.register_user(self.username, self.password, self.email)
        self.login(self.username, self.password)

        # User 1 Change profile_message
        response = self.client.put(self.profile_put_url, {"username": "test1234"})
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check User 1 profile_message
        response = self.client.get(self.profile_url + "test1234")
        self.assertEqual(response.data["username"], "test1234")

    def test_profile_forbidden_username_update(self):
        self.register_user(self.username, self.password, self.email)
        self.login(self.username, self.password)

        # User 1 Change profile_message
        response = self.client.put(self.profile_put_url, {"username": "admin"})
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

        # Check User 1 profile_message
        response = self.client.get(self.profile_url + self.username)
        self.assertEqual(response.data["username"], self.username)
