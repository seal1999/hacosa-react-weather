// react
import React from 'react';

// style
import '../css/Add.css';

const Add = (props) => {
  return (
    <div className="add-wrapper">
      <div className="main-card">
        <div className="city-search-wrapper">
          <div className="city-search-header">
            <h3 className="city-search-title">SEARCH CITIES</h3>
            <div className="search-city-input-wrapper">
              <input
                className="search-city-input"
                auto-complete-placeholder="search city"
                placeholder="search city"
              />
              <button className="search-city-btn">search</button>
            </div>
            <span className="city-search-hr">O O O</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
