import { SAVE_COMMENTS, FETCH_COMMENTS, CHANGE_AUTH } from './types';
import axios from 'axios';

export function saveComment(comment) {
    return {
        type: SAVE_COMMENTS,
        payload: comment
    };
}

export function fetchComments() {
    const response = axios.get('https://jsonplaceholder.typicode.com/comments');

    return {
        type: FETCH_COMMENTS,
        payload: response
    }
}

export function changeAuth(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}