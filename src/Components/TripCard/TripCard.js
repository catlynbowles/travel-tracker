import './TripCard.css'

const TripCards = ({date, duration, status, location, image, alt, id,  cancelTrip}) => {
  return (
    <article className='trip-card zoom'>
      <div>
        <img src={image} alt={alt} width='150' height='150'/>
        <p><b>Location: {location}</b></p>
        <p><b>Date of Your Trip: </b> {date}</p>
        <p><b>Duration of Your Stay: </b> {duration} days</p>
        {status === 'pending' ? <button onClick={() => cancelTrip(id)}>Cancel Trip</button> : null}
      </div>
    </article>
  )
}

export default TripCards
      // <div tabindex=0 class='img-container'>
      // <img class='box-img' id='boxImg' alt=${trip.alt} src=${trip.img} width='150' height='150'></img>
      // </div>