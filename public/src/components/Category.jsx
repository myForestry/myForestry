import React from 'react';

const Category = (props) => {
  const {
    // category,
  } = props;

  return (
    <div>
      <h3>Hello from category component</h3>
    </div>
  );
};

Category.displayName = 'Category';

Category.propTypes = {};

export default Category;
