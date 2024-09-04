import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publishableKey: "pk_test_c2hpbmluZy1ncm91cGVyLTQuY2xlcmsuYWNjb3VudHMuZGV2JA",
  secretKey: process.env.CLERK_SECRET_KEY
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
