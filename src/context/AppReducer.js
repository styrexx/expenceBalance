export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANS":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload,
        ),
      };
    case "ADD_TRANS":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
