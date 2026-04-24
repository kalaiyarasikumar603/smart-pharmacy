from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from app.database import Base

class Prescription(Base):
    __tablename__ = "prescriptions"

    id = Column(Integer, primary_key=True, index=True)
    patient_id = Column(Integer, ForeignKey("patients.id"))
    file_path = Column(String(255))
    verified = Column(Boolean, default=False)