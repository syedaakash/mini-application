import React, {useState} from "react";

const  DiscountCodeEntry: React.FC = () => {
    const [code, setCode] = useState<string>('')

    const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCode(event.target.value)
    }

    const validateCode = () => {
        const pattern = /^DISCOUNT2024$/
        return pattern.test(code)
    }

    return (
        <div>
            <h2 className="text-xl mb-4 font-bold">Discount Code Entry</h2>
            <input 
                type="text"
                value={code}
                onChange={handleCodeChange}
                placeholder="Enter Discount Code"
                className="border border-gray-300 rounded-md p-2 mb-2"
             />

            {code && (
                <div className={`text-sm ${validateCode() ? 'text-green-500' : 'text-red-500'}`}>
                {validateCode() ? 'Valid code' : 'Invalid code'}
                </div>
            )}
        </div>
    )
}

export default DiscountCodeEntry;