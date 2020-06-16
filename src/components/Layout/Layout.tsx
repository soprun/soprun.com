import React from 'react';
import './Layout.css';
import Header from "../Header/Header";

function Layout() {
  return (
    <>
      <Header/>
      <main id="main" className="container">
        Page, the page!
      </main>
    </>
  );
}

export default Layout;
