// TODO: Configure Stripe webhook API
// import Stripe from 'stripe';
// import { handleSubscriptionChange, stripe } from '@/lib/payments/stripe';
import { NextRequest, NextResponse } from "next/server";

// const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  // TODO: Implement Stripe webhook handling
  console.log("Stripe webhook API disabled - TODO: Configure Stripe");
  return NextResponse.json({ received: true });
}
