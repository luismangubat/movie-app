import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState} from 'react'
import styles from '../styles/Home.module.css'
import  SearchBar  from '../components/searchBar';
import { mockResponse } from '../mocks/response'
import Card from '../components/card'

const Home = () => {
  const [movies, setMovies] = useState(mockResponse)
  const [nominations, setNominations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearchQuery, setActiveSearchQuery] = useState("");
  const [complete, setComplete] = useState(false);
  const [bannerText, setBannerText] = useState("");

  const clearSearch = () => {
    setSearchResults([]);
    setActiveSearchQuery("");
  };

  const completeSearch = async () => {
    if (searchQuery === "") {
      clearSearch();
      return;
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <h1>The Shoppies</h1>
        {/* <SearchBar  input={searchTerm} setInput={setSearchTerm}/> */}
        <input type="search" onChange={(e: any) => console.log(setSearchQuery(e))}></input>
        {console.log(searchQuery)}
        <button
          aria-label="clear nominations"
          onClick={() => completeSearch()}
          id="search-button"
        ></button>
        <div className="movie-container">
          {movies.Search.map((movie) => <Card key={movie.imdbID} {...movie}/>)}
        </div>
      </Head>
    </div>
  )
}

export default Home;
