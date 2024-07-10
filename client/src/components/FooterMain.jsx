import React from 'react';
import logo from '../assets/images/logo03.png'


const FooterMain = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="logo-container">
                    <img src={logo} alt="FoodFantasy Logo" className="logo" />
                </div>
                <div className="text-container">
                    <p className="text">© 2023 FoodFantasy. All rights reserved.</p>
                    <p className="text">123 Main Street, City, Country</p>
                    <p className="text">info@foodfantasy.com</p>
                    <p className="text">+1 (123) 456-7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="text">FoodFantasy &copy; 2023. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default FooterMain;