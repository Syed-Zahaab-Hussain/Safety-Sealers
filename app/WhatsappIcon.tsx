"use client";
import { BiLogoWhatsappSquare } from "react-icons/bi";

const handleWhatsAppClick = () => {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
  const message = "Hello, I have a question about your services.";

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const url = isMobile
    ? `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`;

  window.open(url, "_blank");
};

const WhatsappIcon = () => {
  return (
    <div
      onClick={handleWhatsAppClick}
      className="fixed bottom-5 right-5 z-50 cursor-pointer text-green-500"
    >
      <BiLogoWhatsappSquare size="60px" />
    </div>
  );
};

export default WhatsappIcon;
