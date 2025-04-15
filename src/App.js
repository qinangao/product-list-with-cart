import product from "./data";
console.log(product);
function App() {
  return <div className="App">{product[0].name}</div>;
}

export default App;
