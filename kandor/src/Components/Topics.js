import React, { useState } from 'react';
import Topic from './Topic.js';

const Topics = () => {
  const [topics, setTopics] = useState([
    { id: 1, text: 'Health', isSelected: false },
    { id: 2, text: 'Politics', isSelected: false },
    { id: 3, text: 'Art', isSelected: false },
    { id: 4, text: 'Sports', isSelected: false },
    { id: 5, text: 'Careers', isSelected: false },
    { id: 6, text: 'Fitness', isSelected: false },
    { id: 7, text: 'Books', isSelected: false },
    { id: 8, text: 'Children', isSelected: false },
  ]);
  return (
    <div className='TopicsContainer'>
      <h2 style={{ textAlign: 'center' }}>
        What would you like to chat about today?
      </h2>
      <ul className='TopicsList'>
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic} />
        ))}
      </ul>
    </div>
  );
};

export default Topics;
