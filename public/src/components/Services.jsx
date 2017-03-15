import React from 'react';
import { NavTabs, NavTabsItem } from 'rhinostyle';

const Services = (props) => {
  const {
    activeKey,
    handleSelect,
  } = props;

  return (
    <div className="app-services">
      <div className="app-services__header">Service Categories</div>
      <NavTabs activeKey={activeKey} onSelect={handleSelect} className="nav-tabs--stacked app-services__menu">
        <NavTabsItem id={1} className="app-services__menu-item">Consulting Foresters</NavTabsItem>
        <NavTabsItem id={2} className="app-services__menu-item">Loggers</NavTabsItem>
        <NavTabsItem id={3} className="app-services__menu-item">Herbicide and Compeition Control</NavTabsItem>
        <NavTabsItem id={4} className="app-services__menu-item">Pinestraw</NavTabsItem>
        <NavTabsItem id={5} className="app-services__menu-item">Wildlife & Hunting</NavTabsItem>
        <NavTabsItem id={6} className="app-services__menu-item">Realty</NavTabsItem>
        <NavTabsItem id={7} className="app-services__menu-item">Legal and Financial Services</NavTabsItem>
      </NavTabs>
    </div>
  );
};

Services.displayName = 'Services';

Services.propTypes = {};

export default Services;
