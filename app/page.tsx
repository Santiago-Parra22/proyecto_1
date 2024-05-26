import React from 'react';
import Header from "./components/Header";
import Aside from './components/Aside';

export default function Home() {

  return (
    <div >
      <header >
        <Header/>
      </header>

      <div className="flex-1 flex">
        <aside>
          <Aside/>
        </aside>
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Bienvenido a la documentación de React</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Aquí encontrarás toda la información necesaria para empezar a trabajar con React.
          </p>
          <img
                src="https://talentotechbogota.co/images/logo_talento.svg"
                alt="talentoTech" width="1500" />
        </main>
      </div>
    </div>
  );
}


