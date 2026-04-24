from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from app.database import Base

class Delivery(Base):
    __tablename__ = "deliveries"

    id = Column(Integer, primary_key=True, index=True)
    order_id = Column(Integer, ForeignKey("orders.id"))
    delivery_person = Column(String(100))
    status = Column(String(20), default="PENDING")
    delivery_time = Column(DateTime, nullable=True)