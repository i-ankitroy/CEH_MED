import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.router import api_router
from database import engine, Base
import models

# Create database tables if they do not exist
Base.metadata.create_all(bind=engine)


app = FastAPI(title="CEH Medical Institute API")

# Configure CORS - reads allowed origin from env var for production flexibility
FRONTEND_URL = os.getenv("FRONTEND_URL", "")

allowed_origins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:5174",
    "http://127.0.0.1:5175",
]

if FRONTEND_URL:
    allowed_origins.append(FRONTEND_URL)

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Welcome to CEH Medical Institute API"}
