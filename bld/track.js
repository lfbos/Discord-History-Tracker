javascript:(function(){var e=function(){var n=function(){let e=t.s("messages");return e&&e.children.length&&e.children[0]},s=0,i=0;return{i:function(e){var a=function(){let s=n();if(s)if(s.getAttribute("class").includes("loadingMore-"))r(25);else{let n=t.s("messages").children.length;n<100&&(i=0),i>0?(--i,r(750)):(n>300&&(i=6,t.o(()=>{let e=t.s("messages");e.scrollTop=e.scrollHeight/2},1)),e(s.getAttribute("class").includes("hasMore-")),r(200))}else r(500)},r=function(e){s=t.o(a,e)};a(),window.l.push(()=>window.clearInterval(s))},h:function(e){var t=Object.keys(e||{}).find(e=>e.startsWith("__reactInternalInstance"));return t?e[t].memoizedProps:null},g:function(){try{var n,s=document.querySelector("[class|='privateChannels']");if(s){if(!(l=t.s("selected",s)))return null;var i=l.querySelector("a[href*='/@me/']").href.split("/"),a=i[i.length-1];if(!/^\d+$/.test(a))return null;var r;for(let e of l.querySelectorAll("[class^='name']")){let t=Array.prototype.find.call(e.childNodes,e=>e.nodeType===Node.TEXT_NODE);if(t){r=t.nodeValue;break}}if(!r)return null;var o=l.querySelector("img[class*='avatar']");n={server:r,channel:r,id:a,type:o&&o.src.includes("/channel-icons/")?"GROUP":"DM"}}else{var l=(s=document.querySelector("[class|='channels']")).querySelector("[class*='modeSelected']").parentElement,c=e.h(l);if(!c)return null;var u=c.children.props.channel;if(!u)return null;n={server:s.querySelector("header > span").innerHTML,channel:u.name,id:u.id,type:"SERVER"}}return 0===n.channel.length?null:n}catch(e){return null}},p:function(){var n=e.h(t.s("messages")),s=n&&n.children.find(e=>e&&e.length),i=[];if(s)for(let e of s){let t=e.props.children;t&&t.props&&t.props.messages&&Array.prototype.push.apply(i,t.props.messages)}return i},v:()=>!!t.s("messages"),C:function(){let e=n().getAttribute("class");return e.includes("hasMore-")||e.includes("loadingMore-")},S:function(){let e=t.s("messages");e.scrollTop=e.scrollHeight/2,e.scrollTop=0},T:function(){var e=document.querySelector("[class|='privateChannels']");if(e){var n=t.s("selected",e),s=(l=n&&n.nextElementSibling)&&l.querySelector("a[href*='/@me/']");return!!(l&&s&&l.getAttribute("class").includes("channel-"))&&(s.click(),l.scrollIntoView(!0),!0)}for(var i=e=>e.includes("wrapper-")&&!e.includes("clickable-"),a=e=>!!e.querySelector('path[d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"]')||!!e.querySelector('path[d="M14 8C14 7.44772 13.5523 7 13 7H9.76001L10.3657 3.58738C10.4201 3.28107 10.1845 3 9.87344 3H8.88907C8.64664 3 8.43914 3.17391 8.39677 3.41262L7.76001 7H4.18011C3.93722 7 3.72946 7.17456 3.68759 7.41381L3.51259 8.41381C3.45905 8.71977 3.69449 9 4.00511 9H7.41001L6.35001 15H2.77011C2.52722 15 2.31946 15.1746 2.27759 15.4138L2.10259 16.4138C2.04905 16.7198 2.28449 17 2.59511 17H6.00001L5.39427 20.4126C5.3399 20.7189 5.57547 21 5.88657 21H6.87094C7.11337 21 7.32088 20.8261 7.36325 20.5874L8.00001 17H14L13.3943 20.4126C13.3399 20.7189 13.5755 21 13.8866 21H14.8709C15.1134 21 15.3209 20.8261 15.3632 20.5874L16 17H19.5799C19.8228 17 20.0306 16.8254 20.0724 16.5862L20.2474 15.5862C20.301 15.2802 20.0655 15 19.7549 15H16.35L16.6758 13.1558C16.7823 12.5529 16.3186 12 15.7063 12C15.2286 12 14.8199 12.3429 14.7368 12.8133L14.3504 15H8.35045L9.41045 9H13C13.5523 9 14 8.55228 14 8Z"]'),r=e=>e.childElementCount>0&&i(e.children[0].className)&&a(e),o=Array.prototype.filter.call(document.querySelector("[class|='channels']").querySelectorAll("[class|='containerDefault']"),r),l=null,c=0;c<o.length-1;c++)if(o[c].children[0].className.includes("modeSelected")){l=o[c+1];break}return null!==l&&(l.children[0].click(),l.scrollIntoView(!0),!0)}}}(),t=function(){var e=(e,t,n,s)=>{var i=document.createElement(e);i.id=n||"";i.innerHTML=s||"";t.appendChild(i);return i};return{id:(e,t)=>(t||document).getElementById(e),s:(e,t)=>(t||document).querySelector(`[class*="${e}-"]`),createElement:(t,n,s,i)=>e(t,n,s,i),O:e=>e.parentNode.removeChild(e),A:t=>e("style",document.head,"",t),o:(e,t)=>window.setTimeout(e,t),L:(e,t,n)=>e.addEventListener(t,n),M:(e,t,n)=>{var s=new Date(Date.now()+1e3*n).toUTCString();document.cookie=e+"="+encodeURIComponent(JSON.stringify(t))+";path=/;expires="+s},k:e=>{var t=document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)"+e+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1");return t.length?JSON.parse(decodeURIComponent(t)):null},_:(t,n)=>{var s=new Blob([n],{type:"octet/stream"});if("msSaveBlob"in window.navigator)return window.navigator.msSaveBlob(s,t);var i=window.URL.createObjectURL(s);var a=e("a",document.body);a.href=i;a.download=t;a.style.display="none";a.click();document.body.removeChild(a);window.URL.revokeObjectURL(i)}}}(),n=function(){var e,n,a=()=>{o.H()?(e.R.N.disabled=!0,e.R.U.disabled=!0,e.R.D.disabled=!0):(e.R.N.disabled=!1,e.R.U.disabled=!1,e.R.I.disabled=e.R.D.disabled=!o.F())},l=(t,s)=>{if(e){var i="gui"===t&&"controller"===s;if(("data"===t||i)&&a(),("tracking"===t||i)&&(a(),e.R.q.innerHTML=o.H()?"Pause Tracking":"Start Tracking"),"data"===t||i){var l=0,c=0;o.F()&&(l=o.j().P(),c=o.j().V()),e.R.W.innerHTML=[l," message",1===l?"":"s"," from ",c," channel",1===c?"":"s"].join("")}}if(n&&((i="gui"===t&&"settings"===s)&&(n.R.G.checked=r.autoscroll,n.R.J[r.afterFirstMsg].checked=!0,n.R.B[r.afterSavedMsg].checked=!0),"setting"===t||i)){var u=!r.autoscroll;Object.values(n.R.J).forEach(e=>e.disabled=u),Object.values(n.R.B).forEach(e=>e.disabled=u)}},c=!1,u=function(e){c||(o.$(l),r.Z(l),c=!0),l("gui",e)},d={X:function(){(e={}).K=t.A(`\r\n#app-mount > div[class*="app-"] { margin-bottom: 48px !important; }\r\n#dht-ctrl { position: absolute; bottom: 0; width: 100%; height: 48px; background-color: #FFF; }\r\n#dht-ctrl button { height: 32px; margin: 8px 0 8px 8px; font-size: 16px; padding: 0 12px; background-color: #7289DA; color: #FFF; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.75); }\r\n#dht-ctrl button:disabled { background-color: #7A7A7A; cursor: default; }\r\n#dht-ctrl-close { margin: 8px 8px 8px 0 !important; float: right; }\r\n#dht-ctrl p { display: inline-block; margin: 14px 12px; }\r\n#dht-ctrl input { display: none; }`);var n=(e,t)=>"<button id='dht-ctrl-"+e+"'>"+t+"</button>";e.Y=t.createElement("div",document.body,"dht-ctrl",`\r\n${n("upload","Upload &amp; Combine")}\r\n${n("settings","Settings")}\r\n${n("track","")}\r\n${n("download","Download")}\r\n${n("reset","Reset")}\r\n<p id='dht-ctrl-status'></p>\r\n<input id='dht-ctrl-upload-input' type='file' multiple>\r\n${n("close","X")}`),e.R={N:t.id("dht-ctrl-upload"),U:t.id("dht-ctrl-settings"),q:t.id("dht-ctrl-track"),I:t.id("dht-ctrl-download"),D:t.id("dht-ctrl-reset"),ee:t.id("dht-ctrl-close"),W:t.id("dht-ctrl-status"),ne:t.id("dht-ctrl-upload-input")},t.L(e.R.N,"click",()=>{e.R.ne.click()}),t.L(e.R.U,"click",()=>{d.se()}),t.L(e.R.q,"click",()=>{o.ie(!o.H())}),t.L(e.R.I,"click",()=>{o.ae()}),t.L(e.R.D,"click",()=>{o.re()}),t.L(e.R.ee,"click",()=>{d.oe();window.l.forEach(e=>e());window.DHT_LOADED=!1}),t.L(e.R.ne,"change",()=>{Array.prototype.forEach.call(e.R.ne.files,e=>{var t=new FileReader;t.onload=function(){var n={};try{n=JSON.parse(t.result)}catch(t){return alert("Could not parse '"+e.name+"', see console for details."),void console.error(t)}s.le(n)?o.ce(e.name,new s(n)):alert("File '"+e.name+"' has an invalid format.")};t.readAsText(e,"UTF-8")});e.R.ne.value=null}),u("controller")},oe:function(){e&&(t.O(e.Y),t.O(e.K),e=null)},se:function(){(n={}).K=t.A(`\r\n#dht-cfg-overlay { position: absolute; left: 0; top: 0; width: 100%; height: 100%; background-color: #000; opacity: 0.5; display: block; z-index: 1000; }\r\n#dht-cfg { position: absolute; left: 50%; top: 50%; width: 800px; height: 262px; margin-left: -400px; margin-top: -131px; padding: 8px; background-color: #fff; z-index: 1001; }\r\n#dht-cfg-note { margin-top: 22px; }\r\n#dht-cfg sub { color: #666; font-size: 13px; }`),n.ue=t.createElement("div",document.body,"dht-cfg-overlay"),t.L(n.ue,"click",()=>{d.de()});var e=(e,t,n)=>"<label><input id='dht-cfg-"+e+"-"+t+"' name='dht-"+e+"' type='radio'> "+n+"</label><br>";n.Y=t.createElement("div",document.body,"dht-cfg",`\r\n<label><input id='dht-cfg-autoscroll' type='checkbox'> Autoscroll</label><br>\r\n<br>\r\n<label>After reaching the first message in channel...</label><br>\r\n${e("afm","nothing","Do Nothing")}\r\n${e("afm","pause","Pause Tracking")}\r\n${e("afm","switch","Switch to Next Channel")}\r\n<br>\r\n<label>After reaching a previously saved message...</label><br>\r\n${e("asm","nothing","Do Nothing")}\r\n${e("asm","pause","Pause Tracking")}\r\n${e("asm","switch","Switch to Next Channel")}\r\n<p id='dht-cfg-note'>\r\nIt is recommended to disable link and image previews to avoid putting unnecessary strain on your browser.<br><br>\r\n<sub>BETA v.14, released 6 Sep 2019</sub>\r\n</p>`),n.R={G:t.id("dht-cfg-autoscroll"),J:{},B:{}},n.R.J[i.fe]=t.id("dht-cfg-afm-nothing"),n.R.J[i.he]=t.id("dht-cfg-afm-pause"),n.R.J[i.ge]=t.id("dht-cfg-afm-switch"),n.R.B[i.fe]=t.id("dht-cfg-asm-nothing"),n.R.B[i.he]=t.id("dht-cfg-asm-pause"),n.R.B[i.ge]=t.id("dht-cfg-asm-switch"),n.R.G.addEventListener("change",()=>{r.autoscroll=n.R.G.checked}),Object.keys(n.R.J).forEach(e=>{t.L(n.R.J[e],"click",()=>{r.afterFirstMsg=e})}),Object.keys(n.R.B).forEach(e=>{t.L(n.R.B[e],"click",()=>{r.afterSavedMsg=e})}),u("settings")},de:function(){n&&(t.O(n.ue),t.O(n.Y),t.O(n.K),n=null)}};return d}();class s{constructor(e){var t=this;s.le(e)||(e={meta:{},data:{}}),t.meta=e.meta,t.data=e.data,t.meta.users=t.meta.users||{},t.meta.userindex=t.meta.userindex||[],t.meta.servers=t.meta.servers||[],t.meta.channels=t.meta.channels||{},t.me={pe:{},ve:new Set,Ce:new Set,Se:new Set}}static le(e){return e&&"object"==typeof e.meta&&"object"==typeof e.data}Te(e,t){return e in this.meta.users?e in this.me.pe?this.me.pe[e]:this.me.pe[e]=this.meta.userindex.findIndex(t=>t==e):(this.meta.users[e]={name:t},this.meta.userindex.push(e),this.me.pe[e]=this.meta.userindex.length-1)}ye(e,t){var n=this.meta.servers.findIndex(n=>n.name===e&&n.type===t);return-1===n?(this.meta.servers.push({name:e,type:t}),this.meta.servers.length-1):n}Oe(e,t,n){return this.meta.servers[e]?!(t in this.meta.channels)&&(this.meta.channels[t]={server:e,name:n},this.me.ve.add(t),!0):void 0}Ae(e,t,n){var s=this.data[e]||(this.data[e]={}),i=t in s;return s[t]=n,this.me.Ce.add(t),!i}Le(e){var t={u:this.Te(e.author.id,e.author.username),t:+e.timestamp.toDate(),m:e.content};return null!==e.editedTimestamp&&(t.te=+e.editedTimestamp.toDate()),e.embeds.length>0&&(t.e=e.embeds.map(e=>{let t={url:e.url,type:e.type};"rich"===e.type&&(Array.isArray(e.title)&&1===e.title.length?(t.t=e.title[0],Array.isArray(e.description)&&1===e.description.length&&(t.d=e.description[0])):t.t="");return t})),e.attachments.length>0&&(t.a=e.attachments.map(e=>({url:e.url}))),t}be(e){return this.me.Se.has(e)}we(e,t){var n=!1;for(var s of t)"SENT"===s.state&&this.Ae(e,s.id,this.Le(s))&&(this.me.Se.add(s.id),n=!0);return n}V(){return this.me.ve.size}P(){return this.me.Ce.size}Me(e){var t={};for(var n in e.meta.users)t[e.meta.userindex.findIndex(e=>e==n)]=this.Te(n,e.meta.users[n].name);for(var s in e.meta.channels){var i=e.meta.servers[e.meta.channels[s].server];this.Oe(this.ye(i.name,i.type),s,e.meta.channels[s].name)}for(var s in e.data){var a=e.data[s];for(var r in a){var o=a[r],l=o.u;o.u=t[l]||l,this.Ae(s,r,o)}}}ke(){return JSON.stringify({meta:this.meta,data:this.data})}}var i={fe:"optNothing",he:"optPause",ge:"optSwitch"},a=!1,r=function(){var e={},n=[],s=function(){t.M("DHT_SETTINGS",e,15768e4)},r=function(e,t){for(var i of n)i(e,t);s()},o=function(e,t,n){var s="_"+t;Object.defineProperty(e,t,{get:()=>e[s],set:n=>{e[s]=n;r("setting",t)}}),e[s]=n},l=t.k("DHT_SETTINGS");return l||(l={_autoscroll:!0,_afterFirstMsg:i.he,_afterSavedMsg:i.he},a=!0),o(e,"autoscroll",l._autoscroll),o(e,"afterFirstMsg",l._afterFirstMsg),o(e,"afterSavedMsg",l._afterSavedMsg),e.Z=function(e){n.push(e)},a&&s(),e}(),o=function(){var e=[],n=function(t,n){for(var s of e)s(t,n)};class i{constructor(){this.re()}re(){this._e=null,this.He=!1,this.Ne=null,n("data","reset")}j(){return this._e||(this._e=new s),this._e}F(){return null!=this._e}H(){return this.He}ie(e){this.He=e,n("tracking",e)}ce(e,t){this.Ne=e,this.j().Me(t),n("data","upload")}ae(){this.F()&&t._(this.Ne||"dht.txt",this._e.ke())}Re(e,t,s,i){var a=this.j().ye(e,t);!0===this.j().Oe(a,s,i)&&n("data","channel")}Ue(e,t){return!!this.j().we(e,t)&&(n("data","messages"),!0)}be(e){return this.j().be(e)}$(t){e.push(t)}}return new i}();if(!window.location.href.includes("discordapp.com/")&&!confirm("Could not detect Discord in the URL, do you want to run the script anyway?"))return;if(window.DHT_LOADED)return void alert("Discord History Tracker is already loaded.");window.DHT_LOADED=!0,window.l=[];let l=new Set,c=function(e){l.add("stopping"),t.o(()=>{o.ie(!1);l.delete("stopping");e&&e()},200)};e.i(n=>{if(o.H()&&0===l.size){let s=e.g();if(!s)return void c();o.Re(s.server,s.type,s.id,s.channel);let a=e.p();if(!a.length)return void e.S();let u=o.Ue(s.id,a);if(r.autoscroll){let c=null;u||o.be(a[0].id)?n||(c=r.afterFirstMsg):c=r.afterSavedMsg,null===c?e.S():(l.add("stalling"),t.o(()=>{l.delete("stalling");let t=e.g();t&&t.id===s.id&&o.Ue(s.id,e.p());(c===i.ge&&!e.T()||c===i.he)&&o.ie(!1)},250))}}}),o.$((t,n)=>{if("tracking"===t&&n){let t=e.g();if(!t)return void c(()=>alert("The selected channel is not visible in the channel list."));if(o.Re(t.server,t.type,t.id,t.channel),o.Ue(t.id,e.p()),r.autoscroll&&e.v())if(e.C())e.S();else{let t=r.afterFirstMsg;(t===i.ge&&!e.T()||t===i.he)&&c()}}}),n.X(),a&&n.se();})()