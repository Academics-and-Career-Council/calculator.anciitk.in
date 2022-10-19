import { InputRef, Tag } from 'antd';
import { Button, Form, Popconfirm, Table, AutoComplete } from 'antd';
import type { FormInstance } from 'antd/es/form';
import React, { useContext, useEffect, useRef, useState } from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';
import DataType from './datatype';
import { allSemsData } from './recoilDeclarations';
import { useRecoilState } from "recoil";
import getCreditsReceived from './getCreditsReceived';
import { options } from './courseOptions';
import { jsonOfCourseCredits } from './courseCredits';
import { type } from 'os';

const EditableContext = React.createContext<FormInstance<any> | null>(null);

const optionsGrade:any = [
  {value: 'A*'}, {value: 'A'}, {value: 'B'}, {value: 'C'}, {value: 'D'}, {value: 'E'}, {value: 'F'}, {value: 'S'}, {value: 'X'}
]

interface Item {
  // key: string;
  course: string;
  credits: number;
  credits_obtained: number;
  grade: string;
}

interface EditableRowProps {
  index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: keyof Item;
  record: Item;
  handleSave: (record: Item, sem: DataType[], setSem:any, isCourse:boolean) => void;
  sem: DataType[],
  setSem: any,
}

const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  sem,
  setSem,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;
  const [isCourse, setIsCourse] = useState(true)
  // console.log(dataIndex)
  if(dataIndex === "course" && isCourse === false) {
    setIsCourse(true);
  }
  if(dataIndex === "grade" && isCourse === true) {
    setIsCourse(false)
  }
  useEffect(() => {
    if (editing) {
      // inputRef.current!.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();

      toggleEdit();
      handleSave({ ...record, ...values }, sem, setSem, isCourse);
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;
  // if()
  if (editable) {
    childNode = editing ? (
      <div>
        <div> {isCourse &&
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <AutoComplete
    value={inputRef}
    options={options}
    placeholder="Type the course ID (eg. MTH101)"
    // onPressEnter={save}
    filterOption={(inputValue, option) =>
      typeof option!.value === 'string' && option!.value!.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
    onBlur={save}
  />
  </Form.Item>
  }
  </div>
  <div> { !isCourse &&
  <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <AutoComplete
    value={inputRef}
    options={optionsGrade}
    placeholder="Enter the grade obtained(A*, A, B, C, etc.)"
    // onPressEnter={save}
    filterOption={(inputValue, option) =>
      typeof option!.value === 'string' && option!.value!.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
    onBlur={save}
  />
  </Form.Item>
  }
  </div>
  </div>
    ) : (
      <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];





  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };



type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

const App: React.FC = () => {
  const [semData, setSemData] = useRecoilState(allSemsData)
  const [sem1, setSem1] = useState<DataType[]>([])
  const [sem2, setSem2] = useState<DataType[]>([])
  const [sem3, setSem3] = useState<DataType[]>([])
  const [sem4, setSem4] = useState<DataType[]>([])
  const [sem5, setSem5] = useState<DataType[]>([])
  const [sem6, setSem6] = useState<DataType[]>([])
  const [sem7, setSem7] = useState<DataType[]>([])
  const [sem8, setSem8] = useState<DataType[]>([])
  const [sem9, setSem9] = useState<DataType[]>([])
  const [sem10, setSem10] = useState<DataType[]>([])
  const [sem11, setSem11] = useState<DataType[]>([])
  const [sem12, setSem12] = useState<DataType[]>([])
  const [sem13, setSem13] = useState<DataType[]>([])
  const [sem14, setSem14] = useState<DataType[]>([])
  const [sem15, setSem15] = useState<DataType[]>([])
  const [sem16, setSem16] = useState<DataType[]>([])

  const [count, setCount] = useState(0);

  const addAllData = () => {
    setSemData([]);
    let semDataAll = semData
    semDataAll = []
    if(sem1.length !== 0) {semDataAll = [sem1];}
    if(sem2.length !== 0) {semDataAll?.push(sem2)}
    if(sem3.length !== 0) {semDataAll?.push(sem3)}
    if(sem4.length !== 0) {semDataAll?.push(sem4)}
    if(sem5.length !== 0) {semDataAll?.push(sem5)}
    if(sem6.length !== 0) {semDataAll?.push(sem6)}
    if(sem7.length !== 0) {semDataAll?.push(sem7)}
    if(sem8.length !== 0) {semDataAll?.push(sem8)}
    if(sem9.length !== 0) {semDataAll?.push(sem9)}
    if(sem10.length !== 0) {semDataAll?.push(sem10)}
    if(sem11.length !== 0) {semDataAll?.push(sem11)}
    if(sem12.length !== 0) {semDataAll?.push(sem12)}
    if(sem13.length !== 0) {semDataAll?.push(sem13)}
    if(sem14.length !== 0) {semDataAll?.push(sem14)}
    if(sem15.length !== 0) {semDataAll?.push(sem15)}
    if(sem16.length !== 0) {semDataAll?.push(sem16)}
    setSemData(semDataAll)
  }

  const handleDelete = (course: string, sem:DataType[], setSem:any, sem_num:number) => {
    addAllData()
    const newData = sem.filter(item => item.course !== course);
    setSem(newData);
    if(sem_num === count && newData.length === 0) {
        setCount(sem_num-1);
    }
  };
  const handleEdit = (course: string, sem:DataType[], setSem:any, sem_num:number) => {
    addAllData()
    let newData:DataType[] = [];
    for(let ind=0; ind<sem.length; ind++) {
      let temp:DataType = {course:sem[ind].course, credits:sem[ind].credits, credits_received:sem[ind].credits_received, grade: sem[ind].grade, is_repeated:sem[ind].is_repeated}
      newData.push(temp)
      // newData[ind].course = sem[ind].course
      // newData[ind].credits = sem[ind].credits
      // newData[ind].credits_received = sem[ind].credits_received
      // newData[ind].grade = sem[ind].grade
      // newData[ind].is_repeated = sem[ind].is_repeated
      if(newData[ind].course === course) {newData[ind].is_repeated = true}
    }
    setSem(newData);
    
  }
//: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[]
  const defaultColumns = (sem:DataType[], setSem:any, sem_num:number) => [
    {
      title: 'Course',
      dataIndex: 'course',
      width: '30%',
      editable: true,
    },
    {
      title: 'Credits',
      dataIndex: 'credits',
    },
    {
      title: 'Grade',
      dataIndex: 'grade',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_:any, record: { course: string }) =>
        sem.length >= 1 ? (
          <div>
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.course, sem, setSem, sem_num)}>
            <a>Delete </a>
          </Popconfirm>
           | 
          <Popconfirm title="Only click yes if you have done this course once again 
          after failing this course ( Make sure you do not select the best attempt )" 
          onConfirm={() => handleEdit(record.course, sem, setSem, sem_num)}>
          <a> Repeated</a>
        </Popconfirm>
        </div>
        ) : null,
    },
    {
      title: 'Repeated',
      dataIndex: 'is_repeated',
      
      render: (_:any, record: {is_repeated:Boolean} ) => (
        <>
          {(record.is_repeated === true) &&
              <Tag color='volcano' >
                Counted for SPI (NOT CPI)
              </Tag>
          }
          {
            (record.is_repeated === false) &&
            <Tag color='green' >
              Counted for SPI and CPI
            </Tag>
          }
        </>
      ),
    }
  ];
  
  
  const handleAdd = (setSem:any, sem:DataType[], sem_num:number) => {
    addAllData()
    const newData: DataType = {
    //   key: count,
      course: ``,
      grade: '',
      credits: 0,
      credits_received: 0,
      is_repeated: false,
    };
    if(count < sem_num){
        setCount(sem_num)
    }
    setSem([...sem, newData]);
    // setCount(count + 1);
  };

  const handleSave = (row: DataType, sem: DataType[], setSem:any, isCourse: boolean) => {
    addAllData()
    const newData = [...sem];
    if(isCourse === true) {
      let courseAtHand = jsonOfCourseCredits.filter(item => item.course === row.course)
      if(courseAtHand.length === 0) {
        row.credits = 0;
      }
      else {
        row.credits = courseAtHand[0].cred;
      }
    }
    else {
      row.credits_received = getCreditsReceived(row.credits, row.grade);
      
    }
    const index = newData.findIndex(item => row.course === item.course);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setSem(newData);
  };
  const columns = (sem:DataType[], setSem:any, sem_num:number) => defaultColumns(sem, setSem, sem_num).map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: DataType) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
        sem,
        setSem,
      }),
    };
  });
  
    const [isLoading, setIsLoading] = React.useState(false);
    const inputFileRef = React.useRef<HTMLInputElement | null>(null);

    // const handleOnClick = async (e: React.MouseEvent<HTMLInputElement>) => {

    //     e.preventDefault();

    //     if (!inputFileRef.current?.files?.length) {
    //         alert('Please, select file you want to upload');
    //         return;
    //     }

    //     setIsLoading(true);

    //     const formData = new FormData();
    //     Object.values(inputFileRef.current.files).forEach(file => {
    //         formData.append('file', file);
    //         console.log(file)
    //     })
    //     axios.post('http://127.0.0.1:5000/uploader', formData, {
    //       headers: {
    //         'Content-Type': 'multipart/form-data'
    //       }
    //     })
    //     .then(function (response) {
    //       let data = response.data
    //       console.log(data)
    //         let index = 0;
    //         for (index = 0; index < data['sems'].length; index++) {
    //         if( data['sems'][index]['sem_num'] === 1) {setSem1(data['sems'][index]['courses']); setCount(1)}
    //         else if( data['sems'][index]['sem_num'] === 2) {setSem2(data['sems'][index]['courses']); setCount(2)}
    //         else if(data['sems'][index]['sem_num'] === 3) {setSem3(data['sems'][index]['courses']); setCount(3)}
    //         else if(data['sems'][index]['sem_num'] === 4) {setSem4(data['sems'][index]['courses']); setCount(4)}
    //         else if(data['sems'][index]['sem_num'] === 5) {setSem5(data['sems'][index]['courses']); setCount(5)}
    //         else if(data['sems'][index]['sem_num'] === 6) {setSem6(data['sems'][index]['courses']); setCount(6)}
    //         else if(data['sems'][index]['sem_num'] === 7) {setSem7(data['sems'][index]['courses']); setCount(7)}
    //         else if(data['sems'][index]['sem_num'] === 8) {setSem8(data['sems'][index]['courses']); setCount(8)}
    //         else if(data['sems'][index]['sem_num'] === 9) {setSem9(data['sems'][index]['courses']); setCount(9)}
    //         else if( data['sems'][index]['sem_num'] === 10) {setSem10(data['sems'][index]['courses']); setCount(10)}
    //         else if( data['sems'][index]['sem_num'] === 11) {setSem11(data['sems'][index]['courses']); setCount(11)}
    //         else if( data['sems'][index]['sem_num'] === 12) {setSem12(data['sems'][index]['courses']); setCount(12)}
    //         else if( data['sems'][index]['sem_num'] === 13) {setSem13(data['sems'][index]['courses']); setCount(13)}
    //         else if( data['sems'][index]['sem_num'] === 14) {setSem14(data['sems'][index]['courses']); setCount(14)}
    //         else if( data['sems'][index]['sem_num'] === 15) {setSem15(data['sems'][index]['courses']); setCount(15)}
    //         else if( data['sems'][index]['sem_num'] === 16) {setSem16(data['sems'][index]['courses']); setCount(16)}
    //     }
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    //     addAllData()
    //     setIsLoading(false);
    // };
    
  
  return (
    <div >



            {/* <form style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                <div >
                    <input 
                    type="file" name="myfile" ref={inputFileRef} />
                    
                </div>
                <div >
                    <input type="submit" value="Upload" disabled={isLoading} onClick={handleOnClick} />
                    {isLoading && ` Wait, please...`}
                </div>
            </form> */}
      <div>
        {
            (count > 0) && 
            <div>
                <p style={{"fontSize":"25px"}}>Semester editing: 1</p>
      <Button onClick={() => handleAdd(setSem1, sem1, 1)} type="primary" style={{ marginBottom: 16 }}>
        Add a course
      </Button>
      
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={sem1}
        columns={columns(sem1, setSem1, 1) as ColumnTypes}
      />
      </div>
        }
      </div>
      <div>
        {
            (count > 1) && 
            <div>
                <p style={{"fontSize":"25px"}}>Semester editing: 2</p>
                <Button onClick={() => handleAdd(setSem2, sem2, 2)} type="primary" style={{ marginBottom: 16 }}>
        Add a course
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={sem2}
        columns={columns(sem2, setSem2, 2) as ColumnTypes}
      />
      </div>
        }
      </div>
      <div>
        {
            (count > 2) && 
            <div>
                <p style={{"fontSize":"25px"}}>Semester editing: 3</p>
                <Button onClick={() => handleAdd(setSem3, sem3, 3)} type="primary" style={{ marginBottom: 16 }}>
        Add a course
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={sem3}
        columns={columns(sem3, setSem3, 3) as ColumnTypes}
      />
      </div>
        }
      </div>
      <div>
        {
            (count > 3) && 
            <div>
                <p style={{"fontSize":"25px"}}>Semester editing: 4</p>
                <Button onClick={() => handleAdd(setSem4, sem4, 4)} type="primary" style={{ marginBottom: 16 }}>
        Add a course
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={sem4}
        columns={columns(sem4, setSem4, 4) as ColumnTypes}
      />
      </div>
        }
      </div>
      <div>
        {
            (count > 4) && 
            <div>
                <p style={{"fontSize":"25px"}}>Semester editing: 5</p>
                <Button onClick={() => handleAdd(setSem5, sem5, 5)} type="primary" style={{ marginBottom: 16 }}>
        Add a course
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={sem5}
        columns={columns(sem5, setSem5, 5) as ColumnTypes}
      />
      </div>
        }
      </div>
      <div>
        {
            (count > 5) && 
            <div>
                <p style={{"fontSize":"25px"}}>Semester editing: 6</p>
                <Button onClick={() => handleAdd(setSem6, sem6, 6)} type="primary" style={{ marginBottom: 16 }}>
        Add a course
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={sem6}
        columns={columns(sem6, setSem6, 6) as ColumnTypes}
      />
      </div>
        }
      </div>
      <div>
        {
            (count > 6) && 
            <div>
                <p style={{"fontSize":"25px"}}>Semester editing: 7</p>
                <Button onClick={() => handleAdd(setSem7, sem7, 7)} type="primary" style={{ marginBottom: 16 }}>
        Add a course
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={sem7}
        columns={columns(sem7, setSem7, 7) as ColumnTypes}
      />
      </div>
        }
      </div>
      <div>
        {
            (count > 7) && 
            <div>
                <p style={{"fontSize":"25px"}}>Semester editing: 8</p>
                <Button onClick={() => handleAdd(setSem8, sem8, 8)} type="primary" style={{ marginBottom: 16 }}>
        Add a course
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={sem8}
        columns={columns(sem8, setSem8, 8) as ColumnTypes}
      />
      </div>
        }
      </div>
      <div>
        {
            (count > 8) && 
            <div>
                <p style={{"fontSize":"25px"}}>Semester editing: 9</p>
                <Button onClick={() => handleAdd(setSem9, sem9, 9)} type="primary" style={{ marginBottom: 16 }}>
        Add a course
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={sem9}
        columns={columns(sem9, setSem9, 9) as ColumnTypes}
      />
      </div>
        }
      </div>
      <div>
        {
            (count > 9) && 
            <div>
                <p style={{"fontSize":"25px"}}>Semester editing: 10</p>
                <Button onClick={() => handleAdd(setSem10, sem10, 10)} type="primary" style={{ marginBottom: 16 }}>
        Add a course
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={sem10}
        columns={columns(sem10, setSem10, 10) as ColumnTypes}
      />
      </div>
        }
      </div>
      <div>
        {
            (count > 10) && 
            <div>
                <p style={{"fontSize":"25px"}}>Semester editing: 11</p>
                <Button onClick={() => handleAdd(setSem11, sem11, 11)} type="primary" style={{ marginBottom: 16 }}>
        Add a course
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={sem11}
        columns={columns(sem11, setSem11, 11) as ColumnTypes}
      />
      </div>
        }
      </div>
      <div>
        {
            (count > 11) && 
            <div>
                <p style={{"fontSize":"25px"}}>Semester editing: 12</p>
                <Button onClick={() => handleAdd(setSem12, sem12, 12)} type="primary" style={{ marginBottom: 16 }}>
        Add a course
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={sem12}
        columns={columns(sem12, setSem12, 12) as ColumnTypes}
      />
      </div>
        }
      </div>
      <div>
        {
            (count > 12) && 
            <div>
                <p style={{"fontSize":"25px"}}>Semester editing: 13</p>
                <Button onClick={() => handleAdd(setSem13, sem13, 13)} type="primary" style={{ marginBottom: 16 }}>
        Add a course
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={sem13}
        columns={columns(sem13, setSem13, 13) as ColumnTypes}
      />
      </div>
        }
      </div>
      <div>
        {
            (count > 13) && 
            <div>
                <p style={{"fontSize":"25px"}}>Semester editing: 14</p>
                <Button onClick={() => handleAdd(setSem14, sem14, 14)} type="primary" style={{ marginBottom: 16 }}>
        Add a course
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={sem14}
        columns={columns(sem14, setSem14, 14) as ColumnTypes}
      />
      </div>
        }
      </div>
      <div>
        {
            (count > 14) && 
            <div>
                <p style={{"fontSize":"25px"}}>Semester editing: 15</p>
                <Button onClick={() => handleAdd(setSem15, sem15, 15)} type="primary" style={{ marginBottom: 16 }}>
        Add a course
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={sem15}
        columns={columns(sem15, setSem15, 15) as ColumnTypes}
      />
      </div>
        }
      </div>
      <div>
        {
            (count > 15) && 
            <div>
                <p style={{"fontSize":"25px"}}>Semester editing: 16</p>
                <Button onClick={() => handleAdd(setSem16, sem16, 16)} type="primary" style={{ marginBottom: 16 }}>
        Add a course
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={sem16}
        columns={columns(sem16, setSem16, 16) as ColumnTypes}
      />
      </div>
        }
      
      <div style={{display:'flex',justifyContent:'center', alignItems:'center', padding:"10px"}}>
      <Button  style={{width:"150px"}} onClick={() => setCount(count+1)}> Add Sem </Button>
        </div>
        <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
      <Button style={{width:"150px"}} onClick={() => {
       if(count > 0) {setCount(count-1)}
       if(count === 1) {setSem1([]);}
       if(count === 2) {setSem2([]);}
       if(count === 3) {setSem3([]);}
       if(count === 4) {setSem4([]);}
       if(count === 5) {setSem5([]);}
       if(count === 6) {setSem6([]);}
       if(count === 7) {setSem7([]);}
       if(count === 8) {setSem8([]);}
       if(count === 9) {setSem9([]);}
       if(count === 10) {setSem10([]);}
       if(count === 11) {setSem11([]);}
       if(count === 12) {setSem12([]);}
       if(count === 13) {setSem13([]);}
       if(count === 14) {setSem14([]);}
       if(count === 15) {setSem15([]);}
       if(count === 16) {setSem16([]);}
        }}> Delete last Sem </Button>
        </div>
        <div style={{display:'flex',justifyContent:'center', alignItems:'center', padding:"10px"}}>
        <Button  style={{width:"150px"}} onClick={() => addAllData()}> Save </Button>
        </div>
        </div>
    </div>
  );
};

export default App;