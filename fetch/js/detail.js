import { getCommentById } from "./modules/commentsApi.js";
import { createCard } from "./modules/domModule.js";
const urlParams = new URLSearchParams(location.search);
console.log(urlParams);

let testValue = urlParams.get("test");
console.log(testValue);

let commentId = urlParams.get("commentId");
console.log(commentId);

const printCommentDetail = async () => {
  let commentData = await getCommentById(commentId);
  console.log(commentData);
  let author = document.getElementById("author");
  let comment = document.getElementById("comment");
  console.log(author);
  author.innerText = commentData.author;
  comment.innerText = commentData.comment;
};

printCommentDetail();
