import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault() 
    fetch(URL.concat(`&query=${this.state.searchTerm}`))
      .then(resp => resp.json())
      .then(resp => this.setState({reviews: resp.results}))
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
        <h2>Movie Review By Search:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

