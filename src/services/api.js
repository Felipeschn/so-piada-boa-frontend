import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001/v1",
  timeout: 3000,
  headers: {
    "content-type": "application/json",
  },
});

// GET
export async function getJokes() {
  return await http.get("jokes");
}
export async function getJokesOrdered(orderBy) {
  return await http.get(`jokes/orderby/${orderBy}`);
}
export async function getAutoComplete(char) {
  return await http.get(`jokes/autocomplete/${char}`);
}

// PUT
export async function putVotes(upVote, id) {
  if (upVote) {
    return await http.put(`/jokes/like/${id}`);
  } else {
    return await http.put(`/jokes/dislike/${id}`);
  }
}

//POST
export async function postJoke(name, email, title, description) {
  await http.post("jokes", {
    name,
    email,
    title,
    description,
  });
}
