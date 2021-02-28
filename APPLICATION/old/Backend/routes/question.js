// ____________________________Call Required______________________________________________
const express = require('express')
let questions = require('../models/questions.model');
const router = express.Router();
const bodyParser = require('body-parser');
// middleware
router.use(bodyParser.json());


// ____________________________show all questions__________________________________________
router.get('/', (req, res) => {
    questions.find()
      .then((questions) => res.json(questions))
      .catch((err) => res.status(400).json("Error :" + err));
  });

  // ____________________________FIND DATA CATEGORIE BY ID____________________________________
router.get('/:idquestions', (req, res) => {
    questions.find({
        questions: `${req.params.questions}`
      })
      .then((questions) => res.json(questions))
      .catch((err) => res.status(400).json("Error :" + err));
  });
  // ____________________________add Codepromo____________________________________
router.route("/add").post((req, res) => {
    const Cateogory = req.body.Cateogory;
    const main_question = req.body.main_question;
    const anser_quesion = req.body.anser_quesion;
    const Question1 = req.body.Question1;
    const Question2 = req.body.Question2;
    const Question3 = req.body.Question3;
    const questionsPush = new questions({
        Cateogory,
        main_question,
        main_question,
        anser_quesion,
        Question1,
        Question2,
        Question3
      });
      questionsPush
        .save()
        .then(() => res.json("questions successfully added"))
        .catch((err) => res.status(400).json("Error :" + err));
    });
    
// ____________________________DELETE CODE PROMO___________________________________
router.delete('/delete/:_id', async (req, res, next) => {
    try {
      const Questions = await questions.remove({
        _id: req.params._id
      });
      res.json(questions);
    } catch (err) {
      res.json({
        message: err
      });
    }
  });


// ____________________________UPDATE CODE PROMO___________________________________

router.put('/update/:id', async (req, res, next) => {
    try {
      const updateQuestions = await questions.updateMany({
        _id: req.params.id
      }, {
        $set: {
             Cateogory : req.body.Cateogory,
             main_question : req.body.main_question,
             anser_quesion : req.body.anser_quesion,
             Question1 : req.body.Question1,
        }
      });
      res.json(updateQuestions);
    } catch (err) {
      res.json({
        err
      });
    }
  });





    

module.exports = router;