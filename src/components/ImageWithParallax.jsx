import React from 'react';
import { Parallax } from 'react-parallax';

const ImageWithParallax = ({ src, text }) => (
    <Parallax bgImage={src}>
        <div
            style={{
                height: '500px',
            }}
        >
            <h1
                style={{
                    margin: '0',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                    textAlign: 'center',
                }}
            >
                <span className="inline-text">{text}</span>
            </h1>
        </div>
    </Parallax>
);

export default ImageWithParallax;
