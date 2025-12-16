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

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleSetActive = useCallback((to) => {
    setActiveLink(to);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1025) setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <S.NavbarWrapper $scrolled={isScrolled}>
      {/* Logo & Brand */}
      <S.Container $gap="10px">
        <S.Logo src={navbarData.logo} alt="sanhs logo" />

        <S.BrandWrapper>
          <S.Brand>{navbarData.brand}</S.Brand>
          <S.SubBrand>{navbarData.subBrand}</S.SubBrand>
        </S.BrandWrapper>
      </S.Container>

      {/* Desktop Navlinks */}
      <S.Navlinks>
        {navbarData.links.map((link) => (
          <S.Navitems key={link.to} $active={activeLink === link.to}>
            <Link
              to={link.to}
              smooth
              duration={1000}
              spy
              offset={-70}
              onSetActive={handleSetActive}
              onSetInactive={() => setActiveLink("")}
              activeClass="active"
              spyThrottle={500}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          </S.Navitems>
        ))}
      </S.Navlinks>

      {/* Mobile Toggle */}
      <S.MenuButton onClick={toggleMenu} $scrolled={isScrolled}>
        <MenuIcon />
      </S.MenuButton>

      {/* Overlay & Mobile Menu */}
      <S.Overlay $open={isMenuOpen} onClick={() => setIsMenuOpen(false)}>
        <S.MobileMenu $open={isMenuOpen} onClick={(e) => e.stopPropagation()}>
          <S.Container $padding="20px">
            <S.Logo
              $margin="0 10px 0 0"
              src={navbarData.logo}
              alt="sanhs logo"
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
                onSetInactive={() => setActiveLink("")}
                activeClass="active"
                spyThrottle={500}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </S.MobileItem>
          ))}
        </S.MobileMenu>
      </S.Overlay>
    </S.NavbarWrapper>
  );
});

export default Navbar;
