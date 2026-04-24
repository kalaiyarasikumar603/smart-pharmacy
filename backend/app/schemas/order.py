from pydantic import BaseModel
from typing import List

class OrderItemData(BaseModel):
    medicine_id: int
    quantity: int

class OrderCreate(BaseModel):
    patient_id: int
    items: List[OrderItemData]