import React from 'react'

export const MyContext = React.createContext();


class DataProvider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
                'aaaa',
                'aaaa',
                'aaaa',
                'aaaa',
                'aaaa',
                'aaaa',
                'aaaa',
            ]
        }
    }

    Add = (value) => {
        this.state.data.push(value);
        this.setState({
            data : this.state.data
        })
    }

    Delete =(index) => {
        this.state.data.splice(index, 1);
        this.setState({
            data: this.state.data
        })
    }
    Update = (index, value) =>{
        let {data } = this.state;
        data[index] = value;
        this.setState({
            data: this.state.data
        })
        console.log(index)
    }   
    render() {
        return (
            <MyContext.Provider
                value = {{
                    data:this.state.data,
                    Add : this.Add,
                    Delete : this.Delete,
                    Update : this.Update
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
export default DataProvider