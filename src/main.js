function main() {
  document.querySelector("#add").onclick = () => {
    fetch("/api/todo-items", {
      method: "post",
      body: JSON.stringify({ content: "추가된 아이템" }), // 여기에 아이템 이름 추가
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => location.reload());
  };
  document.querySelector("#delete").onclick = () => {
    fetch("/api/todo-items/0", {
      // 여기에 id를 받도록 수정
      method: "delete",
    }).then(() => location.reload());
  };
}

main();
