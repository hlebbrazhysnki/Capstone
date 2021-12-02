import React from 'react';
import styled from 'styled-components'

 function Footer() {
    return (
      <FooterContainer className="main-footer">
      <div className="footer-middle">
          <div className="container">
              <div className="row">
                  {/* Column 1 */}
                  <div className="col-md-3 col-sm-6">
                      <h4>Lorem, ipsum.</h4>
                      <ul className="list-unstyled">
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>  
                      </ul>
                  </div>
                  {/* Column 2 */}
                  <div className="col-md-3 col-sm-6">
                      <h4>Lorem, ipsum.</h4>
                      <ul className="list-unstyled">
                      <li><a href="/"> Lorem ipsum </a></li>
                        <li><a href="/"> Lorem ipsum </a></li>
                        <li><a href="/"> Lorem ipsum </a></li>
                        <li><a href="/"> Lorem ipsum </a></li>  
                      </ul>
                  </div>
                  {/* Column 3 */}
                  <div className="col-md-3 col-sm-6">
                      <h4>Lorem, ipsum.</h4>
                      <ul className="list-unstyled">
                      <li><a href="/"> Lorem ipsum </a></li>
                        <li><a href="/"> Lorem ipsum </a></li>
                        <li><a href="/"> Lorem ipsum </a></li>
                        <li><a href="/"> Lorem ipsum </a></li> 
                      </ul>
                  </div>
                  {/* Column 4 */}
                  <div className="col-md-3 col-sm-6">
                      <h4>Lorem, ipsum.</h4>
                      <ul className="list-unstyled">
                      <li><a href="/"> Lorem ipsum </a></li>
                        <li><a href="/"> Lorem ipsum </a></li>
                        <li><a href="/"> Lorem ipsum </a></li>
                        <li><a href="/"> Lorem ipsum </a></li>
                      </ul>
                  </div>
              </div>
              {/* Footer Bottom */}
              <div className="footer-bottom">
                  <p className="text-xs-center">
                      &copy;{new Date().getFullYear()} Capstone Project -All Rights Reserved
                  </p>
              </div>
            </div>
          </div>
      </FooterContainer>
    )
}
export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainGoldenYellow);
    padding-top: 3rem;
    color: var(--mainBlack);
}

.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
}

ul li a {
    color: var(--MainBlack);

}

ul; li a:hover {
    color: var(--mainSkyBlue);
}

`;