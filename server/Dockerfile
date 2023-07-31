FROM python:3.10.6-slim

WORKDIR /home/python/app

COPY requirements.txt .

RUN pip install --upgrade pip --no-cache-dir -r requirements.txt

USER python

ENV PIP_ENV_VENV_IN_PROJECT=True

CMD [ "tail", "-f", "/dev/null"]

