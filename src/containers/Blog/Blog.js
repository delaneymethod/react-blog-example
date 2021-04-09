import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
import PageNotFound from '../PageNotFound/PageNotFound';

import './Blog.css';

const AsyncNewPost = asyncComponent(() => {
	return import('./NewPost/NewPost');
});

class Blog extends Component {
	render() {
		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							<li>
								<NavLink
									exact
									to="/posts/"
									activeClassName="my-active"
									activeStyle={{
										color: '#fa923f',
										textDecoration: 'underline'
									}}
								>
									Posts
								</NavLink>
							</li>
							<li>
								<NavLink to={{ pathname: '/new-post' }}>New Post</NavLink>
							</li>
						</ul>
					</nav>
				</header>
				<Switch>
					<Route path="/new-post" component={AsyncNewPost}/>
					<Route path="/posts" component={Posts}/>
					<Route component={PageNotFound}/>
				</Switch>
			</div>
		);
	};
}

export default Blog;
