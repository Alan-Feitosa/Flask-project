# Use a imagem base Python
FROM python:3.10.6-slim

RUN useradd -ms /bin/bash python

RUN pip install pipenv

USER python

# Defina o diretório de trabalho como /app
WORKDIR /home/python/app

ENV PIP_ENV_VENV_IN_PROJECT=True

# Comando para iniciar o aplicativo quando o contêiner é iniciado
CMD [ "tail", "-f", "/dev/null"]

