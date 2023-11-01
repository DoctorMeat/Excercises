from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField, BooleanField, SelectField
from wtforms.validators import URL, AnyOf, NumberRange, Optional, DataRequired


class AddPetForm(FlaskForm):
    name = StringField("Pet Name", validators=[DataRequired()])
    species = SelectField(
        "Species",
        choices=[("cat", "Cat"), ("dog", "Dog"), ("porcupine", "Porcupine")],
        validators=[DataRequired()],
    )
    photo_url = StringField("Photo URL", validators=[Optional(), URL()])
    age = IntegerField("Age", validators=[Optional(), NumberRange(min=0, max=30)])
    notes = TextAreaField("Notes")
    available = BooleanField("Available")
