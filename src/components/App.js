import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

export default () => {
    return (
        <div>
            Im the app component.
            <CommentBox />
            <CommentList />
        </div>
    );
};