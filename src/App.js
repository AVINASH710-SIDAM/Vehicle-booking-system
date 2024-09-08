
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Bookings from './Pages/Bookings/Bookings';
import Header from './components/Header/Header';
import Vehicle from './components/Vehicles/Vehicle';
import VehicleDetailsPage from './Pages/VehicleDetailsPage/VehicleDetailsPage';
import CustomerDetails from './Pages/VehicleDetailsPage/CustomerDetails';
import ConfirmationPage from './Pages/VehicleDetailsPage/ConfirmationPage';
function App() {
  return (
    <div >
       <BrowserRouter>
       <Header />
       <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/bookings' exact Component={Bookings}/>
        <Route path='/vehicles' exact Component={Vehicle}/>
        <Route path='/vehicle/:id' exact Component={VehicleDetailsPage}/>
        <Route path="/book/:id" exact Component={CustomerDetails} />
        <Route path="/confirm" exact Component={ConfirmationPage} />
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
