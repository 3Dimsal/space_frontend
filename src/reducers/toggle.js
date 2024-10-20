const toggle =  (state = false, action) => {
  switch (action.type) {
    case 'SHOW':
      return action.payload;
    default:
      return state;
  }
};

export default toggle;