import React from "react";

export const ViewImageButton = () => {
  return (
    <>
      <button className="view__image--btn">
        <img src="/assets/shared/icon-view-image.svg" alt="view-image" />
        <p className="uppercase lt-spacing-3">View Image</p>
      </button>
    </>
  );
};
