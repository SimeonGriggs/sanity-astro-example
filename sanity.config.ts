// ./sanity.config.ts

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { googleMapsInput } from "@sanity/google-maps-input";
import { eventType } from "./sanity/schemaTypes/eventType";
import { ticketType } from "./sanity/schemaTypes/ticketType";

export default defineConfig({
  name: "project-name",
  title: "Project Name",
  projectId: "ghz527nf",
  dataset: "production",
  plugins: [
    structureTool(),
    googleMapsInput({
      apiKey: "AIzaSyA79RtrPxbeFi3YpWrIqT1-vRgCARKZSPE",
    }),
  ],
  schema: {
    types: [eventType, ticketType],
  },
});
