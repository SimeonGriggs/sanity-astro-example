// ./sanity/schemaTypes/eventType.ts

import { defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "slug", type: "slug", options: { source: "name" } }),
    defineField({ name: "description", type: "text" }),
    defineField({
      name: "ticketPrice",
      type: "number",
      validation: (rule) =>
        rule.custom((value) =>
          value !== undefined && value < 0
            ? "Price must be a positive number"
            : true
        ),
    }),
    defineField({ name: "date", type: "datetime" }),
    defineField({ name: "location", type: "geopoint" }),
  ],
});
