
// import RevenueChart from './RevenueChart'
// import SalesChart from './SalesChart' // Ensure ye file exist karti ho

// const Chartsection = () => {
//   return (
//     /* Grid layout: Mobile pe 1 column, XL screens pe 3 columns */
//     <div className='grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6 w-full'>
        
//         {/* Left Side: Revenue Chart (Takes 2/3 space) */}
//         <div className='xl:col-span-2 w-full'>
//           <RevenueChart />
//         </div>
        
//         {/* Right Side: Sales Chart (Takes 1/3 space) */}
//         <div className='xl:col-span-1 w-full'>
//           <SalesChart />
//         </div>
//     </div>
//   )
// }

// export default Chartsection



import React from 'react'
import RevenueChart from './RevenueChart'
import SalesChart from './SalesChart'

const Chartsection = () => {
  return (
    /* lg:grid-cols-3 se charts side-by-side aayenge */
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 w-full px-4'>
        
        {/* Left Side: Revenue Chart (Takes 2 columns) */}
        <div className='lg:col-span-2'>
          <RevenueChart />
        </div>
        
        {/* Right Side: Sales Chart (Takes 1 column) */}
        <div className='lg:col-span-1'>
          <SalesChart />
        </div>
        
    </div>
  )
}

export default Chartsection