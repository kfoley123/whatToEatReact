import Header from "./components/Header/Header";
import Recipe from "./components/Recipe/Recipe";

function App() {
    return (
        <>
            <Header />
            <Recipe ingredients={[]} />
        </>
    );
}

export default App;
