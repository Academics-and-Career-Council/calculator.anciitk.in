import { Input } from 'antd';
import { Menu, Dropdown } from 'antd';
import { useState } from 'react';
import { InputNumber } from 'antd';
import Mcoursename from '../components/Mcoursename.module.css';
import { Divider } from 'antd';

export default function coursename(props: any) {
    const [value, setValue] = useState('A*')
    const menu = (
        <Menu onClick={(e) => { props.onChange(e, 2), setValue(e.domEvent.target.outerText) }}>
            <Menu.Item key="10.0" >A*</Menu.Item>
            <Menu.Item key="10" >A</Menu.Item>
            <Menu.Item key="8">B</Menu.Item>
            <Menu.Item key="6">C</Menu.Item>
            <Menu.Item key="4">D</Menu.Item>
            <Menu.Item key="2">E</Menu.Item>
            <Menu.Item key="0">F</Menu.Item>
            <Menu.Item key="11">DROP</Menu.Item>
            <Menu.Item key="12">S/X</Menu.Item>
        </Menu>
    );
    return (
        <div  >
            <div className={Mcoursename.centre} style={{ marginTop: '1rem'}}>
                <h3 style={{marginLeft:'1rem',marginRight:'2rem'}}>
                    Course Name
                </h3>
                <Input
                    placeholder="Course Name"
                    type='text'
                    style={{ width: 'initial', marginRight: '1rem' }}
                    onChange={(e) => props.onChange(e, 1)}
                />
            </div>
            <Divider
                style={{ background: 'black', marginTop: '1vh', marginBottom: '1vh' }}
            />
            <div className={Mcoursename.centre}>
                <h3 style={{ marginLeft: '1rem', marginRight: '5.5rem' }}>
                    Grade
                </h3>
                <Dropdown
                    overlay={menu}
                    arrow={true}

                >
                    <a className={Mcoursename.a}>{value}</a>
                </Dropdown>
            </div>
            <Divider 
                style={{ background: 'black', marginTop: '1vh', marginBottom: '1vh' }}
            />
            <div className={Mcoursename.centre}>
                <h3 style={{ marginLeft: '1rem', marginRight: '2rem' }} >
                    Course Credit
                </h3>
                <InputNumber min={1} max={15}
                    placeholder='Credits'
                    onChange={(e) => props.onChange(e, 3)} />
            </div>
            {/* <Divider 
                style={{ background: 'black', marginTop: '1vh', marginBottom: '1vh' }}
            /> */}
        </div>
    )
}
