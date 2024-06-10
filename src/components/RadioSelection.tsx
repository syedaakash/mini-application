import React from "react";
import { UseDispatch, UseSelector, useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setSelectedOption } from "../slices/radioSelectionSlice";

interface RadioOption {
    value: string;
    label: string;
}

interface RadioSelectionProps {
    options: RadioOption[];
}

const RadioSelection: React.FC<RadioSelectionProps> = ({options}) => {
    const dispatch = useDispatch();
    const selectedOption = useSelector((state: RootState) => state.radioSelection.selectedOption)

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSelectedOption(event.target.value))
    }
    return(
    <div>
        <h2 className="text-xl mb-4 font-bold">Radio Selector</h2>
        {options.map((option) => (
            <label key={option.value} className="block mb-2">
            <input 
                type="radio" 
                value={option.value}
                checked={selectedOption == option.value}
                onChange={handleOptionChange}
                className="mr-2"
                />
                {option.label}
            </label>
        ))}
    </div>
)
}

export default RadioSelection;