import React from 'react';


class Dialog extends React.Component {
	constructor(props) {
		super(props);

	}
	render() {
		console.log(313123);
		if (this.props.showdialog) {
			return (
				<div>Hey!Thanks for your Vote</div>

			);
		}
		else {
			return (
				<div></div>);

			

		}



	}
}
	
	

export default Dialog;