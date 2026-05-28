import { memo, useCallback, useEffect, useState } from "react";
import * as S from "./Navbar.styled";
import { navbarData } from "../../data/navbarData";
import { Link } from "react-scroll";

const Navbar = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const MenuIcon = navbarData.menu;

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 80);
  }, []);

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleSetActive = useCallback((to) => {
    setActiveLink(to);
  }, []);

  const handleSetInactive = useCallback(() => {
    setActiveLink("");
  }, []);

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1025) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Trap body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <S.NavbarWrapper $scrolled={isScrolled} role="banner">

      {/* Logo & Brand */}
      <S.Container $gap="10px">
        <S.Logo src={navbarData.logo} alt="San Antonio National High School logo" />
        <S.BrandWrapper>
          <S.Brand>{navbarData.brand}</S.Brand>
          <S.SubBrand>{navbarData.subBrand}</S.SubBrand>
        </S.BrandWrapper>
      </S.Container>

      {/* Desktop Nav */}
      <S.Navlinks aria-label="Main navigation">
        {navbarData.links.map((link) => (
          <S.Navitems key={link.to} $scrolled={isScrolled}>
            <Link
              to={link.to}
              smooth
              duration={1000}
              spy
              offset={-70}
              onSetActive={handleSetActive}
              onSetInactive={handleSetInactive}
              activeClass="active"
              spyThrottle={500}
              onClick={handleCloseMenu}
            >
              {link.name}
            </Link>
          </S.Navitems>
        ))}
      </S.Navlinks>

      {/* Mobile Toggle */}
      <S.MenuButton
        onClick={handleToggleMenu}
        $scrolled={isScrolled}
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
      >
        <MenuIcon />
      </S.MenuButton>

      {/* Overlay */}
      <S.Overlay
        $open={isMenuOpen}
        onClick={handleCloseMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <S.MobileMenu
        id="mobile-menu"
        $open={isMenuOpen}
        aria-label="Mobile navigation"
        role="navigation"
        onClick={(e) => e.stopPropagation()}
      >
        <S.Container $padding="20px">
          <S.Logo
            $margin="0 10px 0 0"
            src={navbarData.logo}
            alt="San Antonio National High School logo"
          />
          <S.Brand>{navbarData.brand}</S.Brand>
        </S.Container>

        {navbarData.links.map((link) => (
          <S.MobileItem key={link.to} $active={activeLink === link.to}>
            <Link
              to={link.to}
              smooth
              duration={1000}
              spy
              offset={-70}
              onSetActive={handleSetActive}
              onSetInactive={handleSetInactive}
              activeClass="active"
              spyThrottle={500}
              onClick={handleCloseMenu}
            >
              {link.name}
            </Link>
          </S.MobileItem>
        ))}
      </S.MobileMenu>
    </S.NavbarWrapper>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;