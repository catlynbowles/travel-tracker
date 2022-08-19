import { useState } from 'react'
import { Route } from 'react-router-dom'
import './Form.css'

const Form = () => {
  const [date, setDate] = useState('')
  const [duration, setDuration] = useState('')
  const [quantity, setQuantity] = useState(0)

  return (
    <section className='form'>
      <form>
        <fieldset>
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
          
          <button className='rainbow-5'>Estimate Cost</button>
        </fieldset>
      </form>
    </section>
  )
}

export default Form