import{u as j,r as t,j as e,L as p}from"./index-J82VnpFQ.js";import{a as o}from"./workerInstance-j6IIGrT4.js";import"./axios-L6U4YIEh.js";const E=()=>{const d=j(),[s,c]=t.useState([]),[N,a]=t.useState(""),r=s.firstName,m=s.lastName,n=s.profileImage,i=s.email,x=s.phoneNumber,h=s.pinCode,f=s.district,u=s.workArea;t.useEffect(()=>{w()},[]);const w=async()=>{try{const l=await o.get("/worker/workerProfile");c(l.data.data)}catch{a("Error fetching user data")}},b=async()=>{try{(await o.post("/worker/logOut")).status===200&&(localStorage.removeItem("wjwt"),localStorage.removeItem("workerLocation"),d("/worker/WorkerLogin"))}catch{a("Error fetching user data")}};return e.jsx("div",{className:"min-h-screen flex justify-center items-center bg-[#DFE7B4] md:p-5 p-1",children:e.jsxs("div",{className:"bg-[#17253a] flex flex-col justify-center md:rounded-lg md:p-10 p-5 w-full md:w-[80%] lg:w-[70%]",children:[e.jsx("p",{className:"tm:text-3xl text-2xl font-bold text-center mb-5 text-white",children:"PROFILE"}),e.jsxs("div",{className:"flex flex-col md:flex-row bg-white items-center md:gap-8 gap-4 tm:p-8 p-3 rounded-xl shadow-lg",children:[e.jsx("div",{className:"flex flex-col items-center mb-0 md:mb-4 w-[50%]",children:e.jsx("div",{className:"tm:w-32 w-24 tm:h-32 h-24 rounded-full overflow-hidden bg-gray-200",children:e.jsx("img",{className:"object-cover w-full h-full",src:n,alt:""})})}),e.jsxs("h1",{className:"md:text-5xl tm:text-3xl text-xl font-bold mb-0 md:mb-4 text-center ",children:[r," ",m]})]}),e.jsxs("div",{className:"flex flex-col mt-10 w-full",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h1",{className:"tm:text-2xl text-xl  font-bold md:text-left text-center text-white",children:" DETAILS"}),e.jsx("div",{className:"ml-auto",children:e.jsx(p,{to:"/worker/updateProfile",children:e.jsx("button",{className:"p-2 bg-slate-500 hover:bg-slate-700 rounded-md text-white md:text-base text-xs",children:"Edit Profile"})})})]}),e.jsxs("div",{className:"mt-5 flex md:flex-row flex-col md:items-center md:mx-7 mx-2 gap-x-5",children:[e.jsxs("div",{className:"md:w-[50%] w-full font-semibold",children:[e.jsxs("div",{className:"flex items-center md:gap-4 gap-10 mb-5",children:[e.jsx("label",{className:"block text-white text-sm font-semibold  md:w-[30%] w-[10%]",htmlFor:"username",children:"Full Name"}),e.jsx("p",{className:"w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl ",children:e.jsxs("span",{className:"ml-3",children:[" ",r," ",m]})})]}),e.jsxs("div",{className:"flex items-center md:gap-4 gap-10 mb-5",children:[e.jsx("label",{className:"block text-white text-sm font-semibold  md:w-[30%] w-[10%]",htmlFor:"username",children:"Email"}),e.jsx("p",{className:"w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl t truncate overflow-auto",children:e.jsxs("span",{className:"ml-3",children:[" ",i]})})]}),e.jsxs("div",{className:"flex items-center md:gap-4 gap-10 mb-5",children:[e.jsx("label",{className:"block text-white text-sm font-semibold  md:w-[30%] w-[10%]",htmlFor:"username",children:"Phone"}),e.jsx("p",{className:"w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl ",children:e.jsxs("span",{className:"ml-3",children:[" ",x]})})]})]}),e.jsxs("div",{className:"md:w-[50%] w-full font-semibold",children:[e.jsx("div",{children:e.jsxs("div",{className:"flex items-center md:gap-4 gap-10 mb-5",children:[e.jsx("label",{className:"block text-white text-sm font-semibold md:w-[30%] w-[10%]",htmlFor:"username",children:"Work area"}),e.jsx("p",{className:"w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl ",children:e.jsxs("span",{className:"ml-3",children:[" ",u]})})]})}),e.jsx("div",{children:e.jsxs("div",{className:"flex items-center md:gap-4 gap-10 mb-5",children:[e.jsx("label",{className:"block text-white text-sm font-semibold md:w-[30%] w-[10%]",htmlFor:"username",children:"PIN code"}),e.jsx("p",{className:"w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl ",children:e.jsxs("span",{className:"ml-3",children:[" ",h]})})]})}),e.jsx("div",{children:e.jsxs("div",{className:"flex items-center md:gap-4 gap-10 mb-5",children:[e.jsx("label",{className:"block text-white text-sm font-semibold md:w-[30%] w-[10%]",htmlFor:"username",children:"Work type"}),e.jsx("p",{className:"w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl ",children:e.jsxs("span",{className:"ml-3",children:[" ",f]})})]})})]})]})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{children:e.jsx("button",{onClick:b,className:"tm:p-2 p-1  bg-slate-500 hover:bg-slate-700 rounded-md text-white",children:"logOut"})})})]})})};export{E as default};
