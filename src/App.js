import { Gender } from "./components/Gender/Gender";
import GenderList from "./components/GenderList/GenderList";
import { Name } from "./components/Name/Name";

function App() {
  return (
    <main>
      <section>
        <Name />
        <Gender />
      </section>
      <section>
        <GenderList />
      </section>
    </main>
  );
}

export default App;
