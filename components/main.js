import React from 'react';
import {AddNewTask} from './AddNewTask';
import {TodoAppList} from './TodoAppList';
export class Todo extends React.Component {
		constructor(props)
	{
		super();
		this.state = {tasks : props.tasks};
		this.updateList = this.updateList.bind(this);
		this.removeTask = this.removeTask.bind(this);
	}

	updateList(text)
	{
		var updatedTasks = this.state.tasks;
		updatedTasks.unshift(text);
		this.setState({
			tasks : updatedTasks
		});
		this.updateLocalStorage(updatedTasks);
	}

	removeTask(text)
	{
		var updatedTasks = this.state.tasks;
		 this.setState({
		 	tasks: updatedTasks.filter(function(tasks) 
		 								{ 
        								return tasks !== text 
        								})
    	});
		this.updateLocalStorage(updatedTasks);
	}

	updateLocalStorage(updatedTasks)
	{
		localStorage.setItem('storedTasks',JSON.stringify(updatedTasks));
	}

	render()
	{
		return (
			<div>
				<h1> Todo Task </h1>
				<AddNewTask updateList={this.updateList}/>
				<TodoAppList tasks = {this.state.tasks} remove={this.removeTask}/>
			</div>
		);
	}
}