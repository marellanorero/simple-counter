import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import reportWebVitals from './reportWebVitals';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types'

function SimpleCounter(props){
  return (
    <div className='bigCounter'>
      <div className='icon'>
        <FontAwesomeIcon icon={faClock} />
      </div>
      <div className='six'>{props.digitSix % 10}</div>
      <div className='five'>{props.digitFive % 10}</div>
      <div className='four'>{props.digitFour % 10}</div>
      <div className='three'>{props.digitThree % 10}</div>
      <div className='two'>{props.digitTwo % 10}</div>
      <div className='one'>{props.digitOne % 10}</div>
    </div>
  )
}

SimpleCounter.propTypes = {
  digitSix: PropTypes.number,
  digitFive: PropTypes.number,
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number,
}

let counter = 0;
setInterval(function(){
  const six = Math.floor(counter/100000)
  const five = Math.floor(counter/10000)
  const four = Math.floor(counter/1000)
  const three = Math.floor(counter/100)
  const two = Math.floor(counter/10)
  const one = Math.floor(counter/1)
  console.log(six, five, four, three, two, one)

  counter++;
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six}/>
    </React.StrictMode>
  );
}, 1000)

  




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
