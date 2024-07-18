import './App.css';
import Button from './Button';

function App() {

  const foo = (value) => {
    alert(value);
  }

  return (
    <div className="App">
      <Button btnName={"All"} foo={foo} />
      <Button btnName={"Music"}  foo={foo} />
      <Button btnName={"Cinema"}  foo={foo} />
      <Button btnName={"Sportz"}  foo={foo} />
      <Button btnName={"Books"}  foo={foo} />
      <Button btnName={"Bikes"}  foo={foo} />
      <Button btnName={"Cars"}  foo={foo} />
      <Button btnName={"Movies"}  foo={foo} />
    </div>
  );
}

export default App;
