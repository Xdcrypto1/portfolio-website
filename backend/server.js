import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

// CONTACT FORM ROUTE
app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    // Create email transporter
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: email,
        to: "benabor9@gmail.com",   
        subject: `Portfolio Contact Form Message from ${name}`,
        text: message + "\n\nSender Email: " + email,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Message sent!" });
    } catch (error) {
        res.status(500).json({ success: false, error });
    }
});

// RESUME DOWNLOAD ROUTE
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/resume", (req, res) => {
    const filePath = path.join(__dirname, "resume.pdf");
    res.download(filePath);
});


app.listen(PORT, () => console.log("Server running on http://localhost:" + PORT));
