from flask import Blueprint

doutores = Blueprint("doutores", __name__)

from app.doutores import routes