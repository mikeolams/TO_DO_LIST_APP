import React from 'react';

const List = props => (
	console.log(props),
  <ul>
    {
      props.items.map((item, index) => <li key={index}>{item}</li>)
    }
  </ul>
);

export default List;