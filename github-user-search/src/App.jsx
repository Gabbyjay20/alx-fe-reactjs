import { useState } from "react";
import Search from "./components/Search.js";
import Results from "./components/Results";
import { searchUsers } from "./services/githubService";

export default function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (criteria) => {
    const results = await searchUsers(criteria);
    setUsers(results);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      <Results users={users} />
    </div>
  );
}
