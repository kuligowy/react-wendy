var React = require('react');
//var StepMenuItem = require('./StepMenuItem');
//var moment = require('moment');

var StepMenuItem = React.createClass({


	render(){

		var cn = "step-menu-item";

		if(this.props.active){
			cn += " active-location";
		}

		return (
				<a className={cn} onClick={this.props.clickHandler} >
					<span>{this.props.name}</span>
					<span className="glyphicon glyphicon-menu-right"></span>
				</a>
				
		)

	}

});

module.exports = StepMenuItem;
