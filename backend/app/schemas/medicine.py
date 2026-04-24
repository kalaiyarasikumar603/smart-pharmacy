from pydantic import BaseModel

class MedicineCreate(BaseModel):
    name: str
    stock: int
    price: float