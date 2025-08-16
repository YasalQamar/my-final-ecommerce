import { Link, useLocation } from 'react-router-dom';

function Navbar({ cartCount }) {
  const location = useLocation();

  return (
    
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <h1 className="text-2xl font-bold">Talha Wood Doors & Hardware</h1>
        <ul className="flex gap-6 max-sm:flex-col max-sm:mt-2">
          {['Home', 'Services', 'Contact', 'Products'].map(page => (
            <li key={page}>
              <Link
                to={`/${page.toLowerCase()}`}
                className={`hover:text-yellow-400 ${location.pathname === `/${page.toLowerCase()}` || (page === 'Home' && location.pathname === '/') ? 'text-yellow-400' : ''}`}
              >
                {page}
              </Link>
            </li>
          ))}
        </ul>
        <div className="bg-yellow-400 text-blue-900 px-2 py-1 rounded font-bold">
          🛒 Cart: <span>{cartCount}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;