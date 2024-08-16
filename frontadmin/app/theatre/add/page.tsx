"use client"

import { Button } from "@/app/component/Button"
import axios from "axios";
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { useState, useEffect } from 'react';

function EnterDetails() {
  const { push } = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    city: '',
    ticketPrice: '',
    seats: '',
    image: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submitDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Details submitted successfully!');
        setFormData({
          name: '',
          city: '',
          ticketPrice: '',
          seats: '',
          image: '',
          address: '',
        });
      } else {
        alert('Failed to submit details.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
    <div>
      <h1>Enter Details</h1>
      <form onSubmit={handleSubmit}>
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
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <Button
              onClick={()=>{
                axios.get(`http://localhost:5000/api/theater/`)
                .then(response=>{
                  useEffect(() => {
                    push('/hello-nextjs');
                 }, []);               
              })
    .catch(e=>{
      console.error("Error while fetching",e)
    })
              }}
         disabled={false}
                         fullwidth
                         type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default function Home() {
  return (
    <div>
        {EnterDetails()}
    </div>
  );
}
