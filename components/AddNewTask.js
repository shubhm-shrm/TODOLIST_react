import React from 'react';

export class AddNewTask extends React.Component {
		constructor(props)
	{
		super();
		this.submit = this.submit.bind(this);
	}

	submit(event)
	{	
		event.preventDefault();
		var text = event.target.querySelector('input').value;
		event.target.querySelector('input').value = '';
		this.props.updateList(text);
	}
	render()
	{
		return (
			<form onSubmit={this.submit}>
				<input type="text" />
			</form>
		);
	}
}