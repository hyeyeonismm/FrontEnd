import React from "react";

const Toggle = () => {

    return(
        <>
        <svg 
        xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"
        style={{
            position: "relative",
            cursor: "pointer",
        }}
        >
        <g filter="url(#filter0_d_17_1622)">
            <rect x="44" y="2" width="40" height="40" rx="10" transform="rotate(90 44 2)" fill="white"/>
        </g>
        <line x1="16" y1="22" x2="32" y2="22" stroke="black" stroke-width="2" stroke-linecap="round"/>
        <line x1="16" y1="16" x2="32" y2="16" stroke="black" stroke-width="2" stroke-linecap="round"/>
        <line x1="16" y1="28" x2="32" y2="28" stroke="black" stroke-width="2" stroke-linecap="round"/>
        <defs>
            <filter id="filter0_d_17_1622" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_17_1622"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_17_1622" result="shape"/>
            </filter>
        </defs>
        </svg>    
        </>
    )
}

export default Toggle;


