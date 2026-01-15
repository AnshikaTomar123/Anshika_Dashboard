// import React, { useState } from 'react';
// import Sidebar from './components/Layout/Sidebar';
// import Header from './components/Layout/Header';
// import Dashboard from './components/Dashboard/Dashboard';
// function App() {
//   const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
//   const [currentPage, setCurrentPage] = useState("dashboard");

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
//       <div className="flex h-screen">
//         <Sidebar 
//           collapsed={sideBarCollapsed} 
//           onToggle={() => setSideBarCollapsed(!sideBarCollapsed)}
//           currentPage={currentPage}
//           onPageChange={setCurrentPage}
//         />
        
//         <div className="flex-1 flex flex-col overflow-hidden">
//           <Header />
//            </div>
//           {/* This container must be inside the <div className="flex-1 flex flex-col overflow-hidden"> */}
// {/* <main className="flex-1 overflow-y-auto bg-transparent">
//   <div className="p-6 space-y-6"> 
//     {currentPage === "dashboard" && <Dashboard />}
//   </div>
// </main> */}
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");



return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
    {/* 1. Main Wrapper: Isse poori screen flex banti hai */}
    <div className="flex h-screen overflow-hidden">
      
      {/* 2. Sidebar: Iski width aapke Sidebar component se control ho rahi hai */}
      <Sidebar 
        collapsed={sideBarCollapsed} 
        onToggle={() => setSideBarCollapsed(!sideBarCollapsed)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

      {/* 3. Content Wrapper: 'flex-1' ensures it takes the REST of the screen width */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Header fixed upar rahega */}
        <Header />

        {/* 4. Scrollable Area: Sirf ye part scroll hoga */}
        <main className="flex-1 overflow-y-auto bg-transparent">
          <div className="p-6 space-y-6">
            {currentPage === "dashboard" && <Dashboard />}
            {/* Baaki pages yahan add honge */}
          </div>
        </main>
      </div>
    </div>
  </div>
);
}

export default App;