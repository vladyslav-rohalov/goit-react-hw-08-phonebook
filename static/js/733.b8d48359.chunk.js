"use strict";(self.webpackChunkreact_homework_redux=self.webpackChunkreact_homework_redux||[]).push([[733],{2733:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,o,i,a,u,s,c,f=e(3433),d=e(9439),h=e(2791),l=e(168),p=e(4709),b=e(6053),g=p.Z.div(r||(r=(0,l.Z)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n"]))),x=(p.Z.iframe(o||(o=(0,l.Z)(["\n  border-top-left-radius: 1.2em;\n  border-top-right-radius: 1.2em;\n"]))),p.Z.video(i||(i=(0,l.Z)(["\n  position: absolute;\n  width: 300px;\n  height: 95%;\n  object-fit: cover;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n"])))),m=p.Z.canvas(a||(a=(0,l.Z)(["\n  display: none;\n"]))),Z=p.Z.button(u||(u=(0,l.Z)(["\n  position: absolute;\n  bottom: 7%;\n  left: 50%;\n  transform: translate(-50%, -7%);\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  border: none;\n  background: #ffffffcc;\n  z-index: 2;\n  cursor: pointer;\n"]))),v=p.Z.button(s||(s=(0,l.Z)(["\n  position: absolute;\n  bottom: 7%;\n  left: 20%;\n  transform: translate(-50%, -7%);\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  border: none;\n  z-index: 2;\n  background: transparent;\n"]))),w=(0,p.Z)(b.jTg)(c||(c=(0,l.Z)(["\n  width: 100%;\n  height: 100%;\n  fill: #ffffff;\n"]))),j=e(3329);function k(){var n=(0,h.useState)([]),t=(0,d.Z)(n,2),e=t[0],r=t[1],o=(0,h.useRef)(null),i=(0,h.useRef)(null);(0,h.useEffect)((function(){a()}),[o]);var a=function(){navigator.mediaDevices.getUserMedia({video:{width:{min:360,ideal:720,max:980},height:{min:640,ideal:1280,max:1920},facingMode:"user"}}).then((function(n){var t=o.current;t.srcObject=n,t.play()})).catch((function(n){throw new Error(n)}))};return(0,j.jsxs)(g,{children:[(0,j.jsx)(x,{onCanPlay:function(){return function(){var n=o.current,t=i.current,e=t.getContext("2d");return t.width=720,t.height=1280,setInterval((function(){e.drawImage(n,0,0,720,1280)}),200)}()},ref:o}),(0,j.jsx)(m,{ref:i}),(0,j.jsx)(v,{type:"button",children:(0,j.jsx)(w,{})}),(0,j.jsx)(Z,{type:"button",onClick:function(){return function(){var n={src:i.current.toDataURL("image/jpeg")};r([].concat((0,f.Z)(e),[n])),console.log(e)}()}})]})}}}]);
//# sourceMappingURL=733.b8d48359.chunk.js.map