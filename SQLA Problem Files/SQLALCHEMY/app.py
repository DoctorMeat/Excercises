from flask import Flask, request, render_template, redirect, session, flash
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///products_db]"

db = SQLAlchemy()
db.app = app
db.init_app(app)

app.config["SECRET_KEY"] = "Beef123"


@app.route("/")
def show_home():
    return render_template("home.html")
