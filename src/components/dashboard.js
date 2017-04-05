import React, { Component } from 'react'
import * as firebase from 'firebase';

import Card from './card'

export default class Dashboard extends Component {
	constructor(){
		super();
		this.state = {
			speed: 6
		};
	}
	componentDidMount(){
    const rootRef = firebase.database().ref();
    const speedRef = rootRef.child('speed');
    console.log(speedRef.value);
    speedRef.on('value', snap => {
      // console.log(snap.val());
      this.setState({
        speed: snap.val()
      });
    });
  }
	render () {
		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<h1>Dashboard</h1>
						<p>Speed: {this.state.speed}</p>
						<div className="card-deck">
							<Card title="Organisations" imgSrc="http://placehold.it/348x196" text="Lorem ipsum dolor sit amet." link="/organisations" linkText="Edit"/>
							<Card title="Events" />
							<Card title="Users" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}