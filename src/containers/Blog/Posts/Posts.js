import React, { Component } from 'react';
import { Route } from 'react-router';

import blogAxiosInstance from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

import './Posts.css';

class Posts extends Component {
	state = {
		posts: [],
		error: false
	};

	componentDidMount = () => {
		blogAxiosInstance
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
			.catch(() => {
				this.setState({ error: true });
			});
	};

	fullPost = id => {
		this.props.history.push('/posts/' + id);
	};

	render() {
		let posts = <p style={{ textAlign: 'center' }}>Something with wrong!</p>;

		if (!this.state.error) {
			posts = this.state.posts.map(post => {
				return (
					/*<Link key={post.id} to={'/posts/' + post.id}>*/
					<Post
						key={post.id}
						title={post.title}
						author={post.author}
						onClick={() => this.fullPost(post.id)}
					/>
					/*</Link>*/
				);
			});
		}

		return (
			<div>
				<section className="Posts">
					{posts}
				</section>
				<Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
			</div>
		);
	};
}

export default Posts;
