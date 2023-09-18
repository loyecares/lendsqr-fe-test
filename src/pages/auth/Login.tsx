import React, { useState } from 'react'
import '../../utils/types/Login'
import logo from "../../assets/images/logo-img.png"
import loginImg from "../../assets/images/login-img.png"
import '../../assets/styles/login.scss'
import { Link } from 'react-router-dom'
interface FormErrors {
    email?: string;
    password?: string;
  }
const Login: React.FC=()=> {
    //state management for form field and error
    const [formData, setFormData] = useState({
        email: '',
        password: '',
})
    const [errors, setErrors] = useState<FormErrors>({});
   //function to handle input
    const handleInputChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        //destucture 
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
          });
    }
      // Function to validate form data
  const validateForm = () => {
    let valid = true;
    const newErrors: FormErrors = {};

      // Validate email
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
        valid = false;
      }

    // Validate password
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };
    // Function to handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("testing")
        // Validate form data
        if (validateForm()) {
          // Business logic for login can go here
          alert('Login successful!');
        }
      };


      // show and hide password setting
      const [showPassword, setShowPassword] = useState(false);

      const handlePasswordToggle = ()=>{
        setShowPassword(!showPassword)
      }
   return (
    <>
      
        <section className='flex flex-row login-wrap'>
            <div className='basis-1/2 login-img-wrap'>
                <div className='logo'>
                    <img src={logo} alt='lendsqr logo'/>
                </div>
                <div className='login-img'>
                     <img src={loginImg} alt='login image '/>
                </div>
            </div>
            <div className='basis-1/2 login-text-wrap'>
                <div className='login-heading'>
                    <h3>Welcome!</h3>
                    <p>Enter details to login.</p>

                </div>
               
                <form className='login-form-wrap' onSubmit={handleSubmit}>
                    <div className='input-wrap'>
                       
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder='Email'
                        />
                         {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className='input-wrap'>
                        
                        <input
                            type={showPassword ? "text": "password"}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder='password'
                        />
                        <p className='pw-display'>  <Link to="" onClick={handlePasswordToggle}>show</Link></p>
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div className='forget-password'>
                        <Link to="#" >Forget Password</Link>
                    </div>
                    
                    <div className='form-action-wrap'>
                        <button type='submit'>  <Link to="">Log in</Link></button>
                    </div>
                </form>
              


            </div>
        </section>

    </>
  )
}

export default Login