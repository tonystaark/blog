---
title: A Beginner's Guide to Using Twitter's API
date: "2019-06-02"
---
![](./assets/twitter-developer.jpg)


Hey, I am back. So this time, I am on my own secret project that requires meddling with social media API, in which I will start off with Twitter's API first. For those who have not played with Twitter's API, it should not be a problem. But unless you are a beginner with no programming experience, especially with API calls, chances are you might be struggling with this article. I suggest you to get yourself familiarize with HTTP and API calls, before you dive your head into this post. 

##Learning Objective

By the end of this tutorial, you will learn
- **What is Twurl?**
- **How to use Twurl to make API calls to Twitter API?**


##Prerequisites

Before you follow this article, make sure you have experience in making API calls such as POST and GET.


##Setting up
If you are creating Twitter cards or using Twitter for websites, you may not need an API key. But if you are using for other purposes such as searching through a user's timeline, or retrieving certain tweet with conditions, you need to create an app  as required by Twitter in order to use their API. 

First of all, go to https://developer.twitter.com/en/apps/create and set up one. 

After successfully set up one, you will get both API and API secret key, which is essential for authorization and authentication for your app to make Twitter API calls.

Next, let's install Twurl.

##What is Twurl?



Twurl is similar to Curl in terms of the command, but it also leverages on Curl's function and develops much more functionalities catering to Twitter's API requirement. For example, it could grant an access token to a Twitter app for a specified user, and then access all API requests by bundling the access token together. Other cool features it provides include defining alias for arguments in the command line that saves your hassle in retyping long and repetitive commands, as well as supporting multiple Twitter account switches. 



##Installing Twurl

To be able to use Twurl command, you need to install Twurl. Make sure you have gem installed first. Then run:
```
gem install twurl
```

Once installed, you can do authorizaton with your Twitter account with your consumer key and secret by doing the following for example
```
twurl authorize --consumer-key V56Qw6WA3wxmDwRv9xjvLkWHx --consumer-secret FcIPzOvzn16WPwq_________THnDkH2pNYK5jLBk 
```

Once entered the command, it populates a very long URL in the terminal. Copy and paste into your browser URL input field, or click on it will direct you to authenticate your Twitter account. A 6-digit PIN will be shown to you. Insert the PIN back into terminal and hit enter, your account will be authorized to work with Twitter API request.

You can check whether Twurl has authorized your account by doing
```
twurl accounts
```
Here it should return 

```
accountName1
  V56Qw6WA3wxmDwRv9xjvLkWHx (default)
  D56sdJQLsdM9DLQlsdknD82A 

```

You can have multiple accounts registered with Twurl as shown above. The `default` indicates which account is being used at the moment.

For guidelines on basic usage, you can always run `twurl -h` or `twurl -help` command in the terminal. Some of the most common usages are 

```
-d, --data [data] : Sends the specified data in a POST request to the HTTP server.
-A, --header [header]: Adds the specified header to the request to the HTTP server.
-H, --host [host] : Specify host to make requests to (default: api.twitter.com).
-X, --request-method [method] : Request method (default: GET).
-f, --file [path_to_file] : Specify the path to the file to upload.
```

##Making POST requests

Let's try to make a simple POST request to post a tweet. In the past, we could always use CURL as an alternative to other API Testing tool like Postman or Insomnia to send requests. By using CURL, you can do for example, 
```
curl -X POST
--url 'https://api.twitter.com/1.1/statuses/update.json?status=Sending tweet via the Twitter API.' 
--header 'Authorization: OAuth 
oauth_consumer_key="AAAAAAAAAAAAAAAAAAAA", 
oauth_nonce="BBBBBBBBBBBBBBBBBBBBBBB", 
oauth_signature="CCCCCCCCCCCCCCCCCCCCCCCCCCC", 
oauth_signature_method="HMAC-SHA1", 
oauth_timestamp="1471672391", 
oauth_token="DDDDDDDDDDDDDDDDDDDDDDDDDDDDDD", 
oauth_version="1.0"'
```

Note that we always need to include authorization header with Oauth signing arguments and parameters if we use Curl. Look at the lines! Imagine if we need to do that for every single request! Twurl comes to our rescue by eliminating all the grunt work and helping us to take care authorization commands by registering the credentials as how we have seen earlier. So with Twurl now, we can instead use the following command:

```
twurl -d 'status=Sending tweet via the Twitter API.' /1.1/statuses/update.json | jq
```

After you post successfully, you should see something like this:
```
{
  "created_at": "Mon Jun 03 08:40:47 +0000 2019",
  "id": 1135466346198622200,
  "id_str": "1135466346198622208",
  "text": "Sending tweet via the Twitter API.",
  "truncated": false,
  "entities": {
    "hashtags": [],
    "symbols": [],
    "user_mentions": [],
    "urls": []
  },
  "source": "<a href=\"https://tonystaark.com\" rel=\"nofollow\">TopTenTweetsWorldwide</a>",
  "in_reply_to_status_id": null,
  "in_reply_to_status_id_str": null,
  "in_reply_to_user_id": null,
  "in_reply_to_user_id_str": null,
  "in_reply_to_screen_name": null,
  "user": {
    "id": 465173647,
    "id_str": "465173647",
    "name": "Tony Ng",
    "screen_name": "tonyngkokhong",
    "location": "United States",
    "description": "",
    "url": null,
    "entities": {
      "description": {
        "urls": []
      }
    },
    "protected": false,
    "followers_count": 20,
    "friends_count": 44,
    "listed_count": 0,
    "created_at": "Mon Jan 16 01:54:51 +0000 2012",
    "favourites_count": 4,
    "utc_offset": null,
    "time_zone": null,
    "geo_enabled": false,
    "verified": false,
    "statuses_count": 35,
    "lang": null,
    "contributors_enabled": false,
    "is_translator": false,
    "is_translation_enabled": false,
    "profile_background_color": "C0DEED",
    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
    "profile_background_tile": false,
    "profile_image_url": "http://pbs.twimg.com/profile_images/1758101443/Picture_of_me_3_normal.png",
    "profile_image_url_https": "https://pbs.twimg.com/profile_images/1758101443/Picture_of_me_3_normal.png",
    "profile_link_color": "1DA1F2",
    "profile_sidebar_border_color": "C0DEED",
    "profile_sidebar_fill_color": "DDEEF6",
    "profile_text_color": "333333",
    "profile_use_background_image": true,
    "has_extended_profile": false,
    "default_profile": true,
    "default_profile_image": false,
    "following": false,
    "follow_request_sent": false,
    "notifications": false,
    "translator_type": "none"
  },
  "geo": null,
  "coordinates": null,
  "place": null,
  "contributors": null,
  "is_quote_status": false,
  "retweet_count": 0,
  "favorite_count": 0,
  "favorited": false,
  "retweeted": false,
  "lang": "en"
}
```

It is recommended to use `jq` which is a preformatting parameter for the JSON output to make your result readable. You will get a one liner with everything jumbled up if you do not indicate that.

You need to install `jq` before using it. For Mac users, you can do 
```
brew install jq
```

For Linus users, 
```
Installing jq Using apt-get on Ubuntu
sudo apt-get install jq
Installing jq Using yum
sudo yum install jq
```

##Making GET Request
You can find all the GET, POST or DELETE api from [here](https://developer.twitter.com/en/docs/api-reference-index).
Let's demonstrate how to retrieve the timeline from your account. 
You can just type

```
twurl /1.1/statuses/user_timeline.json?count=1 | jq
```

The count here will return you the amount of tweets correspondingly starting from the most current tweet. 
```
[
  {
    "created_at": "Sun Jun 02 03:11:17 +0000 2019",
    "id": 1135021036280328200,
    "id_str": "1135021036280328192",
    "text": "Sending tweet via the Twitter API.",
    "truncated": false,
    "entities": {
      "hashtags": [],
      "symbols": [],
      "user_mentions": [],
      "urls": []
    },
    "source": "<a href=\"https://tonystaark.com\" rel=\"nofollow\">TopTenTweetsWorldwide</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
      "id": 465173647,
      "id_str": "465173647",
      "name": "Tony Ng",
      "screen_name": "tonyngkokhong",
      "location": "United States",
      "description": "",
      "url": null,
      "entities": {
        "description": {
          "urls": []
        }
      },
      "protected": false,
      "followers_count": 20,
      "friends_count": 44,
      "listed_count": 0,
      "created_at": "Mon Jan 16 01:54:51 +0000 2012",
      "favourites_count": 4,
      "utc_offset": null,
      "time_zone": null,
      "geo_enabled": false,
      "verified": false,
      "statuses_count": 34,
      "lang": null,
      "contributors_enabled": false,
      "is_translator": false,
      "is_translation_enabled": false,
      "profile_background_color": "C0DEED",
      "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
      "profile_background_tile": false,
      "profile_image_url": "http://pbs.twimg.com/profile_images/1758101443/Picture_of_me_3_normal.png",
      "profile_image_url_https": "https://pbs.twimg.com/profile_images/1758101443/Picture_of_me_3_normal.png",
      "profile_link_color": "1DA1F2",
      "profile_sidebar_border_color": "C0DEED",
      "profile_sidebar_fill_color": "DDEEF6",
      "profile_text_color": "333333",
      "profile_use_background_image": true,
      "has_extended_profile": false,
      "default_profile": true,
      "default_profile_image": false,
      "following": false,
      "follow_request_sent": false,
      "notifications": false,
      "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 1,
    "favorited": false,
    "retweeted": false,
    "lang": "en"
  }
]
```

