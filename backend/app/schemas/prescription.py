from pydantic import BaseModel

class PrescriptionCreate(BaseModel):
    patient_id: int
    file_path: str