'use strict';

function doSomething() {
  let domTweetId   = document.getElementById('tweet-id'),
      domVerified  = document.getElementById('only-verified');
  let tweetId      = domTweetId.value,
      onlyVerified = domVerified.checked;
  domTweetId.disabled = true;
  domVerified.disabled = true;

  alert(`You entered ${tweetId} for a tweet ID and you ${onlyVerified ?
      "do" : "don't"} care about verified users`);

  domTweetId.disabled = false;
  domVerified.disabled = false;
  return false;  /* always return false because page navigation */
}

/**
  * Adds each error in `errors` to the #error element
  * @param {Array} errors The errors to display
  */
function addErrorsToDOM(errors) {
  let parent = document.getElementById('errors');
  errors.forEach(error => {
    let item = document.createElement('p');
    item.textContent = error;
    parent.appendChild(item);
  });
  if (errors.length > 0)
    parent.style.display = 'block';
  else
    parent.style.display = 'none';
}
