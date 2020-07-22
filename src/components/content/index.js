import React, { useEffect, useState } from "react";

import { IndexesBlock } from "../blockIndexes";
import { Loading } from "../loading";

import { getGroupIds, getGroup } from "../../api";

import "./style.css";

export const Content = () => {
  const [group, setGroup] = useState([]);

  useEffect(() => {
    getGroupIds().then((res) => {
      Promise.all(res.map((index) => getGroup(index))).then((result) => {
        setGroup(result);
      });
    });
  }, []);

  return (
    <div className="content">
      <h1>All Indexes</h1>
      {group.length ? (
        group.map((item) => {
          return <IndexesBlock key={item.name} group={item} />;
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};
