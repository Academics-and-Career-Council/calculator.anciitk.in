import { Layout } from 'antd';
import { Menu, Dropdown } from 'antd';
import { useState } from 'react';
import Coursename from '../components/Mcoursename';
import No_of_courses from '../pages/no_of_courses';
import { Button } from 'antd';
import Styles from '../pages/Msem_no.module.css'
const { Header, Footer, Content } = Layout;
import { Divider } from 'antd';

let NoOfCourses: number[] = []
let Grade: number[][] = []
let Credit: number[][] = []
let Name: string[][] = []



function cpi_calculation(props: number) {
    let num = 0;
    let denom = 0;

    for (var i = 0; i < props && NoOfCourses.length; i++) {

        for (var j = 0; j < NoOfCourses[i]; j++) {
            if (Grade[i][j] == 11 || Grade[i][j] == 12) {
                num += 0
                denom += 0
            } else if (Grade[i][j] == NaN || Credit[i][j] == NaN) {
                continue
            }
            else {
                num += Grade[i][j] * Credit[i][j]
                denom += Credit[i][j]
            }

        }
    }
    console.log(num)
    console.log(denom)
    var x = (num / denom).toFixed(2)
    return Number(x)
}

export default function sem_no() {
    const [sem, setSem] = useState(1)
    const [courseNo, setCourseNo] = useState(0)
    const [courseind, setCourseind] = useState(0)
    const [CPI, setCPI] = useState(false)
    const [button, setButton] = useState(false)
    let [cpi, setcpi] = useState(0)
    NoOfCourses[courseind] = courseNo
    let sem_no
    let sem_no_load = []
    sem_no = sem
    for (var i = 0; i < sem_no; i++) {
        sem_no_load.push(i)
    }
    let loadcourses: number[][] = []
    for (var j = 0; j < sem; j++) {
        loadcourses[j] = []
        for (var k = 0; k < NoOfCourses[j]; k++) {
            loadcourses[j][k] = k
        }
    }
    if (Grade.length < sem) {
        for (var i = Grade.length; i < sem; i++) {
            Grade[i] = []
            Credit[i] = []
            Name[i] = []
            for (var j = 0; j < NoOfCourses.length; j++) {
                Grade[i][j] = 10
            }
        }

    }
    const menu = (
        <Menu onClick={(e) => setSem(Number(e.key))}>
            <Menu.Item key="1">1</Menu.Item>
            <Menu.Item key="2">2</Menu.Item>
            <Menu.Item key="3">3</Menu.Item>
            <Menu.Item key="4">4</Menu.Item>
            <Menu.Item key="5">5</Menu.Item>
            <Menu.Item key="6">6</Menu.Item>
            <Menu.Item key="7">7</Menu.Item>
            <Menu.Item key="8">8</Menu.Item>
        </Menu>
    );
    return (
        <div>
            <Layout >
                <Header className={Styles.header}> CPI CALCULATOR </Header>
                < Content className={Styles.content} >
                    <div className={Styles.centre}>
                        <h2 style={{ paddingRight: '15px' }}>No of Semesters</h2>
                        <Dropdown
                            overlay={menu}
                            overlayStyle={{ color: 'black' }}
                            arrow={true}
                        >
                            <a className={Styles.a}>{sem}</a>
                        </Dropdown>
                    </div>
                    <div>
                        {sem_no_load.map((e: number) => <div>

                            <No_of_courses i={e} onChange={(event: number) => { setCourseNo(event), setCourseind(e), setButton(true) }} />
                        </div>)}
                    </div>
                    <div >
                        {loadcourses.map((e: number[], i1: number) => <div className={Styles.semdiv}>
                            {e[0] == 0 ? <h2 className={Styles.semno}>Semester {i1 + 1}</h2> : ''}
                            {e.map((e: number, i2: number) => <div className={Styles.semcourse}>
                                <Coursename onChange={(e: React.MouseEvent<HTMLInputElement>, check: number) => {
                                    if (check == 1) {
                                        Name[i1][i2] = e.currentTarget.value;
                                        console.log(Name)
                                    }
                                    if (check == 2) {
                                        Grade[i1][i2] = e.key;
                                    }
                                    if (check == 3) {
                                        Credit[i1][i2] = Number(e);
                                    }
                                }} />
                            </div>)}

                        </div>
                        )}
                    </div>
                    <div style={{ padding: '20px' }}>
                        {button ? <Button type="primary" onClick={() => { setcpi(cpi_calculation(sem)), setCPI(true) }} >
                            Calculate CPI
                        </Button> : ''}
                    </div>
                    <div className={Styles.centre}>
                        {CPI ? <h3 className={Styles.yourcpi}>Your CPI is {cpi}</h3> : ''}
                    </div>
                </Content>


            </Layout>

        </div>
    )
}