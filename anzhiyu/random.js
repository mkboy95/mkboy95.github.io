var posts=["posts/16107/","posts/30914/","posts/54d0/","posts/2f34/","posts/b48e/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };