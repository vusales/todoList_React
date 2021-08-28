import React from "react"; 
import Todoinput from "./Todoinput" ; 
import Header from "./Header" ; 


class Container extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            

        };
        this.text = React.createRef(); 
    }
    render(){
        return(
            <React.Fragment>
                <div className="container p-5 mt-5 todo-container">
                    <div className="p-5 ">
                        <Header/>
                        <Todoinput />
                    </div>  
                </div>
            </React.Fragment>
        )
    }
}

export default Container ; 