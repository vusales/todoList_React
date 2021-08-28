import React from "react"; 

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="col-12 p-3" >
                    <div>
                        <h1>GET TO WORK!</h1>
                        <p>An animated Todo list made with React Hooks</p>
                    </div>
                    <hr/>
                </div>
            </React.Fragment>
        )
    }
}

export default Header ; 