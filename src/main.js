import { App } from "./components.js";
import { model } from "./model.js";

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
  $app.querySelector("#add").onclick = () => {
    model.addTodoItem("새로운 아이템");
    render();
  };
  $app.querySelector("#delete").onclick = () => {
    model.deleteTodoItem(0);
    render();
  };
}

function main() {
  render();
}

main();
