import { SAVE_COMMENTS } from "./types";
import { saveComment } from "./index";

describe('saveComment', () => {
    it('has the correct type', () => {
        const action = saveComment();

        expect(action.type).toEqual(SAVE_COMMENTS);
    });

    it('has the correct payload', () => {
        const comment = 'New Comment';
        const action = saveComment(comment);

        expect(action.payload).toEqual(comment);
    });
});