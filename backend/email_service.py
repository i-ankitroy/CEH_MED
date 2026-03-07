import smtplib
from email.message import EmailMessage
import os
from dotenv import load_dotenv

load_dotenv()

SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SENDER_EMAIL = os.getenv("SENDER_EMAIL", "")
SENDER_PASSWORD = os.getenv("SENDER_PASSWORD", "")
RECEIVER_EMAIL = os.getenv("RECEIVER_EMAIL", "")

def send_inquiry_email(name: str, email: str, phone: str, message_text: str):
    if not SENDER_EMAIL or not SENDER_PASSWORD or not RECEIVER_EMAIL:
        print("Email credentials are not fully configured in .env file. Skipping email.")
        return False
        
    if SENDER_PASSWORD == "your_app_password_here":
        print("Please replace the placeholder password in .env with your real App Password.")
        return False

    msg = EmailMessage()
    msg.set_content(
        f"New Admission/Contact Inquiry Received!\n\n"
        f"Name: {name}\n"
        f"Email: {email}\n"
        f"Phone: {phone}\n"
        f"Message:\n{message_text}\n"
    )

    msg['Subject'] = f"New C.E.H Website Inquiry from {name}"
    msg['From'] = f"{name} via CEH Website <{SENDER_EMAIL}>" # Display student's name, but sent from your authenticated app
    msg['To'] = RECEIVER_EMAIL
    msg['Reply-To'] = email # When you hit "Reply", it replies directly to the student's email!

    try:
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SENDER_EMAIL, SENDER_PASSWORD)
            server.send_message(msg)
        print("Email sent successfully.")
        return True
    except Exception as e:
        print(f"Failed to send email: {e}")
        return False
