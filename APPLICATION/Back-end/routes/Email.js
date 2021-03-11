const express = require('express')
const router = express.Router();
const cors = require("cors")
// router.use(cors())
const nodemailer = require("nodemailer")


// router.route("/add").post((req, res) => {
    router.route("/send_mail").post,cors(),async(req, res)=> {
// router.post("/send_mail", cors(), async (req, res) => {
	// let { text } = "Congratulation You Are The winner";
  
	const transport = nodemailer.createTransport({
    service: "gmail",
		auth: {
			user: 'cyassin95@gmail.com',
			pass: 'Sanasaida123'
		}
	})
    
	await transport.sendMail({
		from: 'flasn@gmail.Com',
		to: "cyassin95@gmail.com",
		subject: "The Winning",
		html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <h2>Congratulation You Are The winner</h2>
        <p>We Are s glad to have person Like You</p>
    
         </div>
    `
	})
}

module.exports = router;