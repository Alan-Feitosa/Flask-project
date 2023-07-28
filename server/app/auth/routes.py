from flask import jsonify
from app.auth import auth

@auth.route("/api/login", methods=["POST", "GET"])
def login():
    return jsonify({
        'message': "Faça seu login aqui"
    })


@auth.route("/registro", methods=["GET", "POST"])
def registro():
    return "Usuario Cadastrado com Sucesso"


