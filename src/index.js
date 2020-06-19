import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// component file
import AppContainer from './containers/AppContainer';

const API_KEY = "8545c11ef0123a6331b222fcdd453817";
const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=true&append_to_response=images&page=1&api_key=";

const API_INFO = API_END_POINT + POPULAR_MOVIES_URL + API_KEY;

ReactDOM.render(<AppContainer apiInfo={API_INFO} apiKey={API_KEY} />, document.getElementById("container"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();