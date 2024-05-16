import{r as a,j as e,L as t}from"./index-YyWu4Jnp.js";import{a as y}from"./axios-jMTBJgDy.js";import{C as v,f as w,a as S,b as C,c as k}from"./index-mTfGpBqG.js";import{u as L}from"./UserRoutes-d-6EDLbB.js";import{F as l,m as I,h as F,n as O,o as E}from"./index-waHClJbd.js";function M(){const{searchInput:h,setSearchInput:u}=L(),[i,p]=a.useState(!1),[j,H]=a.useState(!1),[n,o]=a.useState([]),[f,d]=a.useState([]),[r,x]=a.useState("");a.useEffect(()=>{const s=JSON.parse(localStorage.getItem("radius"));s&&s.radius&&x(s.radius)},[]),a.useEffect(()=>{localStorage.setItem("radius",JSON.stringify({radius:r}))},[r]);const N=()=>{p(!i)},g=()=>{const s=document.querySelector(".sidebar");s.style.display="flex"},c=()=>{const s=document.querySelector(".sidebar");s.style.display="none"},b=async()=>{try{const s=await y.get("/user/userlocation");o(s.data.data),d({lat:s.data.latlong[1],lng:s.data.latlong[0]}),localStorage.setItem("userLocation",JSON.stringify({center:{lat:s.data.latlong[1],lng:s.data.latlong[0]},placeName:s.data.data}))}catch(s){console.error("frontend server error",s)}};return a.useEffect(()=>{const s=localStorage.getItem("userLocation");if(s){const m=JSON.parse(s);o(m.placeName),d(m.center)}else b()},[]),e.jsxs("div",{children:[e.jsx("div",{children:e.jsxs("nav",{className:"md:px-10",children:[e.jsxs("ul",{className:`sidebar ${j?"show":""}`,children:[e.jsx("li",{onClick:c,children:e.jsx("a",{className:"flex items-end",children:e.jsx(l,{className:"h-10",icon:I})})}),e.jsx("li",{children:e.jsx(t,{to:"/user/uhome",onClick:c,children:" Home"})}),e.jsx("li",{children:e.jsx(t,{to:"/user/about",onClick:c,children:"About"})}),e.jsx("li",{children:e.jsx(t,{to:"/user/ucontact",onClick:c,children:"Contact"})}),e.jsx("li",{children:e.jsx(t,{to:"/user/userContract",onClick:c,children:" Contracts"})}),e.jsx("li",{children:e.jsx(t,{to:"/user/userProfiles",onClick:c,children:" Profile"})})]}),e.jsxs("ul",{children:[e.jsx("div",{className:"name md:text-3xl sm:text-2xl text-lg text-center",children:e.jsx("p",{children:"ALL IN ONE SOLUTION "})}),e.jsxs("div",{className:"break tm:mt-0 mt-1 sm:px-0 px-4 ",children:[e.jsxs("div",{className:"flex flex-row items-center justify-end sm:w-auto sm:mb-1",children:[e.jsx("li",{className:"hideFlex",children:e.jsx(t,{to:"/user/uhome",children:" Home"})}),e.jsx("li",{className:"hideFlex",children:e.jsx(t,{to:"/user/about",children:"About"})}),e.jsx("li",{className:"hideFlex",children:e.jsx(t,{to:"/user/ucontact",children:"Contact"})}),e.jsx("li",{className:"hideFlex",children:e.jsx(t,{to:"/user/userContract",children:" Contracts"})}),e.jsx("li",{className:"hideFlex",children:e.jsx(t,{to:"/user/userProfiles",children:" Profile"})}),e.jsx("li",{className:"menu-button",onClick:g,children:e.jsx("a",{href:"#",children:e.jsx(l,{className:"h-6 ",icon:F})})})]}),e.jsxs("div",{className:"gap-2 flex sm:flex-row flex-col justify-center items-center text-black",children:[e.jsxs("div",{className:"relative w-full",children:[e.jsx("input",{className:" md:w-[100%] sm:w-[180px] md:h-[100%] h-[23px] w-full p-1 pl-8 rounded tm:text-base text-[78%]",type:"text",placeholder:"Search for work type...",onChange:s=>u(s.target.value),value:h}),e.jsx("button",{children:e.jsx(l,{className:"sm:h-5 h-4 absolute text-[#17253a] left-1 top-1",icon:O})})]}),e.jsxs("div",{className:"relative w-full flex gap-1",children:[e.jsx("input",{className:" md:w-[100%] sm:w-[180px] w-full md:h-[100%] h-[23px] p-1 pl-8 rounded sm:text-base text-[80%]",type:"text",defaultValue:n}),e.jsx("button",{children:e.jsx(l,{className:"sm:h-5 h-4 absolute text-[#17253a] left-1 top-1",icon:E,onClick:N})}),e.jsxs("select",{className:"md:w-14 w-9 rounded text-[80%]",onChange:s=>x(parseInt(s.target.value)),value:r,children:[e.jsx("option",{value:"8",children:"08 km"}),e.jsx("option",{value:"10",children:"10 km"}),e.jsx("option",{value:"12",children:"12 km"}),e.jsx("option",{value:"15",children:"15 km"})]})]})]})]})]})]})}),i&&e.jsx(v,{initialCenter:f,userType:"user",initialPlaceName:n})]})}function R(){return e.jsxs("div",{className:" grid tm:grid-cols-3 sm:grid-rows-1 grid-cols-1 justify-center md:gap-y-5 bg-[#17253a] text-white sm:px-28 px-6 sm:py-12 py-4 sm:text-base tm:text-[90%] text-[80%]",children:[e.jsxs("div",{className:"flex flex-col gap-y-3 sm:mb-5 mb-1",children:[e.jsx("p",{className:"font-bold sm:text-2xl text-lg sm:py-3",children:"About us"}),e.jsxs("div",{className:"space-y-1 text-gray-500",children:[e.jsx("p",{children:"How it works"}),e.jsx("p",{children:"Terms and Services"}),e.jsx("p",{children:"Legal & Privacy information"}),e.jsx("p",{children:"Help ?"})]})]}),e.jsxs("div",{className:"flex flex-col gap-y-3 sm:mb-5 mb-1",children:[e.jsx("p",{className:"font-bold sm:text-2xl text-lg sm:py-3",children:"Contact us"}),e.jsxs("div",{className:"space-y-1 text-gray-500",children:[e.jsx("p",{children:"Contact"}),e.jsx("p",{children:"Support"}),e.jsx("p",{children:"Sponserships"})]})]}),e.jsxs("div",{className:"flex flex-col gap-y-3",children:[e.jsx("p",{className:"font-bold sm:text-2xl text-lg sm:py-3 sm:text-start text-center",children:"Connect with us"}),e.jsxs("div",{className:"logo flex sm:gap-x-10 gap-5 flex-wrap lg:justify-normal justify-center",children:[e.jsx("a",{className:"p-2",children:e.jsx(l,{className:"tm:h-8 h-6",icon:w})}),e.jsx("a",{className:"p-2",children:e.jsx(l,{className:"tm:h-8 h-6",icon:S})}),e.jsx("a",{className:"p-2",children:e.jsx(l,{className:"tm:h-8 h-6",icon:C})}),e.jsx("a",{className:"p-2",children:e.jsx(l,{className:"tm:h-8 h-6",icon:k})})]})]})]})}export{M as H,R as U};
