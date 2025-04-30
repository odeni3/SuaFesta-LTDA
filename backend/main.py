from fastapi import FastAPI, HTTPException
from schemas import EspacoEventoCreate, EspacoEventoResponse
from crud import criar_espaco_evento, listar_espacos_evento
from typing import List
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ou especifique "http://localhost:3000" se quiser limitar
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"message": "Backend rodando com FastAPI e Firebase!"}

@app.post("/espacos", response_model=EspacoEventoResponse)
def criar_espaco(evento: EspacoEventoCreate):
    try:
        espaco = criar_espaco_evento(evento)
        return espaco
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/espacos", response_model=List[EspacoEventoResponse])
def listar_espacos():
    try:
        return listar_espacos_evento()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
