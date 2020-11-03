import React from 'react';
import config from '../../config';
import '../assets/sass/components/touch.scss'
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Get in touch</h2>
        <p>
          I am currently looking for developer opportunities! Please contact me with any questions or opportunities.
        </p>
         
        <ul className="contact">
          <li className="fa-home">Titusville, NJ</li>
          <li className="fa-envelope-o">nickamantia@gmail.com</li>

          

          {/* <li className="fa-phone"></li> */}

          {/* {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={url}>{url}</a>
              </li>
            );
          })} */}

          
        </ul>
        
        <div className="link-container">
          <div>
            <button><a href="https://docs.google.com/document/d/19qWCMk1d-yqEuZZ_sLMhe_83uY0Jwja_-ylQSCRgFnY/edit#heading=h.ocvpswguxa6m" target="_blank" >Resume</a></button>
          </div>
          <button><a href="https://www.linkedin.com/in/nickamantia/" target="_blank" >LinkedIn</a></button>
          <button><a href="https://github.com/nsamantia" target="_blank" >Github</a></button>
        </div>
        
        <ul className="copyright">
          <li>&copy; Solid State. All rights reserved.</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
