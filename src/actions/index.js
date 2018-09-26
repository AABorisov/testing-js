import { SAVE_COMMENTS, FETCH_COMMENTS } from './types';
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