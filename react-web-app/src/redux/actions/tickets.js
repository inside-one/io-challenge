
export function fetchTickets() {
  return async (dispatch, getState) => {
    dispatch({ type: 'SET_TICKETS', payload: [] });
  }
}
