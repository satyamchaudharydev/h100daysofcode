import React from "react";
import { useTask } from "../context/Task";
function ArchiveTasks() {
  const { archive, updateArchive } = useTask();
  return (
    <>
      {
        <div className="archive-tasks fixed" onClick={() => updateArchive()}>
          {archive.length} items removed
        </div>
      }
    </>
  );
}

export default ArchiveTasks;
