var React = require('react');
var StepMenu = require('./StepMenu');

var StepMenuWrapper = React.createClass({


	
	render(){

		var self = this;
		//console.log('wrapper menu: %s',this.props.menu);
		//console.log(self.props);
		var menu = this.props.menu.map(function(l,idx){
			//console.log(self.props);
			return <StepMenu key={idx} menu={l} clickHandler={self.props.clickHandler} selectedStep={self.props.selectedStep}/>
		});

		if(!menu.length){
			return null;
		}

		return (
		<div>
			<div className="step-menu-wrapper">
			{menu}
			</div>
			</div>
		)

	}

});

module.exports = StepMenuWrapper;