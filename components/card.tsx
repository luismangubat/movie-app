import React from 'react';
import { Movie } from '../utils/interfaces';
import styles from '../styles/Home.module.css'

const MovieList = (props: Movie) => {
  return (
    <div className={styles.movieContainer}>
      <img className={styles.moviePoster}src={props.Poster}></img>
      <div>
      <div className={styles.movieTitle}>{props.Title}</div>
      <div className={styles.movieTitle}>{props.Year}</div>
      </div>
      <button className={styles.nominate}>Nominate</button>
    </div>
  )
}

export default MovieList
