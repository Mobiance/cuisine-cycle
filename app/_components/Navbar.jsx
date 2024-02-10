import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // Close the menu when resizing to web dimensions
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const handleNavigation = (path) => {
    // Perform navigation logic here
    console.log(`Navigating to ${path}`);
  };

  return (
    <nav className="shadow-md p-4 overflow-hidden bg-slate-400">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0 flex w-full justify-between">
          <img src="/logo.png" alt="Logo" className="w-16 mr-4 cursor-pointer" onClick={() => handleNavigation('/')} />
          
          <div className="hidden lg:flex">
            <div className="text-gray-500 hover:text-black px-4 cursor-pointer" onClick={() => handleNavigation('/')}>
              Home
            </div>
            <div className="text-gray-500 hover:text-black px-4 cursor-pointer" onClick={() => handleNavigation('/login')}>
              Login/SignUp
            </div>
            <div className="text-gray-500 hover:text-black px-4 cursor-pointer" onClick={() => handleNavigation('/login')}>
              My Account
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={toggleMenu}
            className={`lg:hidden flex items-center px-3 py-2 -ml-7 border rounded text-gray-500 border-gray-500 hover:text-black hover:border-black focus:outline-none ${isMenuOpen ? 'border-black' : ''}`}
          >
            <svg
              className="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zM3 9a1 1 0 100 2h12a1 1 0 100-2H3zm0 6a1 1 0 100 2h12a1 1 0 100-2H3z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute lg:relative top-16 lg:top-0 right-0 border-black border w-40 shadow-md py-2">
          <ul className="container mx-auto flex flex-col items-start">
            <li>
              <div className="block px-4 py-2 text-gray-500 hover:text-black cursor-pointer" onClick={() => handleNavigation('/')}>
                Home
              </div>
            </li>
            
            <li>
              <div className="block px-4 py-2 text-gray-500 hover:text-black cursor-pointer" onClick={() => handleNavigation('/login')}>
                Login/SignUp
              </div>
            </li>
            <li>
              <div className="block px-4 py-2 text-gray-500 hover:text-black cursor-pointer" onClick={() => handleNavigation('/')}>
                My Account
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
