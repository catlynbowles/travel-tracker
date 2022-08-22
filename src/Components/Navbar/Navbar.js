import { NavLink, withRouter } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const activeStyle = {
    'color': 'white', 
    'backgroundColor': 'purple'
  }
  return (
    <nav className='nav'>
      <NavLink exact to='/' className='navlinks' activeStyle={activeStyle}><article>View All My Trips</article></NavLink>
      <NavLink exact to='upcoming' className='navlinks' activeStyle={activeStyle}><article>Upcoming Adventures</article></NavLink>
      <NavLink exact to='past' className='navlinks' activeStyle={activeStyle}><article>Past Trips</article></NavLink>
      <NavLink exact to='current'  className='navlinks'activeStyle={activeStyle}><article>Current Explorations</article></NavLink>
    </nav>
  )
}

export default Navbar