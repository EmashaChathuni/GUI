import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!query.trim()) {
      setError("Please enter a place name.");
      return;
    }

    try {
      const response = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`
      );

      if (!response.ok) {
        throw new Error("No data found.");
      }

      const data = await response.json();
      setResult({
        title: data.title,
        description: data.extract,
        image: data.thumbnail?.source || "",
        url: data.content_urls.desktop.page,
      });
    } catch (err) {
      setError("No information found for this place.");
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search for places..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {result && (
        <div className="result-container">
          <h2>{result.title}</h2>
          <p>{result.description}</p>
          {result.image && <img src={result.image} alt={result.title} className="result-image" />}
          <a href={result.url} target="_blank" rel="noopener noreferrer" className="read-more">
            Read more on Wikipedia
          </a>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
