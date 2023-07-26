from app.auth import auth

@auth.route("/login", methods=["POST", "GET"])
def login():
    return "Usuário ou senha inválidos"


@auth.route("/registro", methods=["GET", "POST"])
def registro():
    return "Usuario Cadastrado com Sucesso"


