from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import config

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object(config['default'])

    db.init_app(app)
    from app.auth import auth as auth_bp


    app.register_blueprint(auth_bp, url_prefix="/")


    return app