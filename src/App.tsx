import React, { Component} from 'react';
import './App.css';

import PartialMenuLeft from './components/sideMenu';
// import Logo from './components/logo'
import Profile from './profile'


// interface
import { IMenu } from './components/sideMenu'

class App extends Component<any, any>{
  constructor(props: any) {
    super(props)
    this.state = {
      value: [
        { title: "Giao tiếp nội bộ", typeIcon: 'IC', theme: 'regular', count: 10, reload: false, link: "/giao-tiep-noi-bo" },
        {
          title: "Công việc", link: '/cong-viec', typeIcon: 'Tasks', theme: 'regular', child: [
            {
              title: 'Công việc',
              link: '/cong-viec/cong-viec',
              typeIcon: 'EF'
            },
            {
              title: 'Triển khai',
              link: '/cong-viec/trien-khai', actions: this.renderAction
            },
            {
              title: 'Chấm điểm',
              link: '/cong-viec/cham-diem',
              child: [
                { title: 'điểm Toán', link: '/cong-viec/cham-diem/toan', typeIcon: 'pencil', theme: 'solid', count: 10 },
                { title: 'điểm văn', link: '/cong-viec/cham-diem/van', count: 10 },
                { title: 'điểm lý', link: '/cong-viec/cham-diem/ly', typeIcon: 'pencil', theme: 'solid' },
                { title: 'điểm hoá', link: '/cong-viec/cham-diem/hoa' }
              ]
            }
          ], reload: false,
        },
        { title: "Phiếu yêu cầu", typeIcon: 'EF', theme: 'regular', child: [], reload: false, link: '/phieu-yeu-cau' },
        { title: "Quản trị ngân sách", reload: false, link: '/quan-tri-ngan-sach' },
        {
          title: "Profile", link: '/profile', typeIcon: 'Tasks', theme: 'regular', child: [
            {
              title: 'Công việc',
              link: '/profile/cong-viec'
            },
            {
              title: 'Triển khai',
              link: '/profile/trien-khai'
            },
            {
              title: 'Chấm điểm',
              link: '/profile/cham-diem'
            }
          ], reload: false,
        },
        { title: "Nhân sự", typeIcon: 'HR', theme: 'solid', reload: true, link: '/nhan-su' },
        { title: "Cấu hình", typeIcon: 'settings', theme: 'solid', reload: false, link: '/cau-hinh' },
        {
          title: "Product", link: '/product', typeIcon: 'Channel', theme: 'regular', count: 10, child: [
            {
              title: 'Công việc',
              link: '/product/cong-viec'
            },
            {
              title: 'Triển khai',
              link: '/product/trien-khai'
            },
            {
              title: 'Chấm điểm',
              link: '/product/cham-diem'
            }
          ], reload: false,
        },
      ] as IMenu[]
    }
  }

  renderAction = () => {
    return (
      <div className=''>
        <ul>
          <li>menu 1</li>
          <li>menu 2</li>
        </ul>
      </div>
    )
  }


  renderProfile = () => {
    return <Profile />
  }

  render() {
    let { value } = this.state;
    return (
      <div className="ui-layout-mobile">
        <PartialMenuLeft value={value} profile={this.renderProfile()} />
      </div>
    );
  }
}

export default App;
