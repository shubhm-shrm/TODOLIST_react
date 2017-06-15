import React from 'react';
import {PlanetProperties} from './PlanetProperties';
export class HelloPlanet extends React.Component {
	
	constructor(props)
	{
		super();
		this.state = {
			counter: 0
		};
		this.updateCounter = this.updateCounter.bind(this);

	}
	updateCounter(){
			this.setState({counter : this.state.counter + 1});
		};	
	render()
	{
		console.log(this.props);
		return <div>
					<span> {this.state.counter}</span>
					<PlanetProperties triggerParentUpdate={this.updateCounter} />
				</div>

	}
}