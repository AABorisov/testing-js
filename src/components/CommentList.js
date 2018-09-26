import React, {Component} from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
    renderComments() {
        return this.props.comments.map((comment, index) => {
            return <li key={index}>{comment}</li>;
        });
    }
    render() {
        return (
                <ul>
                    {this.renderComments()}
                </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments
    };
}

export default connect(mapStateToProps)(CommentList)