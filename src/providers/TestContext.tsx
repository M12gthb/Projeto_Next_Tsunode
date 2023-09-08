"use client";

import { ReactNode, createContext, useState } from "react";

export const TestContext = createContext({});

interface ITestProviderPros {
  children: ReactNode;
}

export default function TestProvider({ children }: ITestProviderPros) {
  const [test, setTest] = useState("test");

  return (
    <TestContext.Provider value={{ test }}>{children}</TestContext.Provider>
  );
}
