import express from 'express';
import MessageQueries from './MessageQueries';

const router = express.Router();
const Message = new MessageQueries();
let result;

router.get('/getMessages/:user_id', async (req, res) => {
  try {
    result = await Message.getMessages(req.params.user_id);
    res.status(200).send(result);
  } catch (error) {
    console.log('Error in getMessages route');
    res.status(500).send(error);
  }
});

router.post('/postMessages', async (req, res) => {
  try {
    result = await Message.sendMessage(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log('Error in postMessages route');
    res.status(500).send(error);
  }
});

module.exports = router;
