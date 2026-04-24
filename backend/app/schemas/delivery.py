from pydantic import BaseModel

class DeliveryCreate(BaseModel):
    order_id: int
    delivery_person: str