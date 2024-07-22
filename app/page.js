'use client'
import { useState } from 'react';
import { search } from './api';
import SearchBar from './components/searchBar';
import ArticleList from './components/articleList';
import '../styles/App.css';
import logo from './wikipedia-logo.png';

const App = () => {
  const [articles, setArticles] = useState([]);

  const handleSearch = async (searchTerm) => {
    const results = await search(searchTerm);
    setArticles(results);
  };

  return (
    <>
      <header>
        <img src={logo} alt="wikipedia" />
        <h1>Wikipedia Search</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <main id="searchResult">
        <ArticleList articles={articles} />
      </main>
    </>
  );
};

export default App;