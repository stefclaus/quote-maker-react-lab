export default (state = [], action) => {

  let index;
  let quote;

  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote);

    case 'REMOVE_QUOTE':
    return state.filter(quote => quote.id !== action.quoteId);

//    case 'UPVOTE_QUOTE'
  //  return

//    case 'DOWNVOTE_QUOTE'
//    return

      default:
        return state;
  }
}



//[
//  {
  //  id: '23423424242-42342423424242-fafdb',
  //  content: 'One Awesome Quote',
  //  author: 'Luke Ghenco'
//  }
// ]
