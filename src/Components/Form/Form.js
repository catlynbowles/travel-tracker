import { useState } from 'react'
import { Route } from 'react-router-dom'
import './Form.css'

const Form = () => {
  const [date, setDate] = useState('')
  const [duration, setduration] = useState('')

  const handleChange = (event) => {
    const {name, value}  = event.target
    name === 'date' ? setDate(value) : setduration(value)
  }

  return (
    <section className='form'>
      <form>
        <fieldset>
          <input 
            type='date'
            name='date'
            value={date}
            onChange={(event) => handleChange(event)}
          />

          <input 
            type='number'
            name='duration'
            value={duration}
            onChange={(event) => handleChange(event)}
          />
          
          <button>Estimate Cost</button>
        </fieldset>
      </form>
    </section>
  )
}

export default Form