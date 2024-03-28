import { NextResponse } from "next/server";

export async function GET(req:any,res:any) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const userData = await response.json();
    //console.log(userData);
    return NextResponse.json(userData, { status: 200 });
    
}