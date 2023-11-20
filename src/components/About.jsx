import Banner from "../assets/banner.jpg";

const About = () => {
  return (
    <div className="flex flex-col h-screen bg-red-700 text-white">
      <img src={Banner} alt="" className="" />
      <div className="flex flex-col py-5 justify-center gap-10 h-full">
        <h1 className="text-center text-5xl">Hakkımızda</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolor
          voluptatibus alias, sequi quis asperiores error aut qui. Nostrum,
          ullam.
        </p>
      </div>
    </div>
  );
};

export default About;