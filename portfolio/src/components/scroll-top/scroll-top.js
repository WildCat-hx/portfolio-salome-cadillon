import {useState, useEffect} from 'react';
import './scroll-top.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export const ScrollComponent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
          if (window.scrollY > 300) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
    
        window.addEventListener('scroll', toggleVisibility);
    
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }, []);
    
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    

    return (
        <div className={`container ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <div className="scroll-wrapper">
                <span><FontAwesomeIcon icon={faChevronUp} /></span>
            </div>
        </div>
    );
};