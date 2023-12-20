import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Details from "./Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import AdoptContext from "./AdoptedContext";

const App = () => {
  const adoptedPet = useState(null);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });
  return (
<<<<<<< HEAD
    <AdoptContext.Provider value={adoptedPet}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <div>
            <header>
              <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
              <Route path="/" element={<SearchParams />} />
              <Route path="/details/:id" element={<Details />} />
            </Routes>
          </div>
        </QueryClientProvider>
      </BrowserRouter>
    </AdoptContext.Provider>
=======
    <div className="m-0 p-0">
      <AdoptContext.Provider value={adoptedPet}>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <div>
              <header className="mb-10 w-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 p-7 text-center">
                <Link
                  to="/"
                  className="text-6xl text-white hover:text-gray-200"
                >
                  Adopt Me!
                </Link>
              </header>
              <Routes>
                <Route path="/" element={<SearchParams />} />
                <Route path="/details/:id" element={<Details />} />
              </Routes>
            </div>
          </QueryClientProvider>
        </BrowserRouter>
      </AdoptContext.Provider>
    </div>
>>>>>>> 63ff20b (chore:for the tailwind)
  );
};

let container = document.getElementById("root");

let root = createRoot(container);

root.render(<App />);
