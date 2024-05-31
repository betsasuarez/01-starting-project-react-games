import { CORE_GAMES } from './data.js';

function Header() {
  return (
    <header>
      <h1>Video Games</h1>
      <p>
        Games you need to play if you want to understand the  generation!
      </p>
    </header>
  );
}

function CoreGames(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Let's begin!</h2>
        <section id="core-concepts">
          <h2>Top Titles</h2>
          <ul>
            {CORE_GAMES.map((game) => (
              <CoreGames 
                key={game.title}
                image={game.image}
                title={game.title}
                description={game.description}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
