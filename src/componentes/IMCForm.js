import { useState } from "react";

const valoresIniciales={
    peso:'',
    altura:'',
    diaDePesaje:'',
    horaDePesaje:'',
    key:'',
}
export default function IMCForm({change}){
    const [state, setState] = useState(valoresIniciales);

    const handleChange =(e)=>{
        let { value, name } = e.target;

        if(value > 500){
            value =500;
        }
        
        const diaDePesaje = new Date().toLocaleString().split(',')[0];

        setState({
			...state, 
			[name]: value,
			diaDePesaje,
			horaDePesaje: new Date().toLocaleString().split(',')[1],
			key: new Date().getTime()
		});
    };

    const handleSubmit =()=>{
        change(state);
        setState(valoresIniciales);
    }; 

    return(
        <div>
            <div className="row">
                <div className="col m6 s12">
                    <label htmlFor="peso">Peso (en kg)</label>
                    <input id="peso" name="peso" type="number" min="1" max="500" placeholder="150" value={state.peso} onChange={handleChange} autoFocus={true}></input>
                </div>
                <div className="col m6 s12">
                    <label htmlFor="altura">Altura (en cm)</label>
                    <input id="altura" name="altura" type="number" min="1" max="300" placeholder="150" value={state.altura} onChange={handleChange}></input>
                </div>
            </div>
            <div className="center">
                <button className='btn' type="button" disabled={state.peso === '' || state.altura === ''} onClick={handleSubmit}>Calcular IMC</button>
            </div>
        </div>
    );
};