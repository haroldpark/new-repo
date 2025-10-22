"use server";

import { redirect } from "next/navigation";
// TODO: Configure Stripe payment actions
// import { createCheckoutSession, createCustomerPortalSession } from './stripe';
// import { withTeam } from '@/lib/auth/middleware';

export const checkoutAction = async (formData: any) => {
  // TODO: Implement Stripe checkout
  console.log("Stripe checkout action disabled - TODO: Configure Stripe");
  redirect("/pricing");
};

export const customerPortalAction = async () => {
  // TODO: Implement Stripe customer portal
  console.log(
    "Stripe customer portal action disabled - TODO: Configure Stripe"
  );
  redirect("/dashboard");
};
