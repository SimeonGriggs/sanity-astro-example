// ./sanity/seed.mjs

import { getCliClient } from "sanity/cli";

const client = getCliClient();

await client.create({
  _type: "event",
  name: "Breadmaking workshop",
  slug: { current: "breadmaking-workshop" },
  description: "Learn how to make bread from scratch",
  date: new Date("2024-05-22 17:00").toISOString(),
  ticketPrice: 10000,
  location: { _type: "geopoint", lat: 59.9139, lng: 10.7522 },
});