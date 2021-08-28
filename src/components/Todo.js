import React from "react"; 

class Todo extends React.Component{
    constructor(props){
        super(props) ; 
        this.state = {
            saveBtnDisabled : "hidden" , 
            BtnGroupDisabled: "visible", 
            disabled : true , 
            disabledAll: this.props.disabled ,
            inptVal: this.props.inputValue ,

        }; 

        this.newText = React.createRef();
        this.container=React.createRef();


        this.Edit = this.Edit.bind(this) ;
        this.Remove = this.Remove.bind(this) ;
        this.Save =this.Save.bind(this);
    }

    Edit(){
        this.setState({
            saveBtnDisabled : "visible", 
            BtnGroupDisabled: "hidden", 
        }) ; 
    }

    Save () { 
        this.setState({
            saveBtnDisabled : "hidden", 
            BtnGroupDisabled: "visible", 
            inptVal: this.newText.current.value ,
        }) ; 
    }

    Remove(){
        this.container.current.remove();
    }

   

    render(){
        return(
            <React.Fragment>
                <div className="original-todo col-12 p-3"  style={{ visibility:` ${this.state.disabledAll}` , position: "relative"}} ref={this.container}>
                    <div className=" td-con d-flex flex-column p-1">

                        <div className=" td  d-flex align-items-center justify-content-around p-2" style={{visibility:`${this.state.BtnGroupDisabled}` , width: "100%" }}>
                            <div className="p-div">
                                <p>{this.state.inptVal}</p>
                            </div>
                            <div>
                                <button className="btn todo-btn" onClick= {this.Edit}>Edit</button>
                                <button className="btn todo-btn ms-2" onClick= {this.Remove}>Remove</button>
                            </div>
                        </div>

                        <div className=" td  d-flex align-items-center justify-content-around p-2" style={{visibility:`${this.state.saveBtnDisabled}` , position: "absolute" , bottom: 0 ,width: "97.5%" }}>
                            <div className="p-div">
                                <textarea ref={this.newText} >{this.state.inptVal}</textarea>
                            </div>
                            <button className="btn todo-btn" onClick= {this.Save}>Save</button>
                        </div>
                        
                    </div> 
                </div>
            </React.Fragment>
        )
    }
}

export default Todo ; 