import React, {  useState } from 'react'
import TextField from '@mui/material/TextField';

const Bmi = () => {

    const [Weight, setWeight] = useState();
    const [Height, setHeight] = useState();
    const [Bmi, setBmi] = useState();
    const [BmiStatus, setBmiStatus] = useState('');




const findbmi=()=>{
    
  
    if(Weight && Height){
        const bmi = (Weight / (Height/100)**2);
        setBmi(bmi);
        if(bmi<18.5){
            setBmiStatus('Underweight');
        }else if(bmi>=18.5 && bmi<25){
            setBmiStatus('Normal');
        }else if(bmi>=25 && bmi<30){
            setBmiStatus('Overweight');
        }else{
            setBmiStatus('Obese');
        }
    }
    else{
        alert('Please Enter Valid Numbers');
        setBmiStatus('')
        setBmi()
    
    }


 
}



    return (
        <div className=' flex justify-center items-center  min-h-screen bg-sky-800  '>
            <div className=' p-12 shadow-md shadow-white border-black h-max bg-blue-400 flex items-center justify-center flex-col rounded-xl'>
                <h1 className=' text-3xl font-bold text-center my-10'>CALCULATE BMI</h1>
                <form className='flex items-center justify-center flex-col'>
                    <label className=' flex justify-center items-center text-2xl font-bold font-sans'>
                        Weight (kg):
                        <TextField  onChange={(e)=>setWeight(e.target.value)} className=' font-bold border-2 placeholder:font-bold  ms-5' id="outlined-basic" color='black' label="Weignt"  variant="outlined" />
                    </label>
                    <br /> 
                    <label  className=' flex justify-center items-center text-2xl font-bold font-sans'>
                        Height (cm):
                        <TextField onChange={(e)=>setHeight(e.target.value)}  className=' font-bold border-2 placeholder:font-bold  ms-5' id="outlined-basic" color='black' label="Height" variant="outlined" />
                    </label>
                    <br />
                    <button onClick={findbmi} className=' my-6 btn border-2 bg-green-600 text-white text-center hover:bg-blue-700' type="button">Calculate BMI</button>
                </form>
               <h3 className=' text-gray-800 text-nowrap flex font-bold items-center'> <span className=' text-black    font-bold
               '>Your Bmi Is  :</span>{Bmi}</h3>
                <h3 className=' text-gray-800 text-nowrap  flex font-bold items-center'><span className='  text-black   font-bold
                '>Your Bmi Status Is :</span>{BmiStatus}</h3>

                
            </div>
        </div>

    )
}

export default Bmi