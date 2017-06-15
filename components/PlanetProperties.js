import React from 'react';

export class PlanetProperties extends React.Component {
		constructor(props)
	{
		super();
	}

	render()
	{
		return <button onClick={this.props.triggerParentUpdate}> Update Parent </button>
	}
}