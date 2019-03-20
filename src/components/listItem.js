import React from "react"
import {MyContext} from '../context/myContext'

class listItem extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            edit: false,
            item: ''
        }
    }
    handleClick =() => {
        item.edit = !item.edit;
    }
    didupdate = (Update) => {
        Update();
        this.setState({
            edit: !this.state.edit
        })
    }
    render() {
        return (
            <React.Fragment>
                <MyContext.Consumer>
                    {
                        ({data, Delete, Update}) => 
                            data.map((item, index) => {
                                return (
                                    <li key={index}>
                                        {this.state.edit
                                        ? <div>
                                            <input onChange={(e)=> this.setState({item: e.target.value})} />
                                            <button onClick={() => this.didupdate(() => Update(index, this.state.item))}>Change</button>{item}
                                            </div>
                                        : item}
                                        <button onClick ={() => Delete(index)}>Delete</button>
                                        <button onClick ={() =>this.handleClick(item)}>Update</button>
                                    </li>
                                )
                            })
                        
                    }
                </MyContext.Consumer>
            </React.Fragment>
        )
    }
}
export default listItem;