import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./EventForm.css"

function EventForm({ onAddEvent }) {
    const [eventName, setEventName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEvent = { eventName, date, time, location };
        onAddEvent(newEvent);
        console.log(newEvent);
        setEventName('');
        setDate('');
        setTime('');
        setLocation('');
        navigate('/');
    };

    return (
        <div className='main'>
        <form onSubmit={handleSubmit} className= 'container col-sm-8'>
            <div className='block'>
                <label>Event Name</label><br></br>
                <input
                    type="text"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    required
                />
            </div>
            <div className='block'>
                <label>Date</label><br></br>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <div className='block'>
                <label>Time</label><br></br>
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />
            </div>
            <div className='block'>
                <label>Location</label><br></br>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className='button'>Add Event</button>
        </form>
        </div>
    );
}

export default EventForm;
