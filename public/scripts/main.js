var button = document.getElementById("inicial");
if (button) {
  button.onclick = () => {
    window.location.href = "/";
  };
}

var button_posts = document.getElementById("bntPosts");
if (button_posts) {
  button_posts.onclick = () => {
    window.location.href = "/postagens";
  };
}

var button_albuns = document.getElementById("bntAlbuns");
if (button_albuns) {
  button_albuns.onclick = () => {
    window.location.href = "/albuns";
  };
}

var button_todos = document.getElementById("bntTodos");
if (button_todos) {
  button_todos.onclick = () => {
    window.location.href = "/todos";
  };
}

/* window.onresize = function () {
  window.location.reload();
} */