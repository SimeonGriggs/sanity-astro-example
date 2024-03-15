import React, { useState } from "react";
import { type FormEvent } from "react";

type FormProps = {
  eventId: string;
  price: number;
};

export default function Form({ eventId, price }: FormProps) {
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/ticket", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  }

  const priceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl max-w-lg not-prose bg-gray-100 p-10 flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold">
        {priceFormatter.format(price / 100)}
      </h2>
      <input type="hidden" name="eventId" value={eventId} />
      <label className="grid gap-2">
        Quantity
        <input
          className="rounded border-gray-300"
          type="number"
          min={1}
          id="quantity"
          name="quantity"
          required
        />
      </label>
      <label className="grid gap-2">
        Email
        <input
          className="rounded border-gray-300"
          type="email"
          id="email"
          name="email"
          required
        />
      </label>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          id="newsletter"
          name="newsletter"
          defaultChecked
        />
        Subscribe for updates
      </label>
      <button
        type="submit"
        className="bg-orange-500 focus:bg-orange-600 font-bold text-white rounded-lg px-4 py-2"
      >
        Send
      </button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
}
