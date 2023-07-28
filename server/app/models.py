from app import db, login_manager
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

@login_manager.user_loader
def user_loader(id):
    return Usuario.query.get(int(id))

class Usuario(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(32), nullable=False)
    email = db.Column(db.String(32), nullable=False, unique=True)
    senha_hash = db.Column(db.String(128), nullable=False)
    papel_id = db.Column(db.Integer, db.ForeignKey('papel.id'))
    ativo = db.Column(db.Boolean, default=False)

    @property
    def senha(self):
        return AttributeError("Não pode ver a senha")
    
    @senha.setter
    def senha(self, valor):
        self.senha_hash = generate_password_hash(valor)

    def verifica_senha(self, valor):
        return check_password_hash(self.senha_hash, valor)