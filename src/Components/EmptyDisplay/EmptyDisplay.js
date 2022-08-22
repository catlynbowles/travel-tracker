
const EmptyDisplay = () => {
  const displayStyle = {
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'width': '100%'
  }
  return (
    <h3 style={displayStyle}>No trips match the selected criteria. Keep clickin'!</h3>
  )
}

export default EmptyDisplay