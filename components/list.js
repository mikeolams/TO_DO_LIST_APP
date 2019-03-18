import React from 'react';

// <ul>
//     {
//       props.items.map((item, index) => <li key={index}>{item}</li>)
//     }
//   </ul>

const List = props => (
  <ul>
    {
      console.log(props, "fellow")
    }
  </ul>
);

export default List;