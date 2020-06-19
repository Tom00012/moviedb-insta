import React from "react";

export default class VideoContainer extends React.Component {

	render = () => {
		//console.log(this.props.movie);
		return (
			<React.Fragment>
				<iframe title="trailer" width="720" height="480" src={"https://www.youtube.com/embed/" + this.props.movie.video_link} ></iframe>
			</React.Fragment>
		);
	}
}