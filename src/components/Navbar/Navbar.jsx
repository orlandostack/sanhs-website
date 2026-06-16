// src/components/Navbar/Navbar.jsx
import { memo, useCallback, useEffect, useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import * as S from "./Navbar.styled";
import { navbarData } from "../../data/navbarData";

const Navbar = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const isLandingPage = location.pathname === "/";

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 80);
  }, []);

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleSetActive = useCallback((to) => setActiveLink(to), []);
  const handleSetInactive = useCallback(() => setActiveLink(""), []);
  const handleCloseMenu = useCallback(() => setIsMenuOpen(false), []);

  // On non-landing pages: navigate to landing and scroll to section
  const handleOffPageLink = useCallback(
    (to) => {
      handleCloseMenu();
      navigate(`/#${to}`);
    },
    [navigate, handleCloseMenu]
  );

  // After navigation to landing, scroll to hash if present
  useEffect(() => {
    if (isLandingPage && location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [isLandingPage, location.hash]);

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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Shared scroll props for react-scroll
  const scrollProps = {
    smooth: true,
    duration: 900,
    spy: true,
    offset: -70,
    spyThrottle: 500,
    activeClass: "active",
    onSetActive: handleSetActive,
    onSetInactive: handleSetInactive,
  };

  const renderDesktopLink = (link) => {
    if (isLandingPage) {
      return (
        <ScrollLink key={link.to} to={link.to} {...scrollProps} onClick={handleCloseMenu}>
          {link.name}
        </ScrollLink>
      );
    }
    return (
      <RouterLink
        key={link.to}
        to={`/#${link.to}`}
        onClick={() => handleOffPageLink(link.to)}
        className={activeLink === link.to ? "active" : ""}
      >
        {link.name}
      </RouterLink>
    );
  };

  const renderMobileLink = (link) => {
    if (isLandingPage) {
      return (
        <ScrollLink key={link.to} to={link.to} {...scrollProps} onClick={handleCloseMenu}>
          {link.name}
        </ScrollLink>
      );
    }
    return (
      <RouterLink
        key={link.to}
        to={`/#${link.to}`}
        onClick={() => handleOffPageLink(link.to)}
      >
        {link.name}
      </RouterLink>
    );
  };

  return (
    <S.NavbarWrapper $scrolled={isScrolled} role="banner">

      {/* Logo & Brand */}
      <S.BrandContainer as={RouterLink} to="/">
        <S.Logo src={navbarData.logo} alt="San Antonio National High School logo" />
        <S.BrandText>
          <S.Brand $scrolled={isScrolled}>{navbarData.brand}</S.Brand>
          <S.SubBrand $scrolled={isScrolled}>{navbarData.subBrand}</S.SubBrand>
        </S.BrandText>
      </S.BrandContainer>

      {/* Desktop Nav */}
      <S.Navlinks aria-label="Main navigation">
        {navbarData.links.map((link) => (
          <S.Navitem key={link.to} $scrolled={isScrolled}>
            {renderDesktopLink(link)}
          </S.Navitem>
        ))}
      </S.Navlinks>

      {/* Mobile Hamburger */}
      <S.MenuButton
        onClick={handleToggleMenu}
        $scrolled={isScrolled}
        $open={isMenuOpen}
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
      >
        <S.HamburgerBox $open={isMenuOpen}>
          <S.HamburgerLine $open={isMenuOpen} $pos="top" $scrolled={isScrolled} />
          <S.HamburgerLine $open={isMenuOpen} $pos="mid" $scrolled={isScrolled} />
          <S.HamburgerLine $open={isMenuOpen} $pos="bot" $scrolled={isScrolled} />
        </S.HamburgerBox>
      </S.MenuButton>

      {/* Overlay */}
      <S.Overlay $open={isMenuOpen} onClick={handleCloseMenu} aria-hidden="true" />

      {/* Mobile Drawer */}
      <S.MobileMenu
        id="mobile-menu"
        $open={isMenuOpen}
        aria-label="Mobile navigation"
        role="navigation"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <S.DrawerHeader>
          <S.Logo src={navbarData.logo} alt="San Antonio National High School logo" $size="48px" />
          <S.DrawerBrandText>
            <S.DrawerBrand>{navbarData.brand}</S.DrawerBrand>
            <S.DrawerSubBrand>{navbarData.subBrand}</S.DrawerSubBrand>
          </S.DrawerBrandText>
        </S.DrawerHeader>

        <S.DrawerDivider />

        {/* Links */}
        <S.DrawerLinks>
          {navbarData.links.map((link, index) => (
            <S.MobileItem
              key={link.to}
              $active={activeLink === link.to}
              $index={index}
              $open={isMenuOpen}
            >
              <S.MobileItemInner $active={activeLink === link.to}>
                <S.LinkIcon>{link.icon && <link.icon />}</S.LinkIcon>
                {renderMobileLink(link)}
              </S.MobileItemInner>
            </S.MobileItem>
          ))}
        </S.DrawerLinks>

        <S.DrawerFooter>
          <S.DrawerFooterText>© {new Date().getFullYear()} SANHS</S.DrawerFooterText>
        </S.DrawerFooter>
      </S.MobileMenu>
    </S.NavbarWrapper>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;