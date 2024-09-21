import { ReactNode } from "react";

const SpecialLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <header></header>
      <nav></nav>
      <main>{children}</main>
    </div>
  );
};

export default SpecialLayout;