import React from "react";
import { DropdownMenu } from "./DropdownMenu";
import { useState } from "react";
import './Dropdown.css'

export const Dropdown = (props) => {

//найти способ закрывать дропдаун по нажатию мимо элемента

    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => setOpen(!isOpen)
    
    return (
        <a className="Menu-item" onClick={handleOpen}>hi {isOpen && <DropdownMenu/>}</a>
  );
};
