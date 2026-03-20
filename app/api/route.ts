import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/sanity/client";
import { searchBooksQuery } from "@/lib/sanity/queries";

export async function GET(request: NextRequest) {
  const search = request.nextUrl.searchParams.get("q");

  if (!search) {
    return NextResponse.json([]);
  }

  const results = await client.fetch(searchBooksQuery, {
    search: search.toLowerCase(),
  });

  return NextResponse.json(results);
}