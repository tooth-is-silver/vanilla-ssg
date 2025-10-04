import { generateHTML } from "./src/ssr.js";
import { model } from "./src/model.js";
import express from "express";

/**
 * 서버(express)로 html을 만들어서 직접 데이터를 전달하는 방식이 SSR이다.
 *
 * response로 html string을 전달하고 브라우저에서 받아서 출력한다.
 */

const app = express();
app.use(express.json());

// src내부의 파일들을 static하게 접근하여 브라우저에서 코드를 읽을 수 있다.
app.use("/src", express.static("./src"));

app.post("/api/todo-items", (req, res) => {
  model.addTodoItem(req.body.content); // content의 정보를 전달
  res.status(201).send();
});

app.delete("/api/todo-items/:index", (req, res) => {
  model.deleteTodoItem(req.params.index); // index를 파라미터로 전달
  res.status(204).send();
});

app.get("/", (req, res) => {
  res.send(generateHTML(model.todoItems));
});

app.listen(8000, () => console.log("listen to http://localhost:8000"));
