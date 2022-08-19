import TripCard from "../TripCard/TripCard"
import './Trips.css'

const Trips = ({trips, traveler, destinations}) => {
  const userTrips = trips.filter(trip => traveler.id === trip.userID)
  const userTripCards = userTrips.reduce((acc, trip) => {
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
          />
        )
      }
    })
    return acc
  }, [])

  return (
    <section>
      <div className='grid'>{userTripCards}</div>
    </section>
  )
}

export default Trips