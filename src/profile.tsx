import React from 'react'
import * as HrvComponents from 'haravan-react-components';


export default class Profile extends React.Component {
    render() {
        return (
            <div className='aside-profile'>
                <HrvComponents.CardProfile type='User'>
                    <div className='ui-header--profile-container'>
                        <div className='row no-gutters flex-nowrap align-items-center'>
                            <div className='col'>
                                <div className='ui-header--profile-box'>
                                    <div className='ui-header--profile-avatar'>
                                        <HrvComponents.Avatar size={36} src="" sizeImage='small' content="" />
                                    </div>
                                    <div className='ui-header--profile-info'>
                                        <div className='ui-header--profile-title'>Trần Minh Trí</div>
                                        <div className='ui-header--profile-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eius voluptatum maiores porro, </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-auto'>
                                <HrvComponents.Icon className='ui-header--profile-icon-arrow' type='arrow' rotate={90} />
                            </div>
                        </div>
                    </div>
                </HrvComponents.CardProfile>
            </div>

        )
    }
}