import Tracker from "@/components/Tracker.jsx";
import Board from "../components/Board.jsx";

export default function Home() {
  return (
    <main className="flex-column h-screen">
      <header className="flex justify-center p-4">
        <h1 className="text-2xl">Tic Tac Toe</h1>
        {/* some sort of header image */}
      </header>
      {/* Tic Tac Toe Board */}
      <Board />
    </main>
  );
}
