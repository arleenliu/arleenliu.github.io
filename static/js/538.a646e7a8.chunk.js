"use strict";(globalThis.webpackChunkmy_app=globalThis.webpackChunkmy_app||[]).push([[538],{8538(e,i,o){o.r(i),o.d(i,{default:()=>l});var t=o(5043),n=o(2646);const s=(0,o(9).Ay)("div")`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${e=>e.show?"visible":"hidden"};
  opacity: ${e=>e.show?"1":"0"};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;var r=o(579);const l=()=>{const[e,i]=(0,t.useState)(!1),o=(0,t.useCallback)((()=>{const o=window.scrollY;!e&&o>350?i(!0):o<=350&&i(!1)}),[e]);(0,t.useEffect)((()=>(window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)})),[o]);return(0,r.jsx)(s,{onClick:()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},show:e,"aria-label":"Scroll to top",children:(0,r.jsx)(n.A,{src:"scroll-top.svg",width:"20px",height:"20px"})})}}}]);
//# sourceMappingURL=538.a646e7a8.chunk.js.map