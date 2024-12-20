const Banner = () => {
  return (
      <div className="w-full">
          {/* Carousel Container */}
          <div className="carousel w-full sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
              {/* Slide 1 */}
              <div id="slide1" className="carousel-item relative w-full">
                  <img
                      src="https://travel.state.gov/content/travel/en/us-visas/_jcr_content/tsg-rwd-content-page-parsys/slideshow.img.png/1611680187892.png"
                      alt="Visa Consultancy"
                      className="w-full h-full object-cover"
                  />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#slide3" className="btn btn-circle bg-blue-500 hover:bg-blue-700 text-white">❮</a>
                      <a href="#slide2" className="btn btn-circle bg-blue-500 hover:bg-blue-700 text-white">❯</a>
                  </div>
              </div>

              {/* Slide 2 */}
              <div id="slide2" className="carousel-item relative w-full">
                  <img
                      src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Faf1f38b0-166e-4851-97bc-30f26e2056ec.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"
                      alt="Travel Documents"
                      className="w-full h-full object-cover"
                  />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#slide1" className="btn btn-circle bg-blue-500 hover:bg-blue-700 text-white">❮</a>
                      <a href="#slide3" className="btn btn-circle bg-blue-500 hover:bg-blue-700 text-white">❯</a>
                  </div>
              </div>

              {/* Slide 3 */}
              <div id="slide3" className="carousel-item relative w-full">
                  <img
                      
                      src="https://highbrow.com.pk/wp-content/uploads/2024/05/visa-consultancy.jpg"
                      alt="Visa Process"
                      className="w-full h-full object-cover"
                  />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#slide2" className="btn btn-circle bg-blue-500 hover:bg-blue-700 text-white">❮</a>
                      <a href="#slide1" className="btn btn-circle bg-blue-500 hover:bg-blue-700 text-white">❯</a>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Banner;
