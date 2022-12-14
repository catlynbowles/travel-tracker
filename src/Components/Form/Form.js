import dayjs from 'dayjs'
import { useState } from 'react'
import './Form.css'

const Form = ({traveler, addTrip, trips, destinations}) => {
  const [date, setDate] = useState('')
  const [duration, setDuration] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [location, setLocation] = useState('')
  const [estimate, setEstimate] = useState(0)

  const estimateCost = (e) => {
    e.preventDefault()
    const selectedDestination = findDestination(location)
    const totalTripCost = (selectedDestination.estimatedFlightCostPerPerson * quantity) + (selectedDestination.estimatedLodgingCostPerDay * duration)
    setEstimate(totalTripCost)
  }

  const submitTrip = (e) => {
    e.preventDefault()
    const newTrip = {
      id: trips.length + 1, 
      userID: traveler.id,
      destinationID: findDestination(location).id,
      travelers: Number(quantity), 
      date: date.split('-').join('/'),
      duration: Number(duration), 
      status: 'pending',
      suggestedActivities: []
    }
    addTrip(newTrip)
    clearInputs()
  }

  const clearInputs = () => {
    setDate('')
    setDuration('')
    setQuantity('')
    setLocation('')
    setEstimate(0)
  }

  const Dropdown = () => {
    let destinationNames = destinations.map(dest => dest.destination).sort()
    let locationOptions = destinationNames.map(dest => {
      return (
        <option value={dest}>{dest}</option>
      )
    })
    return (
      <select width='15px' value={location} 
      onChange={(e) => setLocation(e.target.value)} required='required'>
        <option value=''>Choose destination</option>
        {locationOptions.sort()}
      </select>
    )
  }

  const findDestination = (userDest) => {
    console.log(userDest)
    const destMatch = destinations.find(dest => dest.destination === userDest)
    return destMatch
  }

  return (
    <section className='form'>
      <form onSubmit={(e) => estimateCost(e)}>
        <fieldset>
          <legend className='form-label'>Book a New Trip</legend>
          <Dropdown />
          <input 
            className='date'
            type='date'
            name='date'
            value={date}
            onChange={e => setDate(e.target.value)}
            placeholder="dd/mm/yyyy"
            min={dayjs().format('YYYY-MM-DD')} 
            max='2025-01-01' 
            required='required'
          />

          <input 
            type='number'
            name='duration'
            value={duration}
            onChange={e => setDuration(e.target.value)}
            placeholder="Duration"
            min='1' 
            required='required'
          />

          <input 
            type='number' 
            name='quantity'
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            placeholder="Number of Travelers" 
            min='1' 
            required='required'
          />
          <button className='rainbow-5' type='submit' >Estimate Cost</button>
          {estimate ?
          <div>
            <p>${estimate.toLocaleString()}</p>
            <button className='rainbow-5'  onClick={(e) => submitTrip(e)}>Submit Trip</button>
          </div> : null}
        </fieldset>
      </form>
    </section>
  )
}

export default Form