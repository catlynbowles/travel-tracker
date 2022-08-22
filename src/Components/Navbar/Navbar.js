import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <NavLink exact to='upcoming' activeStyle={{color: "red"}}><article>Upcoming Adventures</article></NavLink>
      <NavLink exact to='past' activeStyle={{color: "red"}}><article>Past Trips</article></NavLink>
      <NavLink exact to='current' activeStyle={{color: "red"}}><article>Current Explorations</article></NavLink>
      <NavLink exact to='/' activeStyle={{color: "red"}}><article>View All My Trips</article></NavLink>
    </nav>
  )
}

export default Navbar