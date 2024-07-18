import {
    FaInstagram,
    FaDribbble,
    FaXTwitter,
    FaYoutube,
  } from "react-icons/fa6";
  import { MdLocationPin } from "react-icons/md";
  import { MdOutlineEmail } from "react-icons/md";
  import { FaPhoneAlt } from "react-icons/fa";
  
  

const Endfoot = () => {
    const year=new Date().getFullYear()
    console.log(year)
    
      const showAlert =()=>{
         alert('subscribed to newsletter!'); // Replace with your desired alert message or function
      }
   
    const socialLinks = [
        { label: "YouTube", icon: FaYoutube },
        { label: "Instagram", icon: FaInstagram },
      ];
    
      const links = [
        [
          { label: "Company", key: "header-1" },
          { label: "About us", key: "item-1-1",href: "/aboutus" },
          { label: "Contact us", key: "item-1-2",href: "/aboutus" },
          { label: "Privacy Policy", key: "item-1-3" ,href: "/privacy"},
          { label: "Terms of service", key: "item-1-4",href: "/termsofservice" },
        ]
        
      ];
      return (
        <div className="app min-h-screen flex items-end justify-center font-poppins">
          <div className="py-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 bg-gray-300 text-black w-full p-4 relative">
            <div className="  ">
            <h1 className="text-2xl font-semibold">Get In Touch :</h1>
              <div className="footer-img flex  mt-5 items-center">
              <MdLocationPin className="w-7 h-7"/>
              <div>
                <h2 className="ml-2 "> 11-1-102 Nallampatty Road,</h2>
                <h2 className="ml-2">Dindigul-624003</h2>
              </div>
              </div>
              <div className="flex items-center  mt-5">
              <MdOutlineEmail className="w-5 h-5 ml-1 " />
              <h2 className="text-1xl ml-3"> mayurfashions@gmail.com</h2>
              </div>
              <div className="flex items-center mt-5">
              <FaPhoneAlt className="w-5 h-5 ml-2" />
              <h2 className="text-1xl ml-3">9972718491</h2>
              </div>
              
              <div className="infos mt-10 text-gray-800"> 
                <span>Copyright Mayur Fashions © {year}</span>
                <span>All rights reserved</span>
              </div>
            </div>
            {/**second col */}
            <div className="mx-2 grid w-full py-5 sm:py-0 ">
              {links.map((col, index) => {
                return (
                  <ul className={`col col-${index + 1}`} key={`col-${index}`}>
                    {col.map((link, index) => {
                      return (
                        <li
                          key={`link-${col}-${index}`}
                          className={`text-gray-600   cursor-pointer ${
                            link.key === "header-1" || link.key === "header-2"
                              ? "text-2xl text-black"
                              : ""
                          }`}
                        >
                          {link.href ? (
                            <a  className='hover:bg-blue-100'href={link.href}>{link.label}</a>
                              ) : (
                                 link.label
                          )}
                        </li>
                      );
                    })}
                  </ul>
                );
              })}
            </div>
            <div className="footer-form flex flex-col items-start ">
              <label className="text-lg ml-2 font-semibold text-black">
                Stay up to date 
              </label>
              <div className="flex items-center ml-4">
              <input
                type="email"
                placeholder="Subscribe to our email"
                className="mt-2 w-full border-none rounded-lg py-3 px-6"
              />
              <button onClick={()=>showAlert()} className='inline-block mt-2  rounded-lg bg-secondary px-5 py-3 font-medium text-white sm:w-auto'>Submit</button>
              </div>
              
              
            </div>
            
          </div>
        </div>
      );
    };

   
  

export default Endfoot
