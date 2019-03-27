import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import {MyContext} from './context/myContext'
// import DataProvider from './context/myContext'

// import ListItem from './components/listItem'
import PartialMenuLeft from './components/dropDownMenu'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: [
        { title: "Giao tiếp nội bộ", typeIcon: 'IC',theme:'regular', child: null, reload:true, link: "/giao-tiep-noi-bo"},
        {
          title: "Công việc",link:'/cong-viec', typeIcon: 'Tasks',theme:'regular', child: [
            {
              title: 'Công việc',
              link:'/cong-viec/cong-viec'
            },
            {
              title: 'Triển khai',
              link:'/cong-viec/trien-khai'
            },
            {
              title: 'Chấm điểm',
              link:'/cong-viec/cham-diem'
            }
          ],reload: false, 
        },
        { title: "Phiếu yêu cầu", typeIcon: 'EF',theme:'regular', child:[], reload: false, link: '/phieu-yeu-cau' },
        { title: "Quản trị ngân sách", typeIcon: 'Channel',theme:'regular',reload:false, link: '/quan-tri-ngan-sach' },
        {
          title: "Profile",link:'/profile', typeIcon: 'Tasks',theme:'regular', child: [
            {
              title: 'Công việc',
              link:'/profile/cong-viec'
            },
            {
              title: 'Triển khai',
              link:'/profile/trien-khai'
            },
            {
              title: 'Chấm điểm',
              link:'/profile/cham-diem'
            }
          ],reload: false, 
        },
        { title: "Nhân sự", typeIcon: 'HR',theme:'solid' , reload:true, link:'/nhan-su'},
        { title: "Cấu hình", typeIcon: 'settings',theme:'solid', reload: false, link:'/cau-hinh' },
        {
          title: "Product",link:'/product', typeIcon: 'Tasks',theme:'regular', child: [
            {
              title: 'Công việc',
              link:'/product/cong-viec'
            },
            {
              title: 'Triển khai',
              link:'/product/trien-khai'
            },
            {
              title: 'Chấm điểm',
              link:'/product/cham-diem'
            }
          ],reload: false, 
        },
      ]
    }
  }
  render() {
    let {value} = this.state;
    return (
      // <DataProvider>
      //   <div className="App">
      //     <input type = 'text' ref = {this.inputElement} onChange = {(e) => this.setState({value: e.target.value})}/>
      //     <MyContext.Consumer>
      //     {
      //       ({Add}) => (

      //         <button onClick ={() => Add(this.state.value)}>Add data</button>
      //       )
      //     }
      //   </MyContext.Consumer>
      //     <ol>
      //       <ListItem />
      //     </ol>
      //   </div>

      // </DataProvider>
      <div className='App1'>
        <PartialMenuLeft value = {value}/>
      </div>
    );
  }
}

export default App;
