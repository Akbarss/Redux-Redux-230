const initialState = {
	loading: false,
	todos: [],
	error: null,
};

const todosReducer = (state = initialState, action) => {
	switch (action.type) {
		case "Request":
			return {
				...state,
				loading: true,
			};
		case "Todo Success":
			return {
				...state,
				todos: action.payload,
				loading: false,
			};
		case "Fetch Todo Fail":
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case "ADD_TODO":
			return {
				...state,
				todos: [...state.todos, action.payload],
			};
		case "REMOVE_TODO":
			return {
				...state,
				todos: state.todos.filter((_todo, index) => index !== action.payload),
			};
		case "EDIT_TODO":
			return {
				...state,
				todos: state.todos.map((todo, index) =>
					index === action.payload.index
						? { ...todo, title: action.payload.newTitle }
						: todo
				),
			};
		default:
			return state;
	}
};

export default todosReducer;
