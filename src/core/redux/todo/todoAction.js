export const fetchTodoRequest = () => ({
	type: "Request",
});

export const fetchTodoSuccess = (todos) => ({
	type: "Todo Success",
	payload: todos,
});

export const fetchTodosFail = (error) => ({
	type: "Fetch Todo Fail",
	payload: error,
});

export const fetchTodos = () => {
	return async (dispatch) => {
		dispatch(fetchTodoRequest());
		try {
			const response = await fetch("https://jsonplaceholder.typicode.com/todos");
			const data = await response.json();
			dispatch(fetchTodoSuccess(data));
		} catch (error) {
			dispatch(fetchTodosFail(error.toString()));
		}
	};
};

export const addTodo = (todo) => ({
	type: "ADD_TODO",
	payload: todo,
});

// actions/todoActions.js
export const editTodo = (index, newTitle) => ({
	type: 'EDIT_TODO',
	payload: { index, newTitle },
});


export const removeTodo = (index) => ({
	type: "REMOVE_TODO",
	payload: index,
});
