import { Input } from 'antd';
import { Menu, Dropdown } from 'antd';
import { useState } from 'react';
import { InputNumber } from 'antd';
import Mcoursename from '../components/Mcoursename.module.css';
import { Divider } from 'antd';
import { Select } from 'antd';
const { Option } = Select;

export default function coursename(props: any) {
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
                <h3 style={{ marginLeft: '1rem', marginRight: '5rem' }}>
                    Grade
                </h3>
                <Select placeholder='Grade' style={{ width: 80, fontWeight: 'bolder', textAlign: 'center', marginLeft: '1rem' }} onChange={(e) => { props.onChange(e, 2) }}>
                    <Option value="10.0">A*</Option>
                    <Option value="10">A</Option>
                    <Option value="8">B</Option>
                    <Option value="6">C</Option>
                    <Option value="4">D</Option>
                    <Option value="2">E</Option>
                    <Option value="0">F</Option>
                    <Option value="11">DROP</Option>
                    <Option value="12">S/X</Option>
                </Select>
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
        </div>
    )
}
