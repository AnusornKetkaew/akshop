import moment from 'moment';
import React,{useState, useEffect, useCallback, useRef} from 'react'

import { Modal, Button, Table, Column, ButtonGroup, ButtonIcon, Badge, Drawer, Input } from 'react-rainbow-components';
import { NavLink } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiPlusBox } from '@mdi/js';
import { mdiDelete } from '@mdi/js';
import { mdiFileEdit   } from '@mdi/js';
import Swal from 'sweetalert2';

<Icon path={mdiDelete} size={1} />

export default function AddDisposit() {

    const CloseRef =  useRef()
    const [listProduct, setListProduct] = useState([])

    const [isOpen, setIsOpen] = useState(false)
    const [isOpenEdit, setIsOpenEdit] = useState(false)

    const [docdate, setDocdate] = useState(moment().format('l'))
    const [docno, setDocno] = useState('D20231018-0001')

    const [amn, setAmn] = useState()
    const [productID, setProductID] = useState()
    const [productName, setProductName] = useState()
    const [productUnit, setProductUnit] = useState()
    const [productUnitid, setProductUnitid] = useState()

    const handleOnClose = ()=>{CloseRef.current.click()}

    function handleRemove(params) {
        const newList = listProduct.filter((item) => item.productName !== params);
        setListProduct(newList);
    }

    async function handleSave(params) {
        if (await listProduct.length <= 0) {
            Swal.fire('แจ้งเตือน', 'เพิมรายการสินค้า', 'error')
            return
        }
        await Swal.fire({
            title: 'บันทึกข้อมูล?',
            text: "คุณต้แงการบันทึก ใช่หรือไม่!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'บันทึก',
            cancelButtonText: 'ยกเลิก'
            }).then(async(result) => {
            if (await result.isConfirmed) {
                saveData()
            }
        })

    }
    async function saveData() {
        try {
            const dt = []
            await listProduct.map(item =>{
                dt.push({
                    "product_id": item.productUnitid,
                    "amn": item.amn
                })
            })

            let data = JSON.stringify({
                "depositHD_code": docno,
                "depositHD_status": 'n',
                "dt": dt
            });

            console.log(data)
            await Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'บันทึกข้อมูลสำเร็จ',
                showConfirmButton: false,
                timer: 1500
              })
              await CloseRef.current.click()
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
    <NavLink ref={CloseRef} to={'/disposit'}/>
        <Modal 
        style={{
            overflow: 'hidden',
            width:"60%",
            minWidth: "50%",
            height: "80%"

            }}
        id="modal-1" 
        isOpen={true} 
        onRequestClose={handleOnClose} 
        size='large'
        footer={
            <div style={{display: 'flex', gap: '15px'}}>
            <Button label="ยกเลิก" variant="destructive" className="rainbow-m-around_medium" onClick={()=>{
                Swal.fire({
                    title: 'ปิดหน้าต่าง?',
                    text: "คุณจะปิดหน้านี้ ใช่หรือไม่!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'ปิด',
                    cancelButtonText: 'ไม่ปิด'
                    }).then((result) => {
                    if (result.isConfirmed) {
                        handleOnClose()
                    }
                })
                
            }} />
            <Button label="บันทึก" variant="success" className="rainbow-m-around_medium"
            onClick={()=>{
                handleSave()
            }}
            />
            
            </div>
        }
        >
        <div className='ModalHeader'>
            <span>รับสินค้า</span>
        </div>
         <div className='ModalBody'>
            <div><span>วันที่เอกสาร : </span>
                <span>{docdate}</span>
            </div>
            <div>
            <span>เลขที่เอกสาร : </span>
            <span>{docno}</span>
            </div>
         </div>     
         <hr/>
         <div className='ModalDT'>
            <Button 
            variant="brand" className="rainbow-m-around_medium"
            onClick={()=>{setIsOpen(true)}}>
            <Icon path={mdiPlusBox} size={1} /> เลือกสินค้า
            </Button>
            <div className='ModalDT_Table'>
            <Table style={{height: "100%", fontSize: '0.2em'}} 
            showRowNumberColumn 
            data={listProduct} 
            keyField="id"
            >
                <Column header="ชื่อสินค้า" field="productName" />
                <Column 
                cellAlignment='center' 
                header="จำนวน" 
                field="amn" 
                width={150}
                />
                <Column header="หน่วย" field="productUnit" width={150} />
                <Column
                    width={30}
                    component={({ row }) => (
                        <Icon 
                        style={{cursor: 'pointer'}} 
                        path={mdiFileEdit  } 
                        size={1} 
                        title={'แก้ไข'}
                        onClick={()=>{
                            setAmn(row.amn)
                            setProductID(row.productid)
                            setProductName(row.productName)
                            setProductUnit(row.productUnit)
                            setProductUnitid(row.productUnitid)
                            console.log(row)
                            setIsOpenEdit(true)
                        }}
                        />
                    )}
                />
                <Column
                    width={30}
                    component={({ row }) => (
                        <Icon 
                        style={{cursor: 'pointer'}} 
                        path={mdiDelete} 
                        size={1} title={'ลบ'} onClick={()=>{handleRemove(row.productName)}}/>
                    )}
                />
            </Table>
            </div>
         </div>     
        </Modal>
        <>
        <Modal
            isOpen={isOpen}
            onRequestClose={()=>{setIsOpen(false)}}
            title="เลือกสินค้า"
            size='large'
        >
            <Table
                id="table-5"
                keyField="id"
                style={{height: "200", fontSize: '0.2em'}}
                showRowNumberColumn
                data={[
                    {
                        productName: "เบียร์สิงห์"
                    },
                    {
                        productName: "เบียร์ช้าง"
                    },
                    {
                        productName: "เบียร์ลีโอ"
                    },
                ]}
                hideTableHeader
            >
                <Column header="ชื่อสินค้า" field="productName"  />
                <Column width={100} component={({row})=>{return(
                <Button
                style={{height: '2rem'}}
                    shaded
                    label="เลือก"
                    onClick={() => {
                        const found = listProduct.find((item) => item.productName === row.productName);
                        if(found === undefined){
                            listProduct.push({
                                productName: row.productName,
                                productid: 1,
                                amn: 1,
                                productUnit: 'ขวด',
                                productUnitid: 1,
                            })
                            setIsOpen(false)
                        }else{
                            Swal.fire('แจ้งเตือน', 'ได้เลือกสินค้านี้ไปแล้ว', 'warning')
                        }
                        
                    }}
                    variant="border-filled"
                    className="rainbow-m-around_medium"
                />
            )}}/>
            </Table>
        </Modal>
        <Modal 
        isOpen={isOpenEdit} 
        onRequestClose={()=>{setIsOpenEdit(false)}}
        >
            <Input
                label="กรอกจำนวน"
                type="number"
                className="rainbow-p-around_medium"
                value={amn}
                onChange={(e)=>{setAmn(e.target.value)}}
                required
            />
            <Button 
            variant="brand" className="rainbow-m-around_medium"
            onClick={()=>{
                if(amn <= 0){
                    Swal.fire('แจ้งเตือน', 'จำนวนต้องมากกว่า 0', 'warning')
                }else{
                const index = listProduct.findIndex((item) => item.productName === productName);

                const update = {
                    productid: 1,
                    productName: productName,
                    amn: amn,
                    productUnit: productUnit,
                    productUnitid: 1
                }

                const newData = [
                    ...listProduct.slice(0, index),
                    update,
                    ...listProduct.slice(index + 1),
                ]
                setListProduct(newData);
                setIsOpenEdit(false)
                }}}>ตกลง
            </Button>
         </Modal>
        </>
    </div>
  )
}
