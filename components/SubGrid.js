var React = require('react');
var AgGridReact = require("ag-grid-react").AgGridReact;

var SubGrid = React.createClass({

	getInitialState () {
		return {
				quickFilterText: null,
				showGrid: true,
				showToolPanel: false,
				columnDefs: [
					{headerName: '#parent', field: 'parent_id',checkboxSelection: true},
					{headerName: 'info', field:'info'}
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
	/*
	onRowSelected(event) {
		if(event.node.isSelected())
			console.log(event.node.data);
    },
	*/
	
	onCellClicked(event) {
        console.log('onCellClicked: ' + event.data.name + ', col ' + event.colIndex);
    },
	
	render(){
 		return (
 
				<AgGridReact
					// listen for events with React callbacks
					onRowSelected={this.props.onRowSelected}
					//onCellClicked={this.onCellClicked.bind(this)}

					// binding to properties within React State or Props
					showToolPanel={this.state.showToolPanel}
					quickFilterText={this.state.quickFilterText}
			
					icons={this.state.icons}

					// column definitions and row data are immutable, the grid
					// will update when these lists change
					columnDefs={this.state.columnDefs}
					rowData={this.props.selectedDocumentPos}

					// or provide props the old way with no binding
					rowSelection="multiple"
					enableSorting="true"
					enableFilter="true"
					rowHeight="22"
				/>
	 
			)
	}
});

module.exports = SubGrid