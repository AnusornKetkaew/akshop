import React, {useState, useRef} from 'react'
import './navbar.sass'
import { VerticalNavigation, VerticalSection, VerticalItem } from 'react-rainbow-components';
import { NavLink } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiHomeVariantOutline, mdiCashFast , mdiPointOfSale  , mdiChartBar  } from '@mdi/js';



export default function Navbar() {
    const [state, setState] = useState();
    const item1 = useRef();
    const item2 = useRef();
    const item3 = useRef();
    const item4 = useRef();
    const selectedItem = () =>{setState(!state)}

    const handleitem1 = ()=>{item1.current.click();};
    const handleitem2 = ()=>{item2.current.click();};
    const handleitem3 = ()=>{item3.current.click();};
    const handleitem4 = ()=>{item4.current.click();};
  return (
    <div className='navbar'>
    <NavLink ref={item1} to={'/'}/>
    <NavLink ref={item2} to={'/disposit'}/>
    <NavLink ref={item3} to={'/sale'}/>
    <NavLink ref={item4} to={'/report'}/>
    <VerticalNavigation
        selectedItem={state}
        onSelect={selectedItem}
    >
        <VerticalSection>
            <VerticalItem onClick={()=>{handleitem1()}} name="item-1" label="หน้าหลัก" icon={<Icon color={'#333'} path={mdiHomeVariantOutline} size={1} />} />
            <VerticalItem onClick={()=>{handleitem2()}} name="item-2" label="รับสินค้า" icon={<Icon color={'#333'} path={mdiCashFast} size={1} />}/>
            <VerticalItem onClick={()=>{handleitem3()}} name="item-3" label="ขาย" icon={<Icon color={'#333'} path={mdiPointOfSale} size={1} />}/>
            <VerticalItem onClick={()=>{handleitem4()}} name="item-4" label="รายงานสินค้าคงเหลือ" icon={<Icon color={'#333'} path={mdiChartBar} size={1} />}/>
        </VerticalSection>
    </VerticalNavigation>
    </div>
  )
}
