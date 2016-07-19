var React = require('react');

var StepMenuWrapper = require('./StepMenuWrapper');
var GridWrapper = require('./GridWrapper');
var DocumentMenu =require('./DocumentMenu');

var App = React.createClass({
	getInitialState(){
		return {
			selectedStep: null,
			selectedDocument: null,
			selectedDocumentPos: [],
			dataSource: {
				pageSize: 1, // changing to number, as scope keeps it as a string
				getRows: function (params) {
						var rowsThisPage = [];
						var lastRow = -1;
						params.successCallback(rowsThisPage, lastRow);
				}
			}
		}
	},

	menuStepClicked(data,event){
		this.createDatasource(data);
	},
	
	createDatasource(data){
			var dataSource = {
			pageSize: 5,
			getRows: function (params) {
				var sufix = ''
				if(data){
					sufix = data.name;
				}
				var allOfTheData = [
					{"id":1, "name": 'test '+sufix},
					{"id":2, "name": 'test 2 '+sufix},
					{"id":3, "name": 'test 3 '+sufix},
					{"id":4,  "name": 'test '+sufix},
					{"id":5,  "name": 'test 2 '+sufix},
					{"id":6,  "name": 'test 3 '+sufix},
					{"id":7,  "name": 'test '+sufix},
					{"id":8,  "name": 'test 2 '+sufix},
					{"id":9,  "name": 'test 3 '+sufix},
					{"id":10, "name": 'test'},
					{"id":11, "name": 'test 2 '+sufix},
					{"id":12, "name": 'test 3 '+sufix},
				];					
				console.log('asking for ' + params.startRow + ' to ' + params.endRow);
				setTimeout( function() {
					var rowsThisPage = allOfTheData.slice(params.startRow, params.endRow);
				var lastRow = -1;
				if (allOfTheData.length <= params.endRow) {
					lastRow = allOfTheData.length;
				}
				console.log(params);
				params.successCallback(rowsThisPage, lastRow);
			}, 500);
			}
		};
		console.log(dataSource);
		this.setState({
			selectedStep: data,
			selectedDocument: [],
			selectedDocumentPos: [],
			dataSource: dataSource
		});
	},
		
	onRowSelected(event){
		var tmp = [];
		for(var i=0;i<Math.floor((Math.random() * 10) + 1);i++){
			tmp.push({"parent_id": event.node.data.id, "info":'test info'});
		}
		if(event.node.isSelected()){
			this.setState({
				selectedDocument: event.node.data,
				selectedDocumentPos: tmp
			});
		}
		console.log(this.state);
	},

	render(){

		return (

			<div>
				<h1>Wendy 2.0</h1> 

				<StepMenuWrapper menu={this.props.menu} clickHandler={this.menuStepClicked} selectedStep={this.state.selectedStep} />
				<DocumentMenu document={this.state.selectedDocument} />
				<GridWrapper selectedStep={this.state.selectedStep} 
							 onRowSelected={this.onRowSelected} 
							 selectedDocumentPos={this.state.selectedDocumentPos}
							 datasource={this.state.dataSource}>
				</GridWrapper>			
			</div>

		);
	}

});

module.exports = App;