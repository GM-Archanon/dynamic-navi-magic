
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const NavItem = ({ 
  href, 
  children, 
  hasDropdown = false, 
  active = false, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode; 
  hasDropdown?: boolean; 
  active?: boolean; 
  onClick?: () => void;
}) => {
  return (
    <Link 
      to={href} 
      className={cn(
        "relative px-3 py-2 font-medium transition-colors hover:text-primary flex items-center gap-1",
        active ? "text-primary" : "text-foreground"
      )}
      onClick={onClick}
    >
      {children}
      {hasDropdown && <ChevronDown className="h-4 w-4" />}
      {active && (
        <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-primary" />
      )}
    </Link>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isMobile = useIsMobile();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-sm animate-nav-shadow" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold" onClick={closeMenu}>
              Black Hawk Society
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-4 animate-fade-in">
            <NavItem href="/" active={isActive("/")}>Home</NavItem>
            
            <div className="relative group">
              <button 
                className={cn(
                  "px-3 py-2 font-medium transition-colors hover:text-primary flex items-center gap-1",
                  (isActive("/about") || isActive("/mission") || isActive("/vision")) ? "text-primary" : "text-foreground"
                )}
                onClick={() => toggleDropdown('about')}
              >
                About
                <ChevronDown className="h-4 w-4" />
                {(isActive("/about") || isActive("/mission") || isActive("/vision")) && (
                  <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-primary" />
                )}
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">About Us</Link>
                  <Link to="/mission" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Mission</Link>
                  <Link to="/vision" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Vision</Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button 
                className={cn(
                  "px-3 py-2 font-medium transition-colors hover:text-primary flex items-center gap-1",
                  (isActive("/gallery") || isActive("/images") || isActive("/videos")) ? "text-primary" : "text-foreground"
                )}
                onClick={() => toggleDropdown('gallery')}
              >
                Gallery
                <ChevronDown className="h-4 w-4" />
                {(isActive("/gallery") || isActive("/images") || isActive("/videos")) && (
                  <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-primary" />
                )}
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <Link to="/images" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Images</Link>
                  <Link to="/videos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Videos</Link>
                </div>
              </div>
            </div>
            
            <NavItem href="/contact" active={isActive("/contact")}>Contact Us</NavItem>
          </nav>

          <div className="hidden md:flex md:items-center">
            <button 
              onClick={() => document.getElementById('login-dialog')?.showModal()}
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Log In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={handleMobileMenuToggle} className="p-2">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white animate-fade-in border-b border-gray-200">
          <div className="space-y-1 px-4 py-3">
            <Link 
              to="/" 
              className="block py-2 font-medium"
              onClick={closeMenu}
            >
              Home
            </Link>
            
            <div>
              <button 
                onClick={() => toggleDropdown('about')}
                className="flex w-full items-center justify-between py-2 font-medium"
              >
                About
                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'about' && (
                <div className="pl-4 space-y-1 pt-1 pb-2">
                  <Link 
                    to="/about" 
                    className="block py-1.5 text-sm" 
                    onClick={closeMenu}
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/mission" 
                    className="block py-1.5 text-sm" 
                    onClick={closeMenu}
                  >
                    Mission
                  </Link>
                  <Link 
                    to="/vision" 
                    className="block py-1.5 text-sm" 
                    onClick={closeMenu}
                  >
                    Vision
                  </Link>
                </div>
              )}
            </div>
            
            <div>
              <button 
                onClick={() => toggleDropdown('gallery')}
                className="flex w-full items-center justify-between py-2 font-medium"
              >
                Gallery
                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'gallery' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'gallery' && (
                <div className="pl-4 space-y-1 pt-1 pb-2">
                  <Link 
                    to="/images" 
                    className="block py-1.5 text-sm" 
                    onClick={closeMenu}
                  >
                    Images
                  </Link>
                  <Link 
                    to="/videos" 
                    className="block py-1.5 text-sm" 
                    onClick={closeMenu}
                  >
                    Videos
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/contact" 
              className="block py-2 font-medium"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
            
            <button 
              onClick={() => {
                closeMenu();
                document.getElementById('login-dialog')?.showModal();
              }}
              className="mt-2 w-full text-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
            >
              Log In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
