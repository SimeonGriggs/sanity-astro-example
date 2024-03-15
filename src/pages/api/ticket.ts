// ./src/pages/api/ticket.ts

import type { APIRoute } from "astro";
import { sanityClient } from "sanity:client";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const eventId = data.get("eventId");
  const quantity = data.get("quantity");
  const email = data.get("email");
  if (!eventId || !quantity || !email) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }

  const token = import.meta.env.SANITY_EDITOR_TOKEN;

  if (!token) {
    return new Response(
      JSON.stringify({
        message: "Unauthenticated request",
      }),
      { status: 500 }
    );
  }

  await sanityClient.withConfig({ token }).create({
    _type: "ticket",
    event: { _ref: eventId },
    quantity: Number(quantity),
    email,
    newsletter: data.get("newsletter") === "on",
  });

  return new Response(
    JSON.stringify({
      message: "Success!",
    }),
    { status: 200 }
  );
};
