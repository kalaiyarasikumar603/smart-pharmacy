from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models.order import Order 
from app.models.delivery import Delivery
from app.schemas.delivery import DeliveryCreate

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/deliveries")
def assign_delivery(delivery: DeliveryCreate, db: Session = Depends(get_db)):
    order = db.query(Order).filter(Order.id == delivery.order_id).first()

    if not order:
        return {"error": "Order not found"}

    new_delivery = Delivery(
        order_id=delivery.order_id,
        delivery_person=delivery.delivery_person
    )

    db.add(new_delivery)
    db.commit()
    db.refresh(new_delivery)

    return {
        "id": new_delivery.id,
        "order_id": new_delivery.order_id,
        "delivery_person": new_delivery.delivery_person
    }

@router.get("/deliveries")
def get_deliveries(db: Session = Depends(get_db)):
    return db.query(Delivery).all()