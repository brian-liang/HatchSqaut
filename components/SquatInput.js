import React, {useState} from 'react';

const SquatInput = () => {
    const [squat, setSquat] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Squat: </label>
            <input type="text" value={squat} required onChange={(e) => setSquat(e.target.value)}/>
            <input type="submit" value="Calculate"/>
        </form>
    )
}

export default SquatInput;