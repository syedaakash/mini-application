import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setNote } from "../slices/noteSlice";

const NoteField: React.FC = () => {
    const dispatch = useDispatch();
    const note = useSelector((state: RootState) => state.note.note)

    const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(setNote(event.target.value))
    }

    return (
        <div>
            <textarea 
             value={note}
             onChange={handleNoteChange}
             placeholder="Enter your notes here"
             className="border border-gray-300 rounded-md p-2 mb-2 w-full h-32"
            />
        </div>
    )
}

export default NoteField;