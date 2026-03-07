from sqlalchemy import Column, Integer, String, Text, DateTime
from datetime import datetime
from database import Base

class Inquiry(Base):
    __tablename__ = "inquiries"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, index=True)
    phone = Column(String)
    message = Column(Text)
    submitted_at = Column(DateTime, default=datetime.utcnow)
