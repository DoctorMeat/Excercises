from flask import Flask, request, jsonify, render_template
from models import db, Cupcake
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///Cupcake_Time"
db.init_app(app)


@app.route("/")
def homepage():
    """Render homepage."""

    return render_template("index.html")


@app.route("/api/cupcakes", methods=["GET", "POST"])
def cupcakes():
    if request.method == "GET":
        cupcakes = Cupcake.query.all()
        return jsonify(cupcakes=[cupcake.serialize() for cupcake in cupcakes])
    elif request.method == "POST":
        data = request.json
        flavor = data.get("flavor")
        size = data.get("size")
        rating = data.get("rating")
        image = data.get("image", "https://tinyurl.com/demo-cupcake")
        new_cupcake = Cupcake(flavor=flavor, size=size, rating=rating, image=image)
        db.session.add(new_cupcake)
        db.session.commit()
        return jsonify(cupcake=new_cupcake.serialize()), 201


@app.route("/api/cupcakes/<int:cupcake_id>", methods=["PATCH", "DELETE"])
def update_delete_cupcake(cupcake_id):
    cupcake = Cupcake.query.get_or_404(cupcake_id)
    if request.method == "PATCH":
        data = request.json
        cupcake.flavor = data.get("flavor", cupcake.flavor)
        cupcake.size = data.get("size", cupcake.size)
        cupcake.rating = data.get("rating", cupcake.rating)
        cupcake.image = data.get("image", cupcake.image)
        db.session.commit()
        return jsonify(cupcake=cupcake.serialize())
    elif request.method == "DELETE":
        db.session.delete(cupcake)
        db.session.commit()
        return jsonify(message="Deleted"), 200
