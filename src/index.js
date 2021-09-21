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
  const editCommentsButton = document.getElementById("remove-comments");

  addCommentButton.addEventListener("click", function () {
    var comments = document.getElementById("comments");
    var comment = document.createElement("div");
    var rating = document.createElement("p");
    var commenttext = document.createElement("p");

    comment.className = "comment";
    rating.className = "comment-rating";
    commenttext.className = "comment-text";

    var removeCommentButton = document.createElement("button");
    removeCommentButton.textContent = "Remove comment";
    removeCommentButton.className = "remove-comment";
    removeCommentButton.style.visibility = "hidden";

    comment.appendChild(rating);
    comment.appendChild(commenttext);
    comment.appendChild(removeCommentButton);

    removeCommentButton.addEventListener("click", function () {
      removeCommentButton.parentElement.remove();
    });

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

  editCommentsButton.addEventListener("click", function () {
    var comments = document.getElementsByClassName("comment");

    for (var i = 0; i < comments.length; i++) {
      comments[i].children[2].style.visibility = "visible";
    }
  });
}
