import React, {useState} from "react";

const DiscountCodeGenerator: React.FC = () => {
    const [generateCode, setGenerateCode] = useState<string | null>(null)

    const generateDiscountCode = () => {
        const newCode = `NEWCODE${Math.floor(100 + Math.random() * 900)}`
        setGenerateCode(newCode)
    }

    return (
        <div>
            <h2 className="text-xl mb-4">Generate Discount Code</h2>
            <button 
                onClick={generateDiscountCode}
                className="bg-blue-500 text-white p-2 rounded-md">
                Generate Discount Code
            </button>
            {
                generateCode && (
                    <div className="mt-4 text-green-500 text-lg">
                        New Discount Code: {generateCode}
                    </div>
                )
            }
        </div>
    )
}

export default DiscountCodeGenerator;