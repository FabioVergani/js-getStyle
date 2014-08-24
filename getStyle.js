function theViewOf(e){return e.ownerDocument.defaultView};
//
function getStyle(e,p,pseudo){
p=(p==='float')?p='cssFloat':toCamelCase(p);
var o,s=e.style[p];
if(!s){o=theViewOf(e).getComputedStyle(e,pseudo||null);
if(o){s=o[p]}};
return s
}

