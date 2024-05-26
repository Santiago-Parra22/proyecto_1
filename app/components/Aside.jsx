export default function Aside(){
    
    return( 
    
        <aside className="w-64 bg-gray-200 dark:bg-gray-800 p-4 hidden lg:block">
          <nav className="space-y-1">
            <h3 className="text-gray-600 dark:text-gray-400 text-sm font-semibold">Talent-tech</h3>
            <button className="btn dropdown-toggle className=text-gray-900 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
            type="button"
            aria-expanded="false">
                POO(Programming oriented objects)
            </button>
            <ul>
                <span className="text-gray-900 dark:text-white block px-3 py-2 rounded-md text-base font-medium dropdown-item">
                <a href="/">Metodos</a>
               <li href="/">Atributos</li>
               <li href="/">Herencia</li>
               <li href="/">Constructores</li>
               </span> 
            </ul>

            <button className="btn dropdown-toggle className=text-gray-900 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
            type="button"
            aria-expanded="false">
               Hooks
            </button>
            <ul>
                <span className="text-gray-900 dark:text-white block px-3 py-2 rounded-md text-base font-medium dropdown-item">
                <a href="/">HandleClick</a>
               <li href="/">VEntajas</li>
               <li href="/">Control</li>
               <li href="/">Estructura</li>
               </span> 
            </ul>
          </nav>
        </aside>
        );
}