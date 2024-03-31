/* Em outro arquivo ou componente */
import React from "react";
import Link from "next/link";
import Style from "./Header.module.css";

function Header() {
  const IEB_Logo = "https://i.imgur.com/p88YpYe.png";

  const handleGoBack = () => {
    window.history.back(); // Navega para a página anterior no histórico do navegador
  };

  return (
    <div className={Style.Header}>
      {/* <img
        onClick={handleGoBack}
        className={Style.button}
        src="https://i.imgur.com/6qBjhww.png"
        alt="Logo Encontro com Deus"
      /> */}

      <Link className={Style.linkHome} href="/">
        <img className={Style.Logo} src={IEB_Logo} alt="IEB_Logo" />
      </Link>

      {/* <img
        onClick={handleGoBack}
        className={Style.button}
        src="https://i.imgur.com/rRgV25O.png"
        alt="Logo Encontro com Deus"
      /> */}
    </div>
  );
}

export default Header;
