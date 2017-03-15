import React from 'react';

const Services = (props) => {
  return (
    <div className="app-services">
      <div className="app-services__header">Service Categories</div>
      <div className="app-services__menu">
        <div className="app-services__menu-item">Consulting Foresters</div>
        <div className="app-services__menu-item">Loggers</div>
        <div className="app-services__menu-item">Herbicide and Compeition Control</div>
        <div className="app-services__menu-item">Pinestraw</div>
        <div className="app-services__menu-item">Wildlife & Hunting</div>
        <div className="app-services__menu-item">Realty</div>
        <div className="app-services__menu-item">Legal and Financial Services</div>
      </div>
    </div>
  );
};

Services.displayName = 'Services';

Services.propTypes = {};

export default Services;
