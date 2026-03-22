import React, { useState } from "react";
import { Search, MessageCircle, Bell, User, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/logo.png";

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <a href="#" className="logoWrap">
          <img src={logo} alt="UltraHustle" className="logo" />
        </a>
        <div className="links">
          <a href="#" className="link">Home</a>
          <a href="#" className="link">Marketplace</a>
          <div className="dashBtn">Dashboard</div>
        </div>
        <div className="searchBar">
          <input type="text" placeholder="Search here" className="searchInput" />
          <Search size={15} className="searchIcon" />
        </div>
        <div className="icons">
          <button className="iconBtn"><MessageCircle size={20} strokeWidth={1.3} /></button>
          <button className="iconBtn"><Bell size={20} strokeWidth={1.3} /></button>
          <button className="themeBtn" onClick={toggle}>
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <div className="avatar"><User size={16} /></div>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <div className="accentLine" />
      {menuOpen && (
        <div className="mobileMenu">
          <a href="#" className="mobileLink" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#" className="mobileLink" onClick={() => setMenuOpen(false)}>Marketplace</a>
          <a href="#" className="mobileLink" onClick={() => setMenuOpen(false)}>Dashboard</a>
          <div className="mobileDivider" />
          <button className="mobileThemeBtn" onClick={toggle}>
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </>
  );
}
