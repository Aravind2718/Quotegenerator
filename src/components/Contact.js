import React from 'react';
import { FaEnvelope, FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
   <section id='contact'>
     <div className="cont relative bg-gray-50 h-screen">
      <h1 style={{textAlign:'center',color:'white',fontSize:'3em',fontWeight:'700'}}>Contact</h1>
     <div className='contact'>
     <div className='div1' style={{fontSize:'3em'}}>
       <p>Email : aravind07@gmail.com</p>
       <p>Phone : 78563 25897</p>
       <p>address : SKCET,Coimbatore.</p>
    </div>
    
    
     </div>
      <div className="container23    mx-auto flex justify-center bottom-0 left-0 right-0 mb-6">
        <div className="flex mt-4 items-center mx-4 mb-5">
          <a href='https://www.instagram.com/'>
 <FaInstagram className="mr-5 hover:text-red-700" size={32} />
          </a>
          <a href='https://www.google.com/aclk?sa=l&ai=DChcSEwjcr9zFlbj-AhWYTCsKHZd8CVAYABAAGgJzZg&sig=AOD64_1_cUI10YV5BXmArWsJR1I3R14hwA&q&adurl&ved=2ahUKEwjS7tXFlbj-AhU3R2wGHRvpA-cQ0Qx6BAgJEAE'>
  <FaFacebook className="mr-5 hover:text-blue-700" size={32} />
            </a>
            <a href='https://www.google.com/aclk?sa=l&ai=DChcSEwjcr9zFlbj-AhWYTCsKHZd8CVAYABAAGgJzZg&sig=AOD64_1_cUI10YV5BXmArWsJR1I3R14hwA&q&adurl&ved=2ahUKEwjS7tXFlbj-AhU3R2wGHRvpA-cQ0Qx6BAgJEAE'>
<FaLinkedin className="mr-5 hover:text-blue-700 " size={32} />
            </a>
            <a href='https://github.com/'>
<FaGithub className="mr-5 hover:text-red-700" size={32} />
            </a>
          
        
         
          
        </div>
      </div>
    </div>
   </section>
  );
}

export default Contact;
