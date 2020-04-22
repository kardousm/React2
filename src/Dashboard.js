import MovieCard from "./MovieCard";
import React, { Component } from 'react';

class Dashboard extends Component {
	render() {
    	const { profiles, movies, users, userByMovie } = this.props;
		const movieCards = Object.keys(movies).map(id => (
          <MovieCard
          	id = {id}
            users = {users}
  			usersWhoLikedMovie = {userByMovie}
			movieInfo = {movies[id]}
          />
        
        )
        
        );
    
    	return (
          <ul>{movieCards}</ul>
        );
    }




}

export default Dashboard;