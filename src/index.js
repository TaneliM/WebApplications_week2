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
    var comments = document.getElementById("comments");
    var comment = document.createElement("div");
    comment.className = "comment";
    var rating = document.createElement("p");
    rating.className = "comment-rating";
    var commenttext = document.createElement("p");
    commenttext.className = "comment-text";

    comment.appendChild(rating);
    comment.appendChild(commenttext);

    rating.appendChild(
      document.createTextNode(
        document.getElementById("rating-select").options[
          document.getElementById("rating-select").selectedIndex
        ].text
      )
    );

    commenttext.appendChild(
      document.createTextNode(document.getElementById("new-comment").value)
    );
    comments.appendChild(comment);
  });

  removeCommentsButton.addEventListener("click", function () {
    if (window.confirm("Do you want to remove all comments?")) {
      document.getElementById("comments-list").innerHTML = "";
    }
  });
}
