import TripCard from "../TripCard/TripCard"
import './Trips.css'
import dayjs from 'dayjs'
import { Route } from 'react-router-dom'
import EmptyDisplay from "../EmptyDisplay/EmptyDisplay"

const Trips = ({trips, traveler, destinations, cancelTrip, match}) => {
  const userTrips = trips.filter(trip => traveler.id === trip.userID)
  const today = dayjs().format('YYYY/MM/DD')
  
  const generateTripCards = (selectedTrips) => {
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

  const findPastTrips = () => {
    let pastTrips = userTrips.filter(trip => trip.date < today)
    return renderTripsDisplay(pastTrips)
  }

  const findUpcomingTrips = () => {
    let upcomingTrips = userTrips.filter(trip => trip.date > today)
    return renderTripsDisplay(upcomingTrips)
  }

  const findCurrentTrips = () => {
    let currentTrips = userTrips.filter(trip => trip.date === today)
    return renderTripsDisplay(currentTrips)
  }

  const renderTripsDisplay = (tripGenre) => {
    let displayResult; 
    tripGenre.length === 0 ? displayResult = <EmptyDisplay /> :
    displayResult = generateTripCards(tripGenre.sort((a, b) => a.date - b.date))
    return displayResult
  }

  return (
    <section>
      <Route exact path='/' render={() => 
        <div className='grid'>{generateTripCards(userTrips)}</div>
      }/>
      <Route exact path='/past' render={() => 
        <div className='grid'>{findPastTrips()}</div>
      }/>
      <Route exact path='/upcoming' render={() => 
        <div className='grid'>{findUpcomingTrips()}</div>
      }/>
      <Route exact path='/current' render={() => 
        <div className='grid'>{findCurrentTrips()}</div>
      }/>
    </section>
  )
}

export default Trips