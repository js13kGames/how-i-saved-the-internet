!function(t){var e={};function l(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=t,l.c=e,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l(l.s=6)}([function(t,e,l){"use strict";l.r(e);var n=l(3),r=l(4);const o={size:4,keys:{}};o.gameDom=document.querySelector(".game"),o.gameDom.style.left="0px",o.gameDom.style.top="0px",o.domMap=[],o.objectsFound=[],o.items=["ethernet","wifirouter","power","key","donut","list"],o.stop=!0,o.drawElement=function(t){t.isRendered=!0,o.gameDom.appendChild(t.dom)},o.remove=function(t){o.domMap[t.y][t.x]=void 0},o.addObject=function(t){let e=n.default.makeId(),l={name:t,id:e};o.objectsFound.push(l),r.default.addItemToInvent(t,e)},o.removeObject=function(t){for(var e=o.objectsFound.length-1;e>=0;e--)if(o.objectsFound[e].name===t)return r.default.setAsTaken(o.objectsFound[e].id),void o.objectsFound.splice(e,1)},window.addEventListener("keydown",function(t){o.keys[t.keyCode]=!0},!1),window.addEventListener("keyup",function(t){o.keys[t.keyCode]=!1},!1),e.default=o},function(t,e,l){"use strict";l.r(e);var n=l(0),r=l(2);const o={};var a,i,d=[["wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1"],["wall1","","","","","","","","","","","","","wall1","","","","","","","","","","","wall1","","","","","","","","","","","","","wall1","","","","","","","","","","","","","wall1"],["wall1","","","","","","","","","","","","","wall1","","","","","","","","","","","wall1","","","","","","","","","","","","","wall1","","","","","","","","","","","","","wall1"],["wall1","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","wifi","","","","","","","","wall1"],["wall1","ethernet","","flower","desktop","pnj","","","","","","","","","","","","","","flower","","pnj","","","","","","","pnj","flower","","pnj","","donut","","flower","","","","","pnj","","","","flower","pnj","desktop","pnj","wifirouter","","wall1"],["wall1","ground","ground","ground","ground","ground","ground","ground","ground","ground","","","stair flip","ground","stair","","","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","wall1"],["wall1","","","","","","","","","","","stair flip","substair flip","wall1","substair","stair","","","","","","","","","wall1","","","","","","","","","","","","","wall1","","","","","","","","","","","","","wall1"],["wall1","","","","","","","","","","stair flip","substair flip","wall1","wall1","wall1","substair","stair","","","","","","","","wall1","","","","","","","","","","","","","wall1","","","","","","","","","","","","","wall1"],["wall1","","wifi","","","","","","","stair flip","substair flip","wall1","wall1","wall1","wall1","wall1","substair","stair","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","wall1"],["wall1","power","desktop","pnj","","","pnj","","stair flip","substair flip","wall1","wall1","wall1","wall1","wall1","wall1","wall1","substair","stair","","","flower","","","","","","pnj","","","donut","pnj","","flower","pnj","","","","","","","","flower","","pnj","","","","","","wall1"],["wall1","ground","ground","ground","ground","ground","ground","ground","substair flip","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","substair","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","","","stair flip","wall1"],["wall1","","","","","","","","","","","","","wall1","","","","","","","","","","","wall1","","","","","","","","","","","","","wall1","","","","","","","","","","","stair flip","substair flip","wall1"],["wall1","","","","","","","","","","","","","wall1","","","","","","","","","","","wall1","","","","","","","","","","","","","wall1","","","","","","","","","","stair flip","substair flip","wall1","wall1"],["wall1","","wifi","","","","","","","","","","","door1","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","stair flip","substair flip","wall1","wall1","wall1"],["wall1","bed","","","desktop","event-0","event-3","","","flower","","","","door2","event-4","","pnj","","flower","","","","","","","","","","","","pnj","","flower","","","","pnj","","","","flower","pnj","","","","stair flip","substair flip","wall1","wall1","wall1","wall1"],["wall1","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","","","stair flip","ground","stair","","","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","substair flip","wall1","wall1","wall1","wall1","wall1"],["wall1","","","","","","","","","","","","","wall1","","","","","","","","","stair flip","substair flip","wall1","substair","stair","","","","","","","","","","","wall1","","","","","","","","","","","","","wall1"],["wall1","","it-plate","","","","","","","","","","","wall1","","","","","","","","stair flip","substair flip","wall1","wall1","wall1","substair","stair","","","","","","","","","","wall1","","","","","","","","","","","","","wall1"],["wall1","","","","","","","","","","","","","","","","","","","","stair flip","substair flip","wall1","wall1","wall1","wall1","wall1","substair","stair","","","","","","","","","","","","","","","","","","","wifi","","","wall1"],["wall1","it1","it2","event-1","","","","","","","","","","","","","pnj","","","stair flip","substair flip","wall1","wall1","wall1","wall1","wall1","wall1","wall1","substair","stair","","","","","","pnj","","","","desktop","pnj","","desktop","","pnj","desktop","","","desktop","key","wall1"],["wall1","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","substair flip","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","wall1","substair","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","ground","wall1"]],s=["wall1","ground","substair","stair","stair flip","substair flip","it1","it2"],u=["pnj"],w=["it-plate","desktop","bed","door1","door2","flower"],f=[];for(a=0;a<d.length;a++){var g=d[a],h=[];for(i=0;i<g.length;i++)if(g[i]){var c=void 0;s.includes(g[i])?(c=new r.Decor(g[i],i,a),h.push(c)):n.default.items.includes(g[i])?(c=new r.Item(g[i],i,a),h.push(c)):u.includes(g[i])?(c=new r.Character("pnj",i,a),f.push(c),h.push({blocking:!1})):"wifi"===g[i]?(c=new r.Wifi(i,a),h.push(c)):w.includes(g[i])&&(c=new r.Element(g[i],i,a,!0),h.push({blocking:!1})),c?n.default.drawElement(c):0===g[i].indexOf("event")&&(c=new r.GameEvent(g[i].split("-")[1],"event",i,a),h.push(c))}else h.push({blocking:!1});n.default.domMap.push(h)}function m(t,e){var l=t.x<=e.x&&t.x+t.w>e.x,n=e.x<=t.x&&e.x+e.w>t.x,r=t.y<=e.y&&t.y+t.h>e.y,o=e.y<=t.y&&e.y+e.h>t.y;if((n||l)&&(r||o)){var a=[];return n&&a.push("left"),l&&a.push("right"),r&&a.push("top"),o&&a.push("bottom"),a.join("-")}return!1}o.getArround=function(t,e,l,r){var o,a,i=Math.floor(t),d=Math.floor(e),s=!1,u=!1,w=!1,f=!1,g={x:t,y:e,w:l,h:r};for(o=i-1;o<=i+1;o++)for(a=d-1;a<=d+1;a++){if(n.default.domMap[a]&&n.default.domMap[a][o])m(g,{x:o,y:a,w:1,h:1})&&n.default.domMap[a][o].blocking&&(o<=i&&(s=!0),o>=i&&(u=!0),a<=d&&(w=!0),a>=d&&(f=!0))}return{left:s,right:u,top:w,bottom:f}},o.getCurrents=function(t,e,l,r){var o,a,i=Math.floor(t),d=Math.floor(e),s=[],u={x:t,y:e,w:l,h:r};for(o=i-1;o<=i+1;o++)for(a=d-1;a<=d+1;a++)if(n.default.domMap[a]&&n.default.domMap[a][o]&&n.default.domMap[a][o].type){var w=m(u,n.default.domMap[a][o].getHitbox());w&&s.push({direction:w,element:n.default.domMap[a][o]})}return f.forEach(function(t){var e=m(t.getHitbox(),u);e&&s.push({direction:e,element:t})}),s},o.moveEnnemies=function(t){f.forEach(function(e){(e.x<e.baseX-1||e.x>e.baseX+1)&&(e.direction*=-1,-1===e.direction?e.currentMovement("walking-left"):e.currentMovement("walking-right")),e.move(e.direction*t,0)})},e.default=o},function(t,e,l){"use strict";l.r(e),l.d(e,"Element",function(){return o}),l.d(e,"Decor",function(){return a}),l.d(e,"Character",function(){return d}),l.d(e,"Item",function(){return s}),l.d(e,"GameEvent",function(){return u}),l.d(e,"Wifi",function(){return w});var n=l(0),r=l(5);class o{constructor(t,e,l,n){this.type=t,this.x=e,this.y=l,this.draw=n,this.draw&&(this.dom=document.createElement("div"),this.type.split(" ").forEach(t=>this.dom.classList.add(t)),this.dom.classList.add("sprite"),this.dom.style.top=this.y*i()+"px",this.dom.style.left=this.x*i()+"px"),this.isRendered=!1}move(t,e){this.x+=t,this.y+=e,this.dom.style.top=this.y*i()+"px",this.dom.style.left=this.x*i()+"px"}touch(t){}getHitbox(){return{x:this.x,y:this.y,w:1,h:1}}destroy(){this.draw&&this.dom.remove(),n.default.remove(this)}}class a extends o{constructor(t,e,l){super(t,e,l,!0),-1===this.type.indexOf("stair")&&(this.blocking=!0)}touch(t){if(0===this.type.indexOf("stair")&&-1!==this.type.indexOf("flip")){var e=(n=t.getHitbox()).x+n.w/2;if(Math.floor(e)===this.x){var l=e-this.x;n.y+n.h>this.y+1-l&&(t.move(0,-(n.y+n.h-(this.y+1-l))),t.isFalling&&t.falling(!1))}}else if(0===this.type.indexOf("stair")&&-1===this.type.indexOf("flip")){var n;e=(n=t.getHitbox()).x+n.w/2;if(Math.floor(e)===this.x){l=1+this.x-e;n.y+n.h>this.y+1-l&&(t.move(0,-(n.y+n.h-(this.y+1-l))),t.isFalling&&t.falling(!1))}}}}function i(){return 16*n.default.size}class d extends o{constructor(t,e,l){switch(t){case"player":super(t,e,l,!0),this.lastSelfieTime=(new Date).getTime(),this.selfieCount=0;break;case"pnj":super(`pnj${Math.floor(3*Math.random())} pnj`,e,l,!0),this.baseX=e,this.direction=0===Math.floor(2*Math.random())?-1:1;break;default:throw new Error(`Type ${t} unknown for class Character`)}}currentMovement(t){["walking-left","walking-right","hurted-left","hurted-right","dead"].forEach(e=>{e!==t?this.dom.classList.remove(e):this.dom.classList.add(e)}),"walking-left"===t||"hurted-right"===t?this.dom.classList.add("flip"):"walking-right"!==t&&"hurted-left"!==t||this.dom.classList.remove("flip")}move(t,e){super.move(t,e),"player"===this.type&&(n.default.gameDom.style.left=parseFloat(n.default.gameDom.style.left.split("px")[0])+t*i()*-1+"px",n.default.gameDom.style.top=parseFloat(n.default.gameDom.style.top.split("px")[0])+e*i()*-1+"px")}startJump(){this.jumping||(this.jumping=(new Date).getTime())}startHurt(t){this.hurted||(this.hurted=(new Date).getTime()+"-"+t,this.currentMovement("hurted-"+t))}endHurt(){this.hurted=!1,this.currentMovement()}falling(t){t?this.dom.classList.add("falling"):this.dom.classList.remove("falling"),this.isFalling=t}getHitbox(){return{x:this.x+.25,y:this.y,w:.5,h:1}}touch(t,e){"player"===t.type&&(-1!==e.indexOf("left")?t.startHurt("left"):t.startHurt("right"))}takeASelfie(){this.lastSelfieTime=(new Date).getTime(),this.selfieCount++,this.dom.classList.contains("flip")?document.querySelector(".flash").classList.add("flip"):document.querySelector(".flash").classList.remove("flip"),document.body.classList.add("flash-it"),setTimeout(()=>document.body.classList.remove("flash-it"),200)}die(){this.alreadyDead||(this.alreadyDead=!0),this.currentMovement("dead")}}class s extends o{constructor(t,e,l){super(t,e,l,!0),this.dom.classList.add("item")}touch(t){"player"===t.type&&(this.destroy(),n.default.addObject(this.type))}}class u extends o{constructor(t,e,l,n){super(e,l,n,!1),this.id=t}getHitbox(){return{x:this.x,y:this.y-2,w:1,h:3}}touch(t){r.default.startEvent(this,s)&&this.destroy()}}class w extends o{constructor(t,e){super("wifi",t,e,!0),this.bandwidth=4,this.consumeDate=!1,this.date=(new Date).getTime()}getHitbox(){return{x:this.x-2,y:this.y-1,w:5,h:3}}touch(t){if("player"===t.type){var e=(new Date).getTime();this.bandwidth>0&&n.default.keys[32]&&e-1e3>this.date&&(t.takeASelfie(),this.bandwidth--,this.date=e,this.dom.classList.remove("bandwidth-0"),this.dom.classList.remove("bandwidth-1"),this.dom.classList.remove("bandwidth-2"),this.dom.classList.remove("bandwidth-3"),this.dom.classList.remove("bandwidth-4"),this.dom.classList.add("bandwidth-"+this.bandwidth),0===this.bandwidth&&setTimeout(()=>{this.bandwidth=4,this.dom.classList.remove("bandwidth-0"),this.dom.classList.remove("bandwidth-1"),this.dom.classList.remove("bandwidth-2"),this.dom.classList.remove("bandwidth-3"),this.dom.classList.remove("bandwidth-4")},2e4))}}}},function(t,e,l){"use strict";l.r(e);const n={makeId:function(){let t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var l=0;l<5;l++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}};e.default=n},function(t,e,l){"use strict";l.r(e);var n=l(3);const r=["ethernet","wifirouter","power","key"];let o=2;const a={};function i(t){return a.inventory.find(e=>e.name===t)}a.el=document.querySelector(".menu"),a.status="open",a.inventory=[],a.inventoryEl=document.querySelector(".inventory"),a.open=function(){a.el.classList.add("open"),a.status="open"},a.close=function(){a.el.classList.replace("open","close"),setTimeout(function(){a.el.classList.remove("close"),a.status="close"},300)},a.addItemToInvent=function(t,e,l){if("list"===t&&function(){for(let t=0;t<r.length;t++)a.addItemToInvent(r[t],n.default.makeId(),"listed")}(),void 0===l&&(l=""),"donut"!==t&&void 0!==i(t)){let e=i(t);if("listed"===e.state){let t=document.getElementById(e.id);t.innerHTML="",t.classList.remove("listed"),e.state=""}}else{if("donut"===t){if(!(o>0))return!1;o--}let n={};n.id=e,n.name=t,n.state=l,a.inventory.push(n),a.drawInventoryItem(n)}},a.drawInventoryItem=function(t){let e=document.createElement("li");e.classList.add("inventory__block");let l=document.createElement("div");"listed"===t.state?l.classList="inventory__item sprite listed "+t.name:l.classList="inventory__item sprite "+t.name,l.id=t.id,l.title=t.name,"listed"===t.state&&(l.innerText=t.name),e.appendChild(l),a.inventoryEl.appendChild(e)},a.setAsTaken=function(t){document.getElementById(t).classList.add("taken"),a.inventory.find(e=>e.id===t).state="taken"},window.addEventListener("keyup",function(t){27!==t.keyCode&&73!==t.keyCode||("close"===a.status?a.open():a.close())},!1),e.default=a},function(t,e,l){"use strict";l.r(e);var n=l(0);const r={};var o=['Welcome to my new story "How I Saved The Internet" ! This is the panic in the University, Internet is broken! But, for you my followers, I NEED to upload selfies! I will find a way to fix the Internet!',"Have you tried turning it off and on again? If you want more help, give us Donuts!","Hmmm, we love donuts! Okay! Here is a list! Find all elements and come back to us. Maybe it will fix the Internet ?","And because you can't live without me, I promess to upload a selfie every 30secs ! I'm so niiiice!","Looks at those people! All affraid because they don't have a connection anymore... I must be careful, maybe they are dangerous?","Well done ! You find everything ! Mmmmh... Nope, we can't do anything here, you will have to call the hotline ! Bye !"],a=document.querySelector(".talks");r.startEvent=function(t,e,l){if("1"!==t.id||n.default.objectsFound.find(t=>"donut"===t.name)){if("1"===t.id){t.id=2;var r=new e("list",6,19);return n.default.domMap[19][6]=r,n.default.drawElement(r),n.default.removeObject("donut"),!1}return 2===t.id&&0===n.default.items.filter(t=>-1===n.default.objectsFound.map(t=>t.name).indexOf(t)).length?(t.id=5,!1):2===t.id?(a.innerHTML="<h1>"+o[t.id]+"<h1>",!1):5===t.id?(document.querySelector(".you-win").classList.add("very-win"),!0):(a.innerHTML="<h1>"+o[t.id]+"<h1>",l&&(timeout=setTimeout(()=>a.innerHTML="",l)),!0)}return a.innerHTML="<h1>"+o[t.id]+"<h1>",!1},e.default=r},function(t,e,l){"use strict";l.r(e);var n=l(0);l(3),l(0),l(2),l(7),l(1),l(5),l(4),l(8),window.game=n.default},function(t,e,l){"use strict";l.r(e);var n=l(2),r=l(0),o=l(1),a=new n.Character("player",5,14);r.default.drawElement(a);var i=a.dom.getBoundingClientRect(),d=window.innerWidth/2,s=window.innerHeight/2;r.default.gameDom.style.left=d-i.left-24+"px",r.default.gameDom.style.top=s-i.top-24+"px";var u=document.querySelector(".remainingTime"),w=document.querySelector(".you-are-dead");setInterval(function(){if(!r.default.stop){var t=a.getHitbox();if(a.hurted){var[e,l]=a.hurted.split("-");(new Date).getTime()-e<300?"left"===l?o.default.getArround(t.x-.25,t.y-.125,t.w,t.h).left||a.move(-.25,-.125):o.default.getArround(t.x+.25,t.y-.125,t.w,t.h).right||a.move(.25,-.125):a.endHurt()}else if(r.default.keys[37]&&!o.default.getArround(t.x-.125,t.y,t.w,t.h).left&&(a.move(-.125,0),a.currentMovement("walking-left")),r.default.keys[39]&&!o.default.getArround(t.x+.125,t.y,t.w,t.h).right&&(a.move(.125,0),a.currentMovement("walking-right")),!r.default.keys[38]||a.jumping||a.isFalling||a.startJump(),r.default.keys[37]||r.default.keys[39]||a.currentMovement(),a.jumping){var n=(new Date).getTime()-a.jumping;a.falling(!0),n<300&&!o.default.getArround(t.x,t.y-.25,t.w,t.h).top?a.move(0,-.25):a.jumping=!1}else o.default.getArround(t.x,t.y+.25,t.w,t.h).bottom?o.default.getArround(t.x,t.y+.125,t.w,t.h).bottom?a.falling(!1):(a.move(0,.125),a.falling(!0)):(a.move(0,.25),a.falling(!0));o.default.moveEnnemies(.125),o.default.getCurrents(t.x,t.y,t.w,t.h).forEach(function(t){t.element.touch(a,t.direction)});var i=3e4-((new Date).getTime()-a.lastSelfieTime);i<0?(a.die(),w.classList.add("very-dead"),stop=!0):u.setAttribute("value",i/1e3)}},33)},function(t,e,l){}]);