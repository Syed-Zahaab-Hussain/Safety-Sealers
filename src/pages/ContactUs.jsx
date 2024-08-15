import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Button,
  Input,
  Textarea,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_z89g6ka", "template_v1ifufm", form.current, {
        publicKey: "MSutFzQReGWmIBD4Q",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          navigate("/safety-sealers/thank-you");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Box as="form" ref={form} onSubmit={sendEmail} p="3rem">
      <FormControl>
        <FormLabel>Your Name</FormLabel>
        <Input type="text" name="user_name" required />
      </FormControl>

      <FormControl>
        <FormLabel>Your Email</FormLabel>
        <Input type="email" name="user_email" required />
      </FormControl>

      <FormControl>
        <FormLabel>Your Phone Number</FormLabel>
        <Input type="text" name="user_phone" required />
      </FormControl>

      <FormControl>
        <FormLabel>City</FormLabel>
        <Input type="text" name="user_city" required />
      </FormControl>

      <FormControl>
        <FormLabel>Subject</FormLabel>
        <Input type="text" name="subject" required />
      </FormControl>

      <FormControl>
        <FormLabel>Your Message</FormLabel>
        <Textarea name="message" required />
      </FormControl>

      <Button
        type="submit"
        mt={4}
        bg="background.button"
        color="text.white"
        _hover={{ backgroundColor: "background.buttonHover" }}
      >
        Send Message
      </Button>
    </Box>
  );
};

export default ContactForm;
