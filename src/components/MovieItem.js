import React from "react";

export default class MovieItem extends React.Component {
	render = () => {
		//console.log(this.props);
		return (
			<React.Fragment>
				<li className="list-group-item" key={this.key} onClick={() => this.props.handleChangeProps(this.props.movie)}>
					<div className="row align-items-center">
						<div className="col-md-4">
							<img className="img-thumbnail" src={"https://image.tmdb.org/t/p/w500/" + this.props.movie.poster_path} alt={this.props.movie.title}/>
						</div>
						<div className="col-md-8">
							<div className="">{this.props.movie.title + " (" + this.props.movie.release_date.substring(0,4) + ")"}</div>
						</div>
					</div>
				</li>
			</React.Fragment>
		);
	}
}