/*
  jQuery Twitter Autolink - v1.0
  
  Automatically creates links for URLs, email addresses, @-mentions, and hashtags in embedded tweets.
  
  Usage: $(<tweet_element>).twitter_autolink();
  
  Copyright (c) 2013 Graham Swan
  Licensed under the MIT license - https://github.com/thinkswan/jquery-twitter-autolink/blob/master/LICENSE
*/
!function(a){a.fn.twitter_autolink_constants={TWITTER_BASE_URL:"http://twitter.com/",TWITTER_SEARCH_URL:"http://twitter.com/search/"},a.fn.twitter_autolink_regex_map=new Array({re:/((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g,replace:'<a href="$1">$1</a>'},{re:/(([a-z0-9*._+]){1,}\@(([a-z0-9]+[-]?){1,}[a-z0-9]+\.){1,}([a-z]{2,4}|museum)(?![\w\s?&.\/;#~%"=-]*>))/g,replace:'<a href="mailto:$1">$1</a>'},{re:/(^|\s)@(\w+)/g,replace:'$1<a href="'+a.fn.twitter_autolink_constants.TWITTER_BASE_URL+'$2">@$2</a>'},{re:/(^|\s)#(\w+)/g,replace:'$1<a href="'+a.fn.twitter_autolink_constants.TWITTER_SEARCH_URL+'%23$2">#$2</a>'}),a.fn.twitter_autolink=function(){return this.each(function(){var b=a(this);a.each(a.fn.twitter_autolink_regex_map,function(a,c){b.html(b.html().replace(c.re,c.replace))})})}}(jQuery);
