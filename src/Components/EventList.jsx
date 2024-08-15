import React from 'react';
import "./EventList.css"
import { useNavigate } from 'react-router-dom';

function EventList({ event , deleteEvent}) {
     
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/eventform')
    }
    return (
        <div className='main'>
            <h2>Upcoming Events</h2>
            <div className='container col-md-8 list'>
            <ul>
                {event.map((event, index) => (
                    <li key={index}>
                        <h3>{event.eventName}</h3>
                        <div className='row'>
                            <div className='col-sm-4'>Date: {event.date}</div>
                            <div className='col-sm-4'>Time: {event.time}</div>
                            <div className='col-sm-4'> Location: {event.location}</div>
                        </div>
                        <button type='submit' className='delete-btn' onClick={()=>deleteEvent(index)} >Delete</button>
                       
                    </li>
                ))}
            </ul>
            </div>
            <button type='submit' onClick={handleClick} className='add-button'>+ New Event</button>
        </div>
    );
}
export default EventList;