import './App.css'
const PannelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null
  }
  return (
    <div className='BasicTracker'>
      <p>Mouse Position:</p>
      <div className='Row'>
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  )
}

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null
  }
  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  )
}
function App() {
  return (
    <div className='App'>
      <header className='Header'>Little Lemon Restaurant 🍕</header>
      <PannelMouseLogger />
      <PointMouseLogger />
    </div>
  )
}

export default App
