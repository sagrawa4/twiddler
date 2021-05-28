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
        $tweet.append('<img class="profile-photo" src="assets/img/' + tweet.user + '.png" />')
        $tweet.append('<button class="username">' + '@'+tweet.user + '</button>')
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
      var index = streams.users[username];
      for(var tweet of index) {
        var $tweet = $('<div class="tweet"></div>');
        $tweet.append('<img class="profile-photo" src="assets/img/' + tweet.user + '.png" />')
        $tweet.append('<button class="username">' + '@'+tweet.user + '</button>')
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

  window.isItBeautifulYet = true


});
