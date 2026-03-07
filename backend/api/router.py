from fastapi import APIRouter, Depends, BackgroundTasks
from pydantic import BaseModel
from typing import List, Optional
from sqlalchemy.orm import Session
from database import get_db
import models
from email_service import send_inquiry_email

api_router = APIRouter()

# Data Models
class Course(BaseModel):
    id: str
    name: str
    duration: str
    eligibility: str
    description: Optional[str] = None
    fee_estimate: str

class FacultyMember(BaseModel):
    id: int
    name: str
    designation: Optional[str] = None

class ContactInquiry(BaseModel):
    name: str
    email: str
    phone: str
    message: str

# Mock Data
COURSES = [
    {
        "id": "dems",
        "name": "DEMS",
        "duration": "2 Years + 6 months internship",
        "eligibility": "10th/Matric",
        "description": "Diploma in Electro Homeopathy Medicine and Surgery.",
        "fee_estimate": "Contact for Pricing"
    },
    {
        "id": "bems",
        "name": "BEMS",
        "duration": "4 ½ Years",
        "eligibility": "I.Sc. Biology (12th Science)",
        "description": "Bachelor of Electro Homeopathy Medicine and Surgery.",
        "fee_estimate": "Contact for Pricing"
    },
    {
        "id": "mbeh",
        "name": "MBEH",
        "duration": "4 ½ Years",
        "eligibility": "DEMS/Intermediate",
        "description": "Master of Biomedical Electro Homeopathy.",
        "fee_estimate": "Contact for Pricing"
    },
    {
        "id": "mdeh",
        "name": "MDEH",
        "duration": "2 ½ Years",
        "eligibility": "BEMS",
        "description": "Doctor of Medicine in Electro Homeopathy.",
        "fee_estimate": "Contact for Pricing"
    }
]

FACULTY = [
    {"id": 1, "name": "Dr. Reena Devi", "designation": "Faculty"},
    {"id": 2, "name": "Dr. N. Mahato", "designation": "Faculty"},
    {"id": 3, "name": "Dr. A.K. Pandey", "designation": "Faculty"},
    {"id": 4, "name": "Dr. Swati", "designation": "Faculty"},
    {"id": 5, "name": "Dr. Sukhdeo", "designation": "Faculty"},
    {"id": 6, "name": "Dr. Puja", "designation": "Faculty"},
    {"id": 7, "name": "Dr. Vijay kumar", "designation": "Faculty"},
    {"id": 8, "name": "Dr. Pankaj Srivastava", "designation": "Faculty"},
    {"id": 9, "name": "Dr. Shraddha", "designation": "Faculty"},
    {"id": 10, "name": "Ms. Nikita", "designation": "Faculty"},
    {"id": 11, "name": "Ms. Tannushree", "designation": "Faculty"}
]

@api_router.get("/courses", response_model=List[Course])
def get_courses():
    return COURSES

@api_router.get("/faculty", response_model=List[FacultyMember])
def get_faculty():
    return FACULTY

@api_router.post("/contact")
def submit_contact(inquiry: ContactInquiry, background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
    # Save to database
    db_inquiry = models.Inquiry(
        name=inquiry.name,
        email=inquiry.email,
        phone=inquiry.phone,
        message=inquiry.message
    )
    db.add(db_inquiry)
    db.commit()
    db.refresh(db_inquiry)
    
    # Trigger asynchronous email notification
    background_tasks.add_task(
        send_inquiry_email,
        name=inquiry.name,
        email=inquiry.email,
        phone=inquiry.phone,
        message_text=inquiry.message
    )
    
    return {"status": "success", "message": "Inquiry received successfully. We will get back to you soon!"}
