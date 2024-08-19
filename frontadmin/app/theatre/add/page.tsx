"use client";

import { Button } from "@/app/component/Button";
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
    Address: "", // Change to uppercase 'A'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Enter Details</h1>

      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Ticket Price:</label>
        <input
          type="number"
          name="ticketPrice"
          value={formData.ticketPrice}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Seats:</label>
        <input
          type="number"
          name="seats"
          value={formData.seats}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="Address" // Change to uppercase 'A'
          value={formData.Address}
          onChange={handleChange}
          required
        />
      </div>
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
              "http://localhost:5000/api/theatre/add-theatre",
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
  );
}

export default function Home() {
  return (
    <div>
      <EnterDetails />
    </div>
  );
}
