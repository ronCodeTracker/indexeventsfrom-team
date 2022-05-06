


import { useState  } from 'react'
import Button from '@mui/material/Button';
import '../App.css';


const Formfordata = (props) => {

    let [dataterm, setDataterm] = useState({})

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDataterm(values => ({ ...values, [name]: value }))
    }

    return (
        <div>
            {dataterm.name}
            <form onSubmit={(e) => props.handleData(e, dataterm)} className="formOne">
                <input name="name" type="text" value={dataterm.name || ""} placeholder="Enter your name here"
                    onChange={handleChange} />
                
                <input type="text" name="date" value={dataterm.date || ""} placeholder="Enter your name here"
                    onChange={handleChange} />
                <input type="submit" />

            </form>
            
        </div>

    )



}

export default Formfordata