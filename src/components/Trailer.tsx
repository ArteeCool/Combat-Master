const Trailer = () => {
  return (
    <>
      <div className="w-full min-h-[50vh] text-lg sm:text-xl md:text-2xl text-neutral-300">
        <div className="flex flex-col lg:flex-row justify-around p-8 gap-10 items-center">
          <div className="flex flex-col w-full max-w-[800px]">
            <h1>About</h1>
            <p>
              Join fast-paced action-packed combat. Play Combat Master -- AAA
              experience on any hardware. Best-in-class multiplayer gunfight.
              Next-level extreme performance. Lightning-speed loading time and a
              whole lot more.
            </p>
          </div>
          <iframe
            className="aspect-video rounded max-w-[700px]"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/QwUk2VSnNOI?si=Gtk4JfSPt3CCtDHB"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Trailer;
