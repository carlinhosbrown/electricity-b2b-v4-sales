export { auth as middleware } from "@/auth";
export const config = { matcher: ["/dashboard/:path*", "/brokers/:path*", "/clients/:path*", "/opportunities/:path*", "/proposals/:path*"] };
