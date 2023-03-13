import React from "react";
import ImageGallery from "react-image-gallery";
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/400/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/400/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1026/1000/400/",
    thumbnail: "https://picsum.photos/id/1026/250/150/",
  },
];

const ImageSliderComponent = () => {
 

  return (
    <div>
      <div className='wrapper'>
        <ImageGallery items={images} />
      </div>
    </div>
  );
};

export default ImageSliderComponent;
