import * as React from 'react';
import * as HrvComponents from 'haravan-react-components';
import { NavLink, Link } from "react-router-dom";
import './dropdown.css'

import Logo from './logo'
export interface IMenu {
    title: string,
    link: string,
    typeIcon?: string,
    theme?: string,
    child?: IMenu[],
    reload: boolean,
    count?: number,
    actions?: React.ReactNode,
}

interface IPartialMenuLeftProps {
    value: IMenu[],
    profile?: React.ReactNode
}

export default class PartialMenuLeft extends React.Component<IPartialMenuLeftProps, {}> {
    private menuItem = (key: any, item: any) => {
        return (
            <li key={key} className='next-nav-item'>
                {item && item.child && item.child.length > 0
                    ? <div>
                        {item.reload
                            ? (<a href={item.link} className='next-nav-link'>
                                <div className='next-nav-item--icon'><HrvComponents.Icon type={item.typeIcon} size={16} /></div>
                                <span className={item.typeIcon ? 'next-nav-text' : 'next-nav-text p-0'}>{item.title}</span>
                                <div>
                                    {item.count && item.count > 0 ? <HrvComponents.Badges status='default' content={item.count} className='next-nav-item--badges'></HrvComponents.Badges> : null}
                                    <HrvComponents.Icon size={12} type='arrow' />
                                    {item.actions && item.actions() ? <HrvComponents.Icon size={10} type='dotThree' /> : null}
                                </div>
                            </a>)
                            : (<NavLink to={item.link} className='next-nav-link' activeClassName="open">
                                <div className='next-nav-item--icon'><HrvComponents.Icon type={item.typeIcon} size={16} theme={item.theme} /></div>
                                <span className={item.typeIcon ? 'next-nav-text' : 'next-nav-text p-0'}>{item.title}</span>
                                <div className='d-flex align-items-center'>
                                    {item.count && item.count > 0 ? <HrvComponents.Badges status='default' content={item.count} className='next-nav-item--badges'></HrvComponents.Badges> : null}
                                    <div><HrvComponents.Icon size={12} type='arrow' /></div>
                                    {item.actions && item.actions()
                                        ?
                                        <HrvComponents.Popover content={item.actions} title='Title'>
                                            <HrvComponents.Icon size={10} type='dotThree' />
                                        </HrvComponents.Popover>
                                        : null}
                                </div>
                            </NavLink>)}
                        <ul className='next-nav-dropdown'>
                            {item.child.map((child: any, index: any) => {
                                return this.menuItem(index, child);
                            })}
                        </ul>
                    </div>
                    : item.reload
                        ? <a href={item.link} className='next-nav-link '>
                            <div className='next-nav-item--icon'><HrvComponents.Icon type={item.typeIcon} size={16} /></div>
                            <span className={item.typeIcon ? 'next-nav-text' : 'next-nav-text p-0'}>{item.title}</span>
                            <div>
                                {item.count && item.count > 0 ? <HrvComponents.Badges status='default' content={item.count}></HrvComponents.Badges> : null}
                                {item.actions && item.actions() ? <HrvComponents.Icon size={10} type='dotThree' /> : null}
                            </div>
                        </a>
                        : <div>
                            <NavLink exact to={item.link} className='next-nav-link'>
                                <div className='next-nav-item--icon'><HrvComponents.Icon type={item.typeIcon} theme={item.theme} size={16} /></div>
                                <span className={item.typeIcon ? 'next-nav-text' : 'next-nav-text p-0'}>{item.title} - test</span>
                                <div>
                                    {item.count && item.count > 0 ? <HrvComponents.Badges status='default' content={item.count}></HrvComponents.Badges> : null}
                                    {item.actions && item.actions()
                                        ? <HrvComponents.Popover content={item.actions && item.actions()} title='Title'>
                                            <HrvComponents.Icon size={10} type='dotThree' />
                                        </HrvComponents.Popover>
                                        : null}
                                </div>
                            </NavLink>
                        </div>
                }
            </li>
        );
    };

    private renderLogo = () => {
        return <Logo />
    }


    private RenderButtonAdd = () => {
        return (
            <ul className='m-0'>
                <li>
                    <div className="primary-button-partial-left-menu">
                        <button className="btn btn-primary">
                            <HrvComponents.Icon type="plus" size={12} className="px-2" />Tạo phiếu mới
                        </button>
                    </div>
                </li>
            </ul>
        )
    }


    private renderMenu = () => {
        return (
            <div className='partial-menu-left'>
                <div className='next-nav-menu-left next-nav-menu-left-primary'>
                    <div className='nav-left'>
                        {this.RenderButtonAdd()}
                        {this.renderMenuItem()}
                    </div>
                </div>
            </div>
        )
    }

    private renderMenuItem = () => {
        let { value } = this.props;
        let element = value.map((item: any, index: any) => {
            const key = "hrv-menu-parent-" + index;
            return this.menuItem(key, item);
        });
        return (
            <ul>{element}</ul>
        );
    }

    private renderProfile = () => {
        return this.props.profile;
    }
    private renderCloseButton = () => {
        return (
            <div className='ui-aside-closer'>
                <button type='button' className ="btn-aside-closer">
                    <HrvComponents.Icon type="times" size={14} className ="svg-next-icon" />
                </button>
            </div>
        )
    }
    public render() {
        return <div className='ui-aside nav--moved-in'>
            {this.renderLogo()}
            {this.renderMenu()}
            {this.renderProfile()}
            {this.renderCloseButton()}
        </div>
    }
}