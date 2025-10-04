import { App } from "./components.js";
/**
 * 서버에 독립적이지만 html문자열을 만드는 역할을 가진 코드
 * ssr의 성질을 가진다
 */
export const generateHTML = (model) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Todo List</title>
    </head>
    <body>
        <div id="app">
            ${App(model.todoItems)}
        </div>
    </body>
    <script>window.__INITIAL_MODEL__ = ${JSON.stringify({
      todoItems: model.todoItems,
    })}</script>
    <script src='./src/main.js' type='module'></script>
    </html>
`;

// SSR + CSR
// window.__INITIAL_MODEL__을 사용하여 데이터를 업데이트 하는 이유
// main.js를 이용해서 Render csr을 업데이트하게 되면
// 브라우저 메모리에만 업데이트된 데이터가 저장되므로 ssr에도 업데이트가 필요하다.
// generateHTML에서 ssr방식으로 데이터를 받아서 서버사이드에서 html업데이트시 데이터를 가져온다.
// 데이터를 가져올 때 가져온 데이터를 기준으로 브라우저에서 접근할 수 있도록 window.__INITIAL_MODEL__에 데이터를 적재해준다.
// main.js에서 메인 랜더링시 서버와 동일한 초기 데이터를 가져올 때 window.__INITIAL_MODEL__에 저장되어있는 데이터를 가져온다.
// 초기에만 데이터를 가져오고 그 외에는 메모리에 적재하여 데이터를 업데이트한다.
