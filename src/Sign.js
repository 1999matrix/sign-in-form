// import React from 'react';
// import './sign.css';
// const Sign = () => {
//   return(
//       <>
//       <body>
//           <div className="body">
//               <div className="container">
//               <div>
//                   <h1>Sign Up</h1>
//               </div>
//                  <form action="">
//                  <div className="c-1">
//                  <div className="f-1">
//                      <div className="form">
//                      {/* <label htmlFor="name">Name</label> */}
//                          <input type="text" autoComplete='off'  placeholder='Fullname' id='name'/>
//                      </div>
//                      <div className="form">
//                      {/* <label htmlFor="roll no">Roll-No</label> */}
//                          <input type="text" autoComplete='off' id='roll no' placeholder='Roll No.' />
//                      </div>
//                      <div className="form">
//                      {/* <label htmlFor="branch">Branch</label> */}
//                          {/* <input type="" autoComplete='off' className='branch'/> */}

//                          <select name="" className="">
//                              <option value="">Branch&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
//                              <option value="">CSE</option>
//                              <option value="">CS-AIML</option>
//                              <option value="">CS-DS</option>
//                              <option value="">IT</option>
//                              <option value="">ECE</option>
//                              <option value="">MECHANICAL</option>
//                          </select>

//                      </div>
//                      <div className="form">
//                      {/* <label htmlFor="email">Email</label> */}
//                          <input type="email" autoComplete='off' id='email' placeholder='Email'/>
//                      </div>
//                      <div className="form">
//                      {/* <label htmlFor="address">Address</label> */}
//                          <input type='text' autoComplete='off' id='address' placeholder='Address' />
//                      </div>
//                      <div className="form">
//                      {/* <label htmlFor="password">Password</label> */}
//                          <input type="password" autoComplete='off' id='password' placeholder='Password'/>
//                      </div>
//                      </div>
                     
//                      {/* <label htmlFor="year">Year</label> */}
//                       <div className="f-2">
//                       <div className="form">
//                      <select name="" id="year" >
                     
//                              <option value="">Year&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
//                              <option value="">Ist</option>
//                              <option value="">IInd</option>
//                              <option value="">IIIrd</option>
//                              <option value="">IVth</option>
                            
//                        </select> 
//                      </div>
                        

//                      <div className="form">
//                      <label htmlFor="gender">Gender&nbsp;</label>
                        
//                         <label htmlFor="male">Male</label>
//                         <input type="radio" id='male' name='gender'/>
//                         <label htmlFor="female">Female</label>   
//                         <input type="radio" id='female' name='gender'/>
                       

                        
//                      </div>
//                      <div className="form">
//                      {/* <label htmlFor="contact no">Contact no.</label> */}
//                      <input type='text' autoComplete='off' id='contact no' placeholder='Contact No.'/>
//                      </div>
//                      <div className="form">

//                      <div class="g-recaptcha" data-sitekey="6LeByEEeAAAAAM3tmyjk4PuD9QKHcyzrCfzhtCHx"></div>
//                      </div>
//                      </div>  
//                      </div>
//                      <div className="submit">
//                          <input type="submit" />
//                      </div>
//                  </form>

//               </div>
//           </div>
//           </body>
//       </>
//   ); 
// };

// export default Sign;




// login page

// import React from 'react';
// import './login.css'

// const Login = () => {
//   return (<>
//       <body>
//           <div className="container">
//               <div className="header">
//                   <h1 className="title">Login</h1>
//               </div>
//               <form action="
//               ">
//                   <div className="id">
//                  <h3> <label htmlFor="user-id">UserId</label></h3>
//                  <i class="far fa-user"><input type="text" autoComplete='off' id='user-id' placeholder='Enter userId'/></i>  
//                   </div>
//                   <div className="id">
//                  <h3> <label htmlFor="pass">Password</label></h3>
//                  <i class="fas fa-unlock"> <input type="password" autoComplete='off' id='pass' /></i> 
//                   </div>
//                   <a href="">Forgot password?</a>
//                   <div className="captcha">
//                   <div class="g-recaptcha" data-sitekey="6LeByEEeAAAAAM3tmyjk4PuD9QKHcyzrCfzhtCHx"></div>
//                   </div>
//                   <div className="submit">
//                   <div className="login">
//                       <input type="submit" value='Login' />
//                   </div>
//                   <div className="Sign Up">
//                       <input type="submit" value='Sign Up' />
//                   </div>
//                   </div>

//               </form>
//           </div>
//       </body>
//   </>);
// };

// export default Login;


// password recovery

// import React from 'react';
// import './recovery.css'
// const Passrecovery = () => {
//   return (<>
//       <body>
//           <div className="container">
//               <div className="">
//                   <h1 className="title">Forgot Password</h1>
//                   <p>Your password has been sent to your registered mobile no +91 XXXXXXXXXX</p>
//               </div>
//               <form action="
//               ">
//                   <div className="rid">
//                       <h3><label htmlFor="userid">Enter UserId</label></h3>
//                       <i class="far fa-user">  <input type="text" placeholder='Confirm Your UserId'/></i>
//                   </div>
//                   <div className="submit">
//                           <input type="submit" value='Redirect to Login Page'/>
//                   </div>
//               </form>
//           </div>
//       </body>
//   </>);
// };

// export default Passrecovery;


import React from 'react';
import './otp.css'
const Otp = () => {
  return (<>
      <body>
          <div className="container">
              <div className="">
                  <h1 className="title">OTP Verification</h1>
                  <p>Enter the OTP sent to +91 XXXXXXXXXX</p>
              </div>
              <form action="
              ">
                  <div className="rid">
                      
                <div>  <input type="text"  name="otp" maxlength="1"  pattern="\d{1}" required/></div>
                <div>  <input type="text"  name="otp" maxlength="1"  pattern="\d{1}" required/></div>
                <div>  <input type="text"  name="otp" maxlength="1"  pattern="\d{1}" required/></div>
                <div> <input type="text"  name="otp" maxlength="1"  pattern="\d{1}" required/></div> 
                  </div>
                  <div className="submit">
                          <input type="submit" value='Redirect to Login Page'/>

                  </div>
              </form>
          </div>
      </body>
  </>);
};

export default Otp;

