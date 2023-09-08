import { ReactNode } from "react";

interface ILayoutPostProps {
  children: ReactNode;
}

export default function LayoutPost({ children }: ILayoutPostProps) {
  return (
    <>
      <header>Blog Tsunode</header>
      <main>{children}</main>
    </>
  );
}
