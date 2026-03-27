function Filter({ setCategory, setSearch }) {
  return (
    <div className="filters">

      {/* Category Filter */}
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
      </select>

      {/* Search */}
      <input
        type="text"
        placeholder="Search product..."
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
}

export default Filter;