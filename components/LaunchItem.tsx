import React from "react";

const LaunchItem = ({ launch }: { launch: any }) => {
  return <li key={launch.id}>{launch.mission_name}</li>;
};

export default LaunchItem;
