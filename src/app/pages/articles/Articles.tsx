import React from 'react';
import { Link } from 'react-router-dom';

const Articles = () => {
  return (
    <div>
      This is article-list page
      <p>
        <Link to="1">See detail</Link>
      </p>
    </div>
  );
};

export default Articles;
