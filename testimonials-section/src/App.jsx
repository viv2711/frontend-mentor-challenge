import Card from "./Card";
import card from "./cardDetails"
function App() {
  return (
    <main>
      <section className="main-section">
        <Card {...card[0]} />
        <Card {...card[1]} />
        <Card {...card[2]} />
        <Card {...card[3]} />
        <Card {...card[4]} />
      </section>
    </main>
  );
}

export default App;
