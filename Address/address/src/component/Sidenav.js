import React, { useState } from "react";
import { SingleMenuItem } from "./SingleMenuItem";
import { sidenavData } from "../sidenavData";
import { useProvider } from "./StateContext";
export const Sidenav = () => {
  const { valueID, setValueID } = useProvider();
  return (
    <div className="sidenav">
      {sidenavData.map((item, index) => {
        return (
          <SingleMenuItem
            item={item}
            index={index}
            value={valueID}
            setValue={setValueID}
          />
        );
      })}
    </div>
  );
};
