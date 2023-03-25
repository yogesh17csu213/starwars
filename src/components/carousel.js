import React from "react";
import { Carousel } from "react-bootstrap";

export default function CarouselMovies() {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://rare-gallery.com/uploads/posts/4533404-soldier-clone-trooper-war-star-wars-battlefront-beta-star-wars-battlefront-star-wars-star-wars-the-clone-wars-weapon-battle-field-battlefield-video-games-digital-art-artwork-science-fiction.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>The Empire Strikes Back</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://rare-gallery.com/uploads/posts/941055-Star-Wars-Jedi-laser-swords-laser-pistol-mask-Star-Wars-The-Force-Awakens.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>The Phantom Menace</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://rare-gallery.com/uploads/posts/4536773-kylo-ren-dan-mumford-star-wars-star-wars-the-force-awakens-artwork-concept-art-lightsaber-science-fiction-movies.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Return of the Jedi</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
