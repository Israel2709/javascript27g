const BASE_URL = "https://javascript27g-default-rtdb.firebaseio.com/comments";

const getComments = async () => {
  let response = await fetch(`${BASE_URL}/.json`);
  let data = await response.json();
  return data;
};

const getCommentById = async (commentId) => {
  let response = await fetch(`${BASE_URL}/${commentId}/.json`);
  let data = await response.json();
  console.log(data);
  return data;
};

export { getComments, getCommentById };
