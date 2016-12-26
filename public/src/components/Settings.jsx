import React from 'react';

const Settings = (props) => {
  return (
    <div className="app-settings">
      <form action="">
        <div className="form-group">
          <label htmlFor="button">Label</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="button">Label</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="button">Label</label>
          <input type="text" className="form-control" />
          <button className="btn btn-primary">Button Primary</button>
        </div>
      </form>
    </div>
  );
};

Settings.propTypes = {};

export default Settings;
