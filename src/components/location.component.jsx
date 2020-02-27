import React from 'react'
import PropTypes from 'prop-types'

export default function Location() {
  return (
    <section className="section-location" id="location">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary ">Based around the world </h2>
      </div>
      <div className="country-main-container">
          <div className="country-container">
              <img 
                  alt="country-flag" className="country-flag" src="https://images.unsplash.com/photo-1531742633345-8adf1181733c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"/> 
              <div>
                  <i className="flag-icon flag-icon-fr"></i>
                  <p></p> 
              </div>   
          </div>
          <div className="country-container">
              <img 
                  alt="country-flag"  className="country-flag" src="https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"/> 
              <div>
                  <i className="flag-icon flag-icon-de"></i>
                  <p></p> 
              </div>   
          </div>
          <div className="country-container">
              <img
                  alt="country-flag"  className="country-flag" src="https://images.unsplash.com/photo-1508861736614-6800103b49b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"/> 
              <div>
                  <i className="flag-icon flag-icon-gh"></i>
                  <p></p> 
              </div>   
          </div>
          <div className="country-container">
              <img className="country-flag" src="https://images.unsplash.com/photo-1534179639155-4910efc143c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"/> 
              <div>
                  <i className="flag-icon flag-icon-br"></i>
                  <p></p> 
              </div>   
          </div>
          <div className="country-container">
              <img 
                  alt="country-flag"  className="country-flag" src="https://images.unsplash.com/photo-1465385621528-53653983a38f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80"/> 
              <div>
                  <i className="flag-icon flag-icon-ch"></i>
                  <p></p> 
              </div>   
          </div>
          <div className="country-container">
              <img className="country-flag" src="https://images.unsplash.com/photo-1518790131185-5abf360efaca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"/> 
              <div>
                  <i className="flag-icon flag-icon-ru"></i>
                  <p></p> 
              </div>   
          </div>
      </div>  
    </section>
  );
}
