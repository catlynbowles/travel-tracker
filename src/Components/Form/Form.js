import { useState } from 'react'
import { Route } from 'react-router-dom'
import Trips from '../Trips/Trips'
import './Form.css'
import Dropdown from '../Dropdown/Dropdown'

const Form = ({traveler, addTrip, trips, destinations}) => {
  const [date, setDate] = useState('')
  const [duration, setDuration] = useState('')
  const [quantity, setQuantity] = useState(0)

  const submitTrip = (e) => {
    e.preventDefault()
    const newTrip = {
      id: trips.length + 1, 
      userID: traveler.id,
      destinationID: 1,
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
  }

  return (
    <section className='form'>
      <form>
        <fieldset>
          <Dropdown destinations={destinations} trips={trips}/>
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