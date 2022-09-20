import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import LaunchItem from "./LaunchItem";
import { InView } from "react-intersection-observer";

const LIST_LAUNCHES = gql`
  query ListLaunches($limit: Int!, $offset: Int!) {
    launchesPast(limit: $limit, offset: $offset) {
      id
      mission_name
    }
  }
`;

const PAGE_SIZE = 10;

const LaunchList = () => {
  const [page, setPage] = useState(0);
  const { fetchMore, data, loading, error } = useQuery(LIST_LAUNCHES, {
    variables: {
      limit: PAGE_SIZE,
      offset: page * PAGE_SIZE,
    },
  });

  if (loading) {
    return <h2>Loading....</h2>;
  }
  if (error) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className="flex flex-row justify-around">
      <button
        disabled={!page}
        onClick={() => setPage((prev) => prev - 1)}
        className="btn"
      >
        Prev
      </button>
      <ul className="p-5">
        {data.launchesPast.map((launch: any) => {
          return <LaunchItem launch={launch} />;
        })}
  
      </ul>
      <button onClick={() => setPage((prev) => prev + 1)} className="btn">
        Next
      </button>
    </div>
  );
};

export default LaunchList;
