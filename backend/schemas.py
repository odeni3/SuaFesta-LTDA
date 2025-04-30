from pydantic import BaseModel, EmailStr, HttpUrl
from typing import List, Optional

class EspacoEventoBase(BaseModel):
    nome: str
    capacidade_maxima: int
    fotos: List[str]
    descricao: str
    localizacao: str
    telefone: str
    email: EmailStr
    faixa_preco: Optional[str] = None
    tipos_evento: Optional[List[str]] = []
    amenidades: Optional[List[str]] = []

class EspacoEventoCreate(EspacoEventoBase):
    pass

class EspacoEventoResponse(EspacoEventoBase):
    id: str

