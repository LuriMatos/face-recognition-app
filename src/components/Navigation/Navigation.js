import React from 'react';
import './Navigation.css';
import { ReactComponent as LinkedIn } from './linkedin.svg';
import { ReactComponent as GitHub } from './github.svg';

const Navigation = () => {
    return(
        <nav>
            <ul>
                <li>
                    <a 
                      href='https://www.linkedin.com/in/lucasmatosdl/'
                      target="_blank"
                      rel="noopener noreferrer">
                        <LinkedIn />
                    </a>
                </li>
                <li>
                    <a 
                      href='https://github.com/LuriMatos'
                      target="_blank"
                      rel="noopener noreferrer">
                        <GitHub />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;