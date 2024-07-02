import Main from "./Main/Main";
import '../App.css';
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import Booking from "./Booking/Booking";
import BookingResult from "./Booking/BookingResult";

function App() {
  return (
    <div className="App" style={{maxWidth: '1250px', minWidth: '1240px', margin: '0 auto'}}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/BookingResult/:cat/:date" element={<BookingResult />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
