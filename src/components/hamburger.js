import { slide as Menu } from 'react-burger-menu';
import './hamburger.css';

const Hamburger = (props) => {
    return (
        <Menu right>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="stories" className="menu-item" href="/stories">Stories</a>
          <a id="resources" className="menu-item" href="/resources">Resources</a>
          <a id="about" className="menu-item" href="/about">About</a>
        </Menu>
      );
}

export default Hamburger;