function App() {
  return (
    <main>
      <div className="img-container">
        <img src="image-equilibrium.jpg" alt="img" />
      </div>
      <h1>Equilibrium #3429</h1>
      <p>Our Equilibrium collection promotes balance and calm.</p>
      <div className="ethereum-section">
        <div className="ethereum-info">
          <img src="./icon-ethereum.svg" alt="ethereun-icon" />
          <p>0.041ETH</p>
        </div>
        <div className="time-left-info">
          <img src="./icon-clock.svg" alt="clock-icon" />
          <p>3 days left</p>
        </div>
      </div>
      <div className="hr"/>
      <div className="profile">
        <img src="./image-avatar.png" alt="" />
        <p>Creation of <span>Jules Wyvern</span></p>
      </div>
    </main>
  );
}

export default App;
