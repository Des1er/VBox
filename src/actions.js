
export const UPDATE_ITEM_NUMBER = 'UPDATE_ITEM_NUMBER';
export const CALCULATE_TOTALS = 'CALCULATE_TOTALS';

export const updateItemNumber = (categoryIndex, itemIndex, newNumber) => ({
  type: UPDATE_ITEM_NUMBER,
  payload: { categoryIndex, itemIndex, newNumber }
});

export const calculateTotals = (bill, num ) => ({
  type: CALCULATE_TOTALS,
  payload: {bill, num}
});
