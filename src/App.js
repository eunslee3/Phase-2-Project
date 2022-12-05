import './App.css';
import React, {useState} from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  function componentDidMount() {
    axios
    .get("https://fakerestapi.azurewebsites.net/api/Authors", {
      "Content-Type": "application/xml; charset=utf-8"
     })
    .then(r => r.json())
    .then(data => console.log(data))
    .catch(function(error) {
      console.log(error);
      console.log(error.message)
    });
  }

  return (
    <div className="App">
      {componentDidMount()}
    </div>
  );
}

export default App;

