import React, { Component } from 'react';

import './Post.css';

class Post extends Component {
	render() {
		return (
			<article
				className="Post"
				onClick={this.props.onClick}
			>
				<h1>{this.props.title}</h1>
				<div className="Info">
					<div className="Author">{this.props.author}</div>
				</div>
			</article>
		);
	};
}

export default Post;
