import React from "react";
import "../css/smallHeader.css";
import ContactUsIcon  from "@material-ui/icons/HeadsetOutlined";
import HelpIcon  from "@material-ui/icons/InfoOutlined";
import SubscriptionsIcon from "@material-ui/icons/SubscriptionsOutlined";
import SendIcon from "@material-ui/icons/SendOutlined";
const SmallHeader = (props) => {
    return ( 
        <div className="small-header">
         <h5>{props.title}</h5>
        </div>
     );
}

export const OnlyIcon = (props) => {
  switch(props.icon){
    case 'contact' :
       return (
           <div className="header-icon-only">
             <div className="row">
                 <div className="col-12">
               <div align="center" className="icon">
                 {props.state ?
                   <ContactUsIcon style={{ fontSize: 35,color:'#605196' }} />
                 :
              <ContactUsIcon style={{ fontSize: 35 }} />
              }
              </div>
                 </div>
                
             </div>  
           </div>
         );
   case 'about' :
       return (
           <div className="header-icon-only">
             <div className="row">
             <div className="col-12">
              <div className="icon">
                {props.state?
               <HelpIcon style={{ fontSize: 35 ,color:'#605196'}} />
                :
              <HelpIcon style={{ fontSize: 35}} />
                }
              </div>  
              </div> 
             </div>  
           </div>
         );
         
   case 'subscribe' :
       return (
           <div className="header-icon-only">
             <div className="row">
             <div className="col-12">
              <div className="icon">
                {props.state?
               <SubscriptionsIcon style={{ fontSize: 35 ,color:'#605196'}} />
                :
              <SubscriptionsIcon style={{ fontSize: 35}} />
                }
              </div>  
              </div> 
             </div>  
           </div>
         );

         case 'send' :
       return (
           <div className="header-icon-only">
             <div className="row">
             <div className="col-12">
              <div className="icon">
                {props.state ?
                 <SendIcon style={{ fontSize: 35,color:'#605196' }} />
                :
              <SendIcon style={{ fontSize: 35 ,color:'#605196'}} />
                }
              </div>  
              </div> 
             </div>  
           </div>
         );

   }
}
 
 

export const HeaderIcon = (props) => {

    switch(props.icon){
     case 'contact' :
        return (
            <div className="header-icon">
              <div className="row">
                  <div className="col-12">
                <div align="center" className="icon">
                  {props.state ?
                    <ContactUsIcon style={{ fontSize: 35,color:'#605196' }} />
                  :
               <ContactUsIcon style={{ fontSize: 35 }} />
               }
               </div>
                  </div>
                 
              </div>  
              <div className="row">
                  <div className="col-12">
                  <div align="center">
                    {props.state ?
                    <h6 className="colored-text">CONTACT</h6>
                    :
                  <h6>CONTACT</h6>
                    }
                  </div>
                  </div>
             
             </div>
            </div>
          );
    case 'about' :
        return (
            <div className="header-icon">
              <div className="row">
              <div className="col-12">
               <div className="icon">
                 {props.state?
                <HelpIcon style={{ fontSize: 35 ,color:'#605196'}} />
                 :
               <HelpIcon style={{ fontSize: 35}} />
                 }
               </div>  
               </div> 
              </div>  
              <div className="row">
              <div className="col-12">
                  <div align="center">
                    {props.state ?
                    <h6 className="colored-text">ABOUT</h6>
                    :
                  <h6>ABOUT</h6>
                    }
                  </div>
                  </div>
            
             </div>
            </div>
          );
          
    case 'subscribe' :
        return (
            <div className="header-icon">
              <div className="row">
              <div className="col-12">
               <div className="icon">
                 {props.state?
                <SubscriptionsIcon style={{ fontSize: 35 ,color:'#605196'}} />
                 :
               <SubscriptionsIcon style={{ fontSize: 35}} />
                 }
               </div>  
               </div> 
              </div>  
              <div className="row">
              <div className="col-12">
                  <div align="center">
                    {props.state?
                    <h6 className="colored-text">SUBSCRIBE</h6>
                    :
                  <h6>SUBSCRIBE</h6>
                    }
                  </div>
                  </div>
            
             </div>
            </div>
          );

          case 'send' :
        return (
            <div className="header-icon">
              <div className="row">
              <div className="col-12">
               <div className="icon">
                 {props.state ?
                  <SendIcon style={{ fontSize: 35,color:'#605196' }} />
                 :
               <SendIcon style={{ fontSize: 35 ,color:'#605196'}} />
                 }
               </div>  
               </div> 
              </div>  
              <div className="row">
              <div className="col-12">
                  <div align="center">
                    {props.state ?
                     <h6 className="colored-text">Message</h6>
                     :
                  <h6>Message</h6>
                    }
                  </div>
                  </div>
            
             </div>
            </div>
          );

    }
   
}
 
 
export default SmallHeader;