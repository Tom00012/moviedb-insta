import React from "react";

export default class MovieDetail extends React.Component {
	render = () => {
		return (
			<React.Fragment>
				<h3>Nom du film</h3>
				<p>{this.props.movie.title}</p>
				<h3>Sortie</h3>
				<p>{new Date(this.props.movie.release_date).toLocaleDateString('fr-FR', {year: 'numeric', month: 'long', day: 'numeric' })}</p>
				<h3>Synopsys</h3>
				<p>{this.props.movie.overview}</p>
			</React.Fragment>
		);
	}
}