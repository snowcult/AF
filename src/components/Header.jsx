import React, { memo } from 'react';

const Header = memo(() => {
  return (
    <div>
      <h1 className="tc f-2 white">AiFriends</h1>
    </div>
  );
});
Header.displayName = 'Header';
export default Header;
