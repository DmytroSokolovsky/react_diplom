"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[41],{931:(e,t,a)=>{a.d(t,{K:()=>i});const i=a(213).A.create({baseURL:"https://api-diplom-eupy.onrender.com/api/"})},41:(e,t,a)=>{a.r(t),a.d(t,{default:()=>F});var i=a(43),s=a(795),n=a(213),l=a(931);const o={addRecord:e=>l.K.post("records",e).then((e=>e.data)),sendMessageToDoctor:(e,t)=>n.A.post("https://api.telegram.org/bot7528553042:AAH--t6VitbS4Su4pDKKsODm1UWkzqnQdMo/sendMessage",{chat_id:e,text:t}),getSpecializations:()=>l.K.get("doctors/specializations/all").then((e=>e.data)),getDoctors:e=>l.K.get(`doctors/${e}`).then((e=>e.data)),getSchedule:e=>l.K.get(`doctor/${e}/schedule`).then((e=>e.data))},c={info__title:"PatientInfo_info__title__aPGKO",info__block:"PatientInfo_info__block__szHwK",browser:"PatientInfo_browser__NlEsI"};var r=a(139),_=a.n(r),d=a(579);const u=function(e){let{patientName:t,setPatientName:a,patientPhone:n,setPatientPhone:l,handleDataInput:o}=e;const[r,u]=(0,i.useState)(!0),[m,h]=(0,i.useState)(!0),p=(0,i.useContext)(s.c),b=(0,i.useCallback)((()=>{u(""!==t.trim())}),[t]),x=(0,i.useCallback)((()=>{h(/^380\d{9}$/.test(n))}),[n]);(0,i.useEffect)((()=>{b(),x(),o()}),[t,n,o,b,x]);const S=_()(c.info__block,{[c.browser]:!p});return(0,d.jsxs)("div",{className:c.info,children:[(0,d.jsx)("h1",{tabIndex:0,className:c.info__title,children:"\u0417\u0430\u043f\u0438\u0441"}),(0,d.jsx)("div",{className:S,children:(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"\u041f\u0406\u0411:"}),(0,d.jsx)("input",{placeholder:"\u041f\u0406\u0411",type:"text",value:t,onChange:e=>{a(e.target.value)},onBlur:b,required:!0,"aria-invalid":!r,"aria-describedby":"name-error"}),!r&&(0,d.jsx)("p",{id:"name-error",className:c.error,tabIndex:0,children:"\u041f\u043e\u043b\u0435 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u0434\u043e \u0437\u0430\u043f\u043e\u0432\u043d\u0435\u043d\u043d\u044f"})]})}),(0,d.jsx)("div",{className:S,children:(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443:"}),(0,d.jsx)("input",{placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443",type:"tel",value:n,onChange:e=>{l(e.target.value)},onBlur:x,required:!0,"aria-invalid":!m,"aria-describedby":"phone-error"}),!m&&(0,d.jsx)("p",{id:"phone-error",className:c.error,tabIndex:0,children:"\u0424\u043e\u0440\u043c\u0430\u0442 \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u0431\u0443\u0442\u0438 380 \u0425\u0425 \u0425\u0425\u0425\u0425\u0425\u0425\u0425"})]})})]})},m="SpecializationList_specialization__HgJTZ",h="SpecializationList_specialization__title__+zARi",p="SpecializationList_specialization__list__HvYH5",b="SpecializationList_specialization__item__-b1zE",x="SpecializationList_browser__br7Oa",S="SpecializationList_browser_active__nyRx5",v="SpecializationList_specialization__item_active__+iQ9e";const f=function(e){let{specializations:t,handleClickSpecialization:a}=e;const[n,l]=(0,i.useState)(null),o=(0,i.useContext)(s.c),c=e=>{l(e),a(e)},r=_()(b,{[x]:!o});return(0,d.jsxs)("div",{className:m,children:[(0,d.jsx)("h2",{tabIndex:0,className:h,children:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0441\u043f\u0435\u0446\u0456\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u044e:"}),(0,d.jsx)("ul",{className:p,children:t.map((e=>(0,d.jsx)("li",{onClick:()=>c(e),onKeyDown:t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),c(e))},tabIndex:0,role:"button",className:_()(r,{[v]:e===n,[S]:e===n}),"aria-pressed":e===n,"aria-label":`\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0441\u043f\u0435\u0446\u0456\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u044e ${e}`,children:e},e)))})]})},D="DoctorList_doctor__IXVFr",j="DoctorList_doctor__title__TFtEM",y="DoctorList_doctor__list__mgqIL",k="DoctorList_doctor__item__7I8YR",N="DoctorList_browser__XLumu",L="DoctorList_browser_active__hSBtY",g="DoctorList_doctor__item_active__hk4v9";const z=function(e){let{doctors:t,handleClickDoctor:a,selectedSpecialization:n}=e;const[l,o]=(0,i.useState)(null),c=(0,i.useContext)(s.c),r=e=>{o(e._id),a(e)},u=_()(k,{[N]:!c});return(0,d.jsxs)("div",{className:D,children:[(0,d.jsxs)("h2",{tabIndex:0,className:j,children:["\u041b\u0456\u043a\u0430\u0440\u0456 \u0437\u0430 \u0441\u043f\u0435\u0446\u0456\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u0454\u044e ",n]}),(0,d.jsx)("ul",{className:y,children:t.map((e=>(0,d.jsxs)("li",{onClick:()=>r(e),onKeyDown:t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),r(e))},tabIndex:0,role:"button",className:_()(u,{[g]:e._id===l,[L]:e._id===l}),"aria-pressed":e._id===l,"aria-label":`\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043b\u0456\u043a\u0430\u0440\u044f ${e.name}`,children:[e.name," "]},e._id)))})]})},C="DateList_date__e9QRv",I="DateList_date__title__MNe5I",w="DateList_date__list__Ycceu",T="DateList_date__item__PKmRf",E="DateList_browser__yc88s",K="DateList_browser_active__uUmdf",P="DateList_date__item_active__ipfJI";const R=function(e){let{availableDates:t,handleSelectDate:a,selectedDoctor:n}=e;const[l,o]=(0,i.useState)(null),c=(0,i.useContext)(s.c),r=e=>{o(e),a(e)};let u=_()(T,{[E]:!c});return(0,d.jsxs)("div",{className:C,children:[(0,d.jsxs)("h2",{tabIndex:0,className:I,children:["\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0456 \u0434\u0430\u0442\u0438 \u043f\u0440\u0438\u0439\u043e\u043c\u0443 \u043b\u0456\u043a\u0430\u0440\u044f ",n.name]}),(0,d.jsx)("ul",{className:w,children:t.map((e=>(0,d.jsxs)("li",{onClick:()=>r(e.day),onKeyDown:t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),r(e.day))},tabIndex:0,role:"button",className:_()(u,{[P]:e.day===l,[K]:e.day===l}),"aria-pressed":e.day===l,"aria-label":`\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0434\u0430\u0442\u0443 ${e.day}`,children:[e.day," "]},e.day)))})]})},$="TimeSlotList_time__e1Tyu",B="TimeSlotList_time__title__B7Pok",M="TimeSlotList_time__list__ZH0tu",H="TimeSlotList_time__item__ZLEVQ",A="TimeSlotList_browser__3U+ey",Z="TimeSlotList_browser_active__ZRgxZ",q="TimeSlotList_time__item_active__OjAvE";const O=function(e){let{availableSlots:t,handleSelectSlot:a,selectedDate:n}=e;const[l,o]=(0,i.useState)(null),c=(0,i.useContext)(s.c),r=e=>{o(e),a(e)},u=_()(H,{[A]:!c});return(0,d.jsxs)("div",{className:$,children:[(0,d.jsxs)("h2",{tabIndex:0,className:B,children:["\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0456 \u0447\u0430\u0441\u0438 \u043f\u0440\u0438\u0439\u043e\u043c\u0443 ",n]}),(0,d.jsx)("ul",{className:M,children:t.map((e=>(0,d.jsx)("li",{onClick:()=>r(e.time),onKeyDown:t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),r(e.time))},tabIndex:0,role:"button",className:_()(u,{[q]:e.time===l,[Z]:e.time===l}),"aria-pressed":e.time===l,"aria-label":`\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0447\u0430\u0441 ${e.time}`,children:e.time},e.time)))})]})};var Q=a(939),U=a(632);const Y="Registration_registration__Na6ip",V="Registration_registration__button__zf4Bj";const F=function(){const{tg:e,onReady:t,showMainButton:a,hideMainButton:n,setButtonText:l,setEventMainButtonClicked:c,removeEventMainButtonClicked:r,sendDataToTelegram:_}=(0,Q.j)(),[m,h]=(0,i.useState)([]),[p,b]=(0,i.useState)([]),[x,S]=(0,i.useState)(null),[v,D]=(0,i.useState)(null),[j,y]=(0,i.useState)([]),[k,N]=(0,i.useState)(null),[L,g]=(0,i.useState)([]),[C,I]=(0,i.useState)(null),[w,T]=(0,i.useState)(""),[E,K]=(0,i.useState)(""),[P,$]=(0,i.useState)(!1),[B,M]=(0,i.useState)(!1),[H,A]=(0,i.useState)("");let Z=(0,i.useContext)(s.c);const q=(0,i.useCallback)((async()=>{const e=Z?Number(Z):null,t={doctor:v.name,doctor_id:null===v||void 0===v?void 0:v.telegram_id,specialization:x,date:k,time:C,user_id:e,patient_name:w,patient_phone_number:Number(E)},a=`\n  \u270d\ufe0f \u0423 \u0432\u0430\u0441 \u043d\u043e\u0432\u0438\u0439 \u0437\u0430\u043f\u0438\u0441 \u043d\u0430 \u043f\u0440\u0438\u0439\u043e\u043c:\n\n  \ud83d\udc68\u200d\ud83e\uddb1 \u041f\u0430\u0446\u0456\u0454\u043d\u0442: ${t.patient_name}\n  \ud83d\udcde \u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443: ${t.patient_phone_number}\n  \ud83d\udcc5 \u0414\u0430\u0442\u0430: ${t.date}\n  \u23f0 \u0427\u0430\u0441: ${t.time}\n  `;try{if(await o.addRecord(t),Z)_(t);else{if(t.doctor_id)try{await o.sendMessageToDoctor(t.doctor_id,a)}catch(i){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u0456 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u043b\u0456\u043a\u0430\u0440\u044e:",i)}alert("\u0412\u0438 \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0437\u0430\u043f\u0438\u0441\u0430\u043b\u0438\u0441\u044f \u043d\u0430 \u043f\u0440\u0438\u0439\u043e\u043c")}F()}catch(i){Z?A("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0438\u0441\u0456 \u043d\u0430 \u043f\u0440\u0438\u0439\u043e\u043c. \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0437\u043d\u043e\u0432\u0443"):alert("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0438\u0441\u0456 \u043d\u0430 \u043f\u0440\u0438\u0439\u043e\u043c. \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0437\u043d\u043e\u0432\u0443"),F()}}),[v,x,C,k,w,E,Z,_]),F=()=>{b([]),S(null),D(null),y([]),N(null),g([]),I(null),T(""),K(""),$(!1),M(!1)},J=(0,i.useCallback)((()=>{""!==w.trim()&&/^380\d{9}$/.test(E)?M(!0):M(!1),$(!0)}),[w,E]);(0,i.useEffect)((()=>(t(),c(q),()=>{r(q)})),[q,t,e,c,r]);const W=(0,i.useCallback)((e=>{"Enter"===e.key&&Z&&C&&B&&q()}),[q,B,C,Z]);return(0,i.useEffect)((()=>{t(),o.getSpecializations().then(h).catch((e=>{A("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0456\u0434 \u0447\u0430\u0441 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0441\u043f\u0435\u0446\u0456\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u0439 \u043b\u0456\u043a\u0430\u0440\u0456\u0432")}))}),[e,t]),(0,i.useEffect)((()=>{l("\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u0438\u0441\u044f")}),[e,l]),(0,i.useEffect)((()=>{C&&B?a():n()}),[C,a,n,B]),(0,i.useEffect)((()=>{if(H){const e=setTimeout((()=>{A("")}),3e3);return()=>clearTimeout(e)}}),[H]),(0,d.jsxs)("div",{className:Y,onKeyDown:W,children:[(0,d.jsx)(u,{patientName:w,setPatientName:T,patientPhone:E,setPatientPhone:K,handleDataInput:J}),(0,d.jsx)(f,{specializations:m,handleClickSpecialization:e=>{P&&(S(e),D(null),y([]),N(null),I(null),o.getDoctors(e).then(b).catch((e=>{A("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u0456 \u043b\u0456\u043a\u0430\u0440\u0456\u0432 \u0437\u0430 \u0446\u0456\u0454\u044e \u0441\u043f\u0435\u0446\u0456\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u0454\u044e")})))}}),x&&(0,d.jsx)(z,{doctors:p,handleClickDoctor:e=>{D(e),N(null),I(null),o.getSchedule(e._id).then((e=>{const t=e.filter((e=>e.time_slots.some((e=>e.is_available))));y(t)})).catch((e=>{A("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0456\u0434 \u0447\u0430\u0441 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0440\u043e\u0437\u043a\u043b\u0430\u0434\u0443 \u043b\u0456\u043a\u0430\u0440\u044f")}))},selectedSpecialization:x}),j.length>0&&v&&(0,d.jsx)(R,{availableDates:j,handleSelectDate:e=>{N(e),I(null);const t=j.find((t=>t.day===e));if(t){const e=t.time_slots.filter((e=>e.is_available));g(e)}},selectedDoctor:v}),L.length>0&&k&&(0,d.jsx)(O,{availableSlots:L,handleSelectSlot:e=>{I(e)},selectedDate:k}),!Z&&C&&B&&(0,d.jsx)("button",{className:V,type:"button",onClick:q,"aria-label":"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u0438\u0441\u044f \u043d\u0430 \u043f\u0440\u0438\u0439\u043e\u043c",disabled:!B,children:"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u0438\u0441\u044f"}),H&&(0,d.jsx)(U.y,{message:H})]})}},632:(e,t,a)=>{a.d(t,{y:()=>_});var i=a(43),s=a(950),n=a(139),l=a.n(n);const o="Toast_toast__RH58L",c="Toast_open__B2TW5";var r=a(579);const _=e=>{let{errorMessage:t}=e;const[a,n]=(0,i.useState)(0);let _=l()(o);return a>0&&(_=l()(o,{[c]:!0})),a>=2.7&&(_=l()(o,{[c]:!1})),(0,i.useEffect)((()=>{const e=setInterval((()=>{n((e=>e+.3))}),300);return()=>{clearInterval(e)}}),[n]),a>=3?null:(0,s.createPortal)((0,r.jsx)("div",{className:_,children:(0,r.jsx)("span",{children:t})}),document.body)}}}]);
//# sourceMappingURL=41.d64cfc67.chunk.js.map