import React from "react";

const LaunchItem = ({ launch }: { launch: any }) => {
  return <li>{launch.mission_name}</li>;
};

export default LaunchItem;
