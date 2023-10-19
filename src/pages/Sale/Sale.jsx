import React,{useState, useEffect, useCallback, useRef} from 'react'

import './sale.sass'
import Icon from '@mdi/react';
import { NavLink } from 'react-router-dom';
import { Table, 
  Column, 
  ButtonGroup, 
  ButtonIcon, 
  Badge, 
  MenuItem, 
  Button
} from 'react-rainbow-components';
import { mdiPointOfSale } from '@mdi/js';


export default function Sale() {
  const AddRef = useRef();
  const badgeStyles = { color: '#1de9b6', marginLeft: '0.5rem' };
  const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;
  return (
    <div className='sale'>
    <NavLink ref={AddRef} to={'/sale/add'}/>
      <h1>รายการขาย</h1>
      <Button onClick={()=>{
        AddRef.current.click();
      }} variant="brand" className="rainbow-m-around_medium">
            ขายสินค้า
            <Icon path={mdiPointOfSale} size={1} />
        </Button>
        <div className='table'>
        <Table 
          data={[{
              no: 1,
              savedate: '18-10-2023',
              depositHD_code: 'S20231018-001',
              depositHD_status: 'ปกติ'
          },{
              no: 2,
              savedate: '18-10-2023',
              depositHD_code: 'S20231018-002',
              depositHD_status: 'ปกติ'
          },
          ]} 
          keyField="id"
          showRowNumberColumn
          >
              {/* <Column isEditable={false} header="ลำดับ" field="no" width={200}/> */}
              <Column isEditable={false} header="วันที่" field="savedate" />
              <Column  type='text' isEditable={false} header="เลขที่เอกสาร" field="depositHD_code" />
              <Column width={180} isEditable={false} header="สถานะ" field="depositHD_status" component={StatusBadge} />
              <Column width={100} component={({row})=>{return(
                  <Button
                  style={{height: '2rem'}}
                      shaded
                      label="เปิด"
                      onClick={() => {
                          alert(row.depositHD_code)
                          console.log(row)
                      }}
                      variant="border-filled"
                      className="rainbow-m-around_medium"
                  />
              )}}/>
        </Table>
      </div>
    </div>
    
  )
}
