# jquery-twitter-autolink

This plugin automatically creates links for URLs, email addresses, @-mentions, and hashtags in embedded tweets.

## Features

- Rewrites links in plaintext tweets as appropriate links.

## Installation

Include the plugin in your page:

    <script src="httpjquery.twitter.autolink.js"></script>

## Usage

Call the `twitter_autolink()` function on any element containing a tweet.

    $(<tweet_el>).twitter_autolink();

## Examples

Consider the following element on your page:

    <p class="tweet">Check out this cool new stock video site: dissolve.com. #video #4k /cc @dissolve</p>

Using the plugin on this element:

    $(".tweet").twitter_autolink();

And the element will be rewritten like this (note that `%23` is the URL-encoded representation of `#`):

    <p class="tweet">Check out this cool new stock video site: <a href="http://dissolve.com">dissolve.com</a>. <a href="http://twitter.com/search/%23video">#video</a> <a href="http://twitter.com/search/%234k">#4k</a> /cc <a href="http://twitter.com/dissolve">@dissolve</a></p>

## Support

If you need support for this plugin, please email me at [thinkswan@gmail.com](mailto:thinkswan@gmail.com).

## License

[MIT License](https://github.com/thinkswan/jquery-twitter-autolink/blob/master/LICENSE)
