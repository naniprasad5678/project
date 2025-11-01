from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# Model for sending a WhatsApp message
class Message(BaseModel):
    phone: str
    message: str

@app.get("/")
def read_root():
    return {"message": "WhatsApp Marketing Tool API is running 🚀"}

# POST API for sending WhatsApp messages (dummy for now)
@app.post("/send-message/")
def send_message(msg: Message):
    # later we will connect this to WhatsApp API
    return {"status": "success", "phone": msg.phone, "message": msg.message}
