from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models.order import Order
from app.models.order_item import OrderItem
from app.models.patient import Patient
from app.schemas.order import OrderCreate

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/orders")
def create_order(order: OrderCreate, db: Session = Depends(get_db)):

    patient = db.query(Patient).filter(Patient.id == order.patient_id).first()

    priority = "HIGH" if patient.age >= 60 else "NORMAL"

    new_order = Order(patient_id=order.patient_id, priority=priority)


    db.add(new_order)
    db.commit()
    db.refresh(new_order)

    for item in order.items:
        order_item = OrderItem(
            order_id=new_order.id,
            medicine_id=item.medicine_id,
            quantity=item.quantity
        )
        db.add(order_item)

    db.commit()

    return {"order_id": new_order.id, "priority": priority}
@router.get("/orders")
def get_orders(db: Session = Depends(get_db)):
    orders = db.query(Order).all()

    return [
        {
            "id": o.id,
            "patient_id": o.patient_id,
            "priority": o.priority,
            "status": getattr(o, "status", "pending")  # safe fallback
        }
        for o in orders
    ]