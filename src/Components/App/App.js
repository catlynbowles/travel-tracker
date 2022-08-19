import { useEffect, useState } from 'react';
import './App.css';
import { getData } from '../../apiCalls'

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
        setTrips(data[1].trips)
        setDestinations(data[2].destinations)
      })
  }, [])  

  return (
    <div className="App">
      
    </div>
  );
}

export default App;