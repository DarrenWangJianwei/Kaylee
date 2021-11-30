import React,{useState} from 'react';
import register from '../css/Register.module.css'

const RegisterComponent = () => {
    const [formData,setFormData] = useState({name:'',cell:'',email:'',firstTimeHomeBuyer:undefined,haveARealtor:undefined});
    const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

    const handleCheckboxChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: !formData[e.target.name]
        });
    }
    return (  
        <>
        
        <div className={register.container}>
            <div className={register.whiteBorder} />
            <form className={register.form} >
                <legend>REGISTER NOW</legend>
                <div className={register.formLayout}>                    
                    <label htmlFor="name">NAME:</label>
                    <input type="text" id="name" name='name' onChange={handleInputChange}  value={formData.name}/>
                    <label htmlFor="cell">CELL:</label>
                    <input type="text" id="cell" name='cell' onChange={handleInputChange}  value={formData.cell}/>
                    <label htmlFor="email">EMAIL:</label>
                    <input type="text" id="email" name='email' onChange={handleInputChange}  value={formData.email}/>
                    <label htmlFor="firstTimeHomeBuyer">First Time Home Buyer:</label>
                    <input type="checkbox" id='firstTimeHomeBuyer' name='firstTimeHomeBuyer' onChange={handleCheckboxChange} value={formData.firstTimeHomeBuyer}/>
                    <label htmlFor="haveARealtor">Do you have a realtor:</label>
                    <input type="checkbox" id='haveARealtor' name='haveARealtor'  onChange={handleCheckboxChange} value={formData.haveARealtor}/>
                </div>
            </form>
        </div>
        </>
    );
}
 
export default RegisterComponent;