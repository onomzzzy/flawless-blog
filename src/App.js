import React, { useEffect, useReducer, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorPage from "./utility_components/error";
import Home from "./functional_component/home";
import Article from "./functional_component/article";
import PopularPost from "./functional_component/ppost";
import SideNavDesktop from "./functional_component/sideNav";
import RecentPost from "./functional_component/rpost";
import  { HeaderIcon,OnlyIcon } from "./functional_component/smallHeader";
import Search from "./functional_component/search";
import {Sidebar} from 'primereact/sidebar';
import logo from "./icons/logo.png";
import { HamburgerArrow } from "react-animated-burgers";
import Contact from "./functional_component/contact";
import Subscribe from "./functional_component/subscribe";
import PrivatePolicy from "./functional_component/policy";
import { Link } from "react-router-dom";
import {AboutUs} from "./functional_component/about";
import ColoredHeader from "./functional_component/coloredHeader";
export const BlogContext = React.createContext();


function App() {
  //initial State
  const initialState = {
    screen: window.innerWidth,
    sideBar:false,
    task:'0',
    home:false,
    karma:false,
    about:false,
    contact:false,
    subscribe:false,
    religion:false,
    health:false,
    relationship:false,
    quote:false,
    policy:false,
    music:false,
    marriage:false,
    selfimprovement:false,
    searchWord: 'Search ...',
    search:false,
    current:'',
    api:'https://onomeblogapi.herokuapp.com/blog'
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
        case "GET_SCREEN":
        state = {
          ...state,
          screen: action.screen,
        };
        return state;
        case "TOGGLE_SIDE_BAR":
          state = {
            ...state,
            sideBar:!state.sideBar,
          };
          return state;
          case "SET_SEARCH":
          state = {
            ...state,
            searchWord:action.search,
            [state.current]:false,
            search:true,
            current: 'search'
          };
          return state;
          case "PERFORM_TASK":
          state = {
            ...state,
            task:action.task,
          };
          return state;
          case "SELECT_CATEGORY":
            state = {
              ...state,
              [state.current]:false,
              [action.category]:true,
              current:action.category
            };
            return state;
          case "TASK_CLEAR":
            state = {
              ...state,
              task:0,
            };
            return state;
      default:
        return initialState;
    }
  };

  useEffect(() => {
    document.getElementById("loader").style.display = "none";
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let location = window.location.pathname.toString();
    let x = location.lastIndexOf('/');
    location = location.substring(x+1);
    location = whatsCurrentPage(location);
   dispatch({type:'SELECT_CATEGORY',category:location})
  },[]
  )

  function whatsCurrentPage(location){
    switch(location){
      case undefined:
      case null:
      case '':  
      return 'home' 

      case 'health':
     case 'selfimprovement':
     case 'karma':
     case 'religion':
     case 'relationship':
     case 'music':
     case 'marraige':
     case 'quote': 
     case 'contact':
      case 'subscribe':
      case 'about':   
      return location
    default:
      return 'search'   
    }
  }

 

  useEffect(() => {
    const handleResize = () =>
      dispatch({ type: "GET_SCREEN", screen: window.innerWidth });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <Router>
      <div>
        
        <BlogContext.Provider
          value={{ blogState: state, blogDispatch: dispatch }}
        >

         {state.screen >670 ?
          <div className="sideNavMenu">
           <SideNavDesktop mobile={false} />
          </div>
          :<div>
            <Sidebar showCloseIcon={false} modal={false} 
            visible={state.sideBar} baseZIndex={1000000}>
            <SideNavDesktop mobile={true} />
            </Sidebar>
          </div>
          }
          
          {state.screen > 670 ?
           <div className="header">
             <div className="header-controller">
           <div className="container">
             <div className="row">
             
               <div className="col-6 col-xl-7">
                 <Search />
               </div>

               <div className="col">
                 {state.screen > 993?
                 <div className="right-icon">
                  <div className="row">
                    <div className="col">
                    <Link to={`/contact`} onClick={e=>dispatch({type:'SELECT_CATEGORY',category:'contact'})}> 
                    <HeaderIcon icon="contact" state={state.contact}/>
                    </Link> 
                    </div>
                    <div className="col">
                    <Link to={`/aboutus`} onClick={e=>dispatch({type:'SELECT_CATEGORY',category:'about'})}> 
                    <HeaderIcon icon="about" state={state.about}/>
                    </Link>
                    </div>
                    <div className="col">
                    <Link to={`/subscribe`} onClick={e=>dispatch({type:'SELECT_CATEGORY',category:'subscribe'})}> 
                    <HeaderIcon icon="subscribe" state={state.subscribe} />
                    </Link>
                    </div>
                  </div> 
                 </div>

                 :
                 <div>
                   {state.screen > 670?

                    <div className="right-icon">
                  <div className="row">
                    <div className="col">
                    <Link to={`/contact`}> 
                    <HeaderIcon icon="contact" state={state.contact}/>
                    </Link>
                    </div>
                    <div className="col">
                    <Link to={`/aboutus`} onClick={e=>dispatch({type:'SELECT_CATEGORY',category:'policy'})}> 
                    <HeaderIcon icon="about" state={state.about}/>
                    </Link>
                    </div>
                  </div> 
                 </div>

                   :
                 <div className="right-icon">
                  <div className="row">
                    <div className="col">
                    <div className="hamburg">
                    <HamburgerArrow
                      className="hamburger"
                      barColor="#605196"
                      isActive={state.sideBar}
                      toggleButton={(e) => {
                        dispatch({ type: "TOGGLE_SIDE_BAR" });
                      }}
                    />
                  </div>
                   </div>
                   <div className="col">
                     {state.screen > 526?
                     <Link to={`/contact`} onClick={e=>dispatch({type:'SELECT_CATEGORY',category:'contact'})}> 
                    <OnlyIcon icon="contact" state={state.contact} />
                    </Link>
                    :
                    <div />
                     }
                    </div>
                   </div>
                   </div>
                 }

                   </div>


                 }
               
               </div>

             </div>
            </div> 
            </div>
          
           </div>
           :

           <div className="header-Mob">
             <div className="header-controller">
           <div className="container-fluid">
             <div className="row">
             <div className="col-3">
               <div className="logo">
               <img src={logo} />
               </div>
            
             </div>
               <div className="col-6">
               <div className="right-icon">
                 <Search />
                 </div>
               </div>

               <div className="col-3">
                 
                 <div className="right-icon">
                    <div className="hamburg">
                    <HamburgerArrow
                      className="hamburger"
                      barColor="#605196"
                      isActive={state.sideBar}
                      toggleButton={(e) => {
                        dispatch({ type: "TOGGLE_SIDE_BAR" });
                      }}
                    />
                  </div>
                   </div>
               </div>

             </div>
            </div> 
            </div>
          
           </div>
           }
          
           
           {state.screen > 1030 ?
          <div id="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/home/:id" component={Home} />
            <Route exact path="/articles/:id" component={Article} />
            <Route  path="/contact" component={Contact} />
            <Route  path="/policy" component={PrivatePolicy} />
            <Route  path="/subscribe" component={Subscribe} />
            <Route path="**" component={ErrorPage} />
          </Switch>
          </div>
          :
          <div>
          {state.screen > 670 ?
          <div id="mainSm">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route  path="/aboutus" component={AboutUs} />
            <Route path="/home/:id" component={Home} />
            <Route exact path="/articles/:id" component={Article} />
            <Route  path="/contact" component={Contact} />
            <Route  path="/policy" component={PrivatePolicy} />
            <Route  path="/subscribe" component={Subscribe} />
            <Route path="**" component={ErrorPage} />
          </Switch>
          </div>
          :
          <div id="mainM">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route  path="/aboutus" component={AboutUs} />
            <Route path="/home/:id" component={Home} />
            <Route exact path="/articles/:id" component={Article} />
            <Route  path="/contact" component={Contact} />
            <Route  path="/policy" component={PrivatePolicy} />
            <Route  path="/subscribe" component={Subscribe} />
            <Route path="**" component={ErrorPage} />
          </Switch>
          </div>
            }
          </div>
          }
          
          {state.screen > 1030 ?
          <div className="activity-list"> 
          <ColoredHeader title="Popular Posts"/> 
          <PopularPost/>
          <ColoredHeader title="Recent Posts"/>
          <RecentPost/>   
          </div>
          :
          <div/>
          }
         

        </BlogContext.Provider>
      </div>

    </Router>
  );
}

export default App;
