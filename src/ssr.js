import { TodoList } from "./components.js";
/**
 * 서버에 독립적이지만 html문자열을 만드는 역할을 가진 코드
 * ssr의 성질을 가진다
 */
export const generateHTML = (totoItems) => `
    <!DOTTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Todo List</title>
    </head>
    <body>
        <div id="app">
            ${TodoList(totoItems)}
        </div>
    </body>
    </html>
`;
