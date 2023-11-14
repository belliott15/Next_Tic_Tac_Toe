import Board from "./components/Board.jsx";

export default function Home() {
  return (
    <main>
      <header>
        <h1>Tic Tac Toe</h1>
        {/* some sort of header image */}
      </header>
      {/* Tic Tac Toe Board */}
      <section>
        <h1>Current Player: </h1>
        <Board />
        <button>button to undo</button>
        <button>button to reset</button>
      </section>
      {/* Tracking Section */}
      <section>
        <p>Track X wins</p>
        <p>Track X Loses</p>
        <p>Track O wins</p>
        <p>Track O Loses</p>
      </section>
    </main>
  );
}
