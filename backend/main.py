from fastapi import FastAPI
from firebase_config import db

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Backend rodando com FastAPI e Firebase!"}

@app.post("/evento")
def criar_evento(evento: dict):
    doc_ref = db.collection("eventos").add(evento)
    return {"id": doc_ref[1].id, "mensagem": "Evento criado com sucesso!"}
