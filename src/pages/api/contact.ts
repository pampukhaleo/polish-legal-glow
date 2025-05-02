
import { NextRequest, NextResponse } from 'next/server';

// This is a mock API endpoint that would normally be implemented with Supabase
export default async function handler(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }

  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // For security reasons, we don't expose the token in client-side code
    // In a real implementation, this would be stored in environment variables on the server
    const TELEGRAM_BOT_TOKEN = "8096035472:AAF-qXcBxAEP8_ouTdEGmsQBKmoTe-xGRwk";
    const CHAT_ID = "-1001234567890"; // Replace with your actual chat ID
    
    // Format message for Telegram
    const telegramMessage = `
📨 Нове повідомлення з сайту:
      
👤 Ім'я: ${name}
✉️ Email: ${email}
📝 Тема: ${subject}
📄 Повідомлення: ${message}
    `;

    // Send to Telegram
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: telegramMessage,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message to Telegram');
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
