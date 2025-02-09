import i1 from "../assets/gnx.jpeg";
import i2 from "../assets/weeknd_album.jpg";
import i3 from "../assets/dtmf.jpg";
import i4 from "../assets/chromakopia.jpg";
import i5 from "../assets/submarine.jpg";
import i6 from "../assets/fbart.webp";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Gallery() {
  const images = [
    {
      original: i2,
      thumbnail: i2,
      originalHeight: 420,
      description: "The Weeknd",
    },

    {
      original: i3,
      thumbnail: i3,
      originalHeight: 420,
      description: "Bad Bunny",
    },
    {
      original: i1,
      thumbnail: i1,
      originalHeight: 420,
      description: "Kendrick Lamar",
    },
    {
      original: i4,
      thumbnail: i4,
      originalHeight: 420,
      description: "Tyler, The Creator",
    },
    {
      original: i6,
      thumbnail: i6,
      originalHeight: 420,
      description: "Tyler, The Creator",
    },
    {
      original: i5,
      thumbnail: i5,
      originalHeight: 420,
      description: "The Marias",
    },
  ];
  return (
    <ImageGallery
      items={images}
      autoPlay
      infinite
      showFullscreenButton={false}
      showPlayButton={false}
    />
  );
}
