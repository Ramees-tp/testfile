import{e as w,r as P,u as x,j as C}from"./index-YyWu4Jnp.js";import{a as R}from"./axios-jMTBJgDy.js";var v={},I=w&&w.__awaiter||function(d,a,e,c){function u(o){return o instanceof e?o:new e(function(r){r(o)})}return new(e||(e=Promise))(function(o,r){function l(t){try{n(c.next(t))}catch(i){r(i)}}function p(t){try{n(c.throw(t))}catch(i){r(i)}}function n(t){t.done?o(t.value):u(t.value).then(l,p)}n((c=c.apply(d,a||[])).next())})};Object.defineProperty(v,"__esModule",{value:!0});const f=P;class b{constructor(a){this.options=a,typeof window<"u"&&(this.rzrpayInstannce=new window.Razorpay(this.options))}on(a,e){this.rzrpayInstannce.on(a,e)}open(){this.rzrpayInstannce.open()}}const L=()=>{const d="https://checkout.razorpay.com/v1/checkout.js",a=(0,f.useMemo)(()=>typeof window<"u",[]),[e,c]=(0,f.useState)(!1),u=(0,f.useCallback)(()=>!(!a||!("Razorpay"in window)),[]),o=(0,f.useCallback)(r=>{if(a)return new Promise((l,p)=>{const n=document.createElement("script");n.src=r,n.onload=t=>{c(!0),l(t)},n.onerror=t=>p(t),document.body.appendChild(n)})},[]);return(0,f.useEffect)(()=>{u()||I(void 0,void 0,void 0,function*(){try{yield o(d)}catch(r){throw new Error(r)}})},[]),[b,e]};var j=v.default=L;const S=({orderId:d,wage:a,type:e,onPaymentCompleted:c})=>{const u=x(),[o]=j(),r=async l=>{l.preventDefault();const p=a*100,n="INR",t="tyty";try{let i="/user/payment",m="/user/validatePayment";e==="admin"&&(i="/master/payment",m="/master/validatePayment");const _=(await R.post(i,{amount:p,currency:n,receipt:t})).data.data,z={key:"rzp_test_cPE3LPX2nR9LE2",amount:p,currency:n,name:"ALL IN ONE SOLUTION",description:"Test Transaction",order_id:_.id,handler:async function(s){const E={...s,orderId:d},h=await R.post(m,E,{headers:{"Content-Type":"application/json"}}),O=h.data;h.status===200&&e==="user"&&(u("/user/userContract"),c())},prefill:{name:"Ramees tp",email:"ramees@example.com",contact:"9000090000"},notes:{address:"Razorpay Corporate Office"},theme:{color:"#fffdcb"}},y=new o(z);y.on("payment.failed",function(s){alert(s.error.code),alert(s.error.description),alert(s.error.source),alert(s.error.step),alert(s.error.reason),alert(s.error.metadata.order_id),alert(s.error.metadata.payment_id)}),y.open()}catch(i){console.error("Payment error:",i)}};return C.jsx("button",{onClick:r,children:"Payment"})};export{S as R};
