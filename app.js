$(document).ready(function(){
  var $app = $('#app');
  var $title = $('<h1>Twiddler</h1>');
  $title.appendTo($app);

  // Set a click event listener on the h1 element
$title.on("click", function(event) {
  console.log(event);
  alert('The title of this page is: ' + event.target.innerText);
});

  var $updatefeed = $('<button #update-feed> Update Feed</button>');
  $updatefeed.appendTo($app);

  var $feed = $('<div "#feed"></div>');


  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message);
    $tweet.appendTo($feed);
    $feed.appendTo($app);
    index -= 1;
  }

//Remove Duplicates
$updatefeed.on("click", function(event) {
  streams.home.splice(0, 9);
 index = streams.home.length - 1;
while(index >= 0){

  var tweet = streams.home[index];
  var msg = '@' + tweet.user + ': ' + tweet.message;
  var $tweet = $('<div></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message);
    $tweet.prependTo($feed);
    index -= 1;
  event.preventDefault();
}

});

});