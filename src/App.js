
import './App.css';

// function App() {
//   return (
//     <section>
//       <h1>hello {new Date().toLocaleTimeString()}</h1>
//     </section>
//   )
// }

const InnerCompo = () =>{
  return <h1>Inner Component</h1>
}
const PrintName = () =>{
  // return <h1>Hello emma</h1>
  return <InnerCompo/>;
}

const App = () =>{
  const user = {
    firstName:"emma",
    lastName:"watson",
  }

  return (
    <div>
          <h1>Hello {user.firstName} {user.lastName}</h1>
          <PrintName />
          <PrintName />
          <PrintName />

    </div>
    
  );
}
export default App;
