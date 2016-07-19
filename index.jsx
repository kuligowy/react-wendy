require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
require("./assets/css/styles.css")
//require("./node_modules/ag-grid/dist/styles/ag-grid.css")
//require("./node_modules/ag-grid/dist/styles/theme-fresh.css");
import './node_modules/ag-grid/dist/styles/ag-grid.css';
import './node_modules/ag-grid/dist/styles/theme-blue.css';
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
var menu = [{
					position: 1,
					title: "USER",
					steps: [{
						name: 'Open',
						value: 10
					},{
						name: 'Closed',
						value: 13
					},
					{
						name: 'Printed',
						value: 13
					}]
				},
				{
					position: 2,
					title: "SUPERVISOR",
					steps: [{
						name: 'Open',
						value: 10
					},{
						name: 'Closed',
						value: 13
					}]
				}
			];
			
ReactDOM.render(
  <App menu={menu}/>,
  document.getElementById('main')
);
