

import { useState } from "react";
import { cioc } from "./cioc";

interface Props {
  onSearch: (countryCode: string) => void;
}

export const Search: React.FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const handleSearch = () => {
    const countryName = searchTerm.trim().toLowerCase();
    const foundCountryCode = Object.entries(cioc).find(
      ([, name]) => name.toLowerCase().includes(countryName)
    )?.[0];

    if (foundCountryCode) {
      setSearchResult(foundCountryCode);
    } else {
      setSearchResult("null");
    }

    onSearch(foundCountryCode || "");
  };

  const foundCountryName = searchResult ? cioc[searchResult] : null;

  return (
    <div>
      <h3>Search for a Country</h3>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter country name..."
      />
      <button onClick={handleSearch}>Search</button>
      {searchResult ? (
        <p>
          Country Code (cioc) for {foundCountryName}: {searchResult}
        </p>
      ) : (
        <p>No matching country found.</p>
      )}
    </div>
  );
};
