from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
# from flask_login import LoginManager
# from config import config

# db = SQLAlchemy()
# login_manager = LoginManager()
# login_manager.login_view = "auth.login"

def create_app():
    app = Flask(__name__)

    # db.init_app(app)
    # login_manager.init_app(app)

    from app.auth import auth as auth_bp


    app.register_blueprint(auth_bp, url_prefix="/")


    return app