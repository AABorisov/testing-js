import React from 'react';
import { mount } from 'enzyme';
import CommentBox from "../CommentBox";

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
});

afterEach(() => {
    wrapped.unmount()
});

it('shows a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', () => {
    const mock = {
        target: {
            value: "Test comment..."
        }
    };
    beforeEach(() => {
        wrapped.find('textarea')
            .simulate('change', mock);
        wrapped.update();
    });

    it('has a text area that users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual(mock.target.value);
    });

    it('empties the text area after submitting', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});