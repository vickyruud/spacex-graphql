import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import InfiniteScrollList from "../components/InfiniteScrollList";
import LaunchList from "../components/LaunchList";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <p className="text-3xl font-bold underline p-5 text-center">
        Welcome to SpaceX Launches
      </p>
      <InfiniteScrollList />
      {/* <LaunchList /> */}
    </div>
  );
};

export default Home;
