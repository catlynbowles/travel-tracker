import TripCard from "../TripCard/TripCard"
import './Trips.css'

const Trips = ({trips, traveler, destinations}) => {
  const userTrips = trips.filter(trip => traveler.id === trip.userID)
  const userTripCards = userTrips.map(trip => {
    return (
      <TripCard
        date={trip.date}
        duration={trip.duration}
        status={trip.status}
      />
    )
  })
  console.log(userTrips)
  return (
    <section>
      <div className='grid'>{userTripCards}</div>
    </section>
  )
}

export default Trips