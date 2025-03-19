import "../App.css";
import { useState } from 'react';

function Footer() {
    return (
        <>
          <footer className="bg-dark text-white p-3 mt-4" >
            <div className="container-fluid d-flex">
              <ul className="d-flex gap-4">
                <li>Email: ml931437@dal.ca</li>
                <li>Phone: (555)555-5555</li>
                <li className="d-flex gap-1">Linkedin:<a href="https://www.linkedin.com/in/malcolm-chapman-1a6655250?">Malcolm Chapman</a></li>
              </ul>
            </div>
           </footer>
        </>
      );
}

export default Footer;