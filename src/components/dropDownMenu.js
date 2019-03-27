import * as React from 'react';
import * as HrvComponents from 'haravan-react-components';
import { NavLink } from "react-router-dom";
import './dropdown.css'

export default class PartialMenuLeft extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    menuItem = (key, item) => {
        return (
            <li key={key} className='next-nav-item'>
                {item && item.child && item.child.length > 0
                    ? (
                        <div>
                            {item.reload
                                ? (<a href={item.link} className='next-nav-link'>
                                    <div className='next-nav-item--icon'><HrvComponents.Icon type='Tasks' size={16} /></div>
                                    <span className='next-nav-text'>Collapse{item.title}</span>
                                </a>)
                                : (<NavLink exact to={item.link} className='next-nav-link' activeClassName="open">
                                    <div className='next-nav-item--icon'><HrvComponents.Icon type={item.typeIcon} size={16} theme={item.theme} /></div>
                                    <span className='next-nav-text'>{item.title}</span>
                                </NavLink>)}
                            <ul className='next-nav-dropdown'>
                                {item.child.map((child, index) => {
                                    return this.menuItem(index, child);
                                })}
                            </ul>
                        </div>
                    )
                    : (
                        (item.reload
                            ? (<a href={item.link} className='next-nav-link '>
                                <div className='next-nav-item--icon'><HrvComponents.Icon type='Tasks' size={16} /></div>
                                <span className='next-nav-text'>Collapse{item.title}</span>
                            </a>)
                            : (<NavLink exact to={item.link} className='next-nav-link'>
                                <div className='next-nav-item--icon'><HrvComponents.Icon type={item.typeIcon} theme={item.theme} size={16} /></div>
                                <span className='next-nav-text'>{item.title}</span>
                            </NavLink>))
                    )

                }
            </li>
        );
    };

    render() {
        let { value } = this.props;
        console.log(value);
        let element = value.map((item, index) => {
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