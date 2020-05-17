import React from 'react';

 function Footer() {
    return (
       <div className="main-footer">
        <div className="container-fluid">
            <div className="row"> 
            {/* column 1 */}
                <div className="content-footer col-md-3 col-sm-6">
                  <h4>Explore</h4>  
                  <ul className="list-unstyled">
                      <li>Home</li>
                      <li>Tutors</li>
                      <li>Subjects</li>
                      <li>Trending</li>
                  </ul>
                </div>

                 {/* column 2 */}
                 <div className="content-footer col-md-3 col-sm-6">
                  <h4>Contact Us</h4>  
                  <ul className="list-unstyled">
                      <li>No 40,</li>
                      <li>Wincent Square,</li>
                      <li>Toronto, Canada.</li>
                      <li>+895641234858</li>
                  </ul>
                </div>

                 {/* column 3 */}
                 <div className="content-footer col-md-3 col-sm-6">
                  <h4>Follow Us on</h4>  
                  <ul className="list-unstyled"> 
                  <li><i className="fa fa-facebook-square fa-media" style = {{ marginRight: '20px' }} aria-hidden="true"></i>
                  Facebook</li>
                  <li><i className="fa fa-instagram fa-media" style = {{ marginRight: '20px' }} aria-hidden="true"></i>
                  Instagram</li>
                  <li><i className="fa fa-linkedin-square fa-media"  style = {{ marginRight: '20px' }} aria-hidden="true"></i>
                  LinkedIn</li>
                  <li><i className="fa fa-twitter-square fa-media"  style = {{ marginRight: '20px' }} aria-hidden="true"></i>
                  Twitter</li>
                  </ul>
                </div>

                {/* column 4 */}
                <div className="content-footer col-md-3 col-sm-6">
                  <h4>Be a proud tutor</h4>  
                  <ul className="list-unstyled">
                      <li>Send us your </li>
                      <li>resume on</li>
                      <li>LinkedIn...</li>
                      <li>Happy Coding!</li>
                  </ul>
                </div>
            </div>

            {/* copyright */}

            <div className="footer-bottom">
                <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} BeMyTutor - All Rights Reserved
                </p>
            </div>
        </div>
       </div>
    )
}
export default Footer;