import React from "react";
import FollowerCount from "./FollowerCount";

const App = () => {
  const followerCount = 150;

  return (
    <div>
      <FollowerCount count={followerCount} />
    </div>
  );
};

export default App;
