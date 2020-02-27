import React from 'react';
let sampleImage = "https://images.unsplash.com/photo-1553798194-cc0213ae7f99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80";

export default function Staff() {
  return (
    <section className="staff-section" id="staff">
      <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary">
              Meet The Team
          </h2>
          <div className="image-container">
            <div className="card">
              <div className="card__side">
                <div className="card__image" 
                  style={{
                    backgroundImage: `url(${sampleImage})`}}>
                </div>
                <div className="card__details">
                  <span className="name">Joe Doe</span>
                  <span className="title">Manager</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card__side">
              <div className="card__image" 
                  style={{
                    backgroundImage: `url(${sampleImage})`}}>
                </div>
                <div className="card__details">
                  <span className="name">Joe Doe</span>
                  <span className="title">Manager</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card__side">
                <div className="card__image" 
                    style={{
                      backgroundImage: `url(${sampleImage})`}}>
                </div>
                <div className="card__details">
                  <span className="name">Joe Doe</span>
                  <span className="title">Manager</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card__side">
                <div className="card__image" 
                    style={{
                      backgroundImage: `url(${sampleImage})`}}>
                </div>
                <div className="card__details">
                  <span className="name">Joe Doe</span>
                  <span className="title">Manager</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card__side">
                <div className="card__image" 
                  style={{
                    backgroundImage: `url(${sampleImage})`}}>
                </div>
                <div className="card__details">
                  <span className="name">Joe Doe</span>
                  <span className="title">Manager</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card__side">
                <div className="card__image" 
                  style={{
                    backgroundImage: `url(${sampleImage})`}}>
                </div>
                <div className="card__details">
                  <span className="name">Joe Doe</span>
                  <span className="title">Manager</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card__side">
              <div className="card__image" 
                  style={{
                    backgroundImage: `url(${sampleImage})`}}>
                </div>
                <div className="card__details">
                  <span className="name">Joe Doe</span>
                  <span className="title">Manager</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card__side">
              <div className="card__image" 
                  style={{
                    backgroundImage: `url(${sampleImage})`}}>
                </div>
                <div className="card__details">
                  <span className="name">Joe Doe</span>
                  <span className="title">Manager</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
