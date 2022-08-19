import { useState } from 'react'
import './Form.css'

const Form = ({traveler, addTrip, trips, destinations}) => {
  const [date, setDate] = useState('')
  const [duration, setDuration] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [location, setLocation] = useState('')

  const submitTrip = (e) => {
    e.preventDefault()
    const newTrip = {
      id: trips.length + 1, 
      userID: traveler.id,
      destinationID: findDestinationID(location),
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
      onChange={(e) => setLocation(e.target.value)}>
        {locationOptions.sort()}
      </select>
    )
  }

  const findDestinationID = (userDest) => {
    console.log(userDest)
    const destMatch = destinations.find(dest => dest.destination === userDest)
    return destMatch.id
  }

  return (
    <section className='form'>
      <form>
        <fieldset>
          <Dropdown />
          <input 
            className='date'
            type='date'
            name='date'
            value={date}
            onChange={e => setDate(e.target.value)}
            placeholder="dd/mm/yyyy"
            min='' 
            max='2025-01-01' 
            required
          />

          <input 
            type='number'
            name='duration'
            value={duration}
            onChange={e => setDuration(e.target.value)}
            placeholder="Duration"
            min='1' 
            required
          />

          <input 
            type='number' 
            name='quantity'
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            placeholder="Number of Travelers" 
            min='1' 
            required
          />
          
          <button className='rainbow-5'  onClick={(e) => submitTrip(e)}>Estimate Cost</button>
        </fieldset>
      </form>
    </section>
  )
}

export default Form