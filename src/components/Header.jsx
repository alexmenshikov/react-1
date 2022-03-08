import React from "react";
import {IoMdRadioButtonOn, IoMdRadioButtonOff} from "react-icons/io";

const Header = ({filter, setFilter}) => {
    const onClickFilter = () => {
        if(filter.status) {
            setFilter({...filter, status: false});
        } else {
            setFilter({...filter, status: true});
        }
    };

    return (
        <div className="menu">
            <h2>Товары</h2>
            <button className="filter" onClick={onClickFilter}>
                Фильтр {filter.status
                ? <IoMdRadioButtonOn/>
                : <IoMdRadioButtonOff/>
            }
            </button>
        </div>
    );
};

export default Header;
