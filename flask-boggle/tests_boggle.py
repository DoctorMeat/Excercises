from unittest import TestCase
from app import app
from flask import session
from boggle import Boggle


class FlaskTests(TestCase):
    def setUp(self):
        app.config["TESTING"] = True
        self.client = app.test_client()
        self.boggle_game = Boggle()

    def test_index(self):
        with self.client:
            response = self.client.get("/")
            self.assertIn("board", session)
            self.assertIsNone(session.get("highscore"))
            self.assertIsNone(session.get("nplays"))
            self.assertIn(b"<p>High Score:", response.data)
            self.assertIn(b"Score:", response.data)
            self.assertIn(b"Seconds Left:", response.data)

    def test_check_word_view_valid(self):
        with self.client as client:
            with client.session_transaction() as session:
                session["board"] = [
                    ["T", "E", "S", "T", "T"],
                    ["T", "E", "S", "T", "T"],
                    ["T", "E", "S", "T", "T"],
                    ["T", "E", "S", "T", "T"],
                    ["T", "E", "S", "T", "T"],
                ]
        response = self.client.get("/check-word?word=test")
        self.assertEqual(response.json["result"], "ok")

    def test_invalid_word(self):
        """Test if word is in the dictionary"""

        self.client.get("/")
        response = self.client.get("/check-word?word=impossible")
        self.assertEqual(response.json["result"], "not-on-board")

    def non_english_word(self):
        """Test if word is on the board"""

        self.client.get("/")
        response = self.client.get("/check-word?word=fsjdakfkldsfjdslkfjdlksf")
        self.assertEqual(response.json["result"], "not-word")
