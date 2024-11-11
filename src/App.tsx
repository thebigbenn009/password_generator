import Setup from "./components/Setup";
import Title from "./components/Title";
import "./index.css";
const App = () => {
  return (
    <main>
      <Title title="password generator" />
      {/* <Password/> */}
      <Setup />
    </main>
  );
};

export default App;
