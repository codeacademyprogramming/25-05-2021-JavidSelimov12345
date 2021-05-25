const INITIAL_STATE = {
	pizzaList: [],
	cart: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'GET_DATA':
			return { pizzaList: action.payload, cart: [] };

		case 'ADD_TO_CART':
			return { ...state, cart: [...state.cart, action.payload] };

		default:
			return state;
	}
};
