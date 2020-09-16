import React, { Component } from "react";
import '../css/Movie.css';

class Movie extends Component {
    render() {
        console.log(this);
        return (
            <div>
                <MoviePoster />
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

class MoviePoster extends Component {
    render(){
        return(
          <img src="https://cache.wjthinkbig.com/WEB_RESOURCE/WJBOOKCLUB/m/images/product/new/h3_subject.png" />
        );
    }
}

export default Movie;
