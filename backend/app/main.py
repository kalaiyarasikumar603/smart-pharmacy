from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import patient, medicine, order, delivery
from app.database import Base, engine

# ✅ Step 1: create app FIRST
app = FastAPI()

# ✅ Step 2: then add middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Step 3: DB tables
Base.metadata.create_all(bind=engine)

@app.get("/")
def home():
    return {"message": "Pharmacy API Running"}

# ✅ Step 4: routers
app.include_router(patient.router)
app.include_router(medicine.router)
app.include_router(order.router)
app.include_router(delivery.router)