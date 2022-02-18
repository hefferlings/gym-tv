import left_side from './left_side.jpg';
import right_side from './right_side.jpg';
import './App.css';
import Image from './components/Image';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
//    axios.get('https://gym-tv.herokuapp.com/)
    axios.get('http://localhost:5000/flask/hello').then(response => {
      console.log("SUCCESS",response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className="App">
      <div className="row">
        <div className="column">
          <img src={left_side} alt="left" />
        </div>
        <div className="column">
          <img src={right_side} alt="right" />
        </div>
      </div>
      <p>tutorial stuff</p>
      <div>{getMessage.status === 200 ?
        <h3>{getMessage.data.message}</h3>
        :
        <h3>LOADING</h3>}</div>
    </div>
  );
}

export default App;
