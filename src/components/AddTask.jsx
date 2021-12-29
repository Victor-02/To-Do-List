import React, {useState} from 'react';
import Button from './Button';
import './AddTask.css';

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState("");
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
    };

    return(
        <div className="addtask-container">
            <input onChange={handleInputChange}
                value = {inputData}
                className="addtask-input" 
                type="text"
            />
            <div className="addtask-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    );
};
 
export default AddTask;