import React, { Component } from 'react';
import * as firebase from 'firebase';
// organisations.js

import EditableOrgList from './editableOrgList'

export default class Organisations extends Component {
	constructor(){
		super();
		this.state = {
			orgs: ''
		};
	}
	componentDidMount(){
		const rootRef = firebase.database().ref();
		const organisations = rootRef.child('organisations');

		organisations.on('value', snap => {
			this.setState({
				orgs: snap.val()
			});
			console.log(snap.val());
		});

	}
	// for (let value of iterable) {
	//   value += 1;
	//   console.log(value);
	// }
	render () {
		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<h1>Organisations</h1>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<div className="table-responsive">
							<table className="table table-striped">
								<thead>
									<tr>
										<td>ID</td>
										<td>Name</td>
										<td>Description</td>
									</tr>
									<EditableOrgList />					
								</thead>
							</table>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

