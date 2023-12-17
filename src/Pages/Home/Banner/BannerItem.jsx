const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full ">
      <div className="carouesel-img">
        <img src={image} className="w-full " />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
        <h1 className="text-6xl text-white font-bold ">
          Affordable <br />
          Price For Car <br />
          Servicing
        </h1>
      </div>
      <div className=" absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 w-1/2">
        <p className=" text-white text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita non
          error inventore quaerat qui,orrupti corm nostrum eos facere.
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4 w-1/2">
        <button className="btn me-5 btn-info">Primary</button>
        <button className="btn btn-outline btn-info">Secondary</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle me-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
