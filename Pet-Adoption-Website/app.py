from flask import Flask, render_template, redirect, url_for, request
from models import db, Pet
from forms import AddPetForm

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///pet_shop"
app.config["SECRET_KEY"] = "BEEEEEF"

db.init_app(app)

with app.app_context():
    db.create_all()


@app.route("/")
def index():
    pets = Pet.query.all()
    return render_template("index.html", pets=pets)


@app.route("/add", methods=["GET", "POST"])
def add_pet():
    form = AddPetForm()
    if form.validate_on_submit():
        try:
            pet = Pet(
                name=form.name.data,
                species=form.species.data,
                photo_url=form.photo_url.data,
                age=form.age.data,
                notes=form.notes.data,
                available=form.available.data,
            )
            db.session.add(pet)
            db.session.commit()
            return redirect(url_for("index"))
        except Exception as e:
            print(f"An error occurred: {e}")

    else:
        print(form.errors)

    return render_template("add_pet.html", form=form)


@app.route("/<int:pet_id>", methods=["GET", "POST"])
def display_pet(pet_id):
    pet = Pet.query.get_or_404(pet_id)
    form = AddPetForm(obj=pet)
    if form.validate_on_submit():
        form.populate_obj(pet)
        if "available" in request.form:
            pet.available = True
        else:
            pet.available = False
        db.session.commit()
        return redirect(url_for("index"))
    return render_template("display_pet.html", form=form, pet=pet)


@app.route("/<int:pet_id>/remove", methods=["POST"])
def remove_pet(pet_id):
    pet = Pet.query.get_or_404(pet_id)
    db.session.delete(pet)
    db.session.commit()
    return redirect(url_for("index"))
