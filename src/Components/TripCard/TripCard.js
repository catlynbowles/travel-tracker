import './TripCard.css'

const TripCards = ({date, duration, status}) => {
  return (
    <article className='trip-card'>
      <div>
        <p><b>Location: </b></p>
        <p><b>Date of Your Trip: </b> {date}</p>
        <p><b>Duration of Your Trip: </b> {duration} days</p>
        <p><b>Status: </b> {status}</p>
      </div>
    </article>
  )
}

export default TripCards
      // <div tabindex=0 class='img-container'>
      // <img class='box-img' id='boxImg' alt=${trip.alt} src=${trip.img} width='150' height='150'></img>
      // </div>