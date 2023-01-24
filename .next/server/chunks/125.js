"use strict";
exports.id = 125;
exports.ids = [125];
exports.modules = {

/***/ 4125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Component)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@ory/kratos-client"
var kratos_client_ = __webpack_require__(8858);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./pkg/axios.ts

const instance = external_axios_default().create({
    // .. where we make our configurations
    baseURL: process.env.REACT_APP_PUBLIC_KRATOS_URL,
    withCredentials: true,
    paramsSerializer: function(params) {
        let result = "";
        Object.keys(params).forEach((key)=>{
            result += `${key}=${key === "return_to" ? params[key] : encodeURIComponent(params[key])}&`;
        });
        return result.substr(0, result.length - 1);
    }
});
/* harmony default export */ const axios = (instance);

;// CONCATENATED MODULE: ./pkg/open-source.ts


const ory = new kratos_client_.V0alpha1Api(new kratos_client_.Configuration({
    // This points to the Ory Proxy
    basePath: process.env.REACT_APP_PUBLIC_KRATOS_URL
}), process.env.REACT_APP_PUBLIC_KRATOS_URL, axios);

// EXTERNAL MODULE: external "@anciitk/kratos-verify-session"
var kratos_verify_session_ = __webpack_require__(3940);
var kratos_verify_session_default = /*#__PURE__*/__webpack_require__.n(kratos_verify_session_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@anciitk/xenon-js"
var xenon_js_ = __webpack_require__(254);
;// CONCATENATED MODULE: ./pkg/xenon.ts

const xenon = new xenon_js_.Xenon(`${process.env.NEXT_PUBLIC_XENON_BASE_URL}`);


// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./pkg/recoilDeclarations.tsx
var recoilDeclarations = __webpack_require__(3809);
// EXTERNAL MODULE: ./components/typeDefinitions/recoilDeclarations.tsx
var typeDefinitions_recoilDeclarations = __webpack_require__(4820);
;// CONCATENATED MODULE: ./pages/verify.tsx
// import React from "react";









// const context= useContext();
// const router = useRouter();
// const [session, setSession] = useRecoilState(recoilSessionState);
// const { next: next } = router.query;
function Component() {
    const router = (0,router_.useRouter)();
    const [session, setSession] = (0,external_recoil_.useRecoilState)(recoilDeclarations/* recoilSessionState */.i);
    const [isLogIn, setIsLogIn] = (0,external_recoil_.useRecoilState)(typeDefinitions_recoilDeclarations/* loginStatus */.ul);
    setIsLogIn(true);
    if (session !== undefined) {
        setSession(session);
        router.push("/");
    }
    const { next: next  } = router.query;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: session === undefined && /*#__PURE__*/ jsx_runtime_.jsx((kratos_verify_session_default()), {
            loginUrl: `${process.env.NEXT_PUBLIC_LOGIN_URL}`,
            historyPush: router.push,
            sessionState: session,
            setSessionState: setSession,
            basePath: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            path: "/loadingPage",
            ory: ory,
            xenon: xenon,
            roles: []
        })
    });
}


/***/ })

};
;