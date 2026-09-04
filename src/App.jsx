
function User(props) {
  return (
    <div className="bg-amber-900 text-white p-4 m-4 rounded">
      <h2>{props.name}</h2>
      
    </div>
  );
}

function App() {
 return (
  <>
  <h1>ROOM</h1>
  <p> 5 people are around right now </p>
  <User avatar=""  alt="Dale Houston" name="Dale Houston "  />
  <User  avatar src="" alt="Madge Murphy" name="Madge Murphy"  />
  <User  avatar src="" alt="Margaret Garner" name="Margaret Garner"  />
  <User avatar src="" alt="Gertrude Roberts" name="Gertrude Roberts"  />
  <User avatar src="" alt="Joshua Oison" name="Joshua Oison"  />

  </>
 );
}
export default App;
