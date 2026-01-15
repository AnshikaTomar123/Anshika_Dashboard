
import Chartsection from './Chartsection';
import StatesGrid from './StatesGrid';
import Tablesection from './Tablesection';
import TopProducts from './TopProducts';
import Activity from './Activity';

const Dashboard = () => {
  return (
    <div className='p-6 space-y-6 w-full animate-in fade-in duration-500'>
        <StatesGrid />

        {/* Middle Section: Revenue Chart (2/3) & Sales Chart (1/3) */}
        <Chartsection />
        <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
       <Tablesection />
        </div>
    <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
       <TopProducts />
        </div>
        <Activity />
    </div>
  );
};

export default Dashboard;