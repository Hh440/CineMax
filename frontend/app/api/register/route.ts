import { NextResponse
 } from "next/server";


 export async function POST(request: Request){
    try {
        // Parse the request body
        const body = await request.json();
        const { email, name, password } = body;

        // Validate the input
        if (!email || !name || !password) {
            return new NextResponse('Missing info', { status: 400 });
        }

        // Forward the request to the backend server
        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });

        // Check if the response is not ok
        if (!response.ok) {
            const errorData = await response.json();
            return new NextResponse(errorData.message, { status: response.status });
        }

        // Parse the response from the backend
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Internal Server Error:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
 }