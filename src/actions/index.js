var nextTodoId = 0;

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    nextTodoId ++,
    text
});