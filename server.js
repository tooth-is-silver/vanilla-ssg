/**
 * 서버(express)로 html을 만들어서 직접 데이터를 전달하는 방식이 SSR이다.
 *
 * response로 html string을 전달하고 브라우저에서 받아서 출력한다.
 */
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`
        <!DOTTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Todo List</title>
        </head>
        <body>
            <div id="app">
                <ul>
                    <li>SSR이 뭔데?</li>
                    <li>CSR은 뭔데?</li>
                    <li>이게 왜 필요한데?</li>
                    <li>MVVM은 또 뭐야?</li>
                    <li>공부해야 할게 왜이렇게 많아?</li>
                </ul>
            </div>
        </body>
        </html>
    `);
});

app.listen(8000, () => console.log("listen to http://localhost:8000"));
