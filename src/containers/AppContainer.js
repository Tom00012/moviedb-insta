import React from "react";
import axios from 'axios';

// component file
//import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import MovieDetail from '../components/MovieDetail';
import VideoContainer from './VideoContainer';

export default class TodoContainer extends React.Component {
	state = {
		movies: [],
		currentMovie: []
	};

	componentDidMount = () => {
		this.initMovie(null, this.props.apiInfo, this.props.apiKey);
	};

	initMovie = (currentMovie, apiInfo, apiKey) => {
		axios.get(apiInfo).then(res => {
			const movies = res.data.results;
			this.setState({ movies: movies });
			if(currentMovie === null) {
				this.setState({ currentMovie: movies[0] });
			} else {
				this.state.movies.forEach(movie => {
					if (movie.id === currentMovie) {
						this.setState({ currentMovie: movie });
					}
				});
			}
			if(currentMovie !== null) {
				axios.get("https://api.themoviedb.org/3/movie/" + currentMovie.id + "/videos?api_key=" + apiKey + "&language=fr-FR").then(res => {
					if (res.data.results[0] !== undefined) {
						currentMovie["video_link"] = res.data.results[0].key;
					} else {
						currentMovie["video_link"] = "";
					}
					this.setState({ currentMovie: currentMovie });
					//console.log(currentMovie);
				});
			}
		});
	};

	handleChange = (movie) => {
		this.initMovie(movie, this.props.apiInfo, this.props.apiKey);
	};

	/*searchVideoItem = (title) => {
		const newTodo = { id: uuidv4(), title: title, completed: false};
		this.setState({ todos: [...this.state.todos, newTodo]});
	};*/

//<SearchBar searchVideoProps={this.searchVideoItem} />

	render = () => {
		return (
			<React.Fragment>
				<div className="row">
					<div className="col-md-8">
						<VideoContainer movie={this.state.currentMovie} />
						<MovieDetail movie={this.state.currentMovie} />
					</div>
					<div className="col-md-4">
						<div className="list-container">
							<ul className="list-group">
								<MovieList movies={this.state.movies} handleChangeProps={this.handleChange} />
							</ul>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}