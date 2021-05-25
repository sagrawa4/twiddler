$(document).ready(function(){
  var $app = $('#app');

  var $title = $('<h1>Twiddler</h1>');
  $title.appendTo($app);

  // Set a click event listener on the h1 element
$title.on("click", function(event) {
  console.log(event);
  alert('The title of this page is: ' + event.target.innerText);
});

  var $renderFeed = $('<button #update-feed> Update Feed</button>');
  $renderFeed.appendTo($app);

  var $feed = $('<div id="feed"></div>');


  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    //console.log(tweet.user)
    var $tweet = $('<div class="tweet"></div>');
    var $icon = $('<div class="icon"></div>');
    if(tweet.user === "douglascalhoun") {
      $tweet.append('<img id="profile-photo" src="assets/img/douglascalhoun.png" />')
    }
     if(tweet.user === "mracus") {
      $tweet.append('<img id="profile-photo" src="assets/img/mracus.png" />')
    }
     if(tweet.user === "sharksforcheap") {
      $tweet.append('<img id="profile-photo" src="assets/img/sharksforcheap.png" />')
    }
     if(tweet.user === "shawndrost") {
      $tweet.append('<img id="profile-photo" src="assets/img/shawndrost.png" />')
    }
    $tweet.append('<div class="username">' + '@'+tweet.user + '</div>')
    $tweet.append('<div class="message">' + tweet.message + '</div>')
    $tweet.append('<div class="timestamp">' + tweet.created_at + '</div>')
    $tweet.append('<img class="icon, comment" src="assets/icons/placeholder.png" />')
    $tweet.append('<img class="icon, retweet" src="assets/icons/placeholder.png" />')
    $tweet.append('<img class="icon, like" src="assets/icons/placeholder.png" />')
    $tweet.append('<img class="icon, share" src="assets/icons/placeholder.png" />')
    $tweet.appendTo($feed);
    $feed.appendTo($app);
    index -= 1;
  }
//Remove Duplicates
$renderFeed.on("click", function(event) {
  $('.tweet').remove();
 index = streams.home.length - 1;
while(index >= 0){
  var tweet = streams.home[index];
  var $tweet = $('<div class="tweet"></div>');
  if(tweet.user === "douglascalhoun") {
    $tweet.append('<img id="profile-photo" src="assets/img/douglascalhoun.png" />')
  }
   if(tweet.user === "mracus") {
    $tweet.append('<img id="profile-photo" src="assets/img/mracus.png" />')
  }
   if(tweet.user === "sharksforcheap") {
    $tweet.append('<img id="profile-photo" src="assets/img/sharksforcheap.png" />')
  }
   if(tweet.user === "shawndrost") {
    $tweet.append('<img id="profile-photo" src="assets/img/shawndrost.png" />')
  }
  $tweet.append('<div class="username">' + '@'+tweet.user + '</div>')
  $tweet.append('<div class="message">' + tweet.message + '</div>')
  $tweet.append('<div class="timestamp">' + tweet.created_at + '</div>')
  $tweet.append('<img class="icon, comment" src="assets/icons/placeholder.png" />')
  $tweet.append('<img class="icon, retweet" src="assets/icons/placeholder.png" />')
  $tweet.append('<img class="icon, like" src="assets/icons/placeholder.png" />')
  $tweet.append('<img class="icon, share" src="assets/icons/placeholder.png" />')
    $tweet.prependTo($feed);
    index -= 1;
  event.preventDefault();
}
});
});