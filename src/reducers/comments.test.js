import commentsReducer from './comments';
import { SAVE_COMMENTS} from "../actions/types";

const initialState = [];

it('handle action of type SAVE_COMMENTS', () => {
   const action = {
       type : SAVE_COMMENTS,
       payload: 'New Comment'
   };

   const newState = commentsReducer(initialState, action);

   expect(newState).toEqual([action.payload]);
});

it('handles action with unknown type', () => {
    const newState = commentsReducer(initialState, {
        type: "unknown"
    });
    expect(newState).toEqual(initialState);
});