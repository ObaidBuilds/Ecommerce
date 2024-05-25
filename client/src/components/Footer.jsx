import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <img
            src="https://dukaan.b-cdn.net/300x300/webp/media/e6519c02-184a-406a-8059-cb659817f6ca.png"
            alt="logo"
          />
          <h3>Contact Details</h3>
          <p>Contact us : obaidbro9@gmail.com</p>
        </div>
       <div className="lower_footer">
       <div>
          <h3>Collections</h3>
          <p>Men's fragrances</p>
          <p>Women's Fragrances</p>
        </div>
        <div>
          <h3>Connect with us</h3>
          <p>Instagram</p>
          <p>Facebook</p>
        </div>
       </div>
      </footer>
      <h3 className="end">100% Payement Protection</h3>
    </>
  );
};

export default Footer;
