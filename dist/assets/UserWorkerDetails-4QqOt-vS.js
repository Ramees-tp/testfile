import{b as C,r as c,f as T,u as U,j as e}from"./index-YyWu4Jnp.js";import{u as R}from"./account-l8IYS-hm.js";import{a as m}from"./axios-jMTBJgDy.js";import{H as B,U as I}from"./Ufooter-fp5fdVN5.js";import"./axios-L6U4YIEh.js";import"./index-mTfGpBqG.js";import"./index-waHClJbd.js";import"./UserRoutes-d-6EDLbB.js";const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHWSURBVEiJtZW/TxNhGMc/z9t6nhGSKxrpRHGxJsyGaCD+2JwYTQQmI5Mm/AEQ4uTuZGJ0srODJk4stAnq4tSkuOixgCH0CDCcbe99HI6mtVhbbO+z3fve+/0+996T5yv0w/TFcVznGpHNIihqdpH6FsXjvV5HpevOfc5z7C2BzIPeAEzHGxbRL2Desh+8okytf4NZbw54AUz0qvAEH5WnlIL3nRupU4az3irwEvD6FAfwEB4w6Vr8sNjdYMZbQ3jGv66uOwLcY9Jt4Icb7Ysx8bW8+0/xdiwqc5SCDy2DKRzGvApwdUDxJj4jB3k+8ivujLHM0hDFAXIcZR5Bq/UWhigeIzoPINwauUIqvcPpPh+UCCcaN6TT1xMQB0hRP5c3oNkExE+wWYNFk9NHDSmzm5iBmh2DrVcAm4B8hG18M/HI1c8JGGyyeViNu0dMYfj6UoDkRsUPqgd5ytTiLyhTQ1hmOP/CgjxpBlBrXPvhFjlXgbuD6csKxeBN8+nPPNgOi+TcCLjN2ce2RWWVUvC8fbEz0WA73GDiwleEm/Sfat8RWWyvvEn3KqdwuJR5jOpDYPovxUTAJ5AC1eD12UK/kzujl4nSebBZRBSVnziNCutH+72O/gbEq4sAQ2MmowAAAABJRU5ErkJggg==";function W(){const o=C(s=>s.socket.socket),[p,g]=c.useState([]),[h,j]=c.useState([]),[l,f]=c.useState(""),[y,b]=c.useState(""),[a,N]=c.useState(),[E,x]=c.useState(),{id:A,id1:v}=T(),w=U(),D=s=>{f(s.target.value);const t=new Date,r=new Date(t),i=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(s.target.value),d=r.getDay()-i;r.setDate(t.getDate()-d),b(r.toISOString().split("T")[0])};c.useEffect(()=>{const s=localStorage.getItem("userLocation");if(s){const t=JSON.parse(s);g(t.placeName),j(t.center)}},[]);const S=async s=>{try{(await m.post(`/user/workRequest/${s}`,{selectedDate:y,selectedDay:l,coordinates:h,location:p,id1:v})).status===201&&(w("/user/userContract"),o.emit("updateRequest",{workerId:s}))}catch(t){console.error(t)}},u=async()=>{try{const s=await m.get(`/user/workerDetails/${A}`);s.status===200&&N(s.data.data)}catch(s){s.response&&s.response.data.message?x(s.response.data.message):x("front: Internal server error")}};c.useEffect(()=>{const s=localStorage.getItem("jwt");if(s){const t=k(s),r=t?t.id:null;r&&o.emit("userConnection",{sender:r})}return u(),o.on("updateRequest",()=>{u()}),()=>{o.off("updateRequest")}},[]);const k=s=>{try{const r=s.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(r).split("").map(function(d){return"%"+("00"+d.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)}catch{return null}};return e.jsxs("div",{className:"bg-white lg:px-28 sm:px-16 px-2 lg:py-20 md:py-10 py-4",children:[e.jsxs("div",{className:" flex md:flex-row flex-col justify-center gap-5",children:[e.jsxs("div",{className:"bg-gray-400 p-3 max-w-xl space-y-5 rounded",children:[e.jsxs("div",{className:"bg-white p-5 space-y-5",children:[e.jsx("h1",{className:"text-center font-bold tm:text-3xl text-xl",children:"Available Days"}),e.jsxs("div",{className:"space-x-5",children:[e.jsx("button",{className:"bg-purple-100 focus:bg-purple-300  p-1 px-2 rounded-md",children:"This Week"}),e.jsx("button",{className:"bg-purple-100 focus:bg-purple-300  p-1 px-2 rounded-md",children:"Next week"})]}),e.jsxs("div",{className:"grid grid-cols-7 gap-5",children:[e.jsxs("div",{className:"flex flex-col justify-center items-center gap-y-5",children:[e.jsx("p",{className:"text-[80%] font-semibold bg-gray-300 p-1 rounded w-10 text-center",children:"Mon"}),e.jsx("img",{src:n,alt:""})]}),e.jsxs("div",{className:"flex flex-col justify-center items-center gap-y-5",children:[e.jsx("p",{className:"text-[80%] font-semibold bg-gray-300 p-1 rounded w-10 text-center",children:"Tue"}),e.jsx("img",{src:n,alt:""})]}),e.jsxs("div",{className:"flex flex-col justify-center items-center gap-y-5",children:[e.jsx("p",{className:"text-[80%] font-semibold bg-gray-300 p-1 rounded w-10 text-center",children:"Wed"}),e.jsx("img",{src:n,alt:""})]}),e.jsxs("div",{className:"flex flex-col justify-center items-center gap-y-5",children:[e.jsx("p",{className:"text-[80%] font-semibold bg-gray-300 p-1 rounded w-10 text-center",children:"Thu"}),e.jsx("img",{src:n,alt:""})]}),e.jsxs("div",{className:"flex flex-col justify-center items-center gap-y-5",children:[e.jsx("p",{className:"text-[80%] font-semibold bg-gray-300 p-1 rounded w-10 text-center",children:"Fri"}),e.jsx("img",{src:n,alt:""})]}),e.jsxs("div",{className:"flex flex-col justify-center items-center gap-y-5",children:[e.jsx("p",{className:"text-[80%] font-semibold bg-gray-300 p-1 rounded w-10 text-center",children:"Sat"}),e.jsx("img",{src:n,alt:""})]}),e.jsxs("div",{className:"flex flex-col justify-center items-center gap-y-5",children:[e.jsx("p",{className:"text-[80%] font-semibold bg-gray-300 p-1 rounded w-10 text-center",children:"sun"}),e.jsx("img",{src:n,alt:""})]})]})]}),e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("h1",{className:"font-bold mb-4 tm:text-2xl text-lg",children:"Select Day"}),e.jsxs("select",{id:"selectDay",name:"selectDay",value:l,defaultValue:l,onChange:D,className:"w-[50%] tm:p-2 p-1 border rounded-md focus:outline-none focus:border-blue-500",children:[e.jsx("option",{value:"",children:"Select a day"}),e.jsx("option",{value:"Monday",children:"Monday"}),e.jsx("option",{value:"Tuesday",children:"Tuesday"}),e.jsx("option",{value:"Wednesday",children:"Wednesday"}),e.jsx("option",{value:"Thursday",children:"Thursday"}),e.jsx("option",{value:"Friday",children:"Friday"}),e.jsx("option",{value:"Saturday",children:"Saturday"}),e.jsx("option",{value:"Sunday",children:"Sunday"})]})]})})]}),a&&a.length>0&&e.jsxs("div",{className:"bg-gray-400 p-3 max-w-xl space-y-3 rounded",children:[e.jsx("h1",{className:"bg-white p-4 text-center font-bold text-2xl",children:"Worker Details"}),e.jsxs("div",{className:"bg-white p-3 space-y-5",children:[e.jsxs("div",{className:"flex items-center gap-5",children:[e.jsx("img",{className:" rounded-full p-2 object-cover w-32 h-32",src:a?a[0].profileImage:R,alt:""}),e.jsxs("p",{className:"tm:text-2xl text-xl font-semibold",children:[a[0].firstName," ",a[0].lastName]})]}),e.jsxs("div",{className:"bg-gray-300 p-3 tm:text-base text-[90%]",children:[e.jsxs("p",{className:"font-semibold mb-5",children:["Worker ID : ",a[0]._id," "]}),e.jsx("p",{children:"experience : "}),e.jsxs("p",{children:["Place : ",a[0].city," "]}),e.jsx("p",{children:"Consistency : "})]})]})]})]}),e.jsx("div",{className:"flex justify-center items-center tm:mt-10 mt-5 ",children:e.jsx("button",{onClick:()=>S(a[0]._id),disabled:!l,className:`tm:p-3 p-2 rounded text-white ${l?"bg-green-700 hover:bg-green-500":"bg-red-800 cursor-not-allowed"}`,children:"Send Request"})})]})}function L(){return e.jsx("div",{children:e.jsxs("div",{className:"p-1",children:[e.jsx(B,{}),e.jsx(W,{}),e.jsx(I,{})]})})}export{L as default};
