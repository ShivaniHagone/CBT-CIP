import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import EventForm from './Components/EventForm';
import EventList from './Components/EventList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './Components/Title';

function App() {

  const [events, setEvents] = useState([]);

    const addEvent = (newEvent) => {
        setEvents([...events, newEvent]);
        console.log(events);
    };

    const deleteEvent = (indexToDelete) => {
      setEvents(events.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
    <Router>
    <div className="App">
        <Title></Title>
        <Routes>
            <Route
                path="/eventform"
                element={<EventForm onAddEvent={addEvent} />}
            />
            <Route
                path="/"
                element={<EventList event={events} deleteEvent={deleteEvent} />}
            />
        </Routes>
    </div>
   </Router>
</div>

  );
}

export default App;
