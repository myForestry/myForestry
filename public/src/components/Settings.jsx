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
        </div>
        <button className="btn btn-primary">Button Primary</button>
        <button className="btn btn-secondary">Button Secondary</button>
        <button className="btn btn-warning">Button Warning</button>
        <button className="btn btn-danger">Button Danger</button>
        <button className="btn btn-default">Button Default</button>
      </form>
    </div>
  );
};

Settings.propTypes = {};

export default Settings;
