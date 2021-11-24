import React from "react";
import useSWR from "swr";

function fetcher(_url: string) {
  return "This is fake fetcher.";
}

const IndexPage = ({ fallbackData }: any) => {
  const { data } = useSWR("any url", fetcher, { fallbackData });

  return <div>{data}</div>;
};

export default IndexPage;

export async function getServerSideProps() {
  const data = fetcher("any url");

  return { props: { fallbackData: data } };
}
