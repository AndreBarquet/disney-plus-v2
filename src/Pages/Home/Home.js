import React, { useEffect } from "react";
import CarouselSilder from "../../components/Carousel/Carousel";
import { retrieveAllMovies } from "../../models/movies";

const Home = props => {

  async function getMovies() {
    debugger;
    const response = await retrieveAllMovies();
    debugger;
  }

  useEffect(() => {

    getMovies()

  }, [])


  return (
    <div>
      <span>Home Page</span>
      <CarouselSilder></CarouselSilder>
    </div>
  );
}

export default Home;
