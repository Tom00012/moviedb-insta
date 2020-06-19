import React from "react";
// component file
import MovieItem from './MovieItem';

export default class MovieList extends React.Component {
	render = () => {
		return (
			<React.Fragment>
				{this.props.movies.map(movie => <MovieItem key={movie.id} movie={movie} handleChangeProps={this.props.handleChangeProps} />)}
			</React.Fragment>
		);
	}
}