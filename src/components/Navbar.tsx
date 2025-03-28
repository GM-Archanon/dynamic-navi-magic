import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, LogIn } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import LoginDialog from './LoginDialog';
import { Button } from '@/components/ui/button';

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
        "relative px-3 py-2 font-medium transition-colors hover:text-primary hover:bg-accent hover:bg-opacity-80 rounded-md flex items-center gap-1",
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

const DropdownMenuItem = ({ 
  to, 
  children, 
  index, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode; 
  index: number; 
  onClick?: () => void;
}) => {
  return (
    <Link 
      to={to} 
      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary animate-fade-in`}
      style={{ animationDelay: `${100 + (index * 75)}ms` }}
      role="menuitem"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
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

  const openLoginDialog = () => {
    setLoginDialogOpen(true);
    closeMenu();
  };

  return (
    <>
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

            <nav className="hidden md:flex md:items-center md:space-x-4 animate-fade-in">
              <NavItem href="/" active={isActive("/")}>Home</NavItem>
              
              <div className="relative group">
                <button 
                  className={cn(
                    "px-3 py-2 font-medium transition-colors hover:text-primary hover:bg-accent hover:bg-opacity-80 rounded-md flex items-center gap-1",
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
                <div className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <DropdownMenuItem to="/about" index={0} onClick={closeMenu}>About Us</DropdownMenuItem>
                    <DropdownMenuItem to="/mission" index={1} onClick={closeMenu}>Mission</DropdownMenuItem>
                    <DropdownMenuItem to="/vision" index={2} onClick={closeMenu}>Vision</DropdownMenuItem>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <button 
                  className={cn(
                    "px-3 py-2 font-medium transition-colors hover:text-primary hover:bg-accent hover:bg-opacity-80 rounded-md flex items-center gap-1",
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
                <div className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <DropdownMenuItem to="/images" index={0} onClick={closeMenu}>Images</DropdownMenuItem>
                    <DropdownMenuItem to="/videos" index={1} onClick={closeMenu}>Videos</DropdownMenuItem>
                  </div>
                </div>
              </div>
              
              <NavItem href="/contact" active={isActive("/contact")}>Contact Us</NavItem>

              <Button 
                variant="ghost" 
                size="sm" 
                onClick={openLoginDialog}
                className="ml-2 flex items-center gap-1"
              >
                <LogIn className="h-4 w-4" />
                Log In
              </Button>
            </nav>

            <div className="md:hidden">
              <button onClick={handleMobileMenuToggle} className="p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white animate-fade-in border-b border-gray-200">
            <div className="space-y-1 px-4 py-3">
              <Link 
                to="/" 
                className="block py-2 font-medium hover:text-primary hover:bg-accent hover:bg-opacity-80 rounded-md px-2"
                onClick={closeMenu}
              >
                Home
              </Link>
              
              <div>
                <button 
                  onClick={() => toggleDropdown('about')}
                  className="flex w-full items-center justify-between py-2 font-medium hover:text-primary hover:bg-accent hover:bg-opacity-80 rounded-md px-2"
                >
                  About
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'about' && (
                  <div className="pl-4 space-y-1 pt-1 pb-2 overflow-hidden">
                    <DropdownMenuItem to="/about" index={0} onClick={closeMenu}>About Us</DropdownMenuItem>
                    <DropdownMenuItem to="/mission" index={1} onClick={closeMenu}>Mission</DropdownMenuItem>
                    <DropdownMenuItem to="/vision" index={2} onClick={closeMenu}>Vision</DropdownMenuItem>
                  </div>
                )}
              </div>
              
              <div>
                <button 
                  onClick={() => toggleDropdown('gallery')}
                  className="flex w-full items-center justify-between py-2 font-medium hover:text-primary hover:bg-accent hover:bg-opacity-80 rounded-md px-2"
                >
                  Gallery
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'gallery' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'gallery' && (
                  <div className="pl-4 space-y-1 pt-1 pb-2 overflow-hidden">
                    <DropdownMenuItem to="/images" index={0} onClick={closeMenu}>Images</DropdownMenuItem>
                    <DropdownMenuItem to="/videos" index={1} onClick={closeMenu}>Videos</DropdownMenuItem>
                  </div>
                )}
              </div>
              
              <Link 
                to="/contact" 
                className="block py-2 font-medium hover:text-primary hover:bg-accent hover:bg-opacity-80 rounded-md px-2"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
              
              <Button 
                onClick={openLoginDialog}
                className="mt-2 w-full flex items-center justify-center gap-1"
              >
                <LogIn className="h-4 w-4" />
                Log In
              </Button>
            </div>
          </div>
        )}
      </header>

      <LoginDialog isOpen={loginDialogOpen} onClose={() => setLoginDialogOpen(false)} />
    </>
  );
};

export default Navbar;
