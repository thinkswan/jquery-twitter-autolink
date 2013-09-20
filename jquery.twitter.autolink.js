(function($) {
  $.fn.twitter_autolink_constants = {
    TWITTER_BASE_URL: 'http://twitter.com/',
    TWITTER_SEARCH_URL: 'http://twitter.com/search/'
  }
  $.fn.twitter_autolink_regex_map = new Array(
    {
      're': /((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g,
      'replace': '<a href="$1">$1</a>'
    },
    {
      're': /(([a-z0-9*._+]){1,}\@(([a-z0-9]+[-]?){1,}[a-z0-9]+\.){1,}([a-z]{2,4}|museum)(?![\w\s?&.\/;#~%"=-]*>))/g,
      'replace': '<a href="mailto:$1">$1</a>'
    },
    {
      're': /(^|\s)@(\w+)/g,
      'replace': '$1<a href="' + $.fn.twitter_autolink_constants.TWITTER_BASE_URL + '$2">@$2</a>'
    },
    {
      're': /(^|\s)#(\w+)/g,
      'replace': '$1<a href="' + $.fn.twitter_autolink_constants.TWITTER_SEARCH_URL + '%23$2">#$2</a>'
    }
  );
  
  $.fn.twitter_autolink = function() {
    return this.each(function() {
      var $this = $(this);
      
      $.each($.fn.twitter_autolink_regex_map, function(i, obj) {
        $this.html($this.html().replace(obj.re, obj.replace));
      });
    });
  }
})(jQuery);
