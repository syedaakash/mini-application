import React from 'react';
import './App.css';
import RadioSelection from './components/RadioSelection';
import DiscountCodeEntry from './components/DiscountCodeEntry';
import DiscountCodeGenerator from './components/DiscountCodeGenerator';
import NoteField from './components/NoteField';

const App: React.FC = () => {
  const options = [
    { value: 'Option A', label: 'Option A' },
    { value: 'Option B', label: 'Option B' },
    { value: 'Option C', label: 'Option C' },
  ];
  const validDiscountCodes = ['DISCOUNT2024']

  return (
    <div className='min-h-screen p-10 bg-gray-100 flex flex-col gap-10'>
      <h1 className='text-2xl font-bold mb-6 text-center'>Mini Application</h1>
      <div>
        <h2 className="text-xl mb-4 font-bold">Radio Selector</h2>
        <RadioSelection options={options}/>
      </div>

      <div>
        <h2 className="text-xl mb-4 font-bold">Discount Code Entry</h2>
        <DiscountCodeEntry validCodes={validDiscountCodes}/>
      </div>

      <div>
        <h2 className="text-xl mb-4 font-bold">Generate Discount Code</h2>
        <DiscountCodeGenerator />
      </div>

      <div>
        <h2 className="text-xl mb-4 font-bold">Notes</h2>
        <NoteField />
      </div>
    </div>
  )
}

export default App;
