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

var lastfm = new lastFmNode(keys.lastfmKeys);


var song = process.argv[3];

var musicFm = function () {

lastfm.request("track.search", { track: song, handlers: {
        success: function (json) {
            
        if (process.argv[2] == "spotify-this-song") {
          //var myJson = JSON.stringify(json, null, 2);
      
        var myJson = json
          var artists = myJson;
            //   console.log(JSON.stringify(json, null, 2) + " LOL" )
         // for (var i = 0; i < artists.length; i++) {
              
              console.log(myJson.results.trackmatches.track[0].name)
              
          //}

        }


    },
    error: function (error) {
        console.log("Error: " + error.message);
    }

}
});
}
musicFm()








