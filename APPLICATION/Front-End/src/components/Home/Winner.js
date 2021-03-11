import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
// import './home.css';
import video from './pages/videos/Win.mp4'
import Navbar from './Navbar2'
import axios from 'axios'
// import { Button } from './Button';
// import './';
import './lose.css';


const Winner = () => {
    let show ="";
    let Score = localStorage.getItem('score');

    // _________________Email_____________________
    const [ sent, setSent ] = useState(false)
	const [  setText ] = useState("")
    // const [  Score ] = useState(0)
    // let text;



	const handleSend = async (e) => {
		setSent(true)
		try {
			await axios.post("http://localhost:8081/send_mail", {
                // console.log("winn");
                Score,

			})
		} catch (error) {
			console.error(error)
		}
	}


    if(Score>=100){

    show= <h1>you won the 1st place</h1>;
    }else if(Score >= 80 && Score <= 90) {
        show =<h1>you won the 2st place</h1>
    }else if(Score === 80) {
        show =<h1>you won the 3st place</h1>
    }
  

return(

<div>
  <Navbar />
  <div className='hero-container'>
      <video src={video} autoPlay loop muted />
      <h1>You Win Congratulation</h1>
      <p>You Are the Winner!!!</p>
      <p>You Score : {Score}</p>
      <p>{show}</p>
      <div className='hero-btns'>
      {/* <a href="/" className="btnlose">GET YOUR CERTIFICATE</a> */}
      {!sent ? (
				<form onSubmit={handleSend}>
					<input type="hidden" value={Score} onChange={(e) => setText(Score)} />

					<button type="submit" className="btnsend" >GET YOUR CERTIFICATE</button>
				</form>
			) : (
				<h1>CERTIFICATE SENT</h1>
			)}
      </div>
    </div>
    </div>


    );
            }

export default Winner;