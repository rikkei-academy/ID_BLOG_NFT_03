import React from 'react'

export default function Footer() {
    return (
        <div className="Footer">
            <div className="box">
                <div className="Footer-box1">
                    <div className="logo">
                        <img src="../img/Logo.png" alt="logo" />
                    </div>
                    <div className="texts-title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tristique placerat eleifend aliquam
                        pellentesque facilisis ultrices. Imperdiet mus urna egestas at tellus.
                    </div>
                </div>
                <div className="Footer-box2">
                    <p>About</p>
                    <ul>
                        <li>About Us</li>
                        <li>Our Services</li>
                        <li>How It Works</li>
                        <li>Become a Partner</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className="Footer-box2">
                    <p>Comunity</p>
                    <ul>
                        <li>Token</li>
                        <li>Discussion</li>
                        <li>Voting</li>
                        <li>Blog</li>
                        <li>Help Center</li>
                    </ul>
                </div>
                <div className="Footer-box2">
                    <p>Social Media </p>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
            <div className="box-text">
                <div className="text-t">
                    <p>Privacy Policy</p>
                    <p>Terms and Condition</p>
                </div>
                <p>Copyright Tanah Air Studio</p>
            </div>
        </div>
    )
}
