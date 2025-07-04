function App() {
  return (
    <main className="flex flex-col items-center mt-12">
      <h1 className="font-light text-2xl text-grey-700">
        Reliable, efficient delivery
      </h1>
      <h1 className="font-semibold text-2xl text-grey-500">
        Powered by Technology
      </h1>
      <p className="text-grey-700 text-[0.8rem] sm:max-w-[29rem] max-w-[17rem] text-center my-4">
        Our Artificial intelligence powered books use millions of project data
        points to ensure that your project is successfull
      </p>
      <div className="sm:min-w-[60%] sm:grid sm:grid-cols-3 sm:max-h-[30rem] sm:items-center mt-[2rem] flex flex-col gap-8 ">
        <div className="card border-cyan">
          <h2 className="">Supervisor</h2>
          <p>Monitors activity to identify project roadblocks</p>
          <img src="icon-supervisor.svg" alt="" />
        </div>
        <div className="flex flex-col gap-8 sm:gap-[1.5rem]">
          <div className="card border-red">
            <h2>Team Builder</h2>
            <p>
              Scans our talent network to create the optimal team for your
              project
            </p>
            <img src="icon-team-builder.svg" alt="" />
          </div>
          <div className="card border-orange">
            <h2>Karma</h2>
            <p>Regularly evaluates our talent to ensure quality</p>
            <img src="icon-karma.svg" alt="" />
          </div>
        </div>
        <div className="card border-blue">
          <h2>Calculator</h2>
          <p>
            Uses data from past projects to provide better delivery estimates
          </p>
          <img src="icon-calculator.svg" alt="" />
        </div>
      </div>
    </main>
  );
}

export default App;
