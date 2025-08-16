function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <aside className="w-1/4 max-lg:w-full bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold text-blue-900 mb-4">Categories</h2>
      <ul>
        {['All', 'Bedroom Doors', 'Bathroom Doors', 'Main Entrance', 'Sliding', 'Garage', 'Wardrobe'].map(cat => (
          <li
            key={cat}
            className={`py-2 cursor-pointer hover:text-yellow-400 ${selectedCategory === (cat === 'All' ? 'all' : cat.toLowerCase().replace(' doors', '')) ? 'text-yellow-400 font-bold bg-blue-50 rounded p-2' : ''}`}
            onClick={() => setSelectedCategory(cat === 'All' ? 'all' : cat.toLowerCase().replace(' doors', ''))}
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;