from flask import render_template, redirect, url_for, request, jsonify
from app.models import Usuario
from app.auth import auth
from .forms import LoginForm

@auth.route('/api/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()

    if form.validate_on_submit():
        email = form.email.data
        senha = form.senha.data

        # Verifica se o usuário existe no banco de dados
        user = Usuario.query.filter_by(email=email).first()

        if user is not None and user.verifica_senha(senha):
            # Aqui você pode fazer o que desejar quando o login for bem-sucedido
            return jsonify({'message': 'Login bem sucedido'}), 200
        else:
            return jsonify({'message': 'Email ou senha inválidos'}), 401

    return render_template('login.html', form=form)


@auth.route("/registro", methods=["GET", "POST"])
def registro():
    return "Usuario Cadastrado com Sucesso"