// ./sanity/schemaTypes/ticketType.ts

import { defineField, defineType } from "sanity";

export const ticketType = defineType({
  name: "ticket",
  title: "Ticket",
  type: "document",
  fields: [
    defineField({ name: "event", type: "reference", to: [{ type: "event" }] }),
    defineField({ name: "email", type: "email" }),
    defineField({ name: "quantity", type: "number" }),
    defineField({ name: "newsletter", type: "boolean", initialValue: true }),
  ],
  preview: {
    select: {
      event: "event.name",
      email: "email",
      quantity: "quantity",
    },
    prepare({ event, email, quantity }) {
      return {
        title: `${event} - ${email}`,
        subtitle: quantity === 1 ? `1 ticket` : `${quantity} tickets`,
      };
    },
  }
});
