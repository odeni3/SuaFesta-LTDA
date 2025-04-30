from firebase_config import db
from schemas import EspacoEventoCreate
from typing import List

def criar_espaco_evento(evento: EspacoEventoCreate) -> dict:
    doc_ref = db.collection("espacos_evento").add(evento.dict())
    return {"id": doc_ref[1].id, **evento.dict()}

def listar_espacos_evento() -> List[dict]:
    docs = db.collection("espacos_evento").stream()
    return [{"id": doc.id, **doc.to_dict()} for doc in docs]
