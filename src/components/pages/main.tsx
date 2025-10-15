// new page component here
import React from 'react';
import hiImage from '../../assets/hi.png';

const NewPage: React.FC = () => {
  return (
    <>
      <h1>New Page</h1>
      <p>This is a new page.</p>
      <img src={hiImage} alt="Hi" />
    </>
  );
};

export default NewPage;
// new page component here
