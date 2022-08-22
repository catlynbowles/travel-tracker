import { Link, Route } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to='upcoming'><button>Upcoming Adventures</button></Link>
      <Link to='past'><button>Past Trips</button></Link>
      <Link to='current'><button>Current Explorations</button></Link>
    </nav>
  )
}

export default Navbar