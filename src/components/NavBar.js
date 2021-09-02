import React from "react";
import PropTypes from "prop-types";
import ColorPicker from "./ColorPicker";

export default function NavBar(props) {
  //"navbar navbar-expand-lg navbar-light bg-light"
  // const darkModeText = "Enable Dark mode";
  // const lightModeText = "Enable Light mode";
  // const darkModeSyle = "navbar navbar-expand-lg navbar-dark bg-dark";
  // const lightModeSyle = "navbar navbar-expand-lg navbar-light bg-light";

  //Declare & define state variable
  // const [style, setStyle] = useState(lightModeSyle);
  // const [text, setText] = useState(darkModeText);

  // const handleStyle = () => {
  //   if (text === darkModeText) {
  //     setText(lightModeText);
  //     setStyle(darkModeSyle);
  //   } else if (text === lightModeText) {
  //     setText(darkModeText);
  //     setStyle(lightModeSyle);
  //   }
  // };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {props.homeText}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">
                Disabled
              </a>
            </li>
            <li className="nav-item mx-3 my-2">
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.setMode} />
                <label className={`form-check-label text-${props.mode === "light" ? "black" : "white"}`} htmlFor="flexSwitchCheckDefault">
                  Enable Dark mode
                </label>
              </div>
            </li>
            <li className="nav-item mx-3 my-2">
              {props.mode === "dark" && <ColorPicker applyColor={props.applyColor}/>}
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  homeText: PropTypes.string.isRequired,
};

//set default property values
NavBar.defaultProps = {
  title: "set title here",
  homeText: "set hoem text",
};
