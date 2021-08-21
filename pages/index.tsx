import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState} from 'react'
import styles from '../styles/Home.module.css'
import  SearchBar  from '../components/searchBar';
import { mockResponse } from '../mocks/response'
import Card from '../components/card'

const Home: NextPage = () => {
  const [movies, setMovies] = useState(mockResponse)
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className={styles.container}>
      <Head>
        <h1>The Shoppies</h1>
        <SearchBar></SearchBar>
        <input ></input>
        <div className="movie-container">
          {movies.Search.map((movie) => <Card {...movie}/>)}
        </div>
      </Head>
    </div>
  )
}

export default Home
