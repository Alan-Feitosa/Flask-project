class Config:
    SECRET_KEY = "ALFAJKF"

class DevelopmentConfig(Config):
    pass

config = {
    "development": DevelopmentConfig,

    "default": DevelopmentConfig
}