"use client";

import { Button } from "@/app/component/Button";
import { Nav } from "@/app/component/navbar/nav";
import { BACKEND_URL } from "@/config";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

function EnterDetails() {
  const { push } = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    ticketPrice: "",
    seats: "",
    image: "",
    Address: "",
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-6 text-gray-700">Enter Theatre Details</h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Ticket Price:</label>
            <input
              type="number"
              name="ticketPrice"
              value={formData.ticketPrice}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Seats:</label>
            <input
              type="number"
              name="seats"
              value={formData.seats}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL:</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address:</label>
            <input
              type="text"
              name="Address"
              value={formData.Address}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
        </div>
        <br/>
        <Button
          onClick={async () => {
            const data = {
              name: formData.name,
              city: formData.city,
              ticketPrice: parseInt(formData.ticketPrice),
              seats: parseInt(formData.seats),
              image: formData.image,
              Address: formData.Address,
            };

            const response = await axios.post(
              `${BACKEND_URL}/api/theatre/add-theatre`,
              data,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            if (response.status === 200) {
              const id = response.data.id;
              console.log("Theatre created successfully");
              alert("Theatre created successfully");
              push(`/theatre/get/${id}`);
            } else {
              console.log("Unexpected response status:", response.status);
            }
          }}
          disabled={false}
          fullwidth
          type="submit"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <EnterDetails />
    </div>
  );
}
