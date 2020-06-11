import React from "react";
const EmptyBlogs = (props) => {
    switch(props.page){
    case 'home':
        return ( 
            <div className="empty">
             <div className="jumbotron">
          <h1 className="display-5">No Article Found</h1>
         <p className="lead">No Article posted yet. Please try again later</p>
        <hr className="my-4"/>
        <p>Please try reloading the page, this may be due to your connection.</p>
         <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
            </div>
         );
         case 'category':
            return ( 
                <div className="empty">
                 <div className="jumbotron">
              <h1 className="display-5">No Article Found</h1>
             <p className="lead">No Article found for {props.value} category. </p>
            <hr className="my-4"/>
            <p>Please try again later or check your connection, this may be due to error in connection.</p>
             <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
                </div>
             ); 
             case 'search':
                return ( 
                <div className="empty">
                <div className="jumbotron">
                  <h1 className="display-5">Search not found</h1>
                 <p className="lead">No Article found for {props.value}. </p>
                <hr className="my-4"/>
                <p>May be your search was too direct. Try searching with key words</p>
                 <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </div>
                    </div>
                 );          
    }
   
}
 
export default EmptyBlogs;