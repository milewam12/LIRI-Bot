var keys = require("./keys.js");
var Twitter = require('twitter');
var lastFmNode = require('lastfm').LastFmNode;


// TWITTER//
var client = new Twitter(keys.twitterKeys);

var params = { screen_name: 'AnaGarces' };
client.get('statuses/user_timeline', params, function (error, tweets, response) {

    if (error) {
        return console.log("liri doesn't understand that commands");
    }

    if (!error) {
        for (var i = 0; i < tweets.length; i++) {
            var date = tweets[i].created_at
            var texts = tweets[i].text
        }
    }

    if (process.argv[2] == "my-tweets") {
        console.log(date, texts)
    }


});

// LASTFM//
// I couldn't find a waw to get the song's info. I tried with  ARTIST GET INFO, but I'm having a hard time diging into the JSON Obj. :(
var lastfm = new lastFmNode(keys.lastfmKeys);


var artistName = process.argv[3];

var musicFm = function () {

lastfm.request("artist.getInfo", { artist: artistName, handlers: {
        success: function (json) {
            
        if (process.argv[2] == "test") {
          var myJson = JSON.stringify(json, null, 2);
        //   console.log(myJson + " OK" )
          var artists = myJson;
          for (var i = 0; i < artists.length; i++) {
              
              console.log(artists[i].artist.name + "this is the name- is not working")
              
          }

        }


    },
    error: function (error) {
        console.log("Error: " + error.message);
    }

}
});
}
musicFm()







//         }

// var request = lastfm.info("artist.getInfo", {
//     artist: "The strokes",
//     handlers: {
//         success: function(data) {
//             console.log("Success: " + data);
//         },
//         error: function(error) {
//             console.log("Error: " + error.message);
//         }
//     }
// });


