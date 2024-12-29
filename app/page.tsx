import React from "react";
import About from "./components/About";
import Nav from "./components/Navbar";

const Home = () => {
  return (
    <div className="w-screen min-h-screen overflow-y-auto font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow p-8 mx-8 mt-8 border">
          <div className="grid grid-cols-5">
            <div className="col-span-2">
              <About />
            </div>
            <div className="col-span-3">
              <Nav />
            </div>
          </div>
        </main>
        {/* Footer at the bottom */}
        <footer className="ml-8 text-xs">
          <code>© John Alesi</code>
        </footer>
      </div>
    </div>
  );
};

export default Home;
