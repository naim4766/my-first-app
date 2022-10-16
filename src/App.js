import Hero from "./app/componente/Hero";
import Nav from "./app/componente/Nav"
import MoveList from "./app/componente/MoviList";


function App() {
  return (
    
    <div className='bg-slate-800 min-h-screen'>
      <div fill="#242635" className="max-w-5xl mx-auto p-5">
         <Nav />
         <Hero />
         <MoveList
          title="Top Rated 🔥"
         />
          <MoveList
          title="thiter 🔥"
         />
          

      </div>
      <div className="text-white text-center py-4"> Build with ♥ by Naimul islam</div>
    </div>
     
  
  );
}

export default App;
