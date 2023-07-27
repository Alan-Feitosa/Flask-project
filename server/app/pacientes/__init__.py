from flask import Blueprint

pacientes = Blueprint("pacientes", __name__)

from app.pacientes import routes