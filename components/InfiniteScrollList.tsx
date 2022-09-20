import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import LaunchItem from "./LaunchItem";
import { InView } from "react-intersection-observer";

const LIST_LAUNCHES = gql`
  query ListLaunches($offset: Int!, $limit: Int!) {
    launches: launchesPast(
      offset: $offset # start at the first result
      limit: $limit # limit to 10 launches
      sort: "launch_date_utc" # sort by launch date...
      order: "desc" # ...in descending order
    ) {
      id
      mission_name
      rocket {
        rocket_name
      }
    }
  }
`;

const InfiniteScrollList = () => {
  const { fetchMore, data, loading, error } = useQuery(LIST_LAUNCHES, {
    variables: { limit: 10, offset: 0 },
  });

  if (loading) {
    return <h2>Loading....</h2>;
  }
  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className="h-64 overflow-auto">
      <ul className="p-5">
        {data.launches.map((launch: any) => {
          return <LaunchItem launch={launch} />;
        })}
        {data && (
          <InView
            onChange={(inView) => {
              if (inView) {
                fetchMore({
                  variables: {
                    offset: data.launches.length,
                  },
                });
              }
            }}
          />
        )}
      </ul>
    </div>
  );
};

export default InfiniteScrollList;
