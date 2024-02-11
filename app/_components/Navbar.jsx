import { useState, useEffect } from "react";

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
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const handleNavigation = (path) => {
    // Perform navigation logic here
    console.log(`Navigating to ${path}`);
  };

  return (
    <nav className="shadow-md p-4 overflow-hidden bg-[#fad09d]">
      <div className="container mx-auto flex w-full">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-16 mr-4 cursor-pointer object-fill" 
            onClick={() => handleNavigation("/")}
          />
      </div>
    </nav>
  );
};

export default Navbar;
