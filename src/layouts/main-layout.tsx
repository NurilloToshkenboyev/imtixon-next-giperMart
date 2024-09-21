import React from "react";
import { Header } from "./Header/header";
import { Footer } from "./Footer/footer";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="container">
        <div
          style={{ display: "flex", flexDirection: "column" }}
          className="flex flex-col  w-full"
        >
          <header
            style={{
              width: "100%",
              background: "white",
              position: "sticky",
              top: "0",
            }}
            className=" flex justify-between items-center z-50"
          >
            <Header />
          </header>

          <main style={{ paddingBottom: "20px" }} className="bg-secondary">
            {children}
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
};