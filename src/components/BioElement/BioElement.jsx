import './BioElement.css';
import React from 'react';

export const BioElement = (props) => {
    return (
        <div className="footer-container">
            <img alt="bio Logo" className="bio-logo" src={props.logo[0]} />
            <a
                className="footer-text"
                href={props.link[0]}
                target="_blank"
                rel="noreferrer"
            >{`built by Ujjwal Gupta`}</a>
            <img alt="bio Logo" className="bio-logo" src={props.logo[1]} />
            <a
                className="footer-text"
                href={props.link[1]}
                target="_blank"
                rel="noreferrer"
            >{`built by Ujjwal Gupta`}</a>
        </div>
    );
}

// export default BioElement;
