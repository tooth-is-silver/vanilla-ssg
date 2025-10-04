import { generateHTML } from "./src/ssr.js";
import { model } from "./src/model.js";
import express from "express";

/**
 * 서버(express)로 html을 만들어서 직접 데이터를 전달하는 방식이 SSR이다.
 *
 * response로 html string을 전달하고 브라우저에서 받아서 출력한다.
 */

const app = express();

app.get("/", (req, res) => {
  res.send(generateHTML(model.todoItems));
});

app.listen(8000, () => console.log("listen to http://localhost:8000"));
