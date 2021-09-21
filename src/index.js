import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  const addCommentButton = document.getElementById("add-comment");
  const removeCommentsButton = document.getElementById("remove-comments");

  addCommentButton.addEventListener("click", function () {
    var commentsList = document.getElementById("comments-list");
    var comment = document.createElement("li");
    comment.appendChild(
      document.createTextNode(document.getElementById("new-comment").value)
    );
    commentsList.appendChild(comment);
  });

  removeCommentsButton.addEventListener("click", function () {
    if (window.confirm("Do you want to remove all comments?")) {
      document.getElementById("comments-list").innerHTML = "";
    }
  });
}
