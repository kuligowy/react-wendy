var React = require('react');
var AgGridReact = require("ag-grid-react").AgGridReact;
var GridButtonRenderer = require('./GridButtonRenderer'); 
import {reactCellRendererFactory} from 'ag-grid-react';
var Grid = React.createClass({

	getInitialState () {
		return {
				quickFilterText: null,
				showGrid: true,
				showToolPanel: false,
				columnDefs: [
					{headerName: '#', field: 'id',checkboxSelection: true},
					{headerName: 'Employee', field:'name'}
				],
				icons: {
					columnRemoveFromGroup: '<i class="glyphicon  glyphicon-remove"/>',
					filter: '<i class="glyphicon glyphicon-filter"/>',
					sortAscending: '<i class="glyphicon  glyphicon-arrow-down"/>',
					sortDescending: '<i class="glyphicon  glyphicon-arrow-up"/>',
					groupExpanded: '<i class="glyphicon  glyphicon-minus"/>',
					groupContracted: '<i class="glyphicon  glyphicon-plus"/>',
					columnGroupOpened: '<i class="glyphicon  glyphicon-minus"/>',
					columnGroupClosed: '<i class="glyphicon  glyphicon-plus"/>'
				} 

			};
	},
 
	onGridReady(params) {
		/*
		var self = this;
		this.api = params.api;

		var dataSource = {
				pageSize: Number(5), // changing to number, as scope keeps it as a string
				getRows: function (params) {
					console.log('asking for ' + params.startRow + ' to ' + params.endRow);
					setTimeout( function() {
						var rowsThisPage = self.params.loadData(params.startRow, params.endRow);
					var lastRow = -1;
					if (allOfTheData.length <= params.endRow) {
						lastRow = allOfTheData.length;
					}
							console.log(params);
							params.successCallback(rowsThisPage, lastRow);
						}, 500);
				}
			};
		params.api.setDatasource(dataSource);
		*/
	},

	render(){
 		return (
				
				<AgGridReact
					// listen for events with React callbacks
					onRowSelected={this.props.onRowSelected}
					//onGridReady={this.onGridReady}
					datasource = {this.props.datasource}
					//onCellClicked={this.onCellClicked.bind(this)}

					// binding to properties within React State or Props
					showToolPanel={this.state.showToolPanel}
					quickFilterText={this.state.quickFilterText}
					rowModelType='pagination'
					icons={this.state.icons}
					//debug='true'

					// column definitions and row data are immutable, the grid
					// will update when these lists change
					columnDefs={this.state.columnDefs}
					//rowData={this.props.documents}

					// or provide props the old way with no binding
					rowSelection="multiple"
					enableSorting="true"
					enableFilter="true"
					rowHeight="25"
				/>
	 
			)
	}
});

module.exports = Grid