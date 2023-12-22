import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import ChakraCard from "./components/chakraCard";
import MaterialUI from "./components/MaterialUI";
import AntDCard from "./components/AntDCard";
import TodoList from "./components/TodoList";
import BatmanCard from "./components/BatmanCard";

function App() {
  return (
    <>
      {/*      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        <ChakraProvider>
          <ChakraCard />
        </ChakraProvider>
        <MaterialUI />
        <AntDCard />
        <TodoList />
      </div> */}
      <BatmanCard />
    </>
  );
}

export default App;
