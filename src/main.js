import { App } from "./components.js";
import { model } from "./model.js";

async function updateTodoItems(todoItems) {
  const headers = { "Content-Type": "application/json" };
  const body = JSON.stringify({ todoItems });
  // api put으로 데이터 업데이트
  return fetch("/api/todo-items", { method: "put", headers, body }).then(
    (res) => res.json()
  );
}

async function syncServerModel() {
  // 업데이트된 새로운 데이터를 model에 초기 데이터로 적재한다.
  const newTodoItems = await updateTodoItems(model.todoItems);
  model.init({ todoItems: newTodoItems });
}

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = App(model.todoItems); // CRS로 app그려주기

  /**
   * csr인 이유?
   * 1. 따로 reload하는 부분이 없음 (새로고침 발생x)
   * 2. render를 이용해서 내부에 html객체만 다시 그림. DOM을 새로 생성
   * 3. 서버와 통신하지 않음
   *
   */
  $app.querySelector("#add").onclick = async () => {
    model.addTodoItem("새로운 아이템");
    syncServerModel().then(render); // 업데이트 후에 csr render동작
  };
  $app.querySelector("#delete").onclick = async () => {
    model.deleteTodoItem(model.todoItems.length - 1);
    syncServerModel().then(render); // 업데이트 후에 csr render동작
  };
}

function main() {
  // 서버에 전달받은 데이터를 model에 전달한다
  model.init(window.__INITIAL_MODEL__);
  render();
}

main();
