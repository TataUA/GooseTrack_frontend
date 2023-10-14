import { Section } from './header.styled';
import nad from '../../images/side-head/Elli.png';
import { useState } from 'react';
import Sidebar from '../sidebar/sidebar';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
     setMenuOpen(!isMenuOpen);
  };
  
  return (
    <Section>
      {isMenuOpen ? <Sidebar toggleMenu={toggleMenu} /> : ''}
      <div className="head-box">
        <button className="btn burgerBtn" type="button" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 12H21"
              stroke="#343434"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H21"
              stroke="#343434"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 18H21"
              stroke="#343434"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="btn fedBut" type="button">
          Feedback
        </button>
        <div className="user-box">
          <button className="btn" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20.7419 13.045C20.0642 13.225 19.366 13.3161 18.6649 13.316C16.5299 13.316 14.5249 12.486 13.0189 10.98C12.0299 9.98536 11.3189 8.74887 10.9568 7.39381C10.5947 6.03874 10.594 4.61242 10.9549 3.25701C11 3.08755 10.9997 2.90921 10.9541 2.73988C10.9084 2.57056 10.8191 2.41621 10.695 2.29232C10.5709 2.16842 10.4164 2.07934 10.247 2.034C10.0776 1.98866 9.89928 1.98867 9.72988 2.03401C8.03304 2.4862 6.48494 3.37664 5.24088 4.61601C1.34288 8.51401 1.34288 14.859 5.24088 18.759C6.16741 19.6907 7.26952 20.4294 8.48342 20.9323C9.69733 21.4353 10.9989 21.6924 12.3129 21.689C13.6265 21.6927 14.9278 21.4357 16.1414 20.9329C17.355 20.4302 18.4567 19.6916 19.3829 18.76C20.6232 17.5157 21.514 15.9668 21.9659 14.269C22.0108 14.0996 22.0104 13.9214 21.9648 13.7522C21.9192 13.583 21.83 13.4287 21.7061 13.3048C21.5822 13.1809 21.4279 13.0917 21.2587 13.0461C21.0895 13.0005 20.9113 13.0001 20.7419 13.045ZM17.9699 17.346C17.2289 18.0911 16.3474 18.6818 15.3766 19.084C14.4057 19.4862 13.3647 19.6918 12.3139 19.689C11.2627 19.6916 10.2214 19.4858 9.25021 19.0835C8.27904 18.6811 7.39727 18.0903 6.65588 17.345C3.53788 14.226 3.53788 9.15001 6.65588 6.03101C7.25839 5.42918 7.95398 4.92843 8.71588 4.54801C8.60436 5.98707 8.80483 7.43324 9.30361 8.7877C9.80238 10.1422 10.5877 11.373 11.6059 12.396C12.6267 13.4174 13.8571 14.2049 15.2122 14.704C16.5672 15.2032 18.0144 15.4021 19.4539 15.287C19.0714 16.0476 18.5705 16.7426 17.9699 17.346Z"
                fill="#3E85F3"
              />
            </svg>
          </button>
          <h2 className="user-name">Nadiia</h2>
          <img className="avi" src={nad} alt="user-AVi" />
        </div>
      </div>
    </Section>
  );
};

export default Header;
