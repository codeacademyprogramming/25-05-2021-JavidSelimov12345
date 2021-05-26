export const addToCart = (pizza) => {
	return { type: 'ADD_TO_CART', payload: pizza };
};

export function loadAction(data) {
	return {
		type: 'GET_DATA',
		payload: data,
	};
}

export function loadAsyncAction() {
	return function (dispatch) {
		fetch('https://isko88.github.io/apipizza.json')
			.then((resp) => resp.json())
			.then((data) => {
				dispatch({
					type: 'GET_DATA',
					payload: data,
				});
			});
	};
}
