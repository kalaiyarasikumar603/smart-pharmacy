from sqlalchemy import Column, Integer, String, Boolean
from app.database import Base

class Patient(Base):
    __tablename__ = "patients"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    age = Column(Integer)
    phone = Column(String(15))
    address = Column(String(255))
    is_elderly = Column(Boolean, default=False)