exports.id = 630;
exports.ids = [630];
exports.modules = {

/***/ 6951:
/***/ ((module) => {

// Exports
module.exports = {
	"logoutMenuItem": "SignupStyles_logoutMenuItem__EB2CU",
	"mobile": "SignupStyles_mobile__bG_cB",
	"nonmobile": "SignupStyles_nonmobile__BIil3",
	"bothmobile": "SignupStyles_bothmobile__3b_l3"
};


/***/ }),

/***/ 3037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* binding */ Navigation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(4722);
// EXTERNAL MODULE: ./components/typeDefinitions/recoilDeclarations.tsx
var recoilDeclarations = __webpack_require__(4820);
;// CONCATENATED MODULE: ./components/auxilliary_functions/getCreditsReceived.tsx
function getCreditsReceived(credits, grade) {
    if (grade === "A" || grade === "A*") return credits;
    if (grade === "B+") return 0.9 * credits;
    if (grade === "B") return credits * 0.8;
    if (grade === "C+") return 0.7 * credits;
    if (grade === "C") return credits * 0.6;
    if (grade === "D+") return 0.5 * credits;
    if (grade === "D") return credits * 0.4;
    if (grade === "E") return credits * 0.2;
    if (grade === "F") return 0;
    if (grade === "S") return credits;
    return 0;
}

// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./pkg/recoilDeclarations.tsx
var pkg_recoilDeclarations = __webpack_require__(3809);
;// CONCATENATED MODULE: ./components/essensial_functionality/handlecases.tsx

const handleEdit = (key, sem, setSem, sem_num, setSemData, semData, sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8, sem9, sem10, sem11, sem12, sem13, sem14, sem15, sem16)=>{
    addAllData(setSemData, semData, sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8, sem9, sem10, sem11, sem12, sem13, sem14, sem15, sem16);
    let newData = [];
    for(let ind = 0; ind < sem.length; ind++){
        let temp = {
            key: sem[ind].key,
            course: sem[ind].course,
            credits: sem[ind].credits,
            credits_received: sem[ind].credits_received,
            grade: sem[ind].grade,
            is_repeated: sem[ind].is_repeated,
            is_sx: false
        };
        newData.push(temp);
        if (newData[ind].key === key) {
            if (newData[ind].is_repeated === true) {
                newData[ind].is_repeated = false;
            } else {
                newData[ind].is_repeated = true;
            }
        }
    }
    setSem(newData);
    addAllData(setSemData, semData, sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8, sem9, sem10, sem11, sem12, sem13, sem14, sem15, sem16);
};
const handleDelete = (key, sem, setSem, sem_num, count, setCount, setSemData, semData, sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8, sem9, sem10, sem11, sem12, sem13, sem14, sem15, sem16)=>{
    addAllData(setSemData, semData, sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8, sem9, sem10, sem11, sem12, sem13, sem14, sem15, sem16);
    const newData = sem.filter((item)=>item.key !== key);
    setSem(newData);
    if (sem_num === count && newData.length === 0) {
        setCount(sem_num - 1);
    }
    addAllData(setSemData, semData, sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8, sem9, sem10, sem11, sem12, sem13, sem14, sem15, sem16);
};

;// CONCATENATED MODULE: ./components/essensial_functionality/columnDeclaration.tsx



const addAllData = (setSemData, semData, sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8, sem9, sem10, sem11, sem12, sem13, sem14, sem15, sem16)=>{
    setSemData([]);
    let semDataAll = semData;
    semDataAll = [];
    if (sem1.length !== 0) {
        semDataAll = [
            sem1
        ];
    }
    if (sem2.length !== 0) {
        semDataAll?.push(sem2);
    }
    if (sem3.length !== 0) {
        semDataAll?.push(sem3);
    }
    if (sem4.length !== 0) {
        semDataAll?.push(sem4);
    }
    if (sem5.length !== 0) {
        semDataAll?.push(sem5);
    }
    if (sem6.length !== 0) {
        semDataAll?.push(sem6);
    }
    if (sem7.length !== 0) {
        semDataAll?.push(sem7);
    }
    if (sem8.length !== 0) {
        semDataAll?.push(sem8);
    }
    if (sem9.length !== 0) {
        semDataAll?.push(sem9);
    }
    if (sem10.length !== 0) {
        semDataAll?.push(sem10);
    }
    if (sem11.length !== 0) {
        semDataAll?.push(sem11);
    }
    if (sem12.length !== 0) {
        semDataAll?.push(sem12);
    }
    if (sem13.length !== 0) {
        semDataAll?.push(sem13);
    }
    if (sem14.length !== 0) {
        semDataAll?.push(sem14);
    }
    if (sem15.length !== 0) {
        semDataAll?.push(sem15);
    }
    if (sem16.length !== 0) {
        semDataAll?.push(sem16);
    }
    setSemData(semDataAll);
};
const defaultColumns = (sem, setSem, sem_num, count, setCount, setSemData, semData, sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8, sem9, sem10, sem11, sem12, sem13, sem14, sem15, sem16)=>[
        {
            key: "key",
            title: "Course",
            dataIndex: "course",
            width: "30%",
            editable: true,
            message: "Course ID (ex: MTH101A)"
        },
        {
            title: "Credits",
            dataIndex: "credits",
            message: ""
        },
        {
            title: "Grade",
            dataIndex: "grade",
            editable: true,
            message: "Grade(A*, A, B+, etc)"
        },
        {
            title: "operation",
            dataIndex: "operation",
            render: (_, record)=>sem.length >= 1 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Popconfirm, {
                            title: "Sure to delete?",
                            onConfirm: ()=>handleDelete(record.key, sem, setSem, sem_num, count, setCount, setSemData, semData, sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8, sem9, sem10, sem11, sem12, sem13, sem14, sem15, sem16),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: "Delete "
                            })
                        }),
                        "|",
                        record.is_repeated === false && /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Popconfirm, {
                            title: "Only click yes if you have done this course once again after failing this course ( Make sure you do not select the best attempt )",
                            onConfirm: ()=>handleEdit(record.key, sem, setSem, sem_num, setSemData, semData, sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8, sem9, sem10, sem11, sem12, sem13, sem14, sem15, sem16),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: " Repeated"
                            })
                        }),
                        record.is_repeated === true && /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Popconfirm, {
                            title: "Click Yes to make this course counted for both SPI and CPI",
                            onConfirm: ()=>handleEdit(record.key, sem, setSem, sem_num, setSemData, semData, sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8, sem9, sem10, sem11, sem12, sem13, sem14, sem15, sem16),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: " Undo Repeat"
                            })
                        })
                    ]
                }) : null
        },
        {
            title: "Repeated",
            dataIndex: "is_repeated",
            render: (_, record)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        record.is_repeated === true && /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Tag, {
                            color: "volcano",
                            children: "Counted for SPI (NOT CPI)"
                        }),
                        record.is_repeated === false && /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Tag, {
                            color: "green",
                            children: "Counted for SPI and CPI"
                        })
                    ]
                })
        }, 
    ];

;// CONCATENATED MODULE: ./components/essensial_functionality/tableSpecifications.tsx




// import { options } from "../data/courseOptions";



const EditableContext = /*#__PURE__*/ external_react_default().createContext(null);
const EditableRow = ({ index , ...props })=>{
    const [form] = external_antd_.Form.useForm();
    return /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form, {
        form: form,
        component: false,
        children: /*#__PURE__*/ jsx_runtime_.jsx(EditableContext.Provider, {
            value: form,
            children: /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                ...props
            })
        })
    });
};
const EditableCell = ({ title , editable , children , dataIndex , record , handleSave , sem , setSem , message , is_sx , ...restProps })=>{
    const [group, setGroup] = (0,external_recoil_.useRecoilState)(recoilDeclarations/* allCoursesY22 */.HW);
    const [isy22, setisy22] = (0,external_recoil_.useRecoilState)(recoilDeclarations/* y22 */.S_);
    const [jsonOfCourseCredits, setjsonOfCourseCredits] = (0,external_recoil_.useRecoilState)(recoilDeclarations/* allCourses */.im);
    let options = [];
    let courseY22 = [];
    let i = 0;
    for(i; i < 1375; i++){
        if (jsonOfCourseCredits[i] && !jsonOfCourseCredits[i].category) {
            options.push({
                value: jsonOfCourseCredits[i].course
            });
        } else if (jsonOfCourseCredits[i] && jsonOfCourseCredits[i].category) {
            courseY22.push(jsonOfCourseCredits[i]);
        }
    }
    if (!isy22) {
        setisy22(1);
        setGroup(courseY22);
    }
    const { 0: editing , 1: setEditing  } = (0,external_react_.useState)(false);
    const { 0: wasEdited , 1: setWasEdited  } = (0,external_react_.useState)(false);
    const inputRef = (0,external_react_.useRef)(null);
    const form = (0,external_react_.useContext)(EditableContext);
    const { 0: isCourse , 1: setIsCourse  } = (0,external_react_.useState)(true);
    if (dataIndex === "course" && isCourse === false) {
        setIsCourse(true);
    }
    if (dataIndex === "grade" && isCourse === true) {
        setIsCourse(false);
    }
    (0,external_react_.useEffect)(()=>{
        if (editing) {}
    }, [
        editing
    ]);
    const toggleEdit = ()=>{
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex]
        });
    };
    const save = async ()=>{
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({
                ...record,
                ...values
            }, sem, setSem, isCourse);
        } catch (errInfo) {
        // console.log("Save failed:", errInfo);
        }
    };
    let childNode = children;
    if (childNode?.toString() !== ",[object Object]" && childNode?.toString() !== "," && childNode?.toString() !== ",0" && wasEdited === false) {
        setWasEdited(true);
    }
    if (editable) {
        childNode = editing ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        " ",
                        isCourse && /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                            style: {
                                margin: 0
                            },
                            name: dataIndex,
                            rules: [
                                {
                                    required: true,
                                    message: `${title} is required.`
                                }, 
                            ],
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.AutoComplete, {
                                value: inputRef,
                                options: options,
                                placeholder: "Course ID (ex: MTH101A)",
                                // onPressEnter={save}
                                filterOption: (inputValue, option)=>typeof option.value === "string" && option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1,
                                onBlur: save,
                                onSelect: save
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        " ",
                        !isCourse && /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Form.Item, {
                            style: {
                                margin: 0
                            },
                            name: dataIndex,
                            rules: [
                                {
                                    required: true,
                                    message: `${title} is required.`
                                }, 
                            ],
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.AutoComplete, {
                                value: inputRef,
                                options: is_sx ? optionsSX : optionsGrade,
                                placeholder: is_sx ? "Grade(S, X)" : "Grade(A*, A, B+, etc)",
                                // onPressEnter={save}
                                filterOption: (inputValue, option)=>typeof option.value === "string" && option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1,
                                onBlur: save,
                                onSelect: save
                            })
                        })
                    ]
                })
            ]
        }) : !wasEdited ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "editable-cell-value-wrap",
            style: {
                paddingRight: 24,
                color: "lightgray"
            },
            onClick: ()=>{
                setWasEdited(true), toggleEdit(), setWasEdited(true);
            },
            children: isCourse ? message : is_sx ? "Grade(S, X)" : message
        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "editable-cell-value-wrap",
            style: {
                paddingRight: 24
            },
            onClick: toggleEdit,
            children: children
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("td", {
        ...restProps,
        children: childNode
    });
};

;// CONCATENATED MODULE: ./components/typeDefinitions/datatype.tsx


const components = {
    body: {
        row: EditableRow,
        cell: EditableCell
    }
};
const optionsGrade = [
    {
        value: "A*"
    },
    {
        value: "A"
    },
    {
        value: "B+"
    },
    {
        value: "B"
    },
    {
        value: "C+"
    },
    {
        value: "C"
    },
    {
        value: "D+"
    },
    {
        value: "D"
    },
    {
        value: "E(old)"
    },
    {
        value: "E(new)"
    },
    {
        value: "F"
    },
    {
        value: "S"
    },
    {
        value: "X"
    }
];
const optionsSX = [
    {
        value: "S"
    },
    {
        value: "X"
    }, 
];

;// CONCATENATED MODULE: ./components/repeated_sems.tsx





function RepeatedSems(props) {
    const getrandom = ()=>{
        return Math.floor(Math.random() * 1000000000000000000);
    };
    const handleAdd = (setSem, sem, sem_num)=>{
        addAllData(props.setSemData, props.semData, props.sem1, props.sem2, props.sem3, props.sem4, props.sem5, props.sem6, props.sem7, props.sem8, props.sem9, props.sem10, props.sem11, props.sem12, props.sem13, props.sem14, props.sem15, props.sem16);
        const newData = {
            key: getrandom(),
            course: ``,
            grade: "",
            credits: 0,
            credits_received: 0,
            is_repeated: false,
            is_sx: false
        };
        if (props.count < sem_num) {
            props.setCount(sem_num);
        }
        setSem([
            ...sem,
            newData
        ]);
        addAllData(props.setSemData, props.semData, props.sem1, props.sem2, props.sem3, props.sem4, props.sem5, props.sem6, props.sem7, props.sem8, props.sem9, props.sem10, props.sem11, props.sem12, props.sem13, props.sem14, props.sem15, props.sem16);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: props.count > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            style: {
                                fontSize: "25px"
                            },
                            children: "Semester editing: 1"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                            onClick: ()=>handleAdd(props.setSem1, props.sem1, 1),
                            type: "primary",
                            style: {
                                marginBottom: 16
                            },
                            children: "Add a course"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Table, {
                            // size=''
                            components: components,
                            rowClassName: ()=>"editable-row",
                            bordered: true,
                            dataSource: props.sem1,
                            columns: props.columns(props.sem1, props.setSem1, 1)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: props.count > 1 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            style: {
                                fontSize: "25px"
                            },
                            children: "Semester editing: 2"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                            onClick: ()=>handleAdd(props.setSem2, props.sem2, 2),
                            type: "primary",
                            style: {
                                marginBottom: 16
                            },
                            children: "Add a course"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Table, {
                            components: components,
                            rowClassName: ()=>"editable-row",
                            bordered: true,
                            dataSource: props.sem2,
                            columns: props.columns(props.sem2, props.setSem2, 2)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: props.count > 2 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            style: {
                                fontSize: "25px"
                            },
                            children: "Semester editing: 3"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                            onClick: ()=>handleAdd(props.setSem3, props.sem3, 3),
                            type: "primary",
                            style: {
                                marginBottom: 16
                            },
                            children: "Add a course"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Table, {
                            components: components,
                            rowClassName: ()=>"editable-row",
                            bordered: true,
                            dataSource: props.sem3,
                            columns: props.columns(props.sem3, props.setSem3, 3)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: props.count > 3 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            style: {
                                fontSize: "25px"
                            },
                            children: "Semester editing: 4"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                            onClick: ()=>handleAdd(props.setSem4, props.sem4, 4),
                            type: "primary",
                            style: {
                                marginBottom: 16
                            },
                            children: "Add a course"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Table, {
                            components: components,
                            rowClassName: ()=>"editable-row",
                            bordered: true,
                            dataSource: props.sem4,
                            columns: props.columns(props.sem4, props.setSem4, 4)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: props.count > 4 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            style: {
                                fontSize: "25px"
                            },
                            children: "Semester editing: 5"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                            onClick: ()=>handleAdd(props.setSem5, props.sem5, 5),
                            type: "primary",
                            style: {
                                marginBottom: 16
                            },
                            children: "Add a course"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Table, {
                            components: components,
                            rowClassName: ()=>"editable-row",
                            bordered: true,
                            dataSource: props.sem5,
                            columns: props.columns(props.sem5, props.setSem5, 5)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: props.count > 5 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            style: {
                                fontSize: "25px"
                            },
                            children: "Semester editing: 6"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                            onClick: ()=>handleAdd(props.setSem6, props.sem6, 6),
                            type: "primary",
                            style: {
                                marginBottom: 16
                            },
                            children: "Add a course"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Table, {
                            components: components,
                            rowClassName: ()=>"editable-row",
                            bordered: true,
                            dataSource: props.sem6,
                            columns: props.columns(props.sem6, props.setSem6, 6)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: props.count > 6 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            style: {
                                fontSize: "25px"
                            },
                            children: "Semester editing: 7"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                            onClick: ()=>handleAdd(props.setSem7, props.sem7, 7),
                            type: "primary",
                            style: {
                                marginBottom: 16
                            },
                            children: "Add a course"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Table, {
                            components: components,
                            rowClassName: ()=>"editable-row",
                            bordered: true,
                            dataSource: props.sem7,
                            columns: props.columns(props.sem7, props.setSem7, 7)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: props.count > 7 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            style: {
                                fontSize: "25px"
                            },
                            children: "Semester editing: 8"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                            onClick: ()=>handleAdd(props.setSem8, props.sem8, 8),
                            type: "primary",
                            style: {
                                marginBottom: 16
                            },
                            children: "Add a course"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Table, {
                            components: components,
                            rowClassName: ()=>"editable-row",
                            bordered: true,
                            dataSource: props.sem8,
                            columns: props.columns(props.sem8, props.setSem8, 8)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: props.count > 8 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            style: {
                                fontSize: "25px"
                            },
                            children: "Semester editing: 9"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                            onClick: ()=>handleAdd(props.setSem9, props.sem9, 9),
                            type: "primary",
                            style: {
                                marginBottom: 16
                            },
                            children: "Add a course"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Table, {
                            components: components,
                            rowClassName: ()=>"editable-row",
                            bordered: true,
                            dataSource: props.sem9,
                            columns: props.columns(props.sem9, props.setSem9, 9)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: props.count > 9 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            style: {
                                fontSize: "25px"
                            },
                            children: "Semester editing: 10"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                            onClick: ()=>handleAdd(props.setSem10, props.sem10, 10),
                            type: "primary",
                            style: {
                                marginBottom: 16
                            },
                            children: "Add a course"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Table, {
                            components: components,
                            rowClassName: ()=>"editable-row",
                            bordered: true,
                            dataSource: props.sem10,
                            columns: props.columns(props.sem10, props.setSem10, 10)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: props.count > 10 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            style: {
                                fontSize: "25px"
                            },
                            children: "Semester editing: 11"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                            onClick: ()=>handleAdd(props.setSem11, props.sem11, 11),
                            type: "primary",
                            style: {
                                marginBottom: 16
                            },
                            children: "Add a course"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Table, {
                            components: components,
                            rowClassName: ()=>"editable-row",
                            bordered: true,
                            dataSource: props.sem11,
                            columns: props.columns(props.sem11, props.setSem11, 11)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: props.count > 11 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            style: {
                                fontSize: "25px"
                            },
                            children: "Semester editing: 12"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                            onClick: ()=>handleAdd(props.setSem12, props.sem12, 12),
                            type: "primary",
                            style: {
                                marginBottom: 16
                            },
                            children: "Add a course"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Table, {
                            components: components,
                            rowClassName: ()=>"editable-row",
                            bordered: true,
                            dataSource: props.sem12,
                            columns: props.columns(props.sem12, props.setSem12, 12)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: props.count > 12 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            style: {
                                fontSize: "25px"
                            },
                            children: "Semester editing: 13"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                            onClick: ()=>handleAdd(props.setSem13, props.sem13, 13),
                            type: "primary",
                            style: {
                                marginBottom: 16
                            },
                            children: "Add a course"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Table, {
                            components: components,
                            rowClassName: ()=>"editable-row",
                            bordered: true,
                            dataSource: props.sem13,
                            columns: props.columns(props.sem13, props.setSem13, 13)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: props.count > 13 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            style: {
                                fontSize: "25px"
                            },
                            children: "Semester editing: 14"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                            onClick: ()=>handleAdd(props.setSem14, props.sem14, 14),
                            type: "primary",
                            style: {
                                marginBottom: 16
                            },
                            children: "Add a course"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Table, {
                            components: components,
                            rowClassName: ()=>"editable-row",
                            bordered: true,
                            dataSource: props.sem14,
                            columns: props.columns(props.sem14, props.setSem14, 14)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: props.count > 14 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            style: {
                                fontSize: "25px"
                            },
                            children: "Semester editing: 15"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                            onClick: ()=>handleAdd(props.setSem15, props.sem15, 15),
                            type: "primary",
                            style: {
                                marginBottom: 16
                            },
                            children: "Add a course"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Table, {
                            components: components,
                            rowClassName: ()=>"editable-row",
                            bordered: true,
                            dataSource: props.sem15,
                            columns: props.columns(props.sem15, props.setSem15, 15)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: props.count > 15 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            style: {
                                fontSize: "25px"
                            },
                            children: "Semester editing: 16"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                            onClick: ()=>handleAdd(props.setSem16, props.sem16, 16),
                            type: "primary",
                            style: {
                                marginBottom: 16
                            },
                            children: "Add a course"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Table, {
                            components: components,
                            rowClassName: ()=>"editable-row",
                            bordered: true,
                            dataSource: props.sem16,
                            columns: props.columns(props.sem16, props.setSem16, 16)
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/uploadTranscript.tsx






// import { jsonOfCourseCredits } from './data/courseCredits';




let setVar = 4;
let userDataExist = 0;
let ver = 0;
const App = ()=>{
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    const showModal = ()=>{
        setOpen(true);
    };
    const handleOk = ()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            setOpen(false);
        }, 3000);
    };
    const handleCancel = ()=>{
        setOpen(false);
    };
    const [count, setCount] = (0,external_recoil_.useRecoilState)(recoilDeclarations/* semCount */.Rg);
    // setCount(dummyData.length);
    const [semData, setSemData] = (0,external_recoil_.useRecoilState)(recoilDeclarations/* allSemsData */.ly);
    const [jsonOfCourseCredits, setjsonOfCourseCredits] = (0,external_recoil_.useRecoilState)(recoilDeclarations/* allCourses */.im);
    const [sem1, setSem1] = (0,external_recoil_.useRecoilState)(recoilDeclarations/* Sem1Data */.bX);
    const [sem2, setSem2] = (0,external_recoil_.useRecoilState)(recoilDeclarations/* Sem2Data */.Pv);
    const [sem3, setSem3] = (0,external_recoil_.useRecoilState)(recoilDeclarations/* Sem3Data */.$e);
    const [sem4, setSem4] = (0,external_recoil_.useRecoilState)(recoilDeclarations/* Sem4Data */.Vd);
    const [sem5, setSem5] = (0,external_recoil_.useRecoilState)(recoilDeclarations/* Sem5Data */.vK);
    const [sem6, setSem6] = (0,external_recoil_.useRecoilState)(recoilDeclarations/* Sem6Data */.Tr);
    const [sem7, setSem7] = (0,external_recoil_.useRecoilState)(recoilDeclarations/* Sem7Data */.XC);
    const [sem8, setSem8] = (0,external_recoil_.useRecoilState)(recoilDeclarations/* Sem8Data */.aZ);
    const [sem9, setSem9] = (0,external_recoil_.useRecoilState)(recoilDeclarations/* Sem9Data */.cn);
    const [sem10, setSem10] = (0,external_recoil_.useRecoilState)(recoilDeclarations/* Sem10Data */.WK);
    const [sem11, setSem11] = (0,external_recoil_.useRecoilState)(recoilDeclarations/* Sem11Data */.mm);
    const [sem12, setSem12] = (0,external_recoil_.useRecoilState)(recoilDeclarations/* Sem12Data */.qX);
    const [sem13, setSem13] = (0,external_recoil_.useRecoilState)(recoilDeclarations/* Sem13Data */.l8);
    const [sem14, setSem14] = (0,external_recoil_.useRecoilState)(recoilDeclarations/* Sem14Data */.Kw);
    const [sem15, setSem15] = (0,external_recoil_.useRecoilState)(recoilDeclarations/* Sem15Data */.NE);
    const { 0: courseDataFetched , 1: setCourseDataFetched  } = (0,external_react_.useState)(0);
    const [sem16, setSem16] = (0,external_recoil_.useRecoilState)(recoilDeclarations/* Sem16Data */.rM);
    var datagrades;
    const [sessiondata, _] = (0,external_recoil_.useRecoilState)(pkg_recoilDeclarations/* recoilSessionState */.i);
    let userId = "45645464676gchghc";
    if (sessiondata?.user.id) {
        userId = sessiondata?.user.id;
    }
    const getCourseData = async ()=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}courses`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        setjsonOfCourseCredits(data.data);
    };
    if (!courseDataFetched) {
        getCourseData();
        setCourseDataFetched(1);
    }
    // const [count, setCount] = useRecoilState(semCount);
    const getdata = async ()=>{
        let email = "";
        if (sessiondata?.user.email) {
            email = sessiondata?.user.email;
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}getuser/${email}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json();
            if (data) {
                datagrades = data.data.gradesData;
                // dummyData=data.gradesData;
                if (semData.length && datagrades.length > 0) {
                    // alert(<h1>vcvcvcc</h1>)
                    var actionUser = prompt("If you want to replace entered courses with the one you have saved earlier go with Remove else Continue", "Remove or Continue");
                    if (actionUser === "Remove" || actionUser === "remove") {
                        // if (actionUser)
                        if (count < datagrades.length) {
                            setCount(datagrades.length);
                        } else {}
                        if (ver == 0) {
                            for(let y = 0; y < datagrades.length; y++){
                                semArray[y](datagrades[y]);
                            }
                            ver = 1;
                        }
                        userDataExist = 1;
                    } else if (actionUser === "Continue" || actionUser === "Continue") {
                        userDataExist = 1;
                    }
                } else {
                    if (count < datagrades.length) {
                        setCount(datagrades.length);
                    } else {}
                    if (ver == 0) {
                        for(let y1 = 0; y1 < datagrades.length; y1++){
                            semArray[y1](datagrades[y1]);
                        }
                        ver = 1;
                    }
                    userDataExist = 1;
                }
            }
            if (res.status === 422) {} else {}
        }
    };
    const semArray = [
        setSem1,
        setSem2,
        setSem3,
        setSem4,
        setSem5,
        setSem6,
        setSem7,
        setSem8,
        setSem9,
        setSem10,
        setSem11,
        setSem12,
        setSem13,
        setSem14,
        setSem15,
        setSem16, 
    ];
    const addinpdata = async ()=>{
        // e.preventDefault();
        const gradesData = semData;
        let email = "";
        if (sessiondata?.user.email) {
            email = sessiondata?.user.email;
            // const { name, email, work, add, mobile, desc, age } = {name:"saksham",email:"sakshamag2@gmail.com",
            //  work:"xnbc",add:"sf",mobile:845678923,desc:"yjsd",age:12};
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}register1`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId,
                    gradesData,
                    email
                })
            });
            const data = await res.json();
            alert("Data saved");
        // }
        } else {
            alert("You must login for saving ");
        }
    };
    const { 0: alreadyLoggedin , 1: setalredayLoggedin  } = (0,external_react_.useState)(false);
    if (userId && setVar && setVar !== 2 && !alreadyLoggedin) {
        getdata();
        setalredayLoggedin(true);
        setVar = setVar - 1;
    } else {
        setVar = setVar - 1;
    }
    const updateData = async ()=>{
        // e.preventDefault();
        const gradesData = semData;
        let email = "";
        if (sessiondata?.user.email) {
            email = sessiondata?.user.email;
        }
        const res2 = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}updateuser/${email}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId,
                gradesData,
                email
            })
        });
        const data2 = await res2.json();
        alert("Data Updated");
    };
    const handleSave = (row, sem, setSem, isCourse)=>{
        addAllData(setSemData, semData, sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8, sem9, sem10, sem11, sem12, sem13, sem14, sem15, sem16);
        const newData = [
            ...sem
        ];
        if (isCourse === true) {
            let courseAtHand = jsonOfCourseCredits.filter((item)=>item.course === row.course);
            if (courseAtHand.length === 0) {
                row.credits = 0;
            } else {
                row.credits = courseAtHand[0].cred;
            }
        } else {
            row.credits_received = getCreditsReceived(row.credits, row.grade);
        }
        const index = newData.findIndex((item)=>row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row
        });
        setSem(newData);
        addAllData(setSemData, semData, sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8, sem9, sem10, sem11, sem12, sem13, sem14, sem15, sem16);
    };
    const columns = (sem, setSem, sem_num)=>defaultColumns(sem, setSem, sem_num, count, setCount, setSemData, semData, sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8, sem9, sem10, sem11, sem12, sem13, sem14, sem15, sem16).map((col)=>{
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: (record)=>({
                        record,
                        editable: col.editable,
                        dataIndex: col.dataIndex,
                        title: col.title,
                        handleSave,
                        sem,
                        setSem,
                        message: col.message,
                        is_sx: record.is_sx
                    })
            };
        });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(RepeatedSems, {
                    count: count,
                    semData: semData,
                    setSemData: setSemData,
                    sem1: sem1,
                    sem2: sem2,
                    sem3: sem3,
                    sem4: sem4,
                    sem5: sem5,
                    sem6: sem6,
                    sem7: sem7,
                    sem8: sem8,
                    sem9: sem9,
                    sem10: sem10,
                    sem11: sem11,
                    sem12: sem12,
                    sem13: sem13,
                    sem14: sem14,
                    sem15: sem15,
                    sem16: sem16,
                    setSem1: setSem1,
                    setSem2: setSem2,
                    setSem3: setSem3,
                    setSem4: setSem4,
                    setSem5: setSem5,
                    setSem6: setSem6,
                    setSem7: setSem7,
                    setSem8: setSem8,
                    setSem9: setSem9,
                    setSem10: setSem10,
                    setSem11: setSem11,
                    setSem12: setSem12,
                    setSem13: setSem13,
                    setSem14: setSem14,
                    setSem15: setSem15,
                    setSem16: setSem16,
                    columns: columns,
                    setCount: setCount
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "10px"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Button, {
                        style: {
                            width: "150px"
                        },
                        onClick: ()=>{
                            setCount(count + 1);
                        },
                        children: [
                            " ",
                            "Add Sem",
                            " "
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "10px"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Button, {
                        style: {
                            width: "150px"
                        },
                        onClick: ()=>{
                            if (count > 0) {
                                setCount(count - 1);
                            }
                            if (count === 1) {
                                setSem1([]);
                            }
                            if (count === 2) {
                                setSem2([]);
                            }
                            if (count === 3) {
                                setSem3([]);
                            }
                            if (count === 4) {
                                setSem4([]);
                            }
                            if (count === 5) {
                                setSem5([]);
                            }
                            if (count === 6) {
                                setSem6([]);
                            }
                            if (count === 7) {
                                setSem7([]);
                            }
                            if (count === 8) {
                                setSem8([]);
                            }
                            if (count === 9) {
                                setSem9([]);
                            }
                            if (count === 10) {
                                setSem10([]);
                            }
                            if (count === 11) {
                                setSem11([]);
                            }
                            if (count === 12) {
                                setSem12([]);
                            }
                            if (count === 13) {
                                setSem13([]);
                            }
                            if (count === 14) {
                                setSem14([]);
                            }
                            if (count === 15) {
                                setSem15([]);
                            }
                            if (count === 16) {
                                setSem16([]);
                            }
                        },
                        children: [
                            " ",
                            "Delete last Sem",
                            " "
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingBottom: "50px"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_.Button, {
                        style: {
                            width: "150px"
                        },
                        onClick: ()=>{
                            addAllData(setSemData, semData, sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8, sem9, sem10, sem11, sem12, sem13, sem14, sem15, sem16);
                            if (userDataExist) {
                                updateData();
                            } else {
                                addinpdata();
                            }
                        },
                        children: [
                            " ",
                            "Save",
                            " "
                        ]
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/navigation.tsx


function Navigation() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(App, {})
        })
    });
}


/***/ })

};
;