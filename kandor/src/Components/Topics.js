import React, { useState } from 'react';
import Topic from './Topic.js';

const Topics = () => {
  const [topics, setTopics] = useState([
    { id: 1, text: 'Health', isSelected: false },
    { id: 1, text: 'Politics', isSelected: false },
    { id: 1, text: 'Art', isSelected: false },
    { id: 1, text: 'Sports', isSelected: false },
    { id: 1, text: 'Careers', isSelected: false },
    { id: 1, text: 'Fitness', isSelected: false },
    { id: 1, text: 'Books', isSelected: false },
    { id: 1, text: 'Children', isSelected: false },
  ]);
  return (
    <div className='TopicsContainer'>
      <h2>What would you like to chat about today?</h2>
      <ul>
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic} />
        ))}
      </ul>
    </div>
  );
};

export default Topics;
