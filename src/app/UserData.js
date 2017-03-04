import React from 'react';

export default ({ user, update, index }) => {
  return (
    <tr onClick={() => update({ active: index })}>
      <td>{user. title}</td>
      <td>{user.body}</td>
    </tr>
  );
};