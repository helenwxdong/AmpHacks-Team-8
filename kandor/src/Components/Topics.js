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

  const selectTopic = (id) => {
    // setTopics((topic) => {
    //   [
    //     ...topics,
    //     {
    //       isSelected: true,
    //     },
    //   ];
    // });
    // setTopics((topic) => {
    //   return {
    //     ...topics,
    //     topic.isSelected: true,
    //   };
    // });
    // console.log(topics.isSelected);
  };

  return (
    <div className='TopicsContainer'>
      <h2 style={{ textAlign: 'center' }}>
        What would you like to chat about today?
      </h2>
      <form className='Form'>
        <ul className='TopicsList'>
          {topics.map((topic) => (
            <Topic
              key={topic.id}
              topic={topic}
              onClick={() => selectTopic(topic.id)}
            />
          ))}
        </ul>
        <button className='Submit' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Topics;
