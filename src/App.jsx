
function User(props) {
  return (
    <div className="bg-amber-900 text-white p-4 m-4 rounded">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

function App() {
 return (
  <>
  <User name="Hedy Lamarr" age={101} />
  <User name="Ada Lovelace" age={207} />
  <User name="Grace Hopper" age={115} />
  </>
 );
}
export default App;
