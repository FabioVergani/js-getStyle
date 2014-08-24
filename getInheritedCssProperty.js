
var defaultCssValues={
 backgroundColor:["transparent","rgba(0,0,0,0)"]//,...
};
//
function isDefaultCss(p,v){
	var m,r=false
	if(!v){r=true}else{
		m=defaultCssValues[p];
		if(m){for(var x,i=0,l=m.length;i<l;i++){x=m[i];if(x===v||x==v){r=true;break}}};
	};
	return r
};
	
	
function getInheritedCssProperty(e,p,x){
	var v;
	while(e!=document){v=getStyle(e,p);if(!isDefaultCss(p,v)){x=v;break};e=e.parentNode};
	return x
};

function getBackgroundColor(e){return getInheritedCssProperty(e,'backgroundColor','#fff')};



