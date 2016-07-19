var React = require('react');
var Grid = require('./Grid');
var SubGrid = require('./SubGrid');
var GridWrapper = React.createClass({
	
	render(){

		var self = this;
		
		return (
			<div className="grid-wrapper out ag-blue">
				<div className="master-grid"> 
					<Grid selectedStep={this.props.selectedStep} documents={this.props.documents} onRowSelected={this.props.onRowSelected}
						datasource={this.props.datasource}/>
				</div>
				<div className="slave-grid">
					<SubGrid selectedDocumentPos={this.props.selectedDocumentPos} />
				</div>
			</div>
		)

	}

});
//
module.exports = GridWrapper;
  