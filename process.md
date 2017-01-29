https://dev.twitter.com/oauth/3-legged
https://dev.twitter.com/oauth/overview/authorizing-requests

1. Obtain a request token
  ```http
  POST /oauth/request_token HTTP/1.1
  Host: api.twitter.com
  Authorization: OAuth oauthcallback="http%3A%2F%2Flocalhost%2Fsign-in-with-twitter", ...
  ```

