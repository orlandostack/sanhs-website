import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import client from "./lib/ApolloClient.js";
import { ApolloProvider } from "@apollo/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
