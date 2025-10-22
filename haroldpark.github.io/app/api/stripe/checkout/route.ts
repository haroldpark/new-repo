// TODO: Configure Stripe checkout API
// import { eq } from 'drizzle-orm';
// import { db } from '@/lib/db/drizzle';
// import { users, teams, teamMembers } from '@/lib/db/schema';
// import { setSession } from '@/lib/auth/session';
import { NextRequest, NextResponse } from "next/server";
// import { stripe } from '@/lib/payments/stripe';
// import Stripe from 'stripe';

export async function GET(request: NextRequest) {
  // TODO: Implement Stripe checkout handling
  console.log("Stripe checkout API disabled - TODO: Configure Stripe");
  return NextResponse.redirect(new URL("/pricing", request.url));
}
