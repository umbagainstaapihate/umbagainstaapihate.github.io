import { slide as Menu } from 'react-burger-menu';
import './hamburger.css';

const Hamburger = (props) => {
    return (
        <Menu right>
            <a id="home" className="menu-item" href="/#/">
                Home
            </a>
            <a id="stories" className="menu-item" href="/#/stories">
                Stories
            </a>
            <a id="share" className="menu-item" href="https://docs.google.com/forms/d/e/1FAIpQLSdl9UJgFr3qmkYkxfvhC7RUeuQbkWQfS6XSsjaOZFk7Vzjzng/viewform">
                Share Your Story
            </a>
            <a id="resources" className="menu-item" href="/#/resources">
                Resources
            </a>
            <a id="about" className="menu-item" href="/#/about">
                About
            </a>
        </Menu>
    );
};

export default Hamburger;
