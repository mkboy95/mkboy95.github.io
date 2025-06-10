var posts=["posts/16107/","posts/30914/","posts/b48e/","posts/54d0/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };