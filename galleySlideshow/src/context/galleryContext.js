import { createContext, useContext } from "react";

const GalleryContext = createContext();

export function useGalleryContext() {
  return useContext(GalleryContext);
}

export function galleryProvider(children) {
  return (
    <GalleryContext.Provider value={{}}>{children}</GalleryContext.Provider>
  );
}
