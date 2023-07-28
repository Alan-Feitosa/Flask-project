from app import create_app, db
from app.models import *
from flask_migrate import Migrate
from flask_cors import CORS

app = create_app()
migrate = Migrate(app, db)
CORS(app)

if __name__ == "__main__":
    app.run(debug=True, port=3010)