var React = require('react');

 class DocumentMenu extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
    }

    render() {
        var document = this.props.document ? this.props.document : '';

        return ( 
		<div className="document-menu out">
			<span>{document.name}</span>
		</div>
        );
    }
}
module.exports = DocumentMenu;