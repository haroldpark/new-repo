// TODO: Configure Stripe payment processing
// import Stripe from 'stripe';
// import { redirect } from 'next/navigation';
// import { Team } from '@/lib/db/schema';
// import {
//   getTeamByStripeCustomerId,
//   getUser,
//   updateTeamSubscription
// } from '@/lib/db/queries';

// export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2025-04-30.basil'
// });

// Mock exports for development without Stripe
export const stripe = null as any;

export async function createCheckoutSession({
  team,
  priceId,
}: {
  team: any;
  priceId: string;
}) {
  // TODO: Implement Stripe checkout
  console.log("Stripe checkout disabled - TODO: Configure Stripe");
  return null;
}

export async function createCustomerPortalSession(team: any) {
  // TODO: Implement Stripe customer portal
  console.log("Stripe customer portal disabled - TODO: Configure Stripe");
  return null;
}

export async function handleSubscriptionChange(subscription: any) {
  // TODO: Implement Stripe subscription handling
  console.log("Stripe subscription handling disabled - TODO: Configure Stripe");
}

export async function getStripePrices() {
  // TODO: Implement Stripe prices fetching
  console.log("Stripe prices disabled - TODO: Configure Stripe");
  return [];
}

export async function getStripeProducts() {
  // TODO: Implement Stripe products fetching
  console.log("Stripe products disabled - TODO: Configure Stripe");
  return [];
}
