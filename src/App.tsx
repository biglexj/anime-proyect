import { Outlet } from "react-router-dom";
import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-100">
      <Header />
      {/* <Sidebar /> */}
      <Outlet />
    </div>
  );
}
