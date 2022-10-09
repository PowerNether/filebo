//	HYPE.documents["Default"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="Default.hyperesources",f="Default",g="default_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/default_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=null==navigator.userAgentData&&navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_740F||null!=window.HYPE_dtl_740F)||false==!0||null!=c&&10>c;a=!0==d?"HYPE-740.full.min.js":"HYPE-740.thin.min.js";c=!0==d?"F":"T";
d=d?"":"";if(false==!1&&(a=k("HYPE_740"+c,"HYPE_dtl_740"+c,a,d),false==!0&&(a=a||k("HYPE_w_740","HYPE_wdtl_740","HYPE-740.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_740","HYPE-740.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=
document.getElementsByTagName("div"),b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_740"+c](f,g,{"3":{p:1,n:"cmd.png",g:"17",t:"@1x"},"-2":{n:"blank.gif"},"4":{p:1,n:"Second%20screen.png",g:"24",t:"@1x"},"0":{p:1,n:"MPB-anim-0.png",g:"11",t:"@1x"},"1":{p:1,n:"shift.png",g:"13",t:"@1x"},"2":{p:1,n:"F.png",g:"15",t:"@1x"},"-1":{n:"PIE.htc"}},
l,[],e,[{n:"Untitled Scene 2",o:"8",X:[0]}],[{o:"10",p:"600px",cA:false,Y:1736,Z:1660,L:[],c:"#FFFFFF",bY:1,d:1736,U:{},T:{kTimelineDefaultIdentifier:{q:false,z:4.15,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",y:0,z:1.19,i:"cY",e:"0",s:"1",o:"96"},{f:"c",y:0,z:1.24,i:"cY",e:"0",s:"1",o:"98"},{f:"c",y:0,z:2.09,i:"cY",e:"0",s:"1",o:"97"},{f:"c",y:0,z:2.1,i:"cY",e:"0",s:"1",o:"99"},{y:0.06,i:"e",s:1,z:0,o:"100",f:"c"},{y:0.06,i:"cY",s:"1",z:0,o:"100",f:"78"},{y:1.19,i:"cY",s:"0",z:0,o:"96",f:"c"},{y:1.24,i:"cY",s:"0",z:0,o:"98",f:"c"},{y:2.09,i:"cY",s:"0",z:0,o:"97",f:"c"},{y:2.1,i:"cY",s:"0",z:0,o:"99",f:"c"},{f:"c",p:2,y:4.15,z:0,i:"ActionHandler",s:{a:[{i:0.16666667,b:"kTimelineDefaultIdentifier",p:9,symbolOid:"9"}]},o:"kTimelineDefaultIdentifier"}],f:30,b:[]}},bZ:180,O:["100","99","95","97","96","98"],n:"Untitled Layout","_":0,v:{"99":{p:"no-repeat",c:1736,q:"100% 100%",d:1660,r:"inline",cY:"1",e:1,aW:0,bL:0,bD:"none",aX:8,aP:"default",h:"24",w:"",j:"absolute",x:"visible",bG:0,k:"div",dB:"img",z:6,a:0,b:0},"95":{h:"11",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:1,k:"div",b:0,d:1660,c:1736},"98":{h:"17",p:"no-repeat",x:"visible",a:519,dB:"img",b:1097,q:"100% 100%",r:"inline",z:3,j:"absolute",cY:"1",d:79,k:"div",c:103},"100":{p:"no-repeat",c:1736,q:"100% 100%",d:1660,r:"inline",cY:"1",e:1,aW:0,bL:0,bD:"none",aX:8,aP:"default",h:"24",j:"absolute",x:"visible",bG:0,k:"div",dB:"img",z:7,a:0,b:0},"97":{h:"15",p:"no-repeat",x:"visible",a:662,dB:"img",b:937,q:"100% 100%",r:"inline",z:4,j:"absolute",cY:"1",d:80,k:"div",c:83},"96":{h:"13",p:"no-repeat",x:"visible",a:272,q:"100% 100%",b:1017,j:"absolute",r:"inline",z:2,cY:"1",dB:"img",d:79,k:"div",c:187,e:1}}}],{},h,{"78":{p:0,q:[[0,0,0.42,0,0.58,1,1,1]]}},
(function (shouldShow, mainContentContainer) {
	var loadingPageID = mainContentContainer.id + "_loading";
	var loadingDiv = document.getElementById(loadingPageID);

	if(shouldShow == true) {
		if(loadingDiv == null) {	
			loadingDiv = document.createElement("div");
			loadingDiv.id = loadingPageID;
			loadingDiv.style.cssText = "overflow:hidden;position:absolute;width:150px;top:40%;left:0;right:0;margin:auto;padding:2px;border:3px solid #BBB;background-color:#EEE;border-radius:10px;text-align:center;font-family:Helvetica,Sans-Serif;font-size:13px;font-weight:700;color:#AAA;z-index:100000;";
			loadingDiv.innerHTML = "Loading";
			mainContentContainer.appendChild(loadingDiv);
		}
 
		loadingDiv.style.display = "block";
		loadingDiv.removeAttribute("aria-hidden");
		mainContentContainer.setAttribute("aria-busy", true);
	} else {
		loadingDiv.style.display = "none";
		loadingDiv.setAttribute("aria-hidden", true);
		mainContentContainer.removeAttribute("aria-busy");
	}
})

,false,false,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
