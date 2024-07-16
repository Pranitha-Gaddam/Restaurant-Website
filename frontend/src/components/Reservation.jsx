import React from "react";
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

function Reservation() {
    const API_URL = 'http://localhost:8080/reservation/v1/';

    const createReservation = (reservation) => {
        return axios.post(API_URL, reservation);
    };
    
    const {ref: titleRef, inView: titleInView } = useInView( {triggerOnce: true});
    const {ref: contentRef, inView: contentInView } = useInView( {triggerOnce: true});

    const [newReservation, setNewReservation] = useState({
        resname: '',
        phone: '',
        resdate: '',
        restime: '',
        guests: 0
    });

    const handleCreate = async () => {
        try {
          await createReservation(newReservation);
          alert("Thank you for your reservation! We look forward to serving you!");
        } catch (error) {
          console.error('Error creating reservation:', error);
        }
      };

    return (
        <div id="reservations">
            <div className={`flex flex-col items-center justify-center h-screen text-amber-200`}>
                <h1 className={`animitem ${titleInView ? 'animate-slidein200' : ''} font-sans font-bold cinzel-decorative-regular text-amber-200 mb-5 big-shadow-letters text-[5vw] lg:text-[3vw]`} ref={titleRef}>Book a Table</h1>
                
                <form className={`flex flex-col items-center justify-center crimson-text-bold animitem ${contentInView ? 'animate-slidein400' : ''}`} ref={contentRef}>
                    <label for="name" className="text-amber-200">Name</label>
                    <input type="text" id="name" name="name" className=" text-amber-100 border-b-2 border-amber-200 mb-4 crimson-text-semibold text-center" required onChange={e => setNewReservation({ ...newReservation, resname: e.target.value })}></input>

                    <label for="phone" className="text-amber-200">Phone</label>
                    <input type="tel" id="phone" name="phone" className=" text-amber-100 border-b-2 border-amber-200 mb-4 crimson-text-semibold text-center" required onChange={e => setNewReservation({ ...newReservation, phone: e.target.value })}></input>

                    <label for="date" className="text-amber-200">Date</label>
                    <input type="date" id="date" name="date" className=" text-amber-100 border-b-2 border-amber-200 mb-4 crimson-text-semibold text-center" required onChange={e => setNewReservation({ ...newReservation, resdate: e.target.value })}></input>

                    <label for="time" className="text-amber-200">Time</label>
                    <input type="time" id="time" name="time" className=" text-amber-100 border-b-2 border-amber-200 mb-4 crimson-text-semibold text-center" required onChange={e => setNewReservation({ ...newReservation, restime: e.target.value })}></input>

                    <label for="guests" className="text-amber-200">Guests</label>
                    <input type="number" id="guests" name="guests" className=" text-amber-100 border-b-2 border-amber-200 m-1 mb-5 crimson-text-semibold text-center" required onChange={e => setNewReservation({ ...newReservation, guests: e.target.value })}></input>

                    <button type="submit" onClick={handleCreate} className="bg-background rounded-sm text-amber-200 m-1 p-3 py-2 border-amber-200 border-2 hover:bg-amber-100 hover:bg-opacity-10">Submit</button>                 
                </form>
                
            </div>
        </div>
    )
}

export default Reservation;