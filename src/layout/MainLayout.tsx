import { Outlet } from "react-router";
import { Header } from "../components/Header";

function MainLayout() {
  return (
    <main>
      <Header />
      <Outlet></Outlet>
    </main>
  );
}

export { MainLayout };