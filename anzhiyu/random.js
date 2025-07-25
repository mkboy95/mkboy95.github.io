var posts=["posts/2f34/","posts/54d0/","posts/b48e/","posts/b48e/","posts/30914/","posts/16107/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };