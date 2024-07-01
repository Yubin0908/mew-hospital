import Main from "./Main/Main";
import '../App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Booking from "./Booking/Booking";

function App() {
  return (
    <div className="App" style={{maxWidth: '1250px', minWidth: '1240px', margin: '0 auto'}}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
