
import User from "./components/User";
import data from "./data/data";


function App() {
 
  return (
    <div className=" p-8 rounded-lg shadow-md mx-auto max-w-md bg-white">
    <h1 className="text-2xl font-bold">Room</h1>
    <p> 5 people are around right now</p>
   <ul className="flex flex-col gap-4">
   {data.map((user) => (
   <li> <User key={user.id} name={user.name} Work={user.Work} photo={user.photo}  connected={user.connected} />
   </li>
   ))}
  </ul>
  </div>
  );
}

export default App;