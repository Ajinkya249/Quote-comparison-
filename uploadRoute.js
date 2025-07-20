// backend/routes/uploadRoute.js
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const pdfParse = require('pdf-parse');
const axios = require('axios');
const path = require('path');

const router = express.Router();

// ✅ Read TEST_MODE from .env
const isTestMode = process.env.TEST_MODE === 'true';
console.log('🧪 TEST_MODE:', isTestMode);

// 📁 Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const filename = `${timestamp}-${file.originalname}`;
    cb(null, filename);
  }
});

const upload = multer({ storage });

// 📤 POST /api/upload
router.post('/', upload.single('file'), async (req, res) => {
  try {
    const filePath = req.file.path;

    // 🔍 Read and extract PDF text
    const fileData = fs.readFileSync(filePath);
    const parsed = await pdfParse(fileData);
    const extractedText = parsed.text;

    // ✅ MOCK MODE (Free)
    if (isTestMode) {
      const mockResponse = `
        ✅ Quote Comparison Summary:
        - Vendor A: ₹4.2L, 5 days install, 25 years warranty
        - Vendor B: ₹4.5L, 7 days install, 20 years warranty
        👉 Recommended: Vendor A (Best price, warranty, and speed)
      `;
      fs.unlinkSync(filePath); // Delete uploaded file
      return res.json({ success: true, response: mockResponse });
    }

    // 🚀 LIVE MODE (Paid GPT Call)
    const apiKey = process.env.OPENAI_API_KEY;
    const chatResponse = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are an expert at comparing solar panel quotations.'
          },
          {
            role: 'user',
            content: `Please analyze and summarize the following quotation:\n\n${extractedText}`
          }
        ],
        temperature: 0.3
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const result = chatResponse.data.choices[0].message.content;
    fs.unlinkSync(filePath); // Delete uploaded file
    res.json({ success: true, response: result });

  } catch (error) {
    console.error('❌ Error:', error.message);
    res.status(500).json({ success: false, error: 'Something went wrong.' });
  }
});

module.exports = router;
