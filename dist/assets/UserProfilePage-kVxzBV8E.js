import{u as D,r as a,j as e,L as F}from"./index-YyWu4Jnp.js";import{H as S,U}from"./Ufooter-fp5fdVN5.js";import{a as g}from"./axios-jMTBJgDy.js";import"./index-mTfGpBqG.js";import"./index-waHClJbd.js";import"./UserRoutes-d-6EDLbB.js";import"./axios-L6U4YIEh.js";function C(){var d,o,c,i,n,x,f,h,u;const t=D(),[l,j]=a.useState([]),[L,m]=a.useState(""),w=(d=l[0])==null?void 0:d.moredetails[0].firstName,b=(o=l[0])==null?void 0:o.moredetails[0].lastName,r=(c=l[0])==null?void 0:c.moredetails[0].userImage,N=(i=l[0])==null?void 0:i.username,v=(n=l[0])==null?void 0:n.email,y=(x=l[0])==null?void 0:x.moredetails[0].phoneNumber,P=(f=l[0])==null?void 0:f.moredetails[0].pinCode,E=(h=l[0])==null?void 0:h.moredetails[0].district,k=(u=l[0])==null?void 0:u.moredetails[0].city;a.useEffect(()=>{(async()=>{try{const s=await g.get("/user/userProfile");j(s.data.fullData),(!s.data.fullData||s.data.fullData.length===0||s.data.fullData[0].moredetails.length===0)&&t("/user/updateProfile")}catch{m("Error fetching user data")}})()},[t]);const I=async()=>{try{(await g.post("/user/logOut")).status===200&&(localStorage.removeItem("jwt"),localStorage.removeItem("userLocation"),localStorage.removeItem("location"),t("/user/login"))}catch{m("Error fetching user data")}};return e.jsx("div",{className:"min-h-screen flex justify-center items-center bg-[#fffdcb] md:p-5 p-1",children:e.jsxs("div",{className:"bg-[#17253a] flex flex-col justify-center md:rounded-lg md:p-10 p-5 w-full md:w-[80%] lg:w-[70%]",children:[e.jsx("p",{className:"tm:text-3xl text-2xl font-bold text-center mb-5 text-white",children:"PROFILE"}),e.jsxs("div",{className:"flex flex-col md:flex-row bg-white items-center md:gap-8 gap-3 tm:p-8 p-4 rounded-xl shadow-lg",children:[e.jsx("div",{className:"flex flex-col items-center mb-0 md:mb-4 w-[50%]",children:e.jsx("div",{className:"tm:w-32 w-24 tm:h-32 h-24 rounded-full overflow-hidden bg-gray-200",children:r?e.jsx("img",{src:r,alt:"Profile",className:"object-cover w-full h-full"}):e.jsx("div",{className:"relative flex items-center justify-center w-full h-full",children:e.jsx("p",{className:"text-red-500 font-medium",children:"Add image "})})})}),e.jsxs("h1",{className:"md:text-5xl tm:text-3xl text-xl font-bold mb-0 md:mb-4 text-center ",children:[w," ",b]})]}),e.jsxs("div",{className:"flex flex-col mt-10 w-full",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h1",{className:"tm:text-2xl text-xl font-bold md:text-left text-center text-white",children:" DETAILS"}),e.jsx("div",{className:"ml-auto",children:e.jsx(F,{to:"/user/updateProfile",children:e.jsx("button",{className:"tm:p-2 p-2 bg-slate-500 hover:bg-slate-700 rounded-md text-white",children:"Edit Profile"})})})]}),e.jsxs("div",{className:"mt-5 flex flex-col md:flex-row md:items-center md:mx-7 mx-2 gap-y-5 md:gap-y-0 md:gap-x-5",children:[e.jsxs("div",{className:"w-full md:w-1/2 font-semibold flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row items-center md:gap-4 gap-y-2 md:gap-y-0",children:[e.jsx("label",{className:"block text-white text-sm font-semibold md:w-1/3",htmlFor:"username",children:"Username"}),e.jsx("p",{className:"w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl md:flex-1",children:e.jsxs("span",{className:"ml-3",children:[" ",N]})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row items-center md:gap-4 gap-y-2 md:gap-y-0",children:[e.jsx("label",{className:"block text-white text-sm font-semibold md:w-1/3",htmlFor:"email",children:"Email"}),e.jsx("p",{className:"w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl md:flex-1 truncate overflow-auto",children:e.jsxs("span",{className:"ml-3",children:[" ",v]})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row items-center md:gap-4 gap-y-2 md:gap-y-0",children:[e.jsx("label",{className:"block text-white text-sm font-semibold md:w-1/3",htmlFor:"phone",children:"Phone"}),e.jsx("p",{className:"w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl md:flex-1",children:e.jsxs("span",{className:"ml-3",children:[" ",y]})})]})]}),e.jsxs("div",{className:"w-full md:w-1/2 font-semibold flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row items-center md:gap-4 gap-y-2 md:gap-y-0",children:[e.jsx("label",{className:"block text-white text-sm font-semibold md:w-1/3",htmlFor:"city",children:"City name"}),e.jsx("p",{className:"w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl md:flex-1",children:e.jsxs("span",{className:"ml-3",children:[" ",k]})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row items-center md:gap-4 gap-y-5 md:gap-y-0",children:[e.jsx("label",{className:"block text-white text-sm font-semibold md:w-1/3",htmlFor:"pinCode",children:"PIN code"}),e.jsx("p",{className:"w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl md:flex-1",children:e.jsxs("span",{className:"ml-3",children:[" ",P]})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row items-center md:gap-4 gap-y-2 md:gap-y-0",children:[e.jsx("label",{className:"block text-white text-sm font-semibold md:w-1/3",htmlFor:"district",children:"District"}),e.jsx("p",{className:"w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl md:flex-1",children:e.jsxs("span",{className:"ml-3",children:[" ",E]})})]})]})]})]}),e.jsx("div",{className:"flex justify-center mt-5",children:e.jsx("button",{onClick:I,className:"tm:p-2 p-1 tm:px-5 px-3 bg-slate-500 hover:bg-slate-700 rounded-md text-white",children:"logOut"})})]})})}const B=()=>e.jsxs("div",{className:"p-1",children:[e.jsx(S,{}),e.jsx(C,{}),e.jsx(U,{})]});export{B as default};
