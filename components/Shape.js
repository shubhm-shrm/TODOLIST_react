import React from 'react';

export class Shape extends React.Component {
		constructor(props)
	{
		super();
	}

	render()
	{
		var borderRadius = "0 0";
		if(this.props.name=="circle")
		{
			borderRadius = "50% 50%";
		}
		var styles = {
			width : "100px",
			height : "100px",
			borderRadius : borderRadius,
			background :this.props.bg
		}
		return (
			<div style={styles}>
				
			</div>
		);
	}
}