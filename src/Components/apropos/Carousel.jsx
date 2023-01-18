import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "./../../assets/Carrousel/1.jpg";
import img2 from "./../../assets/Carrousel/2.jpg";
import img3 from "./../../assets/Carrousel/3.jpg";
import img4 from "./../../assets/Carrousel/4.jpg";
import img5 from "./../../assets/Carrousel/5.jpg";

const Carrousel = () => {
  return (
    <Carousel
      className="content"
      showArrows={false}
      showThumbs={false}
      infiniteLoop
      showIndicators={false}
      autoPlay
    >
      <div>
        <img src={img1} alt="Carroussel container" />
      </div>
      <div>
        <img src={img2} alt="Carroussel container" />
      </div>
      <div>
        <img src={img3} alt="Carroussel container" />
      </div>
      <div>
        <img src={img4} alt="Carroussel container" />
      </div>
      <div>
        <img src={img5} alt="Carroussel container" />
      </div>
    </Carousel>
  );
};

export default Carrousel;
