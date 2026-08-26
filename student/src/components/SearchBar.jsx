function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search by name, course or admission number..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default SearchBar