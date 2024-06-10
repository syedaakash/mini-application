import React, {useState} from "react";

interface DiscountCodeEntryProps {
    validCodes: string[];
}

const  DiscountCodeEntry: React.FC<DiscountCodeEntryProps> = ({validCodes}) => {
    const [code, setCode] = useState<string>('')

    const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCode(event.target.value)
    }

    const validateCode = () => {
        return validCodes.includes(code)
    }

    return (
        <div>
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