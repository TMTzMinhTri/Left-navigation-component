import * as React from 'react';
import * as HrvComponents from 'haravan-react-components';
import { NavLink, Link } from "react-router-dom";
import './dropdown.css'

export interface IMenu {
    title: string,
    link: string,
    typeIcon?: string,
    theme?: string,
    child?: IMenu[],
    reload: boolean,
    actions: React.ReactNode
}

interface Iprops {
    value: IMenu[],
}

export default class PartialMenuLeft extends React.Component<Iprops, any> {
    constructor(props: any) {
        super(props);

        this.state = {

        }
    }

    menuItem = (key: any, item: any) => {
        return (
            <li key={key} className='next-nav-item'>
                {item && item.child && item.child.length > 0
                    ? <div>
                        {item.reload
                            ? (<a href={item.link} className='next-nav-link'>
                                <div className='next-nav-item--icon'><HrvComponents.Icon type={item.typeIcon} size={16} /></div>
                                <span className={item.typeIcon ? 'next-nav-text' : 'next-nav-text p-0'}>{item.title}</span>
                                <div>
                                    {item.count && item.count > 0 ? <HrvComponents.Badges status='default' content={item.count} className='mr-1'></HrvComponents.Badges> : null}
                                    <HrvComponents.Icon size={8} type='arrow' />
                                    {item.actions && item.actions() ? <HrvComponents.Icon size={10} type='dotThree' /> : null}
                                </div>
                            </a>)
                            : (<NavLink to={item.link} className='next-nav-link' activeClassName="open">
                                <div className='next-nav-item--icon'><HrvComponents.Icon type={item.typeIcon} size={16} theme={item.theme} /></div>
                                <span className={item.typeIcon ? 'next-nav-text' : 'next-nav-text p-0'}>{item.title}</span>
                                <div>
                                    {item.count && item.count > 0 ? <HrvComponents.Badges status='default' content={item.count} className='mr-1'></HrvComponents.Badges> : null}
                                    <HrvComponents.Icon size={8} type='arrow' />
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
                                {item.count && item.count > 0 ? <HrvComponents.Badges status='default' content={item.count} className='mr-1'></HrvComponents.Badges> : null}
                                {item.actions && item.actions() ? <HrvComponents.Icon size={10} type='dotThree' /> : null}
                            </div>
                        </a>
                        : <div>
                            <NavLink exact to={item.link} className='next-nav-link'>
                                <div className='next-nav-item--icon'><HrvComponents.Icon type={item.typeIcon} theme={item.theme} size={16} /></div>
                                <span className={item.typeIcon ? 'next-nav-text' : 'next-nav-text p-0'}>{item.title} - test</span>
                                <div>
                                    {item.count && item.count > 0 ? <HrvComponents.Badges status='default' content={item.count} className='mr-1'></HrvComponents.Badges> : null}
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

    render() {
        let { value } = this.props;
        console.log(value);
        let element = value.map((item: any, index: any) => {
            const key = "hrv-menu-parent-" + index;
            return this.menuItem(key, item);
        });
        return (
            <div className='partial-menu-left'>
                <div className='next-nav-menu-left next-nav-menu-left-primary'>
                    <div className='nav-left'>
                        {element}
                    </div>
                </div>
            </div>
        )
    }
}