import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Here you can:
    // 1. Save to a database (e.g., MongoDB, PostgreSQL)
    // 2. Send to an email service
    // 3. Store in a file/storage

    // For now, let's just log and return success
    console.log('Received email subscription:', email);

    return NextResponse.json({ 
      success: true, 
      message: 'Subscription successful!' 
    });

  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Something went wrong!' 
      },
      { status: 500 }
    );
  }
}
