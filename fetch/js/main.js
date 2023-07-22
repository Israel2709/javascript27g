import { getComments, getCommentById } from "./modules/commentsApi.js";

const openDetailView = (commentKey) => {
  console.log(commentKey);
  window.open(`views/detail.html?test=foo&commentId=${commentKey}`);
};

const createCommentBox = (commentData, commentKey) => {
  console.log(commentData);
  console.log(commentKey);
  let { comment } = commentData;
  let col = document.createElement("div");
  col.classList.add("col");
  let box = document.createElement("div");
  let content = document.createElement("p");
  content.innerText = comment;
  box.append(content);
  box.classList.add("card");
  col.append(box);
  col.addEventListener("click", () => {
    console.log(commentKey);
    window.open(`views/detail.html?test=foo&commentId=${commentKey}`);
  });

  return col;
};

const printAllComments = async () => {
  let commentData = await getComments();
  let keys = Object.keys(commentData);
  keys.forEach((key) => {
    let { comment } = commentData[key];
    if (comment) {
      let commentBox = createCommentBox(commentData[key], key);
      document.getElementById("comment-wrapper").append(commentBox);
    }
  });
};

document
  .getElementById("go-to-create")
  .addEventListener("click", () =>
    window.open("views/createComment.html?authorId=Israel Salinas")
  );

printAllComments();
