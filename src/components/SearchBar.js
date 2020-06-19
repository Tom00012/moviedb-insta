import React, {Component} from "react";

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {searchtext: "", placeholder: "Rechercher un film"};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value });
	}
	handleSubmit = (event) => {
		/*this.props.addTodoProps(this.state.title);
		this.setState({ title: "" });*/
		event.preventDefault();
	}
	render = () => {
		return (
			<React.Fragment>
				<form className="form-inline d-flex justify-content-center md-form form-sm">
					<input className="form-control form-control-sm mr-3 w-75" name="searchtext" type="text" onChange={this.handleChange} placeholder={this.state.placeholder} aria-label="Search" />
					<i className="fas fa-search" aria-hidden="true"></i>
				</form>
			</React.Fragment>
		);
	}
}