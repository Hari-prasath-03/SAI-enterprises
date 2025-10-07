import { finalvideo, play } from "../assets";

const FinalVideo = () => {
  return (
    <section id="final-video" className="py-20">
      <div
        className="min-h-[85vh] bg-center bg-cover relative flex justify-center items-center"
        style={{ backgroundImage: `url(${finalvideo})` }}
      >
        <img src={play} alt="play" className="bg-yellow p-5 size-20" />
      </div>
    </section>
  );
};

export default FinalVideo;
