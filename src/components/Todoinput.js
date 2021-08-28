import React from "react"; 
import Todo from "./Todo";

class Todoinput extends React.Component{
    constructor(){
        super() ;
        this.state = {
            inputText : [], 
            todoDisabled : "hidden", 

        };

        this.AddTodo = this.AddTodo.bind(this);
        this.text =  React.createRef();
    }

    AddTodo(){
        this.setState({
            inputText: this.state.inputText.concat(this.text.current.value),
            todoDisabled: "visible", 
        }); 

        this.text.current.value = "" ;
    }

    render(){
        return(
            <React.Fragment>
                <div className="col-12 p-3" >
                    <div>
                        <h2>New Todo</h2>
                    </div>
                    <div className="form-group d-flex"> 
                        <input className="form-control" placeholder="New Todo" name="newTodo" ref={this.text} />
                        <button className="btn todo-btn lg ms-1" onClick={this.AddTodo}> ADD TODO </button>
                    </div>
                </div>

                {this.state.inputText.map((text , index )=>{
                    return (<Todo disabled={this.state.todoDisabled} inputValue={text} key={index}/>) 
                })} 
            </React.Fragment>
        )
    }
}

export default Todoinput ; 