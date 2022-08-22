import TripCard from "../TripCard/TripCard"
import './Trips.css'
import dayjs from 'dayjs'
import { Route } from 'react-router-dom'

const Trips = ({trips, traveler, destinations, cancelTrip, match}) => {
  const userTrips = trips.filter(trip => traveler.id === trip.userID)
  
  const userTripCards = (selectedTrips) => {
    const tripCards = selectedTrips.reduce((acc, trip) => {
      destinations.forEach(destination => {
        if (destination.id === trip.destinationID) {
          acc.push(
            <TripCard
              date={trip.date}
              duration={trip.duration}
              status={trip.status}
              location={destination.destination}
              image={destination.image}
              alt={destination.alt}
              id={trip.id}
              key={trip.id}
              cancelTrip={cancelTrip}
            />
          )
        }
      })
      return acc
    }, [])
    return tripCards
  }

  const pastTrips = () => {
    const today = dayjs().format('YYYY/MM/DD')
    let pastTrips = userTrips.filter(trip => trip.date < today)
    let past = userTripCards(pastTrips)
    console.log(past)
    return past
  }

  return (
    <section>
      <Route exact path='/' render={() => 
        <div className='grid'>{userTripCards(userTrips)}</div>
      }/>
      <Route exact path='/past' render={() => 
        <div className='grid'>{pastTrips()}</div>
      }/>
    </section>
  )
}

export default Trips