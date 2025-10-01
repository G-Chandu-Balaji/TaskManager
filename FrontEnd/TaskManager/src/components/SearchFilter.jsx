import React from "react";

function SearchFilter({ search, setSearch, filter, setFilter }) {
  return (
    <div className="flex gap-4 mb-4">
      <input
        type="text"
        placeholder="Search tasks..."
        className="flex-1 px-4 py-2 border rounded-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        className="px-4 py-2 border rounded-lg"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
}

export default SearchFilter;
