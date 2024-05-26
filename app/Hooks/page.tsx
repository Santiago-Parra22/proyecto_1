import Header from "../components/Header.jsx" ;
import Aside from "../components/Aside.jsx"
export default function  Hooks(){
    return(
        <>
        <div>
           <Header/>         
        </div>
        <div className="flex-1 flex">
        <aside>
          <Aside/>
        </aside>
        
           <main className="flex-1 p-6">
           <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
             Hooks
             </h1>
           <p className="mt-4 text-gray-600 dark:text-gray-400">
             La programacion orientada objetos es uno de los pilares del desarrollo de software puesto que nos permite desrrollar 
             un orden especifico
           </p>
           
           </main>
           </div>
           </>
    );
}
