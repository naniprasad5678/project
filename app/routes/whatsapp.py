from fastapi import APIRouter

router = APIRouter(prefix="/whatsapp", tags=["WhatsApp"])

@router.get("/send-message")
def send_message(number: str, text: str):
    # dummy for now (later integrate WhatsApp API)
    return {"status": "success", "to": number, "message": text}
