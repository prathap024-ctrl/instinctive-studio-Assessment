import IncidentList from "./components/IncidentList";
import IncidentPlayer from "./components/IncidentPlayer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 p-4 gap-4">
        <div className="w-2/3">
          <IncidentPlayer />
        </div>
        <div className="w-1/3">
          <IncidentList />
        </div>
      </div>
    </main>
  );
}
