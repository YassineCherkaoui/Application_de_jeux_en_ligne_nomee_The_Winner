// import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
// import './home.css';
import video from './pages/videos/video-1.mp4'
import Navbar from './Navbar'
import { Button } from './Button';




const Winner = () => {
    let show;
    let Score = localStorage.getItem('score');
    // const [message , setMessage] = useState("");

    if(Score===100){

    show= <h1>you won the 1st place</h1>;
        
    }else if(Score===90) {
        show =<h1>you won the 2st place</h1>
    }else if(Score===80) {
        show =<h1>you won the 3st place</h1>
    }
    console.log(show);
  

return(

<div>
  <Navbar />
  <div className='hero-container'>
      <video src={video} autoPlay loop muted />
      <h1>Welcome To the winner Game</h1>
      <p>Are you ready?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
    </div>


    );
            }

export default Winner;