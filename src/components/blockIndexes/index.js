import React, { useEffect, useState } from "react";

import { IndexesItem } from "../indexItem";
import { Loading } from "../loading";

import { getIndex } from "../../api";

import "./style.css";

export const IndexesBlock = ({ group }) => {
  const [groupIndexes, setGroupIndexes] = useState([]);

  useEffect(() => {
    Promise.all(group.indexes.map((i) => getIndex(i))).then((result) => {
      setGroupIndexes(result);
    });
  }, [group]);

  return (
    <div className="indexesBlock">
      <h2>{group.name}</h2>
      {groupIndexes.length ? (
        <div>
          {groupIndexes.map((item) => {
            return <IndexesItem key={item.id} item={item} />;
          })}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
