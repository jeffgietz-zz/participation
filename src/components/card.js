import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// card.js

export default class Dashboard extends Component {
  render () {
		return (
			<div className="card">
				{this.props.imgSrc?
					<img 	className="card-img-top"
								src={this.props.imgSrc} 
								alt="temp"
					/>: ''
				}
				<div className="card-block">
					{this.props.title?<h4 className="card-title">{this.props.title}</h4> : ''}
					{this.props.text?<p className="card-text">{this.props.text}</p> : ''}
					{this.props.link ? <Link className="nav-link" to={this.props.link}>{this.props.linkText}</Link> : ''}
				</div>
			</div>
		)
	}
}