
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


function App() {
  return (
       <>
<Navbar title="Hotel Booking" searchplaceholder="Search"></Navbar>
<div className="container">
      <TextForm heading="Description"></TextForm>
      </div>
  </>
  );
}

export default App;
