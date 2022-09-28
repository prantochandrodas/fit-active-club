import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
           <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
            <h2>Fit-Active-Club</h2>
        </div>
    );
};

export default Header;