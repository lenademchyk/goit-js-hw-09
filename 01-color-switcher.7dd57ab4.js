!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]"),a=null;e.addEventListener("click",(function(){a=setInterval((function(){t.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)))}),1e3),e.setAttribute("disabled","disabled"),d.removeAttribute("disabled")})),d.addEventListener("click",(function(){clearInterval(a),d.setAttribute("disabled","disabled"),e.removeAttribute("disabled")})),d.setAttribute("disabled","disabled")}();
//# sourceMappingURL=01-color-switcher.7dd57ab4.js.map