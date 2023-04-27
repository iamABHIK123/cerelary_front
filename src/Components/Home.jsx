import React from 'react'
import Login from './Login'
import Searchbar from './Searchbar'
import Service from './Service'
import Wave from './Wave'
import "./Home.css"
function Home() {
    return (
        <div className='parent'>
          
            <div className='frame-4'>
                <div className='head-1'>Hassle-Free Shipping Solutions</div>
                <div className='head-2'>Compare, book, and manage your freight across the world’s top logistics providers, all on one platform.</div>
            </div>
            <Searchbar />
            <Service />
            <div className='chat-fix'>
                <svg width="130" height="154" viewBox="0 0 130 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_ddddd_16_1375)">
                        <circle cx="45.5" cy="42.5" r="37.5" fill="url(#paint0_linear_16_1375)" />
                    </g>
                    <path d="M41.724 40.5469H50.8386M39.7709 50.8724H44.9792L50.7735 54.7266C50.969 54.8569 51.1963 54.9317 51.431 54.9431C51.6657 54.9544 51.8992 54.9017 52.1063 54.7908C52.3135 54.6799 52.4867 54.5148 52.6074 54.3131C52.7281 54.1115 52.7918 53.8808 52.7917 53.6458V50.8724C56.6979 50.8724 59.3021 48.2682 59.3021 44.362V36.5495C59.3021 32.6432 56.6979 30.0391 52.7917 30.0391H39.7709C35.8646 30.0391 33.2604 32.6432 33.2604 36.5495V44.362C33.2604 48.2682 35.8646 50.8724 39.7709 50.8724Z" stroke="white" stroke-width="2.9375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <defs>
                        <filter id="filter0_ddddd_16_1375" x="0" y="0" width="130" height="154" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_1375" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="1" dy="3" />
                            <feGaussianBlur stdDeviation="4" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                            <feBlend mode="normal" in2="effect1_dropShadow_16_1375" result="effect2_dropShadow_16_1375" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="6" dy="13" />
                            <feGaussianBlur stdDeviation="7" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
                            <feBlend mode="normal" in2="effect2_dropShadow_16_1375" result="effect3_dropShadow_16_1375" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="13" dy="29" />
                            <feGaussianBlur stdDeviation="9.5" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                            <feBlend mode="normal" in2="effect3_dropShadow_16_1375" result="effect4_dropShadow_16_1375" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="24" dy="51" />
                            <feGaussianBlur stdDeviation="11.5" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0" />
                            <feBlend mode="normal" in2="effect4_dropShadow_16_1375" result="effect5_dropShadow_16_1375" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow_16_1375" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_16_1375" x1="45.5" y1="5" x2="45.5" y2="80" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#9747FF" />
                            <stop offset="1" stop-color="#7C62FF" />
                        </linearGradient>
                    </defs>
                </svg>

            </div>
            <Wave />
        </div>
    )
}

export default Home
