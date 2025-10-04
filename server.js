/**
 * 서버(express)로 html을 만들어서 직접 데이터를 전달하는 방식이 SSR이다.
 *
 * response로 html string을 전달하고 브라우저에서 받아서 출력한다.
 */
import express from "express";

const app = express();

/**
 * 단순 문자열 부분을 변수로 분리한다. 배열로 되어있는 부분을 반복해서 만들어주고 그 다음에 join으로 합쳐주기
 */
const todoItems = [
  "SSR은 뭔데?",
  "CSR은 뭔데?",
  "이게 왜 필요한데?",
  "MVVM은 또 뭐야?",
  "공부해야 할게 왜이렇게 많아?",
];

/**
 * 엘리먼트로 생성하는 부분을 따로 재사용될 수 있도록 분리 (props를 받는 컴포넌트화)
 */
const TodoItem = (item) => `<li>${item}</li>`;
const TodoList = (items) => `<ul>${items.map(TodoItem).join("")}</ul>`;

const html = `
    <!DOTTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Todo List</title>
    </head>
    <body>
        <div id="app">
            ${TodoList(todoItems)}
        </div>
    </body>
    </html>
`;

app.get("/", (req, res) => {
  res.send(html);
});

app.listen(8000, () => console.log("listen to http://localhost:8000"));
