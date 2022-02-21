import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { React, useEffect, useState } from "react";
import { storage } from "./firebase-config";
export const ImageUrl = () => {
  const [progress, setProgess] = useState(0);
  const [images, setImages] = useState([]);
  const [load, setLoad] = useState("upload");
  const [urls, setUrls] = useState([]);
  const handleChange = (e) => {
    for (let i = 0; i < e.length; i++) {
      const newImage = e[i];
      newImage["id"] = i;
      setImages((prev) => [...prev, newImage]);
    }
  };

  const uploadFiles = () => {
    images.map((image, index) => {
      const promises = [];
      const storageRef = ref(storage, `/images/${index}${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          setProgess(
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
          );
        },
        (err) => console.log(err),
        async () => {
          const res = await getDownloadURL(uploadTask.snapshot.ref);
          console.log(res);
          setUrls((prev) => [...prev, res]);
        }
      );
      Promise.all(promises)
        .then(() => setLoad("uploaded"))
        .catch((err) => console.log(err));
   
    });
  };
  useEffect(() => {
    uploadFiles();
  }, [images]);
  return { urls, progress, handleChange, load };
};
