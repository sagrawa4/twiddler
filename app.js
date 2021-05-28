$(document).ready(function(){
  var $app = $('#app');

  // Create new HTML elements
  var $title = $('<h1>T.W.I.D.D.L.E.R</h1>');
  // Create event handler functions
  var handleTitleClick = function(event) {
    alert('The title of this page is: ' + event.target.innerText);
  }
  // Set event listeners (providing appropriate handlers as input)
  $title.on('click', handleTitleClick);

  $title.appendTo($app);

  var $feed = $('<div id="feed"></div>');


  var renderFeed = function(user) {
    if(user === undefined) {
      var index = streams.home.length - 1;
      while(index >= 0){
        var tweet = streams.home[index];
        var $tweet = $('<div class="tweet"></div>');
        //var $renderUser = $('<button class="username">' + '@'+tweet.user + '</button>')
        $tweet.append('<img class="profile-photo" src="assets/img/' + tweet.user + '.png" />')
        $tweet.append('<div class="username">' + '@'+tweet.user + '</div>')
        $tweet.append('<div class="message">' + tweet.message + '</div>')
        $tweet.append('<div class="timestamp">' + jQuery.timeago(tweet.created_at) + '</div>')
        $tweet.append('<i class="fas fa-comment icon comment"></i>')
        $tweet.append('<i class="fas fa-retweet icon retweet"></i>')
        $tweet.append('<i class="far fa-thumbs-up icon like"></i>')
        $tweet.append('<i class="fas fa-share icon share"></i>')
        $tweet.appendTo($feed);
        $feed.appendTo($app);
        index -= 1;
      }
    } else {
      var username= user.substring(1);
      console.log( username);
      console.log( streams.users);
      var index = streams.users[username];
      console.log( index);
      for(var tweet of index) {
        console.log(tweet);
        var $tweet = $('<div class="tweet"></div>');
        $tweet.append('<img class="profile-photo" src="assets/img/' + tweet.user + '.png" />')
        $tweet.append('<div class="username">' + '@'+tweet.user + '</div>')
        $tweet.append('<div class="message">' + tweet.message + '</div>')
        $tweet.append('<div class="timestamp">' + jQuery.timeago(tweet.created_at) + '</div>')
        $tweet.append('<i class="fas fa-comment icon comment"></i>')
        $tweet.append('<i class="fas fa-retweet icon retweet"></i>')
        $tweet.append('<i class="far fa-thumbs-up icon like"></i>')
        $tweet.append('<i class="fas fa-share icon share"></i>')
        $tweet.appendTo($feed);
        $feed.appendTo($app);
      }
    }

  }

  // Create new HTML elements
  var $updateFeed = $('<button id="update-feed"> Update Feed</button>');
  $updateFeed.appendTo($app);

  renderFeed();

  var handleButtonClick = function(event) {
    if(event.target.outerText === "Update Feed") {
      $('.tweet').remove();
      renderFeed();
    }
    if(event.target.outerText === "Back") {
      $('.tweet').remove();
      $('#update-feed').remove();
      $updateFeed = $('<button id="update-feed"> Update Feed</button>');
      $updateFeed.appendTo($app);
      renderFeed();
    }

    $('.username').on("click", handleUsernameClick);
  }
//Remove Duplicates
  $updateFeed.on("click", handleButtonClick);

  var handleUsernameClick = function(event) {
    $('.tweet').remove();
    $('#update-feed').remove();
    $updateFeed = $('<button id="update-feed"> Back</button>');
    $updateFeed.appendTo($app);
    renderFeed(event.target.innerText);

    $updateFeed.on("click", handleButtonClick);
  }

  $('.username').on("click", handleUsernameClick);

});




/*index = streams.home.length - 1;
while(index >= 0){
  var tweet = streams.home[index];
  var $renderUser = $('<button class="username">' + '@'+tweet.user + '</button>')
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
  $tweet.append($renderUser)
  $tweet.append('<div class="message">' + tweet.message + '</div>')
  $tweet.append('<div class="timestamp">' + jQuery.timeago(tweet.created_at) + '</div>')
  $tweet.append('<i class="fas fa-comment icon comment"></i>')
  $tweet.append('<i class="fas fa-retweet icon retweet"></i>')
  $tweet.append('<i class="far fa-thumbs-up icon like"></i>')
  $tweet.append('<i class="fas fa-share icon share"></i>')
  $tweet.prependTo($feed);
    index -= 1;
}
    */