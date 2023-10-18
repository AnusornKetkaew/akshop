import React,{useState, useEffect, useCallback} from 'react'
import './disposit.sass'


import { Input } from 'react-rainbow-components';
import { Table, Column, ButtonGroup, ButtonIcon, Badge, MenuItem, Button } from 'react-rainbow-components';

export default function Deposit() {

    const [docno, setDocno] = useState('D20231018-001')
    const [docdate, setDocdate] = useState('2023-10-19')


    const inputStyles = {
        width: 300,
    };
    const badgeStyles = { color: '#1de9b6', marginLeft: '0.5rem' };
    const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;
  return (
    <div className='disposit'>
      <h1>รับสินค้า</h1>
      <div className='table'>
      <Table 
        data={[{
            no: 1,
            savedate: '18-10-2023',
            depositHD_code: 'D20231018-001',
            depositHD_status: 'ปกติ'
        },{
            no: 1,
            savedate: '18-10-2023',
            depositHD_code: 'D20231018-002',
            depositHD_status: 'ปกติ'
        },
        ]} 
        keyField="id"
        showRowNumberColumn
        >
            {/* <Column isEditable={false} header="ลำดับ" field="no" width={200}/> */}
            <Column isEditable={false} header="วันที่" field="savedate" />
            <Column  type='text' isEditable={false} header="เลขที่เอกสาร" field="depositHD_code" />
            <Column width={200} isEditable={false} header="สถานะ" field="depositHD_status" component={StatusBadge} />
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
