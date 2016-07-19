var React = require('react');
var StepMenuItem = require('./StepMenuItem');

var StepMenu = React.createClass({

	render(){

		var self = this;
		//console.log(this.state);
		var menus = this.props.menu.steps.map(function(l,idx){
			var active = (l == self.props.selectedStep);
			return <StepMenuItem key={idx} name={l.name} value={l.value} 
					active={active}  clickHandler={self.props.clickHandler.bind(null,l)} />
		});

		if(!menus.length){
			return null;
		}
		//console.log((this.props.menu.position % 2) == 0 ? ' odd' : ' even');
		var stepMenuClassName = "step-menu";

			if(this.props.menu.position){
				stepMenuClassName += (this.props.menu.position % 2) == 0 ? ' odd' : ' even';
		}
			
		return (
	
		
			<div className={stepMenuClassName}>
				{this.props.menu.title}
				<div>
					{menus}
				</div>
			</div>
		)

	}

});

module.exports = StepMenu;