import React from 'react';
import ReactDOM from 'react-dom';
import {Shape} from './components/Shape';

var tasks = localStorage.getItem('storedTasks');
var taskList = ["demo 1"];
if(tasks)
{
	taskList = JSON.parse(tasks);
}
ReactDOM.render(

	<Shape name="circle" bg="red"/> ,
	document.getElementById('firstapp')

	);