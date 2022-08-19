const Dropdown = ({destinations, trips}) => {
  let destinationNames = destinations.map(dest => dest.destination).sort()
  let locationOptions = destinationNames.map(dest => {
    return (
      <option value={dest}>{dest}</option>
    )
  })
  return (
    <select width='15px'>
      {locationOptions.sort()}
    </select>
  )
}

export default Dropdown