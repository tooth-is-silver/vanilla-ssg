/**
 * 엘리먼트로 생성하는 부분을 따로 재사용될 수 있도록 분리 (props를 받는 컴포넌트화)
 */
export const TodoItem = (item) => `<li>${item}</li>`;
export const TodoList = (items) => `<ul>${items.map(TodoItem).join("")}</ul>`;
export const Button = ({ id, text }) => `<button id="${id}">${text}</button>`;

export const App = (todoItems) => `
    ${Button({ id: "add", text: "할일 추가" })}
    ${Button({ id: "delete", text: "할일 삭제" })}
    ${TodoList(todoItems)}
`;
