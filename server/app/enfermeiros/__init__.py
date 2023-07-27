from flask import Blueprint

enfermeiros = Blueprint("enfermeiros", __name__)

from app.enfermeiros import routes