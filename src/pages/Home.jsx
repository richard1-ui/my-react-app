import bannerImg from "../assets/Home-Hero.webp"
function Home() {
  return (
    <>
      <section className="relative min-h-[650px] bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${bannerImg})` }} >
        {/* <div className="absolute inset-0 bg-black/70"></div> */}
        
        <div className="container mx-auto">
        
          <div className="relative max-w-7xl max-auto px-6 w-full">

            <h1 className="text-6xl font-bold leading-tight mb-6">
              Cybersecurity courses <br />
              for the real world
            </h1>

            <p className="text-2xl font-semibold max-w-[485px]">
              Get certified with the industry leaders in cybersecurity
              training and AI security
            </p>

          </div>
        </div>

      </section>
    </>
  );
}

export default Home;