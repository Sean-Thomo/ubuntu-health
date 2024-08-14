import { NextRequest } from "next/server";

export function getBaseUrl(request: NextRequest): string {
	const host = request.headers.get("host") || "";
	const protocol = request.headers.get("x-forwarded-proto") || "http"; // Default to http if not available

	return `${protocol}://${host}`;
}
