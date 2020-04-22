import React, { Component } from "react";

class MovieCard extends Component {
  render() {
    /*
    Destructuring via ES6. We're getting the profiles, users, and movies properties
    off of the pros passed into this presentational component. If you need a refresher on this syntax, check
    out this course: https://www.udacity.com/course/es6-javascript-improved--ud356
    */
    const { id, users, usersWhoLikedMovie, movieInfo } = this.props;
    
    console.log(usersWhoLikedMovie)
    console.log(id)
    console.log(id in usersWhoLikedMovie)
    
    return (
      <li key={movieInfo.id}>
        <h2>{movieInfo.name}</h2>
        <h3>Liked By:</h3>
		
		{id in usersWhoLikedMovie ? (<ul>
         
         {usersWhoLikedMovie[id].map(userId=> (
         
         <li key={userId}>
         	<p>{users[userId].name}</p>
         </li>
         
         )
                                    
	)}
         
         </ul>) 
         
         :(<p>None of the current users liked this movie</p>)}
	   </li>

    );
  }
}

export default MovieCard;