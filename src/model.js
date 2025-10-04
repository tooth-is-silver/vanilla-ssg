/**
 * 서버에서 전달하는 데이터
 */
export const model = {
  todoItems: [
    "SSR은 뭔데?",
    "CSR은 뭔데?",
    "이게 왜 필요한데?",
    "MVVM은 또 뭐야?",
    "공부해야 할게 왜이렇게 많아?",
  ],

  // add todo
  addTodoItem(item) {
    this.todoItems.push(item);
  },

  // delete todo
  deleteTodoItem(index) {
    this.todoItems.splice(index, 1);
  },

  // 초기 데이터를 가져와서 교체
  init(totoItems) {
    this.todoItems = totoItems;
  },
};
