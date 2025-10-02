import { NextResponse } from 'next/server';

const GOOGLE_CHAT_WEBHOOK_URL = 'https://chat.googleapis.com/v1/spaces/AAQAxr80wO4/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=A6wlYiNz8SKcGLcDBtBV8fQKE3v1xSxppevvJeTU1xY';

export async function POST(request) {
  try {
    const { contactMethod, phone, email, service, message } = await request.json();

    // Create Google Chat card format
    const cardData = {
      cards: [
        {
          header: {
            title: "🚨 New Contact Form Submission",
            subtitle: new Date().toLocaleString('en-US', {
              timeZone: 'Asia/Kolkata',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })
          },
          sections: [
            {
              widgets: [
                {
                  keyValue: {
                    topLabel: "Contact Method",
                    content: contactMethod === 'email' ? '📧 Email' : '📱 Phone',
                    contentMultiline: false
                  }
                },
                {
                  keyValue: {
                    topLabel: contactMethod === 'email' ? 'Email Address' : 'Phone Number',
                    content: contactMethod === 'email' ? email : phone,
                    contentMultiline: false
                  }
                }
              ]
            }
          ]
        }
      ]
    };

    // Add service if provided
    if (service) {
      cardData.cards[0].sections[0].widgets.push({
        keyValue: {
          topLabel: "Service Interest",
          content: service,
          contentMultiline: false
        }
      });
    }

    // Add message if provided
    if (message && message.trim()) {
      cardData.cards[0].sections.push({
        header: "Message",
        widgets: [
          {
            textParagraph: {
              text: message
            }
          }
        ]
      });
    }

    // Send to Google Chat webhook
    const response = await fetch(GOOGLE_CHAT_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cardData)
    });

    if (!response.ok) {
      console.error('Google Chat webhook failed:', response.status, response.statusText);
      return NextResponse.json(
        { error: 'Failed to send message to Google Chat' },
        { status: response.status }
      );
    }

    const result = await response.json();

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      data: result
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
