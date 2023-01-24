"use strict";
exports.id = 236;
exports.ids = [236];
exports.modules = {

/***/ 4820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$e": () => (/* binding */ Sem3Data),
/* harmony export */   "HW": () => (/* binding */ allCoursesY22),
/* harmony export */   "Kw": () => (/* binding */ Sem14Data),
/* harmony export */   "NE": () => (/* binding */ Sem15Data),
/* harmony export */   "Pv": () => (/* binding */ Sem2Data),
/* harmony export */   "Rg": () => (/* binding */ semCount),
/* harmony export */   "S_": () => (/* binding */ y22),
/* harmony export */   "Tr": () => (/* binding */ Sem6Data),
/* harmony export */   "Vd": () => (/* binding */ Sem4Data),
/* harmony export */   "WK": () => (/* binding */ Sem10Data),
/* harmony export */   "XC": () => (/* binding */ Sem7Data),
/* harmony export */   "aZ": () => (/* binding */ Sem8Data),
/* harmony export */   "bX": () => (/* binding */ Sem1Data),
/* harmony export */   "cn": () => (/* binding */ Sem9Data),
/* harmony export */   "im": () => (/* binding */ allCourses),
/* harmony export */   "l8": () => (/* binding */ Sem13Data),
/* harmony export */   "ly": () => (/* binding */ allSemsData),
/* harmony export */   "mm": () => (/* binding */ Sem11Data),
/* harmony export */   "qK": () => (/* binding */ set2Y22),
/* harmony export */   "qX": () => (/* binding */ Sem12Data),
/* harmony export */   "rM": () => (/* binding */ Sem16Data),
/* harmony export */   "ul": () => (/* binding */ loginStatus),
/* harmony export */   "vK": () => (/* binding */ Sem5Data),
/* harmony export */   "y8": () => (/* binding */ set1Y22)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const loginStatus = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "login",
    default: false
});
const allSemsData = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "semall",
    default: []
});
const semCount = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "sems-to-display",
    default: 0
});
const Sem1Data = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "sem1",
    default: []
});
const Sem2Data = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "sem2",
    default: []
});
const Sem3Data = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "sem3",
    default: []
});
const Sem4Data = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "sem4",
    default: []
});
const Sem5Data = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "sem5",
    default: []
});
const Sem6Data = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "sem6",
    default: []
});
const Sem7Data = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "sem7",
    default: []
});
const Sem8Data = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "sem8",
    default: []
});
const Sem9Data = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "sem9",
    default: []
});
const Sem10Data = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "sem10",
    default: []
});
const Sem11Data = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "sem11",
    default: []
});
const Sem12Data = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "sem12",
    default: []
});
const Sem13Data = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "sem13",
    default: []
});
const Sem14Data = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "sem14",
    default: []
});
const Sem15Data = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "sem15",
    default: []
});
const Sem16Data = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "sem16",
    default: []
});
const y22 = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "y22",
    default: 0
});
const allCourses = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "allCourses",
    default: [
        {
            key: 0,
            course: "",
            value: "",
            category: "",
            cred: 0,
            grade: "",
            credits_received: 0,
            is_repeated: false,
            is_sx: false
        }
    ]
});
const allCoursesY22 = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "allCoursesY22",
    default: [
        {
            key: 0,
            course: "",
            value: "",
            category: "",
            cred: 0,
            grade: "",
            credits_received: 0,
            is_repeated: false,
            is_sx: false
        }
    ]
});
const set1Y22 = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "set1y22",
    default: [
        {
            key: 0,
            course: "",
            value: "",
            category: "",
            credits: 0,
            grade: "",
            credits_received: 0,
            is_repeated: false,
            is_sx: false
        }
    ]
});
const set2Y22 = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "set2y22",
    default: [
        {
            key: 0,
            course: "",
            value: "",
            category: "",
            credits: 0,
            grade: "",
            credits_received: 0,
            is_repeated: false,
            is_sx: false
        }
    ]
});


/***/ }),

/***/ 3809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ recoilSessionState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const recoilSessionState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "session-state",
    default: undefined
});


/***/ })

};
;