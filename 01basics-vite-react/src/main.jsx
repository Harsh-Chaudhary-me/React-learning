
import { createRoot } from 'react-dom/client'

// import App from './App.jsx'
// import HelloMessage from './hellomessage.jsx';
// const name ="harsh";
// const num=10;
import UserCard from './Usercard'
import Button from './ButtonClick'
import Card from './WrraperCOmp'


createRoot(document.getElementById('root')).render(
  
    // <App />
//  <UserCard name="harsh" age={20} role="developer" />

  // <Button />
    // <LandingPage />
    // <DigitalLegacy />
       <Card>
    <h1>Hello from card</h1>
    <p>Welcome to the main page here</p>
    </Card>
  
)

