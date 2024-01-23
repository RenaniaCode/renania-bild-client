import ImageGallery from "react-image-gallery";
import { useLocation } from "react-router-dom";
import "./Gallery.scss";
import "react-image-gallery/styles/scss/image-gallery.scss";
import { Potrait, MyVision, Events } from "../../../../assets/Data/UrlImages";

export function Gallery() {
  const location = useLocation().pathname;
if (location === "/Galleries/Potrait") {
    return (
      <div id="GalleryBox">
        <ImageGallery
          id="imageGallery"
          items={Potrait}
          showPlayButton={false}
          showBullets={false}
          showThumbnails={false}
        />
      </div>
    );
  }
  if (location === "/Galleries/MyVision") {
    return (
      <div id="GalleryBox">
        <ImageGallery
          id="imageGallery"
          items={MyVision}
          showPlayButton={false}
          showBullets={false}
          showThumbnails={false}
        />
      </div>
    );
  }
  if (location === "/Galleries/Events") {
    return (
      <div id="GalleryBox">
        <ImageGallery
          id="imageGallery"
          items={Events}
          showPlayButton={false}
          showBullets={false}
          showThumbnails={false}
        />
      </div>
    );
  }
}
