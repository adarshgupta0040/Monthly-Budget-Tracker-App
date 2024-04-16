const initialState = {
    budgetEntries: [],
  };
  
  const budgetReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_BUDGET_ENTRY':
        return {
          ...state,
          budgetEntries: [...state.budgetEntries, action.payload],
          
        };

      default:
        return state;
        
    }
  };
  
  export default budgetReducer;