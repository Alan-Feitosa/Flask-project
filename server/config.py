import os
from dotenv import load_dotenv

# load_dotenv()


class Config:
    SECRET_KEY = "ALFAJKF"

class DevelopmentConfig(Config):
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URI')

config = {
    "development": DevelopmentConfig,

    "default": DevelopmentConfig
}