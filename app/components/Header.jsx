export default function Header(){
    return(
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className='flex items-start'>
          <img 
          src="https://talentotechbogota.co/images/logo_talento.svg" 
          alt="talentoTech" width="200"/>
          </div>
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              React
            </a>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                <a href="/docs" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">
                  Docs
                </a>
                <a href="/tutorial" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">
                  Tutorial
                </a>
                <a href="/blog" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">
                  Blog
                </a>
                <a href="/community" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">
                  Community
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 18l6 6m2-2a9 9 0 111-1"></path>
                </svg>
              </div>
            </div>
            <a href="/versions" className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white">
              v18.3.1
            </a>
          </div>
        </nav>
      </header>
     
    );
}