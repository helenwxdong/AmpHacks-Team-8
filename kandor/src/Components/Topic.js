import React from 'react';

const Topic = ({ topic }) => {
  return (
    <li className='Topic'>
      <button>{topic.text}</button>
    </li>
  );
};

export default Topic;
