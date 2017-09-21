const express = require('express');
const router = express.Router();
const request = require('request');

const config = {
  channelAccessToken: 'FtQ0kCO0tk4rFkQ188gOzDQbD0LoMwrktwUWTzvI6WISH0vUDiVfirIaer0gx6kESoba3N7a7U7y+YLqr8KLqhsrxsDcYQaHQPDo9d4nIE8n4g94QMzlJDJ4vqKUra9A582K/YrrOErMc02zYn7cPwdB04t89/1O/w1cDnyilFU=',
  channelSecret: '832251fefb8860945983d526eeaa2a69'
};



/* GET line page. */
router.post('/', function(req, res, next) {

console.log(req.body.events[0].replyToken);
console.log('Bearer ' + config.channelAccessToken);
  //console.log('=======')
  request({
    uri: 'https://api.line.me/v2/bot/message/reply',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ' + config.channelAccessToken
    },
    method: 'POST',
    body: {},
    //body: {"replyToken":req.body.events[0].replyToken,"messages":[{type: 'text', text: '收到囉！'}]},
    json: true

  }, function(error, response, body) {
    console.log('---------')
    console.log(error);
    console.log('---------')
    if (!error && response.statusCode == 200) {

      console.log(response);

      console.log(body);
    }
  });
  //console.log(foo);
  //console.log('=======')
  res.sendStatus(200);
  // res.send('{}');
});



const handleEvent = function(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }


  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: event.message.text
  });

};



module.exports = router;
