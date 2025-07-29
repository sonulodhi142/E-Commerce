import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import banner_mens from '../Assets/banner_mens.png';
import banner_womens from '../Assets/banner_women.png';
import banner_kids from '../Assets/banner_kids.png';

function HomeCrousal() {
  return (
    <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <div
          style={{
            width: "100%",
            height: "300px",
            position: "relative",
            left: "5%",
          }}
        >
          <img src={banner_mens} style={{ width: "90%", height: "300px" }} alt="mens"></img>
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <div
          style={{
            width: "100%",
            height: "300px",
            position: "relative",
            left: "5%",
          }}
        >
          <img src={banner_kids} style={{ width: "90%", height: "300px" }} alt="kids"></img>
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <div
          style={{
            width: "100%",
            height: "300px",
            position: "relative",
            left: "5%",
          }}
        >
          <img src={banner_womens} style={{ width: "90%", height: "300px" }} alt="womens"></img>
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCrousal;
