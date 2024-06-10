import React from 'react';
import './App.css';
import RadioSelection from './components/RadioSelection';
import DiscountCodeEntry from './components/DiscountCodeEntry';

const App: React.FC = () => {
  const options = [
    { value: 'Option A', label: 'Option A' },
    { value: 'Option B', label: 'Option B' },
    { value: 'Option C', label: 'Option C' },
  ];

  return (
    <div className='min-h-screen p-10 bg-gray-100 flex flex-col gap-10'>
      <h1 className='text-2xl font-bold mb-6 text-center'>Mini Application</h1>
      <RadioSelection options={options}/>
        <DiscountCodeEntry />
    </div>
  )
}

export default App;
