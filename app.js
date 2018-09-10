var express = require('express');
// var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');
var port = 3005;

var app = express();



var fs = require('fs');
 
var speechToText = new SpeechToTextV1({
  username: 'c49b615a-25ee-4375-b2d7-c12a5c1f28df',
  password: 'aj6xmS4mClIb',
  url: 'https://stream.watsonplatform.net/speech-to-text/api'
});
 
var params = {
  // From file
  audio: fs.createReadStream('C:/Users/mraskar/Downloads/dnc-2004-speech.mp3'),
  content_type: 'audio/mpeg'
};
 
speechToText.recognize(params, function(err, res) {
  if (err)
    console.log(err);
  else
    console.log(JSON.stringify(res, null, 2));
});
 
// or streaming
// fs.createReadStream('C:/Users/mraskar/Downloads/industry_mad.wav')
//   .pipe(speechToText.recognizeUsingWebSocket({ content_type: 'audio/l16; rate=44100' }))
//   .pipe(fs.createWriteStream('./transcription.txt'));



// var speech_to_text = new SpeechToTextV1({
//    username: 'c49b615a-25ee-4375-b2d7-c12a5c1f28df',
//    password:'aj6xmS4mClIb'
//   });
// var files = ['C:/Users/mraskar/Downloads/SampleAudio_0.4mb.mp3'];
// for (var file in files) {
//  var params = {
//      audio: fs.createReadStream(files[file]),
//      content_type: 'audio/mpeg',
//      timestamps: true,
//      word_alternatives_threshold: 0.9,
//      keywords: ['colorado', 'tornado', 'tornadoes'],
//      keywords_threshold: 0.5
//   };
// speech_to_text.recognize(params, function (error, transcript) {
//  if (error)
//       console.log('Error:', error);
//  else
//     console.log(transcript.results[0].alternatives[0].transcript);
//   });
//  }

 app.listen(port);

 module.exports = app;
