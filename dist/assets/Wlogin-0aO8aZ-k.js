import{u as f,r,a as j,j as e,L as g,s as w}from"./index-J82VnpFQ.js";import{a as v}from"./workerInstance-j6IIGrT4.js";import{F as d,j as N,k as y}from"./index-i_Dcum0C.js";import"./axios-L6U4YIEh.js";function I(){const m=f(),[l,x]=r.useState(""),[o,u]=r.useState(""),[n,p]=r.useState(!1),[c,a]=r.useState(""),h=j(),b=async t=>{if(t.preventDefault(),!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(o)){a("Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 8 characters long");return}a("");try{const s=await v.post("/worker/login",{email:l,password:o});if(s.status===200){const i=s.data.Token;localStorage.setItem("jwt",i),h(w(i)),m("/worker/whome")}}catch(s){s.response&&s.response.data.message?a(s.response.data.message):a("front An error occured.please try again.")}};return e.jsx("div",{children:e.jsxs("div",{className:"min-h-screen flex sm:flex-row flex-col items-center justify-center gap-5 bg-gray-100 px-3",children:[e.jsxs("div",{className:"md:text-4xl sm:text-3xl text-2xl text-black font-bold text-center tm:p-5",children:[e.jsx("p",{children:"ALL IN ONE "}),e.jsx("p",{className:"",children:"SOLUTION"})]}),e.jsxs("div",{className:" bg-gradient-to-b from-[#252e53] to-[#4d1438] sm:p-8 p-4 sm:py-20 rounded shadow-md w-full max-w-md",children:[e.jsx("h2",{className:"text-2xl font-bold sm:mb-6 text-center text-white",children:"Login"}),e.jsxs("form",{onSubmit:b,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-600 text-sm font-semibold mb-2",htmlFor:"email",children:"Email"}),e.jsx("input",{className:"w-full text-black tm:p-1 p-4 border rounded-md focus:outline-none focus:border-blue-500 shadow-xl",type:"text",id:"email",value:l,onChange:t=>x(t.target.value)})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-600 text-sm font-semibold mb-2",htmlFor:"password",children:"Password"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{className:"w-full text-black tm:p-1 p-4 border rounded-md focus:outline-none focus:border-blue-500 shadow-xl",type:n?"text ":"password",id:"password",value:o,onChange:t=>u(t.target.value),name:"username",required:!0}),e.jsx("div",{onClick:()=>p(!n),className:"showPass absolute top-2 right-3 cursor-pointer text-gray-800",children:n?e.jsx(d,{icon:y}):e.jsx(d,{icon:N})})]})]}),e.jsx("div",{children:c&&e.jsx("div",{className:"text-red-500 mb-4 text-center",children:c})}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("button",{className:"p-2 tm:px-10 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600",type:"submit",children:"Login"})}),e.jsx("div",{className:"text-center py-3 text-white",children:e.jsxs("p",{children:["Dont have an account ? please",e.jsx(g,{to:"/worker/registration",children:e.jsx("span",{className:"text-blue-400 ml-3 hover:text-blue-700 cursor-pointer",children:"Register"})})]})})]})]})]})})}export{I as default};
