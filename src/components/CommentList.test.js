import React from 'react';
import { mount } from 'enzyme';

import CommentList from './CommentList';
import Root from '../Root';

let wrapped;

const initialState = {
    comments: ['Comment 1', 'Comment 2']
};

beforeEach(() => {
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList/>
        </Root>
    )
});

it('creates one LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(initialState.comments.length);
});

it('text from every LI is visible', () => {
    wrapped.find('li').forEach((item, index) => {
        expect(item.render().text()).toEqual(initialState.comments[index]);
    });
});