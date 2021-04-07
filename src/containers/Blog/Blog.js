import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';

import './Blog.css';

class Blog extends Component {
	state = {
		posts: [],
		fullPostId: null,
		error: false
	};

	componentDidMount = () => {
		axios
			.get('/posts')
			.then(response => {
				const posts = response.data.slice(0, 4);
				const updatedPosts = posts.map(post => {
					return {
						...post,
						author: 'Sean'
					};
				});

				this.setState({ posts: updatedPosts });
			})
			.catch(error => {
				console.error(error);

				this.setState({ error: true });
			});
	};

	fullPost = id => {
		this.setState({ fullPostId: id });
	};

	render() {
		let posts = <p style={{ textAlign: 'center' }}>Something with wrong!</p>;

		if (!this.state.error) {
			posts = this.state.posts.map(post => {
				return (
					<Post
						key={post.id}
						title={post.title}
						author={post.author}
						onClick={() => this.fullPost(post.id)}
					/>
				);
			});
		}

		return (
			<div>
				<section className="Posts">
					{posts}
				</section>
				<section>
					<FullPost id={this.state.fullPostId}/>
				</section>
				<section>
					<NewPost/>
				</section>
			</div>
		);
	};
}

export default Blog;
