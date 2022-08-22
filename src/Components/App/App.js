import { useEffect, useState } from 'react';
import './App.css';
import { getData } from '../../apiCalls'
import Form from '../Form/Form'
import Trips from '../Trips/Trips'
import Navbar from '../Navbar/Navbar'
import { Route } from 'react-router-dom'

const App = () => {
  const [traveler, setTraveler] = useState({})
  const [trips, setTrips] = useState([])
  const [destinations, setDestinations] = useState([])

  useEffect(() => {
    const travelerData = getData('http://localhost:3001/api/v1/travelers/22')
    const tripData = getData('http://localhost:3001/api/v1/trips')
    const destinationData = getData('http://localhost:3001/api/v1/destinations')

    Promise.all([travelerData, tripData, destinationData])
      .then(data => {
        setTraveler(data[0])
        let userTrips = data[1].trips.filter(trip => trip.userID === data[0])
        setTrips(data[1].trips)
        setDestinations(data[2].destinations)
      })
  }, [])  

  const addTrip = (newTrip) => {
    fetch('http://localhost:3001/api/v1/trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify(newTrip)
    })
      .then(response => response.json())
      .then(data => setTrips([...trips, data.newTrip]))
  }

  const cancelTrip = (tripID) => {
    console.log(tripID)
    fetch(`http://localhost:3001/api/v1/trips/${tripID}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        const newTrips = trips.filter(trip => trip.id !== tripID)
        setTrips(newTrips)
      })
  }

  return (
    <div className="App">
      <h1>Welcome to Travel Tracker, {traveler.name}!</h1>
        <Form addTrip={addTrip} traveler={traveler} trips={trips} destinations={destinations}/>
        <Navbar />
        <Route exact path='/' render={() => 
          <div>
            <h3>ALL YOUR TRIPS</h3>
            <Trips trips={trips} destinations={destinations} traveler={traveler} cancelTrip={cancelTrip}/>
          </div>
        }/>
        <Route exact path='/:trip' render={({match}) => 
          <div>
            <h3>YOUR {match.params.trip.toUpperCase()} TRIPS</h3>
            <Trips trips={trips} destinations={destinations} traveler={traveler} cancelTrip={cancelTrip}/>
          </div>
        }/>
    </div>
  );
}

export default App;
