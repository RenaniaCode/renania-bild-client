import ImageGallery from "react-image-gallery";
import "./Gallery.scss";
import "react-image-gallery/styles/scss/image-gallery.scss";
import Img1 from "../../../../assets/Images/Images/Portrait.jpg";
import Img2 from "../../../../assets/Images/Images/Events.jpg";
import Img3 from "../../../../assets/Images/Images/Ballon.jpg";

export function Gallery() {
  const images = [
    {
      original:
        "https://res.cloudinary.com/renaniacode/image/upload/v1703701943/renania-bild/Images/jdpuupbvjdzsp7ovibwk.jpg",
      thumbnail:
        "https://res.cloudinary.com/renaniacode/image/upload/v1703701943/renania-bild/Images/jdpuupbvjdzsp7ovibwk.jpg",
    },
    {
      original:
        "https://res.cloudinary.com/renaniacode/image/upload/v1703701943/renania-bild/Images/au7ierkrnk5mjwodehjk.jpg",
      thumbnail:
        "https://res.cloudinary.com/renaniacode/image/upload/v1703701943/renania-bild/Images/au7ierkrnk5mjwodehjk.jpg",
    },
    {
      original:
        "https://res.cloudinary.com/renaniacode/image/upload/v1703701942/renania-bild/Images/ebr8cho1bgaxgiftfz7p.jpg",
      thumbnail:
        "https://res.cloudinary.com/renaniacode/image/upload/v1703701942/renania-bild/Images/ebr8cho1bgaxgiftfz7p.jpg",
    },
  ];
  return (
    <div id="GalleryBox">
      <ImageGallery 
      id="imageGallery"
      items={images}
      showPlayButton={false}
      thumbnailPosition="right"
      showBullets={true}
      />
    </div>
  );
}
