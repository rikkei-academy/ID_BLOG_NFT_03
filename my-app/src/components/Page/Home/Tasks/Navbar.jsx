import React from 'react'

export default function Navbar() {
    return (
        <div className="Navbar">
            <div className="logo">
                <img src="../img/Logo.png" alt="logo" />
            </div>
            <div className="menu">
                <div>Home</div>
                <div>Market</div>
                <div>Explore</div>
                <div>Exhibition</div>
                <div>Artist &amp; Collectors</div>
                <div>
                    Community
                    <i className="fa-solid fa-chevron-down" />
                </div>
            </div>
            <button>Connect Wallet</button>
        </div>
    )
}
