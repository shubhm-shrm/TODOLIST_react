import React from 'react';

export class TodoAppList extends React.Component {
		constructor(props)
	{
		super();
		this.remove = this.remove.bind(this);
	}

	remove(event)
	{
		var value = event.target.parentNode.querySelector('span').innerText;
		this.props.remove(value);
	}
	render()
	{
		let items = this.props.tasks.map((element,i)=> {
				return <li key={i}>
							<span>{element}</span>
							<button onClick={this.remove}>X</button>
						</li>});
		return (
			<ul>
				{items}
			</ul>
		);
	}
}