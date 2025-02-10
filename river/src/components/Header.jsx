import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [hovered, setHovered] = useState(null);

  const handleMouseOver = (id) => {
    setHovered(id);
  };
  const handleMouseOut = () => {
    setHovered(null);
  };
  return (
    <>
      <div className="header maxContent">
        <Link className="logo" to="/">
          <img src="./img/logo.png" alt="logo" />
        </Link>
        <Link
          to="/"
          className="nav headerMain"
          onMouseOver={() => handleMouseOver("headerMain")}
          onMouseOut={handleMouseOut}
          style={{ backgroundColor: hovered === "headerMain" ? "#572419" : "" }}
        >
          ГЛАВНАЯ
        </Link>
        <Link
          to="/dub"
          className="nav headerDub"
          onMouseOver={() => handleMouseOver("headerDub")}
          onMouseOut={handleMouseOut}
          style={{ backgroundColor: hovered === "headerDub" ? "#572419" : "" }}
        >
          ОЗВУЧКА
        </Link>
        <Link
          to="/redub"
          className="nav headerRedub"
          onMouseOver={() => handleMouseOver("headerRedub")}
          onMouseOut={handleMouseOut}
          style={{
            backgroundColor: hovered === "headerRedub" ? "#572419" : "",
          }}
        >
          ПЕРЕОЗВУЧКА
        </Link>
        <Link
          to="/contacts"
          className="nav headerContacts"
          onMouseOver={() => handleMouseOver("headerContacts")}
          onMouseOut={handleMouseOut}
          style={{
            backgroundColor: hovered === "headerContacts" ? "#572419" : "",
          }}
        >
          КОНТАКТЫ
        </Link>
        <Link
          to="/autorization"
          className="nav autorization"
          onMouseOver={() => handleMouseOver("autorization")}
          onMouseOut={handleMouseOut}
          style={{
            backgroundColor: hovered === "autorization" ? "#572419" : "",
          }}
        >
          ВОЙТИ
        </Link>
      </div>
    </>
  );
}

export default Header;
