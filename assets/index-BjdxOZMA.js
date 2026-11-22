(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,ee=1029,O=1030,k=1031,te=1033,A=33776,ne=33777,j=33778,re=33779,M=35840,ie=35841,ae=35842,oe=35843,se=36196,ce=37492,le=37496,ue=37488,N=37489,de=37490,fe=37491,pe=37808,me=37809,he=37810,ge=37811,_e=37812,ve=37813,ye=37814,be=37815,xe=37816,Se=37817,Ce=37818,we=37819,Te=37820,Ee=37821,De=36492,Oe=36494,ke=36495,Ae=36283,je=36284,Me=36285,Ne=36286,Pe=2300,Fe=2301,P=2302,Ie=2303,Le=2400,Re=2401,F=2402,ze=3200,Be=`srgb`,I=`srgb-linear`,Ve=`linear`,He=`srgb`,Ue=7680,We=35044,Ge=35048,Ke=2e3;function qe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Je(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ye(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Xe(){let e=Ye(`canvas`);return e.style.display=`block`,e}var Ze={};function Qe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function $e(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function L(...e){e=$e(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function R(...e){e=$e(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function et(...e){let t=e.join(` `);t in Ze||(Ze[t]=!0,L(...e))}function tt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var nt={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},rt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},it=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),at=Math.PI/180,ot=180/Math.PI;function st(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(it[e&255]+it[e>>8&255]+it[e>>16&255]+it[e>>24&255]+`-`+it[t&255]+it[t>>8&255]+`-`+it[t>>16&15|64]+it[t>>24&255]+`-`+it[n&63|128]+it[n>>8&255]+`-`+it[n>>16&255]+it[n>>24&255]+it[r&255]+it[r>>8&255]+it[r>>16&255]+it[r>>24&255]).toLowerCase()}function z(e,t,n){return Math.max(t,Math.min(n,e))}function ct(e,t){return(e%t+t)%t}function lt(e,t,n){return(1-n)*e+n*t}function ut(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function dt(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ft(e,t){if(t.constructor===Float32Array)return e;let n=dt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function pt(e,t){if(t.constructor===Float32Array)return e;let n=dt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var B=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:L(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(z(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ht.copy(this).projectOnVector(e),this.sub(ht)}reflect(e){return this.sub(ht.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ht=new V,gt=new mt,H=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return et(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(_t.makeScale(e,t)),this}rotate(e){return et(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(_t.makeRotation(-e)),this}translate(e,t){return et(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(_t.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_t=new H,vt=new H().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yt=new H().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bt(){let e={enabled:!0,workingColorSpace:I,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=St(e.r),e.g=St(e.g),e.b=St(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ct(e.r),e.g=Ct(e.g),e.b=Ct(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ve:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[I]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:vt,fromXYZ:yt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:r,transfer:He,toXYZ:vt,fromXYZ:yt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),e}var xt=bt();function St(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ct(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var wt,Tt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wt===void 0&&(wt=Ye(`canvas`)),wt.width=e.width,wt.height=e.height;let t=wt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=wt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ye(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=St(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(St(t[e]/255)*255):t[e]=St(t[e]);return{data:t,width:e.width,height:e.height}}return L(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Et=0,Dt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Et++}),this.uuid=st(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ot(r[t].image)):e.push(Ot(r[t]))}else e=Ot(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ot(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Tt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(L(`Texture: Unable to serialize Texture.`),{})}var kt=0,At=new V,jt=class r extends rt{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kt++}),this.uuid=st(),this.name=``,this.source=new Dt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(At).x}get height(){return this.source.getSize(At).y}get depth(){return this.source.getSize(At).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){L(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?L(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null,jt.DEFAULT_MAPPING=300,jt.DEFAULT_ANISOTROPY=1;var Mt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this.w=z(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this.w=z(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Nt=class extends rt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new jt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Dt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Pt=class extends Nt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ft=class extends jt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},It=class extends jt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Lt=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Rt.setFromMatrixColumn(e,0).length(),i=1/Rt.setFromMatrixColumn(e,1).length(),a=1/Rt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bt,e,Vt)}lookAt(e,t,n){let r=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Ht.crossVectors(n,Wt),Ht.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Ht.crossVectors(n,Wt)),Ht.normalize(),Ut.crossVectors(Wt,Ht),r[0]=Ht.x,r[4]=Ut.x,r[8]=Wt.x,r[1]=Ht.y,r[5]=Ut.y,r[9]=Wt.y,r[2]=Ht.z,r[6]=Ut.z,r[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],O=r[2],k=r[6],te=r[10],A=r[14],ne=r[3],j=r[7],re=r[11],M=r[15];return i[0]=a*x+o*T+s*O+c*ne,i[4]=a*S+o*E+s*k+c*j,i[8]=a*C+o*D+s*te+c*re,i[12]=a*w+o*ee+s*A+c*M,i[1]=l*x+u*T+d*O+f*ne,i[5]=l*S+u*E+d*k+f*j,i[9]=l*C+u*D+d*te+f*re,i[13]=l*w+u*ee+d*A+f*M,i[2]=p*x+m*T+h*O+g*ne,i[6]=p*S+m*E+h*k+g*j,i[10]=p*C+m*D+h*te+g*re,i[14]=p*w+m*ee+h*A+g*M,i[3]=_*x+v*T+y*O+b*ne,i[7]=_*S+v*E+y*k+b*j,i[11]=_*C+v*D+y*te+b*re,i[15]=_*w+v*ee+y*A+b*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,O=_*ee-v*D+y*E+b*T-x*w+S*C;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/O;return e[0]=(o*ee-s*D+c*E)*k,e[1]=(r*D-n*ee-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*ee-c*w)*k,e[5]=(t*ee-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Rt.set(r[0],r[1],r[2]).length(),o=Rt.set(r[4],r[5],r[6]).length(),s=Rt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),zt.copy(this);let c=1/a,l=1/o,u=1/s;return zt.elements[0]*=c,zt.elements[1]*=c,zt.elements[2]*=c,zt.elements[4]*=l,zt.elements[5]*=l,zt.elements[6]*=l,zt.elements[8]*=u,zt.elements[9]*=u,zt.elements[10]*=u,t.setFromRotationMatrix(zt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ke,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ke,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Rt=new V,zt=new Lt,Bt=new V(0,0,0),Vt=new V(1,1,1),Ht=new V,Ut=new V,Wt=new V,Gt=new Lt,Kt=new mt,qt=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(z(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-z(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(z(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-z(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(z(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-z(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:L(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kt.setFromEuler(this),this.setFromQuaternion(Kt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qt.DEFAULT_ORDER=`XYZ`;var Jt=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Yt=0,Xt=new V,Zt=new mt,Qt=new Lt,$t=new V,en=new V,tn=new V,nn=new mt,rn=new V(1,0,0),an=new V(0,1,0),on=new V(0,0,1),sn={type:`added`},cn={type:`removed`},ln={type:`childadded`,child:null},un={type:`childremoved`,child:null},dn=class e extends rt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yt++}),this.uuid=st(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new qt,r=new mt,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Lt},normalMatrix:{value:new H}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zt.setFromAxisAngle(e,t),this.quaternion.multiply(Zt),this}rotateOnWorldAxis(e,t){return Zt.setFromAxisAngle(e,t),this.quaternion.premultiply(Zt),this}rotateX(e){return this.rotateOnAxis(rn,e)}rotateY(e){return this.rotateOnAxis(an,e)}rotateZ(e){return this.rotateOnAxis(on,e)}translateOnAxis(e,t){return Xt.copy(e).applyQuaternion(this.quaternion),this.position.add(Xt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rn,e)}translateY(e){return this.translateOnAxis(an,e)}translateZ(e){return this.translateOnAxis(on,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$t.copy(e):$t.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),en.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qt.lookAt(en,$t,this.up):Qt.lookAt($t,en,this.up),this.quaternion.setFromRotationMatrix(Qt),r&&(Qt.extractRotation(r.matrixWorld),Zt.setFromRotationMatrix(Qt),this.quaternion.premultiply(Zt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(R(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sn),ln.child=e,this.dispatchEvent(ln),ln.child=null):R(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cn),un.child=e,this.dispatchEvent(un),un.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sn),ln.child=e,this.dispatchEvent(ln),ln.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(en,e,tn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(en,nn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};dn.DEFAULT_UP=new V(0,1,0),dn.DEFAULT_MATRIX_AUTO_UPDATE=!0,dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var U=class extends dn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},fn={type:`move`},pn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new U,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new U,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new U,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new U;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},mn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},gn={h:0,s:0,l:0};function _n(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Be){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=xt.workingColorSpace){if(e=ct(e,1),t=z(t,0,1),n=z(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=_n(i,r,e+1/3),this.g=_n(i,r,e),this.b=_n(i,r,e-1/3)}return xt.colorSpaceToWorking(this,r),this}setStyle(e,t=Be){function n(t){t!==void 0&&parseFloat(t)<1&&L(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:L(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);L(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Be){let n=mn[e.toLowerCase()];return n===void 0?L(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=St(e.r),this.g=St(e.g),this.b=St(e.b),this}copyLinearToSRGB(e){return this.r=Ct(e.r),this.g=Ct(e.g),this.b=Ct(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Be){return xt.workingToColorSpace(vn.copy(this),e),Math.round(z(vn.r*255,0,255))*65536+Math.round(z(vn.g*255,0,255))*256+Math.round(z(vn.b*255,0,255))}getHexString(e=Be){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(vn.copy(this),t);let n=vn.r,r=vn.g,i=vn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Be){xt.workingToColorSpace(vn.copy(this),e);let t=vn.r,n=vn.g,r=vn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(hn),this.setHSL(hn.h+e,hn.s+t,hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(gn);let n=lt(hn.h,gn.h,t),r=lt(hn.s,gn.s,t),i=lt(hn.l,gn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new W;W.NAMES=mn;var yn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new W(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},bn=class extends dn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qt,this.environmentIntensity=1,this.environmentRotation=new qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},xn=new V,Sn=new V,Cn=new V,wn=new V,Tn=new V,En=new V,Dn=new V,On=new V,kn=new V,An=new V,jn=new Mt,Mn=new Mt,Nn=new Mt,Pn=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),xn.subVectors(e,t),r.cross(xn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){xn.subVectors(r,t),Sn.subVectors(n,t),Cn.subVectors(e,t);let a=xn.dot(xn),o=xn.dot(Sn),s=xn.dot(Cn),c=Sn.dot(Sn),l=Sn.dot(Cn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,wn)!==null&&wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,wn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,wn.x),s.addScaledVector(a,wn.y),s.addScaledVector(o,wn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return jn.setScalar(0),Mn.setScalar(0),Nn.setScalar(0),jn.fromBufferAttribute(e,t),Mn.fromBufferAttribute(e,n),Nn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(jn,i.x),a.addScaledVector(Mn,i.y),a.addScaledVector(Nn,i.z),a}static isFrontFacing(e,t,n,r){return xn.subVectors(n,t),Sn.subVectors(e,t),xn.cross(Sn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),xn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Tn.subVectors(r,n),En.subVectors(i,n),On.subVectors(e,n);let s=Tn.dot(On),c=En.dot(On);if(s<=0&&c<=0)return t.copy(n);kn.subVectors(e,r);let l=Tn.dot(kn),u=En.dot(kn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Tn,a);An.subVectors(e,i);let f=Tn.dot(An),p=En.dot(An);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(En,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Dn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Dn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Tn,a).addScaledVector(En,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fn=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Ln):Ln.fromBufferAttribute(r,t),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Rn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Rn.copy(e.boundingBox)),Rn.applyMatrix4(e.matrixWorld),this.union(Rn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gn),Kn.subVectors(this.max,Gn),zn.subVectors(e.a,Gn),Bn.subVectors(e.b,Gn),Vn.subVectors(e.c,Gn),Hn.subVectors(Bn,zn),Un.subVectors(Vn,Bn),Wn.subVectors(zn,Vn);let t=[0,-Hn.z,Hn.y,0,-Un.z,Un.y,0,-Wn.z,Wn.y,Hn.z,0,-Hn.x,Un.z,0,-Un.x,Wn.z,0,-Wn.x,-Hn.y,Hn.x,0,-Un.y,Un.x,0,-Wn.y,Wn.x,0];return!Yn(t,zn,Bn,Vn,Kn)||(t=[1,0,0,0,1,0,0,0,1],!Yn(t,zn,Bn,Vn,Kn))?!1:(qn.crossVectors(Hn,Un),t=[qn.x,qn.y,qn.z],Yn(t,zn,Bn,Vn,Kn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},In=[new V,new V,new V,new V,new V,new V,new V,new V],Ln=new V,Rn=new Fn,zn=new V,Bn=new V,Vn=new V,Hn=new V,Un=new V,Wn=new V,Gn=new V,Kn=new V,qn=new V,Jn=new V;function Yn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Jn.fromArray(e,a);let o=i.x*Math.abs(Jn.x)+i.y*Math.abs(Jn.y)+i.z*Math.abs(Jn.z),s=t.dot(Jn),c=n.dot(Jn),l=r.dot(Jn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Xn=new V,Zn=new B,Qn=0,$n=class extends rt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qn++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=We,this.updateRanges=[],this.gpuType=h,this.version=0,this._normalizationScale=e===void 0?void 0:dt(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyMatrix3(e),this.setXY(t,Zn.x,Zn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix3(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix4(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyNormalMatrix(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.transformDirection(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?ft(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?pt(e,this.array):Math.round(e*t)}},er=class extends $n{constructor(e,t,n){super(new Uint16Array(e),t,n)}},tr=class extends $n{constructor(e,t,n){super(new Uint32Array(e),t,n)}},nr=class extends $n{constructor(e,t,n){super(new Float32Array(e),t,n)}},rr=new Fn,ir=new V,ar=new V,or=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?rr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);let t=ir.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(ir,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(ar)),this.expandByPoint(ir.copy(e.center).sub(ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},sr=0,cr=new Lt,lr=new dn,ur=new V,dr=new Fn,fr=new Fn,pr=new V,mr=class e extends rt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sr++}),this.uuid=st(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(qe(e)?tr:er)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new H().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return cr.makeRotationFromQuaternion(e),this.applyMatrix4(cr),this}rotateX(e){return cr.makeRotationX(e),this.applyMatrix4(cr),this}rotateY(e){return cr.makeRotationY(e),this.applyMatrix4(cr),this}rotateZ(e){return cr.makeRotationZ(e),this.applyMatrix4(cr),this}translate(e,t,n){return cr.makeTranslation(e,t,n),this.applyMatrix4(cr),this}scale(e,t,n){return cr.makeScale(e,t,n),this.applyMatrix4(cr),this}lookAt(e){return lr.lookAt(e),lr.updateMatrix(),this.applyMatrix4(lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new nr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&L(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)R(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];dr.setFromBufferAttribute(n),this.morphTargetsRelative?(pr.addVectors(this.boundingBox.min,dr.min),this.boundingBox.expandByPoint(pr),pr.addVectors(this.boundingBox.max,dr.max),this.boundingBox.expandByPoint(pr)):(this.boundingBox.expandByPoint(dr.min),this.boundingBox.expandByPoint(dr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&R(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)R(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);else if(e){let n=this.boundingSphere.center;if(dr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];fr.setFromBufferAttribute(n),this.morphTargetsRelative?(pr.addVectors(dr.min,fr.min),dr.expandByPoint(pr),pr.addVectors(dr.max,fr.max),dr.expandByPoint(pr)):(dr.expandByPoint(fr.min),dr.expandByPoint(fr.max))}dr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)pr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(pr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)pr.fromBufferAttribute(a,t),o&&(ur.fromBufferAttribute(e,t),pr.add(ur)),r=Math.max(r,n.distanceToSquared(pr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&R(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){R(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new $n(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let l=new V,u=new V,d=new V,f=new B,p=new B,m=new B,h=new V,g=new V;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new V,b=new V,x=new V,S=new V;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new $n(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pr.fromBufferAttribute(e,t),pr.normalize(),e.setXYZ(t,pr.x,pr.y,pr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new $n(a,r,i)}if(this.index===null)return L(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},hr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=We,this.updateRanges=[],this.version=0,this.uuid=st()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=gr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=gr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function gr(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=st()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var _r=new V,vr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:dt(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.applyMatrix4(e),this.setXYZ(t,_r.x,_r.y,_r.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.applyNormalMatrix(e),this.setXYZ(t,_r.x,_r.y,_r.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.transformDirection(e),this.setXYZ(t,_r.x,_r.y,_r.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Qe(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new $n(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Qe(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?ft(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?pt(e,this.data.array):Math.round(e*t)}},yr=new V,br=new V,xr=new H,Sr=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=yr.subVectors(n,t).cross(br.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(yr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||xr.getNormalMatrix(e),r=this.coplanarPoint(yr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Cr=0,wr=class extends rt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cr++}),this.uuid=st(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ue,this.stencilZFail=Ue,this.stencilZPass=Ue,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){L(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?L(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new W().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Sr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new B().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new B().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Tr=class extends wr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Er,Dr=new V,Or=new V,kr=new V,Ar=new B,jr=new B,Mr=new Lt,Nr=new V,Pr=new V,Fr=new V,Ir=new B,Lr=new B,Rr=new B,zr=class extends dn{constructor(e=new Tr){if(super(),this.isSprite=!0,this.type=`Sprite`,Er===void 0){Er=new mr;let e=new hr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Er.setIndex([0,1,2,0,2,3]),Er.setAttribute(`position`,new vr(e,3,0,!1)),Er.setAttribute(`uv`,new vr(e,2,3,!1))}this.geometry=Er,this.material=e,this.center=new B(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&R(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Or.setFromMatrixScale(this.matrixWorld),Mr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),kr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Or.multiplyScalar(-kr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Br(Nr.set(-.5,-.5,0),kr,a,Or,r,i),Br(Pr.set(.5,-.5,0),kr,a,Or,r,i),Br(Fr.set(.5,.5,0),kr,a,Or,r,i),Ir.set(0,0),Lr.set(1,0),Rr.set(1,1);let o=e.ray.intersectTriangle(Nr,Pr,Fr,!1,Dr);if(o===null&&(Br(Pr.set(-.5,.5,0),kr,a,Or,r,i),Lr.set(0,1),o=e.ray.intersectTriangle(Nr,Fr,Pr,!1,Dr),o===null))return;let s=e.ray.origin.distanceTo(Dr);s<e.near||s>e.far||t.push({distance:s,point:Dr.clone(),uv:Pn.getInterpolation(Dr,Nr,Pr,Fr,Ir,Lr,Rr,new B),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Br(e,t,n,r,i,a){Ar.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?jr.copy(Ar):(jr.x=a*Ar.x-i*Ar.y,jr.y=i*Ar.x+a*Ar.y),e.copy(t),e.x+=jr.x,e.y+=jr.y,e.applyMatrix4(Mr)}var Vr=new V,Hr=new V,Ur=new V,Wr=new V,Gr=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vr.copy(this.origin).addScaledVector(this.direction,t),Vr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Hr.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),Wr.copy(this.origin).sub(Hr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Ur),o=Wr.dot(this.direction),s=-Wr.dot(Ur),c=Wr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Hr).addScaledVector(Ur,d),f}intersectSphere(e,t){if(e.radius<0)return null;Vr.subVectors(e.center,this.origin);let n=Vr.dot(this.direction),r=Vr.dot(Vr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Vr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,ee,O,k,te,A,ne;if(y>=b&&y>=x?(w=s,D=u,k=p,ne=g,s>=0?(S=c,C=l,T=d,E=f,ee=m,O=h,te=_,A=v):(S=l,C=c,T=f,E=d,ee=h,O=m,te=v,A=_)):b>=x?(w=c,D=d,k=m,ne=_,c>=0?(S=l,C=s,T=f,E=u,ee=h,O=p,te=v,A=g):(S=s,C=l,T=u,E=f,ee=p,O=h,te=g,A=v)):(w=l,D=f,k=h,ne=v,l>=0?(S=s,C=c,T=u,E=d,ee=p,O=m,te=g,A=_):(S=c,C=s,T=d,E=u,ee=m,O=p,te=_,A=g)),w===0)return null;let j=S/w,re=C/w,M=1/w,ie=T-j*D,ae=E-re*D,oe=ee-j*k,se=O-re*k,ce=te-j*ne,le=A-re*ne,ue=ce*se-le*oe,N=ie*le-ae*ce,de=oe*ae-se*ie;if(r){if(ue<0||N<0||de<0)return null}else if((ue<0||N<0||de<0)&&(ue>0||N>0||de>0))return null;let fe=ue+N+de;if(fe===0)return null;let pe=M*(ue*D+N*k+de*ne);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kr=class extends wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qr=new Lt,Jr=new Gr,Yr=new or,Xr=new V,Zr=new V,Qr=new V,$r=new V,ei=new V,ti=new V,ni=new V,ri=new V,G=class extends dn{constructor(e=new mr,t=new Kr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ti.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ei.fromBufferAttribute(s,e),a?ti.addScaledVector(ei,r):ti.addScaledVector(ei.sub(t),r))}t.add(ti)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Jr.copy(e.ray).recast(e.near),Yr.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Yr,Xr)===null||Jr.origin.distanceToSquared(Xr)>(e.far-e.near)**2)||(qr.copy(i).invert(),Jr.copy(e.ray).applyMatrix4(qr),(n.boundingBox===null||Jr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ai(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ai(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ai(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ai(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ii(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ri.copy(s),ri.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ri);return l<n.near||l>n.far?null:{distance:l,point:ri.clone(),object:e}}function ai(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Zr),e.getVertexPosition(c,Qr),e.getVertexPosition(l,$r);let u=ii(e,t,n,r,Zr,Qr,$r,ni);if(u){let e=new V;Pn.getBarycoord(ni,Zr,Qr,$r,e),i&&(u.uv=Pn.getInterpolatedAttribute(i,s,c,l,e,new B)),a&&(u.uv1=Pn.getInterpolatedAttribute(a,s,c,l,e,new B)),o&&(u.normal=Pn.getInterpolatedAttribute(o,s,c,l,e,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new V,materialIndex:0};Pn.getNormal(Zr,Qr,$r,t.normal),u.face=t,u.barycoord=e}return u}var oi=class extends jt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},si=class extends $n{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ci=new Lt,li=new Lt,ui=[],di=new Fn,fi=new Lt,pi=new G,mi=new or,hi=class extends G{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new si(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,fi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ci),di.copy(e.boundingBox).applyMatrix4(ci),this.boundingBox.union(di)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new or),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ci),mi.copy(e.boundingSphere).applyMatrix4(ci),this.boundingSphere.union(mi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(pi.geometry=this.geometry,pi.material=this.material,pi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mi.copy(this.boundingSphere),mi.applyMatrix4(n),e.ray.intersectsSphere(mi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ci),li.multiplyMatrices(n,ci),pi.matrixWorld=li,pi.raycast(e,ui);for(let e=0,n=ui.length;e<n;e++){let n=ui[e];n.instanceId=i,n.object=this,t.push(n)}ui.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new si(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new oi(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},gi=new or,_i=new B(.5,.5),vi=new V,yi=class{constructor(e=new Sr,t=new Sr,n=new Sr,r=new Sr,i=new Sr,a=new Sr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ke,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){return gi.center.set(0,0,0),gi.radius=.7071067811865476+_i.distanceTo(e.center),gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(vi.x=r.normal.x>0?e.max.x:e.min.x,vi.y=r.normal.y>0?e.max.y:e.min.y,vi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},bi=new Lt,xi=class e{constructor(){this.coordinateSystem=Ke,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];bi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new yi),n[e].setFromProjectionMatrix(bi,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new yi),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Si=class extends wr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ci=new Lt,wi=new Gr,Ti=new or,Ei=new V,Di=class extends dn{constructor(e=new mr,t=new Si){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ti.copy(n.boundingSphere),Ti.applyMatrix4(r),Ti.radius+=i,e.ray.intersectsSphere(Ti)===!1)return;Ci.copy(r).invert(),wi.copy(e.ray).applyMatrix4(Ci);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Ei.fromBufferAttribute(l,n),Oi(Ei,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Ei.fromBufferAttribute(l,a),Oi(Ei,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Oi(e,t,n,r,i,a,o){let s=wi.distanceSqToPoint(e);if(s<n){let n=new V;wi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ki=class extends jt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ai=class extends jt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ji=class extends Ai{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Mi=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ni=class e extends mr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new nr(c,3)),this.setAttribute(`normal`,new nr(l,3)),this.setAttribute(`uv`,new nr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Pi=class e extends mr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new V,l=new B;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new nr(a,3)),this.setAttribute(`normal`,new nr(o,3)),this.setAttribute(`uv`,new nr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Fi=class e extends mr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new nr(u,3)),this.setAttribute(`normal`,new nr(d,3)),this.setAttribute(`uv`,new nr(f,2));function _(){let a=new V,_=new V,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new B,m=new V,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ii=class e extends Fi{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Li=class e extends mr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new nr(i,3)),this.setAttribute(`normal`,new nr(i.slice(),3)),this.setAttribute(`uv`,new nr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new V,r=new V,i=new V;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new V;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new V;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new V,t=new V,n=new V,r=new V,o=new B,s=new B,c=new B;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Ri=class e extends Li{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},zi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){L(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new B:new V);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new V,r=[],i=[],a=[],o=new V,s=new Lt;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new V)}i[0]=new V,a[0]=new V;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(z(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(z(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Bi=class extends zi{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new B){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Vi=class extends Bi{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Hi(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Ui=new V,Wi=new V,Gi=new Hi,Ki=new Hi,qi=new Hi,Ji=class extends zi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new V){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Wi.subVectors(r[0],r[1]).add(r[0]),c=Wi);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Ui.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Ui),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Gi.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Ki.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),qi.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Gi.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Ki.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),qi.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Gi.calc(s),Ki.calc(s),qi.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Yi(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Xi(e,t){let n=1-e;return n*n*t}function Zi(e,t){return 2*(1-e)*e*t}function Qi(e,t){return e*e*t}function $i(e,t,n,r){return Xi(e,t)+Zi(e,n)+Qi(e,r)}function ea(e,t){let n=1-e;return n*n*n*t}function ta(e,t){let n=1-e;return 3*n*n*e*t}function na(e,t){return 3*(1-e)*e*e*t}function ra(e,t){return e*e*e*t}function ia(e,t,n,r,i){return ea(e,t)+ta(e,n)+na(e,r)+ra(e,i)}var aa=class extends zi{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ia(e,r.x,i.x,a.x,o.x),ia(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},oa=class extends zi{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ia(e,r.x,i.x,a.x,o.x),ia(e,r.y,i.y,a.y,o.y),ia(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sa=class extends zi{constructor(e=new B,t=new B){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ca=class extends zi{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},la=class extends zi{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set($i(e,r.x,i.x,a.x),$i(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ua=class extends zi{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set($i(e,r.x,i.x,a.x),$i(e,r.y,i.y,a.y),$i(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends zi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new B){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Yi(o,s.x,c.x,l.x,u.x),Yi(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this}},fa=Object.freeze({__proto__:null,ArcCurve:Vi,CatmullRomCurve3:Ji,CubicBezierCurve:aa,CubicBezierCurve3:oa,EllipseCurve:Bi,LineCurve:sa,LineCurve3:ca,QuadraticBezierCurve:la,QuadraticBezierCurve3:ua,SplineCurve:da}),pa=class extends zi{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new fa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new fa[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},ma=class extends pa{constructor(e){super(),this.type=`Path`,this.currentPoint=new B,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new sa(this.currentPoint.clone(),new B(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new la(this.currentPoint.clone(),new B(e,t),new B(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new aa(this.currentPoint.clone(),new B(e,t),new B(n,r),new B(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new da([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Bi(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ha=class extends ma{constructor(e){super(e),this.uuid=st(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new ma().fromJSON(n))}return this}};function ga(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=_a(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=wa(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return ya(a,o,n,s,c,l,0),o}function _a(e,t,n,r,i){let a;if(i===Ja(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Ga(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Ga(i/r|0,e[i],e[i+1],a);return a&&La(a,a.next)&&(Ka(a),a=a.next),a}function va(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(La(n,n.next)||Ia(n.prev,n,n.next)===0)){if(Ka(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function ya(e,t,n,r,i,a,o){if(!e)return;!o&&a&&ka(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?xa(e,r,i,a):ba(e))t.push(c.i,e.i,l.i),Ka(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=Sa(va(e),t),ya(e,t,n,r,i,a,2)):o===2&&Ca(e,t,n,r,i,a):ya(va(e),t,n,r,i,a,1);break}}}function ba(e){let t=e.prev,n=e,r=e.next;if(Ia(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Pa(i,s,a,c,o,l,m.x,m.y)&&Ia(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function xa(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Ia(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=ja(p,m,t,n,r),v=ja(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Pa(s,u,c,d,l,f,y.x,y.y)&&Ia(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Pa(s,u,c,d,l,f,b.x,b.y)&&Ia(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Pa(s,u,c,d,l,f,y.x,y.y)&&Ia(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Pa(s,u,c,d,l,f,b.x,b.y)&&Ia(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Sa(e,t){let n=e;do{let r=n.prev,i=n.next.next;!La(r,i)&&Ra(r,n,n.next,i)&&Ha(r,i)&&Ha(i,r)&&(t.push(r.i,n.i,i.i),Ka(n),Ka(n.next),n=e=i),n=n.next}while(n!==e);return va(n)}function Ca(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Fa(o,e)){let s=Wa(o,e);o=va(o,o.next),s=va(s,s.next),ya(o,t,n,r,i,a,0),ya(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function wa(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=_a(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Ma(o))}i.sort(Ta);for(let e=0;e<i.length;e++)n=Ea(i[e],n);return n}function Ta(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Ea(e,t){let n=Da(e,t);if(!n)return t;let r=Wa(n,e);return va(r,r.next),va(n,n.next)}function Da(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(La(e,n))return n;do{if(La(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Na(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Ha(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Oa(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Oa(e,t){return Ia(e.prev,e,t.prev)<0&&Ia(t.next,e,e.next)<0}function ka(e,t,n,r){let i=e;do i.z===0&&(i.z=ja(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Aa(i)}function Aa(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function ja(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Ma(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Na(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Pa(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Na(e,t,n,r,i,a,o,s)}function Fa(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Va(e,t)&&(Ha(e,t)&&Ha(t,e)&&Ua(e,t)&&(Ia(e.prev,e,t.prev)||Ia(e,t.prev,t))||La(e,t)&&Ia(e.prev,e,e.next)>0&&Ia(t.prev,t,t.next)>0)}function Ia(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function La(e,t){return e.x===t.x&&e.y===t.y}function Ra(e,t,n,r){let i=Ba(Ia(e,t,n)),a=Ba(Ia(e,t,r)),o=Ba(Ia(n,r,e)),s=Ba(Ia(n,r,t));return!!(i!==a&&o!==s||i===0&&za(e,n,t)||a===0&&za(e,r,t)||o===0&&za(n,e,r)||s===0&&za(n,t,r))}function za(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ba(e){return e>0?1:e<0?-1:0}function Va(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ra(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Ha(e,t){return Ia(e.prev,e,e.next)<0?Ia(e,t,e.next)>=0&&Ia(e,e.prev,t)>=0:Ia(e,t,e.prev)<0||Ia(e,e.next,t)<0}function Ua(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Wa(e,t){let n=qa(e.i,e.x,e.y),r=qa(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Ga(e,t,n,r){let i=qa(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Ka(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function qa(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ja(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Ya=class{static triangulate(e,t,n=2){return ga(e,t,n)}},Xa=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Za(e),Qa(n,e);let a=e.length;t.forEach(Za);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Qa(n,t[e]);let o=Ya.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Za(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Qa(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var $a=class e extends Li{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},eo=class e extends Li{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},to=class e extends mr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new nr(p,3)),this.setAttribute(`normal`,new nr(m,3)),this.setAttribute(`uv`,new nr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},no=class e extends mr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new V,p=new B;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new nr(s,3)),this.setAttribute(`normal`,new nr(c,3)),this.setAttribute(`uv`,new nr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ro=class e extends mr{constructor(e=new ha([new B(0,.5),new B(-.5,-.5),new B(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new nr(r,3)),this.setAttribute(`normal`,new nr(i,3)),this.setAttribute(`uv`,new nr(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;Xa.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];Xa.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=Xa.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return io(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function io(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var ao=class e extends mr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new V,d=new V,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new nr(p,3)),this.setAttribute(`normal`,new nr(m,3)),this.setAttribute(`uv`,new nr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},oo=class e extends mr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new V,f=new V,p=new V;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new nr(c,3)),this.setAttribute(`normal`,new nr(l,3)),this.setAttribute(`uv`,new nr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function so(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(lo(i))i.isRenderTargetTexture?(L(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(lo(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function co(e){let t={};for(let n=0;n<e.length;n++){let r=so(e[n]);for(let e in r)t[e]=r[e]}return t}function lo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function uo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function fo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xt.workingColorSpace}var po={clone:so,merge:co},mo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ho=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,go=class extends wr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mo,this.fragmentShader=ho,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=uo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new W().setHex(r.value);break;case`v2`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Mt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Lt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},_o=class extends go{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},vo=class extends wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new W(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yo=class extends wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=ze,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bo=class extends wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function xo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function So(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Co=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},wo=class extends Co{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Le,endingEnd:Le}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Re:i=e,o=2*t-n;break;case F:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Re:a=e,s=2*n-t;break;case F:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},To=class extends Co{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Eo=class extends Co{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Do=class extends Co{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Ao(n,t,g,y,r);i[p]=Oo(x,o,_,b,m)}return i}};function Oo(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function ko(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Ao(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Oo(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=ko(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var jo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=xo(t,this.TimeBufferType),this.values=xo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xo(e.times,Array),values:xo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),So(e.settings)&&(n.settings={inTangents:xo(e.settings.inTangents,Array),outTangents:xo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new To(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Do(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Pe:t=this.InterpolantFactoryMethodDiscrete;break;case Fe:t=this.InterpolantFactoryMethodLinear;break;case P:t=this.InterpolantFactoryMethodSmooth;break;case Ie:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return L(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pe;case this.InterpolantFactoryMethodLinear:return Fe;case this.InterpolantFactoryMethodSmooth:return P;case this.InterpolantFactoryMethodBezier:return Ie}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;So(this.settings)&&(Mo(this.settings.inTangents,e),Mo(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;So(this.settings)&&(No(this.settings.inTangents,e),No(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(R(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(R(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){R(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){R(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Je(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){R(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===P,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,So(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Mo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function No(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}jo.prototype.ValueTypeName=``,jo.prototype.TimeBufferType=Float32Array,jo.prototype.ValueBufferType=Float32Array,jo.prototype.DefaultInterpolation=Fe;var Po=class extends jo{constructor(e,t,n){super(e,t,n)}};Po.prototype.ValueTypeName=`bool`,Po.prototype.ValueBufferType=Array,Po.prototype.DefaultInterpolation=Pe,Po.prototype.InterpolantFactoryMethodLinear=void 0,Po.prototype.InterpolantFactoryMethodSmooth=void 0;var Fo=class extends jo{constructor(e,t,n,r){super(e,t,n,r)}};Fo.prototype.ValueTypeName=`color`;var Io=class extends jo{constructor(e,t,n,r){super(e,t,n,r)}};Io.prototype.ValueTypeName=`number`;var Lo=class extends Co{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)mt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ro=class extends jo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Lo(this.times,this.values,this.getValueSize(),e)}};Ro.prototype.ValueTypeName=`quaternion`,Ro.prototype.InterpolantFactoryMethodSmooth=void 0;var zo=class extends jo{constructor(e,t,n){super(e,t,n)}};zo.prototype.ValueTypeName=`string`,zo.prototype.ValueBufferType=Array,zo.prototype.DefaultInterpolation=Pe,zo.prototype.InterpolantFactoryMethodLinear=void 0,zo.prototype.InterpolantFactoryMethodSmooth=void 0;var Bo=class extends jo{constructor(e,t,n,r){super(e,t,n,r)}};Bo.prototype.ValueTypeName=`vector`;var Vo=class extends dn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new W(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ho=class extends Vo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new W(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Uo=new Lt,Wo=new V,Go=new V,Ko=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new B(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yi,this._frameExtents=new B(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Wo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wo),Go.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Go),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Uo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Uo,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Uo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},qo=new V,Jo=new mt,Yo=new V,Xo=class extends dn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Ke,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qo,Jo,Yo),Yo.x===1&&Yo.y===1&&Yo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qo,Jo,Yo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(qo,Jo,Yo),Yo.x===1&&Yo.y===1&&Yo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qo,Jo,Yo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zo=new V,Qo=new B,$o=new B,es=class extends Xo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ot*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(at*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ot*2*Math.atan(Math.tan(at*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zo.x,Zo.y).multiplyScalar(-e/Zo.z),Zo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zo.x,Zo.y).multiplyScalar(-e/Zo.z)}getViewSize(e,t){return this.getViewBounds(e,Qo,$o),t.subVectors($o,Qo)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(at*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ts=class extends Ko{constructor(){super(new es(90,1,.5,500)),this.isPointLightShadow=!0}},ns=class extends Vo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new ts}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},rs=class extends Xo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},is=class extends Ko{constructor(){super(new rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},as=class extends Vo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new is}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},os=-90,ss=1,cs=class extends dn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new es(os,ss,e,t);r.layers=this.layers,this.add(r);let i=new es(os,ss,e,t);i.layers=this.layers,this.add(i);let a=new es(os,ss,e,t);a.layers=this.layers,this.add(a);let o=new es(os,ss,e,t);o.layers=this.layers,this.add(o);let s=new es(os,ss,e,t);s.layers=this.layers,this.add(s);let c=new es(os,ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ls=class extends es{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},us=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=ds.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function ds(){this._document.hidden===!1&&this.reset()}var fs=`\\[\\]\\.:\\/`,ps=RegExp(`[\\[\\]\\.:\\/]`,`g`),ms=`[^\\[\\]\\.:\\/]`,hs=`[^`+fs.replace(`\\.`,``)+`]`,gs=`((?:WC+[\\/:])*)`.replace(`WC`,ms),_s=`(WCOD+)?`.replace(`WCOD`,hs),vs=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ms),ys=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ms),bs=RegExp(`^`+gs+_s+vs+ys+`$`),xs=[`material`,`materials`,`bones`,`map`],Ss=class{constructor(e,t,n){let r=n||Cs.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Cs=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(ps,``)}static parseTrackName(e){let t=bs.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);xs.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){L(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){R(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){R(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){R(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){R(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){R(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;R(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Cs.Composite=Ss,Cs.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Cs.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Cs.prototype.GetterByBindingType=[Cs.prototype._getValue_direct,Cs.prototype._getValue_array,Cs.prototype._getValue_arrayElement,Cs.prototype._getValue_toArray],Cs.prototype.SetterByBindingTypeAndVersioning=[[Cs.prototype._setValue_direct,Cs.prototype._setValue_direct_setNeedsUpdate,Cs.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Cs.prototype._setValue_array,Cs.prototype._setValue_array_setNeedsUpdate,Cs.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Cs.prototype._setValue_arrayElement,Cs.prototype._setValue_arrayElement_setNeedsUpdate,Cs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Cs.prototype._setValue_fromArray,Cs.prototype._setValue_fromArray_setNeedsUpdate,Cs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ws=new Lt,Ts=class{constructor(e,t,n=0,r=1/0){this.ray=new Gr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Jt,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):R(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return ws.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ws),this}intersectObject(e,t=!0,n=[]){return Ds(e,this,n,t),n.sort(Es),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Ds(e[r],this,n,t);return n.sort(Es),n}};function Es(e,t){return e.distance-t.distance}function Ds(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Ds(r[e],t,n,!0)}}(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function Os(e,t,n,r){let i=ks(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case O:return e*t*2/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case te:return e*t*4/i.components*i.byteLength;case A:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case j:case re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ie:case oe:return Math.max(e,16)*Math.max(t,8)/4;case M:case ae:return Math.max(e,8)*Math.max(t,8)/2;case se:case ce:case ue:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case le:case de:case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Te:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ee:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case De:case Oe:case ke:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Me:case Ne:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ks(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?L(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function As(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function js(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var K={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},q={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},Ms={basic:{uniforms:co([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.fog]),vertexShader:K.meshbasic_vert,fragmentShader:K.meshbasic_frag},lambert:{uniforms:co([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new W(0)},envMapIntensity:{value:1}}]),vertexShader:K.meshlambert_vert,fragmentShader:K.meshlambert_frag},phong:{uniforms:co([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:K.meshphong_vert,fragmentShader:K.meshphong_frag},standard:{uniforms:co([q.common,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.roughnessmap,q.metalnessmap,q.fog,q.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag},toon:{uniforms:co([q.common,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.gradientmap,q.fog,q.lights,{emissive:{value:new W(0)}}]),vertexShader:K.meshtoon_vert,fragmentShader:K.meshtoon_frag},matcap:{uniforms:co([q.common,q.bumpmap,q.normalmap,q.displacementmap,q.fog,{matcap:{value:null}}]),vertexShader:K.meshmatcap_vert,fragmentShader:K.meshmatcap_frag},points:{uniforms:co([q.points,q.fog]),vertexShader:K.points_vert,fragmentShader:K.points_frag},dashed:{uniforms:co([q.common,q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:K.linedashed_vert,fragmentShader:K.linedashed_frag},depth:{uniforms:co([q.common,q.displacementmap]),vertexShader:K.depth_vert,fragmentShader:K.depth_frag},normal:{uniforms:co([q.common,q.bumpmap,q.normalmap,q.displacementmap,{opacity:{value:1}}]),vertexShader:K.meshnormal_vert,fragmentShader:K.meshnormal_frag},sprite:{uniforms:co([q.sprite,q.fog]),vertexShader:K.sprite_vert,fragmentShader:K.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:K.background_vert,fragmentShader:K.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:K.backgroundCube_vert,fragmentShader:K.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:K.cube_vert,fragmentShader:K.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:K.equirect_vert,fragmentShader:K.equirect_frag},distance:{uniforms:co([q.common,q.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:K.distance_vert,fragmentShader:K.distance_frag},shadow:{uniforms:co([q.lights,q.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:K.shadow_vert,fragmentShader:K.shadow_frag}};Ms.physical={uniforms:co([Ms.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new H},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag};var Ns={r:0,b:0,g:0},Ps=new Lt,Fs=new H;Fs.set(-1,0,0,0,1,0,0,0,1);function Is(e,t,n,r,i,a){let o=new W(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new G(new Ni(1,1,1),new go({name:`BackgroundCubeMaterial`,uniforms:so(Ms.backgroundCube.uniforms),vertexShader:Ms.backgroundCube.vertexShader,fragmentShader:Ms.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ps.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Fs),l.material.toneMapped=xt.getTransfer(i.colorSpace)!==He,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new G(new to(2,2),new go({name:`BackgroundMaterial`,uniforms:so(Ms.background.uniforms),vertexShader:Ms.background.vertexShader,fragmentShader:Ms.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=xt.getTransfer(i.colorSpace)!==He,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ns,fo(e)),n.buffers.color.setClear(Ns.r,Ns.g,Ns.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ls(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Rs(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function zs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(L(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&L(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&L(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Bs(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Sr,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Vs=class extends Pt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ki(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ni(5,5,5),i=new go({name:`CubemapFromEquirect`,uniforms:so(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new G(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new cs(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Hs=256,Us=3,Ws=20,Gs=256,Ks=16,qs=3,Js=new V,Ys=new W,Xs=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new cs(1,10,null),this._boxMesh=new G(new Ni(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Js}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Ys));let h=new cs(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Hs,ut(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Hs:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Zs(e,!1,!1),n=Math.log2(e)-Us;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Zs(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=rc()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=nc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=$s(),this._integrationMaterial=ec());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Ks);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-qs)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Gs*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=tc());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Zs(e,t,n){return new Vs(e,{minFilter:c,generateMipmaps:t,type:g,colorSpace:I,depthBuffer:n})}function Qs(e,t,n){return new go({name:e,uniforms:t,vertexShader:K.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function $s(){return Qs(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Gs}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ec(){return Qs(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ks}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function tc(){return Qs(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ws}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function nc(){return Qs(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function rc(){return Qs(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ic(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Vs(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Xs(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Xs(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function ac(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&et(`WebGLRenderer: `+e+` extension not supported.`),t}}}function oc(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?tr:er)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function sc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function cc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:R(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function lc(e,t,n){let r=new WeakMap,i=new Mt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Ft(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new B(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function uc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var dc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function fc(e,t,n,r,i,a){let o=new Pt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new mr;u.setAttribute(`position`,new nr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new nr([0,2,0,0,2,0],2));let d=new _o({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new G(u,d),p=new rs(-1,1,1,-1,0,1),m=null,h=null,_=!1,v,b=null,x=[],S=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<x.length;n++){let r=x[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){x=e,S=x.length>0&&x[0].isRenderPass===!0;let t=o.width,n=o.height;x.length>0&&s===null&&(s=new Pt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Pt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&x.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Ai(t,n),a===!0&&(l.format=E,l.type=y)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<x.length;e++){let i=x[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(_||e.toneMapping===0&&x.length===0)return!1;if(b=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return S===!1&&e.setRenderTarget(o),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(e,t){e.toneMapping=v,_=!0;let n=o,r=s;for(let i=0;i<x.length;i++){let a=x[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},xt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=dc[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(b),e.render(f,p),b=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var pc=new jt,mc=new Ai(1,1),hc=new ji(1),gc=new Ft,_c=new It,vc=new ki,yc=[],bc=[],xc=new Float32Array(16),Sc=new Float32Array(9),Cc=new Float32Array(4);function wc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=yc[i];if(a===void 0&&(a=new Float32Array(i),yc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Tc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ec(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Dc(e,t){let n=bc[t];n===void 0&&(n=new Int32Array(t),bc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Oc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function kc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Tc(n,t))return;e.uniform2fv(this.addr,t),Ec(n,t)}}function Ac(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Tc(n,t))return;e.uniform3fv(this.addr,t),Ec(n,t)}}function jc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Tc(n,t))return;e.uniform4fv(this.addr,t),Ec(n,t)}}function Mc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Tc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ec(n,t)}else{if(Tc(n,r))return;Cc.set(r),e.uniformMatrix2fv(this.addr,!1,Cc),Ec(n,r)}}function Nc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Tc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ec(n,t)}else{if(Tc(n,r))return;Sc.set(r),e.uniformMatrix3fv(this.addr,!1,Sc),Ec(n,r)}}function Pc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Tc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ec(n,t)}else{if(Tc(n,r))return;xc.set(r),e.uniformMatrix4fv(this.addr,!1,xc),Ec(n,r)}}function Fc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ic(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Tc(n,t))return;e.uniform2iv(this.addr,t),Ec(n,t)}}function Lc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Tc(n,t))return;e.uniform3iv(this.addr,t),Ec(n,t)}}function Rc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Tc(n,t))return;e.uniform4iv(this.addr,t),Ec(n,t)}}function zc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Bc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Tc(n,t))return;e.uniform2uiv(this.addr,t),Ec(n,t)}}function Vc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Tc(n,t))return;e.uniform3uiv(this.addr,t),Ec(n,t)}}function Hc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Tc(n,t))return;e.uniform4uiv(this.addr,t),Ec(n,t)}}function Uc(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Wc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Uc(mc):pc,n.setTexture2D(t||a,i)}function Gc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||_c,i)}function Kc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Uc(hc):vc,n.setTextureCube(t||a,i)}function qc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||gc,i)}function Jc(e){switch(e){case 5126:return Oc;case 35664:return kc;case 35665:return Ac;case 35666:return jc;case 35674:return Mc;case 35675:return Nc;case 35676:return Pc;case 5124:case 35670:return Fc;case 35667:case 35671:return Ic;case 35668:case 35672:return Lc;case 35669:case 35673:return Rc;case 5125:return zc;case 36294:return Bc;case 36295:return Vc;case 36296:return Hc;case 35678:case 36198:case 36298:case 36306:case 35682:return Wc;case 35679:case 36299:case 36307:return Gc;case 35680:case 36300:case 36308:case 36293:return Kc;case 36289:case 36303:case 36311:case 36292:return qc}}function Yc(e,t){e.uniform1fv(this.addr,t)}function Xc(e,t){let n=wc(t,this.size,2);e.uniform2fv(this.addr,n)}function Zc(e,t){let n=wc(t,this.size,3);e.uniform3fv(this.addr,n)}function Qc(e,t){let n=wc(t,this.size,4);e.uniform4fv(this.addr,n)}function $c(e,t){let n=wc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function el(e,t){let n=wc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function tl(e,t){let n=wc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function nl(e,t){e.uniform1iv(this.addr,t)}function rl(e,t){e.uniform2iv(this.addr,t)}function il(e,t){e.uniform3iv(this.addr,t)}function al(e,t){e.uniform4iv(this.addr,t)}function ol(e,t){e.uniform1uiv(this.addr,t)}function sl(e,t){e.uniform2uiv(this.addr,t)}function cl(e,t){e.uniform3uiv(this.addr,t)}function ll(e,t){e.uniform4uiv(this.addr,t)}function ul(e,t,n){let r=this.cache,i=t.length,a=Dc(n,i);Tc(r,a)||(e.uniform1iv(this.addr,a),Ec(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Uc(mc):pc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function dl(e,t,n){let r=this.cache,i=t.length,a=Dc(n,i);Tc(r,a)||(e.uniform1iv(this.addr,a),Ec(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||_c,a[e])}function fl(e,t,n){let r=this.cache,i=t.length,a=Dc(n,i);Tc(r,a)||(e.uniform1iv(this.addr,a),Ec(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Uc(hc):vc;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function pl(e,t,n){let r=this.cache,i=t.length,a=Dc(n,i);Tc(r,a)||(e.uniform1iv(this.addr,a),Ec(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||gc,a[e])}function ml(e){switch(e){case 5126:return Yc;case 35664:return Xc;case 35665:return Zc;case 35666:return Qc;case 35674:return $c;case 35675:return el;case 35676:return tl;case 5124:case 35670:return nl;case 35667:case 35671:return rl;case 35668:case 35672:return il;case 35669:case 35673:return al;case 5125:return ol;case 36294:return sl;case 36295:return cl;case 36296:return ll;case 35678:case 36198:case 36298:case 36306:case 35682:return ul;case 35679:case 36299:case 36307:return dl;case 35680:case 36300:case 36308:case 36293:return fl;case 36289:case 36303:case 36311:case 36292:return pl}}var hl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jc(t.type)}},gl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ml(t.type)}},_l=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},vl=/(\w+)(\])?(\[|\.)?/g;function yl(e,t){e.seq.push(t),e.map[t.id]=t}function bl(e,t,n){let r=e.name,i=r.length;for(vl.lastIndex=0;;){let a=vl.exec(r),o=vl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){yl(n,l===void 0?new hl(s,e,t):new gl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new _l(s),yl(n,e)),n=e}}}var xl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);bl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Sl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Cl=37297,wl=0;function Tl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var El=new H;function Dl(e){xt._getMatrix(El,xt.workingColorSpace,e);let t=`mat3( ${El.elements.map(e=>e.toFixed(4))} )`;switch(xt.getTransfer(e)){case Ve:return[t,`LinearTransferOETF`];case He:return[t,`sRGBTransferOETF`];default:return L(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Ol(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Tl(e.getShaderSource(t),r)}return i}function kl(e,t){let n=Dl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Al={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function jl(e,t){let n=Al[t];return n===void 0?(L(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ml=new V;function Nl(){return xt.getLuminanceCoefficients(Ml),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ml.x.toFixed(4)}, ${Ml.y.toFixed(4)}, ${Ml.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Pl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ll).join(`
`)}function Fl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Il(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ll(e){return e!==``}function Rl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function zl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bl=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(e){return e.replace(Bl,Hl)}function Hl(e,t){let n=K[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Vl(n)}var Ul=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wl(e){return e.replace(Ul,Gl)}function Gl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Kl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var ql={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Jl(e){return ql[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Yl={302:`ENVMAP_MODE_REFRACTION`};function Xl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Yl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Zl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Ql(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Zl[e.combine]||`ENVMAP_BLENDING_NONE`}function $l(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Jl(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Xl(n),d=Ql(n),f=Pl(n),p=Fl(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Ll).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Ll).join(`
`),g.length>0&&(g+=`
`)):(h=[Kl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ll).join(`
`),g=[Kl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:K.tonemapping_pars_fragment,n.toneMapping===0?``:jl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,K.colorspace_pars_fragment,kl(`linearToOutputTexel`,n.outputColorSpace),Nl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ll).join(`
`)),o=Vl(o),o=Rl(o,n),o=zl(o,n),s=Vl(s),s=Rl(s,n),s=zl(s,n),o=Wl(o),s=Wl(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Sl(i,i.VERTEX_SHADER,v),x=Sl(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Ol(i,b,`vertex`),n=Ol(i,x,`fragment`);R(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):L(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new xl(i,m),w=Il(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Cl)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wl++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var eu=0,tu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new nu(e),t.set(e,n)),n}},nu=class{constructor(e){this.id=eu++,this.code=e,this.usedTimes=0}};function ru(e){return e===1030||e===37490||e===36285}function iu(e,t,n,r,i,a){let o=new Jt,s=new tu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&L(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,ee,O;if(x){let e=Ms[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),ee=e.id,O=t.id}let k=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),A=m.isInstancedMesh===!0,ne=m.isBatchedMesh===!0,j=!!i.map,re=!!i.matcap,M=!!b,ie=M&&b.isPMREMTexture===!0,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,N=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.diffuseRoughness>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=fe&&!!i.anisotropyMap,xe=pe&&!!i.clearcoatMap,Se=pe&&!!i.clearcoatNormalMap,Ce=pe&&!!i.clearcoatRoughnessMap,we=me&&!!i.diffuseRoughnessMap,Te=_e&&!!i.iridescenceMap,Ee=_e&&!!i.iridescenceThicknessMap,De=ve&&!!i.sheenColorMap,Oe=ve&&!!i.sheenRoughnessMap,ke=!!i.specularMap,Ae=!!i.specularColorMap,je=!!i.specularIntensityMap,Me=ye&&!!i.transmissionMap,Ne=ye&&!!i.thicknessMap,Pe=!!i.gradientMap,Fe=!!i.alphaMap,P=i.alphaTest>0,Ie=!!i.alphaHash,Le=!!i.extensions,Re=0;i.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Re=e.toneMapping);let F=ie?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,ze={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:O,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:ne,batchingColor:ne&&m._colorsTexture!==null,instancing:A,instancingColor:A&&m.instanceColor!==null,instancingMorph:A&&m.morphTexture!==null,outputColorSpace:k===null?e.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:j,matcap:re,envMap:M,envMapMode:M&&b.mapping,envMapPMREM:ie,envMapMaxLod:ie?F.length-1:null,envMapSize:ie?F[0].width:null,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&ru(i.normalMap.format),metalnessMap:N,roughnessMap:de,anisotropy:fe,anisotropyMap:be,clearcoat:pe,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,diffuseRoughness:me,diffuseRoughnessMap:we,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:Te,iridescenceThicknessMap:Ee,sheen:ve,sheenColorMap:De,sheenRoughnessMap:Oe,specularMap:ke,specularColorMap:Ae,specularIntensityMap:je,transmission:ye,transmissionMap:Me,thicknessMap:Ne,gradientMap:Pe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Fe,alphaTest:P,alphaHash:Ie,combine:i.combine,mapUv:j&&p(i.map.channel),aoMapUv:ae&&p(i.aoMap.channel),lightMapUv:oe&&p(i.lightMap.channel),bumpMapUv:se&&p(i.bumpMap.channel),normalMapUv:ce&&p(i.normalMap.channel),displacementMapUv:le&&p(i.displacementMap.channel),emissiveMapUv:ue&&p(i.emissiveMap.channel),metalnessMapUv:N&&p(i.metalnessMap.channel),roughnessMapUv:de&&p(i.roughnessMap.channel),anisotropyMapUv:be&&p(i.anisotropyMap.channel),clearcoatMapUv:xe&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:we&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:Te&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:De&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&p(i.sheenRoughnessMap.channel),specularMapUv:ke&&p(i.specularMap.channel),specularColorMapUv:Ae&&p(i.specularColorMap.channel),specularIntensityMapUv:je&&p(i.specularIntensityMap.channel),transmissionMapUv:Me&&p(i.transmissionMap.channel),thicknessMapUv:Ne&&p(i.thicknessMap.channel),alphaMapUv:Fe&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ce||fe),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(j||Fe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Re,decodeVideoTexture:j&&i.map.isVideoTexture===!0&&xt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&xt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Le&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Le&&i.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Ms[t];n=po.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new $l(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function au(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function ou(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function su(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function cu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||ou),r.length>1&&r.sort(t||su),i.length>1&&i.sort(t||su)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function lu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new cu,e.set(t,[i])):n>=r.length?(i=new cu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function uu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new V,color:new W};break;case`SpotLight`:n={position:new V,direction:new V,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function du(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var fu=0;function pu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function mu(e){let t=new uu,n=du(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new Lt,o=new Lt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(pu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=q.LTC_FLOAT_1,r.rectAreaLTC2=q.LTC_FLOAT_2):(r.rectAreaLTC1=q.LTC_HALF_1,r.rectAreaLTC2=q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=fu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function hu(e){let t=new mu(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function gu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new hu(e),t.set(n,[a])):r>=i.length?(a=new hu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var _u=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yu=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],bu=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],xu=new Lt,Su=new V,Cu=new V;function wu(e,t,n){let i=new yi,a=new B,s=new B,c=new Mt,l=new yo,u=new bo,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new go({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:_u,fragmentShader:vu}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new mr;y.setAttribute(`position`,new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new G(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(L(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){L(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){L(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Pt(a.x,a.y,{format:O,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Ai(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new Vs(a.x),p.map.depthTexture=new ji(a.x,m)):(p.map=new Pt(a.x,a.y),p.map.depthTexture=new Ai(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);let S=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Su.setFromMatrixPosition(d.matrixWorld),e.position.copy(Su),Cu.copy(e.position),Cu.add(yu[t]),e.up.copy(bu[t]),e.lookAt(Cu),e.updateMatrixWorld(),n.makeTranslation(-Su.x,-Su.y,-Su.z),xu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(xu,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Pt(a.x,a.y,{format:O,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),s=n.material;if(Array.isArray(s)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)E(l[e],r,a,o,s,c)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Tu(e,t){function n(){let t=!1,n=new Mt,r=null,i=new Mt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?N(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=nt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?N(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,te=null,A=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,j=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ne=j>=2):(j=parseFloat(/^WebGL (\d)/.exec(re)[1]),ne=j>=1);let M=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new Mt().fromArray(ae),ce=new Mt().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),N(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),N(e.CULL_FACE),_e(0);function N(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(de(e.BLEND),g=!1);else if(g===!1&&(N(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:R(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:R(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:R(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:R(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):N(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?N(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(N(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function xe(t){t!==O&&(ne&&e.lineWidth(t),O=t)}function Se(t,n,r){t?(N(e.POLYGON_OFFSET_FILL),(k!==n||te!==r)&&(k=n,te=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?N(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+A-1),M!==t&&(e.activeTexture(t),M=t)}function Te(t,n,r){r===void 0&&(r=M===null?e.TEXTURE0+A-1:M);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(M!==r&&(e.activeTexture(r),M=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function Ee(){let t=ie[M];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Fe(){try{e.texImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function P(){try{e.texImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Re(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function F(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function ze(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Be(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function I(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},M=null,ie={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,te=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:N,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:Oe,texImage2D:Fe,texImage3D:P,pixelStorei:Le,getParameter:Ie,updateUBOMapping:ze,uniformBlockBinding:Be,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:Me,scissor:Re,viewport:F,reset:I}}function Eu(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new B,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function D(e,t){return T?new OffscreenCanvas(e,t):Ye(`canvas`)}function ee(e,t,n){let r=1,i=I(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=D(n,a));let o=t?D(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),L(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&L(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function O(e){return e.generateMipmaps}function k(e){l.generateMipmap(e)}function te(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function A(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];L(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||L(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Ve:xt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function ne(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,L(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function j(e,t){return O(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function re(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function M(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function ie(e){oe(e.target)}function ae(e){se(e.target)}function oe(e){e.removeEventListener(`dispose`,ie),M(e),le(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function se(e){e.removeEventListener(`dispose`,ae),M(e),N(e)}function ce(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?se(t):oe(t))}C.clear(),b.clear()}function le(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&ue(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function ue(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function N(e){let t=f.get(e);t.__depthDisposeCallback&&t.__depthDisposeCallback();let n=e.depthTexture;if(n&&n.renderTarget===e&&oe(n),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let r=e.textures;for(let e=0,t=r.length;e<t;e++){let t=f.get(r[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(r[e])}f.remove(e)}let de=0;function fe(){de=0}function pe(){return de}function me(e){de=e}function he(){let e=de;return e>=p.maxTextures&&L(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),de+=1,e}function ge(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function _e(e,t){let n=f.get(e);if(e.isVideoTexture&&ze(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)L(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)L(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Oe(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function ve(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?Oe(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function ye(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?Oe(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function be(e,t){let n=f.get(e);e.version>0&&n.__version!==e.version?ke(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let xe={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},Se={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},Ce={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function we(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&L(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,xe[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,xe[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,xe[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,Se[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,Se[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,Ce[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function Te(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,ie),re(t));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=ge(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&ue(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function Ee(e,t,n){return Math.floor(Math.floor(e/n)/t)}function De(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=Ee(r.start,t.width,4),c=Ee(n.start,t.width,4);r.start<=o+1&&s===c&&Ee(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function Oe(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=Te(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=xt.getPrimaries(xt.workingColorSpace),n=t.colorSpace===``?null:xt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=ee(t.image,!1,p.maxTextureSize);e=Be(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=A(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);we(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=j(t,e);if(t.isDepthTexture)u=ne(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&De(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=Os(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=Os(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=I(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=I(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);O(t)&&t.mipmapsAutoUpdate===!0&&k(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function ke(e,t,n){if(t.image.length!==6)return;let r=Te(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=xt.getPrimaries(xt.workingColorSpace),o=t.colorSpace===``?null:xt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=ee(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Be(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=A(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=j(t,h);we(l.TEXTURE_CUBE_MAP,t);let C;if(t.isDepthTexture){if(v=ne(t.format===E,t.type),b){if(y)d.texStorage2D(l.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let e=0;e<6;e++)d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,h.width,h.height,0,g,_,null)}}else if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=I(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}O(t)&&t.mipmapsAutoUpdate===!0&&k(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Ae(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=A(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),F(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Re(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function je(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=ne(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;F(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Re(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Re(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=A(i.internalFormat,a,o,i.normalized,i.colorSpace);F(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Re(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Re(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Me(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);i.__renderTarget=t;let a=r?t.depthTexture.image[0]:t.depthTexture.image;i.__webglTexture&&a.width===t.width&&a.height===t.height||(a.width=t.width,a.height=t.height,t.depthTexture.needsUpdate=!0),r?be(t.depthTexture,0):_e(t.depthTexture,0);let o=i.__webglTexture,s=Re(t),c=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,u=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)F(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else if(t.depthTexture.format===1027)F(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ne(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)Me(t.__webglFramebuffer[n],e,n);else e.texture.mipmaps.length>0?Me(t.__webglFramebuffer[0],e,0):Me(t.__webglFramebuffer,e,0)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),je(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else if(e.texture.mipmaps.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),je(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Pe(e,t,n){let r=f.get(e);t!==void 0&&Ae(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Ne(e)}function Fe(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,ae),re(e);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&F(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=A(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Re(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),je(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),we(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)Ae(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else Ae(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);O(t)?k(l.TEXTURE_CUBE_MAP):t.mipmaps.length>0&&l.texParameteri(l.TEXTURE_CUBE_MAP,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),we(o,r),Ae(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),O(r)&&k(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),we(i,t),t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)Ae(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else Ae(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);O(t)?k(i):t.mipmaps.length>0&&l.texParameteri(i,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}e.depthBuffer&&Ne(e)}function P(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(O(r)&&r.mipmapsAutoUpdate===!0){let t=te(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),k(t),d.unbindTexture()}}}let Ie=[];function Le(e){if(e.samples>0){if(F(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.texture.mipmaps.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Ie.length=0,Ie.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&Ie.push(a),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Ie))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Re(e){return Math.min(p.maxSamples,e.samples)}function F(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function ze(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Be(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(xt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&L(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):R(`WebGLTextures: Unsupported texture color space:`,n)),t}function I(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=he,this.resetTextureUnits=fe,this.getTextureUnits=pe,this.setTextureUnits=me,this.setTexture2D=_e,this.setTexture2DArray=ve,this.setTexture3D=ye,this.setTextureCube=be,this.rebindTextures=Pe,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=F,this.dispose=ce}function Du(e,t){function n(n,r=``){let i,a=xt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Ou=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ku=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Mi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new go({vertexShader:Ou,fragmentShader:ku,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new G(new to(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ju=class extends rt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Au,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],ee=new B,O=null,k=null,te=new es;te.viewport=new Mt;let A=new es;A.viewport=new Mt;let ne=[te,A],j=new ls,re=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new pn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new pn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new pn,C[e]=t),t.getHandSpace()};function ie(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ae(){r.removeEventListener(`select`,ie),r.removeEventListener(`selectstart`,ie),r.removeEventListener(`selectend`,ie),r.removeEventListener(`squeeze`,ie),r.removeEventListener(`squeezestart`,ie),r.removeEventListener(`squeezeend`,ie),r.removeEventListener(`end`,ae),r.removeEventListener(`inputsourceschange`,oe);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}re=null,M=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,N.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(ee.width,ee.height,!1),k!==null){let e=k.camera;e.fov=k.fov,e.zoom=k.zoom,e.updateProjectionMatrix(),k=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ie),r.addEventListener(`selectstart`,ie),r.addEventListener(`selectend`,ie),r.addEventListener(`squeeze`,ie),r.addEventListener(`squeezestart`,ie),r.addEventListener(`squeezeend`,ie),r.addEventListener(`end`,ae),r.addEventListener(`inputsourceschange`,oe),b.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(ee),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Pt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new Ai(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Pt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),N.setContext(r),N.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function oe(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function se(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),j.near=A.near=te.near=t,j.far=A.far=te.far=n,(re!==j.near||M!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),re=j.near,M=j.far),j.layers.mask=e.layers.mask|6,te.layers.mask=j.layers.mask&-5,A.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;se(j,i);for(let e=0;e<a.length;e++)se(a[e],i);j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse),k===null&&e.isPerspectiveCamera&&(k={camera:e,fov:e.fov,zoom:e.zoom}),ce(e,j,i)};function ce(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ot*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(j)},this.getCameraTexture=function(e){return v[e]};let le=null;function ue(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=ne[n];o===void 0&&(o=new es,o.layers.enable(n),o.viewport=new Mt,ne[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Mi,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}le&&le(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let N=new As;N.setAnimationLoop(ue),this.setAnimationLoop=function(e){le=e},this.dispose=function(){}}},Mu=new Lt,Nu=new H;Nu.set(-1,0,0,0,1,0,0,0,1);function Pu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,fo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Mu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Nu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Fu(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?L(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):L(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Iu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Lu=null;function Ru(){return Lu===null&&(Lu=new oi(Iu,16,16,O,g),Lu.name=`DFG_LUT`,Lu.minFilter=o,Lu.magFilter=o,Lu.wrapS=t,Lu.wrapT=t,Lu.generateMipmaps=!1,Lu.needsUpdate=!0),Lu}var zu=class{constructor(e={}){let{canvas:t=Xe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([te,k,ee]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},O=null,A=null,ne=[],j=[],re=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,ie=!1,ae=null,oe=null,se=null,ce=null;this._outputColorSpace=Be;let le=0,ue=0,N=null,de=-1,fe=null,pe=new Mt,me=new Mt,he=null,ge=new W(0),_e=0,ve=t.width,ye=t.height,be=1,xe=null,Se=null,Ce=new Mt(0,0,ve,ye),we=new Mt(0,0,ve,ye),Te=!1,Ee=new yi,De=new xi,Oe=!1,ke=!1,Ae=new Lt,je=new V,Me=new Mt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return N===null?be:1}let P=n;function Ie(e,n){return t.getContext(e,n)}let Le,Re,F,ze,I,Ve,He,Ue,We,Ge,qe,Je,Ye,Ze,$e,et,nt,rt,it,at,ot,st,z;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,ut,!1),t.addEventListener(`webglcontextrestored`,dt,!1),t.addEventListener(`webglcontextcreationerror`,ft,!1),P===null){let t=`webgl2`;if(P=Ie(t,e),P===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ct()}catch(e){throw t.removeEventListener(`webglcontextlost`,ut,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),R(`WebGLRenderer: `+e.message),e}function ct(){Le=new ac(P),Le.init(),ot=new Du(P,Le),Re=new zs(P,Le,e,ot),F=new Tu(P,Le),Re.reversedDepthBuffer&&h&&F.buffers.depth.setReversed(!0),oe=P.createFramebuffer(),se=P.createFramebuffer(),ce=P.createFramebuffer(),ze=new cc(P),I=new au,Ve=new Eu(P,Le,F,I,Re,ot,ze),He=new ic(M),Ue=new js(P),st=new Ls(P,Ue),We=new oc(P,Ue,ze,st),Ge=new uc(P,We,Ue,st,ze),rt=new lc(P,Re,Ve),$e=new Bs(I),qe=new iu(M,He,Le,Re,st,$e),Je=new Pu(M,I),Ye=new lu,Ze=new gu(Le),nt=new Is(M,He,F,Ge,x,s),et=new wu(M,Ge,Re),z=new Fu(P,ze,Re,F),it=new Rs(P,Le,ze),at=new sc(P,Le,ze),ze.programs=qe.programs,M.capabilities=Re,M.extensions=Le,M.properties=I,M.renderLists=Ye,M.shadowMap=et,M.state=F,M.info=ze}S!==1009&&(re=new fc(S,t.width,t.height,o,r,i));let lt=new ju(M,P);this.xr=lt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(e){e!==void 0&&(be=e,this.setSize(ve,ye,!1))},this.getSize=function(e){return e.set(ve,ye)},this.setSize=function(e,n,r=!0){lt.isPresenting?L(`WebGLRenderer: Can't change size while VR device is presenting.`):(ve=e,ye=n,t.width=Math.floor(e*be),t.height=Math.floor(n*be),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),re!==null&&re.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ve*be,ye*be).floor()},this.setDrawingBufferSize=function(e,n,r){ve=e,ye=n,be=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)R(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){L(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}re.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(pe)},this.getViewport=function(e){return e.copy(Ce)},this.setViewport=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),F.viewport(pe.copy(Ce).multiplyScalar(Fe()).round())},this.getScissor=function(e){return e.copy(we)},this.setScissor=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),F.scissor(me.copy(we).multiplyScalar(Fe()).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(e){F.setScissorTest(Te=e)},this.setOpaqueSort=function(e){xe=e},this.setTransparentSort=function(e){Se=e},this.getClearColor=function(e){return e.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=C.has(t)}if(e){let e=N.texture.type,t=w.has(e),n=nt.getClearColor(),r=nt.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,P.clearBufferuiv(P.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,P.clearBufferiv(P.COLOR,0,E))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ae=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ut,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),nt.dispose(),Ye.dispose(),Ze.dispose(),Ve.dispose(),I.dispose(),He.dispose(),Ge.dispose(),We.dispose(),st.dispose(),z.dispose(),qe.dispose(),lt.dispose(),lt.removeEventListener(`sessionstart`,_t),lt.removeEventListener(`sessionend`,vt),yt.stop()};function ut(e){e.preventDefault(),Qe(`WebGLRenderer: Context Lost.`),ie=!0}function dt(){Qe(`WebGLRenderer: Context Restored.`),ie=!1;let e=ze.autoReset,t=et.enabled,n=et.autoUpdate,r=et.needsUpdate,i=et.type;ct(),ze.autoReset=e,et.enabled=t,et.autoUpdate=n,et.needsUpdate=r,et.type=i}function ft(e){R(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function pt(e){let t=e.target;t.removeEventListener(`dispose`,pt),B(t)}function B(e){mt(e),I.remove(e)}function mt(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){qe.releaseProgram(e)}),e.isShaderMaterial&&qe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=jt(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=We.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;st.setup(i,r,s,n,c);let h,g=it;if(c!==null&&(h=Ue.get(c),g=at,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ue.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ht(e,t,n,r){ae!==null&&e.isNodeMaterial&&ae.setObject(r,e),Oe===!0&&$e.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Dt(e,t,r),e.side=0,e.needsUpdate=!0,Dt(e,t,r),e.side=2):Dt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),ae!==null&&ae.renderStart(e,t,n),A=Ze.get(n),A.init(t),j.push(A),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),A.setupLights(),ae!==null&&ae.updateLights(A.state.lightsArray),ke=this.localClippingEnabled,Oe=$e.init(this.clippingPlanes,ke),Oe===!0&&$e.setGlobalState(this.clippingPlanes,t),ae!==null&&et.render(A.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ht(o,n,t,e),r.add(o)}else ht(i,n,t,e),r.add(i)}}),A=j.pop(),ae!==null&&ae.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let gt=null;function H(e){gt&&gt(e)}function _t(){yt.stop()}function vt(){yt.start()}let yt=new As;yt.setAnimationLoop(H),typeof self<`u`&&yt.setContext(self),this.setAnimationLoop=function(e){gt=e,lt.setAnimationLoop(e),e===null?yt.stop():yt.start()},lt.addEventListener(`sessionstart`,_t),lt.addEventListener(`sessionend`,vt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){R(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ie===!0)return;ae!==null&&ae.renderStart(e,t);let n=lt.enabled===!0&&lt.isPresenting===!0,r=re!==null&&(N===null||n)&&re.begin(M,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(re===null||re.isCompositing()===!1)&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(t),t=lt.getCamera()),e.isScene===!0&&e.onBeforeRender(M,e,t,N),A=Ze.get(e,j.length),A.init(t),A.state.textureUnits=Ve.getTextureUnits(),j.push(A),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?De.setFromArrayCamera(t):Ee.setFromProjectionMatrix(Ae,Ke,t.reversedDepth),ke=this.localClippingEnabled,Oe=$e.init(this.clippingPlanes,ke),O=Ye.get(e,ne.length),O.init(),ne.push(O),this.info.render.frame++,lt.enabled===!0&&lt.isPresenting===!0){let e=M.xr.getDepthSensingMesh();e!==null&&bt(e,t,-1/0,M.sortObjects)}bt(e,t,0,M.sortObjects),O.finish(),ae!==null&&ae.updateLights(A.state.lightsArray),M.sortObjects===!0&&O.sort(xe,Se),Pe=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Pe&&nt.addToRenderList(O,e),this.info.autoReset===!0&&this.info.reset(),Oe===!0&&$e.beginShadows();let i=A.state.shadowsArray;if(et.render(i,e,t),Oe===!0&&$e.endShadows(),(r&&re.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(A.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Ct(n,r,e,a)}Pe&&nt.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];St(O,e,n,n.viewport)}}else r.length>0&&Ct(n,r,e,t),Pe&&nt.render(e),St(O,e,t)}N!==null&&ue===0&&(Ve.updateMultisampleRenderTarget(N),Ve.updateRenderTargetMipmap(N)),r&&re.end(M),e.isScene===!0&&e.onAfterRender(M,e,t),st.resetDefaultState(),de=-1,fe=null,j.pop(),j.length>0?(A=j[j.length-1],Ve.setTextureUnits(A.state.textureUnits),Oe===!0&&$e.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,ne.pop(),O=ne.length>0?ne[ne.length-1]:null,ae!==null&&ae.renderEnd()};function bt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)A.pushLight(e),e.castShadow&&A.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?De:Ee;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let i=Ge.update(e),a=e.material;a.visible&&O.push(e,i,a,n,Me.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?De:Ee;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ge.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Me.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,Me.z,s,t)}}else a.visible&&O.push(e,i,a,n,Me.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)bt(i[e],t,n,r)}function St(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;A.setupLightsView(n),Oe===!0&&$e.setGlobalState(M.clippingPlanes,n),r&&F.viewport(pe.copy(r)),i.length>0&&wt(i,t,n),a.length>0&&wt(a,t,n),o.length>0&&wt(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Ct(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);A.state.transmissionRenderTarget[r.id]=new Pt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xt.workingColorSpace})}let a=A.state.transmissionRenderTarget[r.id],o=r.viewport||pe;a.setSize(o.z*M.transmissionResolutionScale,o.w*M.transmissionResolutionScale);let s=M.getRenderTarget(),u=M.getActiveCubeFace(),d=M.getActiveMipmapLevel();M.setRenderTarget(a),M.getClearColor(ge),_e=M.getClearAlpha(),_e<1&&M.setClearColor(16777215,.5),M.clear(),Pe&&nt.render(n);let f=M.toneMapping;M.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),A.setupLightsView(r),Oe===!0&&$e.setGlobalState(M.clippingPlanes,r),wt(e,n,r),Ve.updateMultisampleRenderTarget(a),Ve.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Tt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ve.updateMultisampleRenderTarget(a),Ve.updateRenderTargetMipmap(a))}M.setRenderTarget(s,u,d),M.setClearColor(ge,_e),p!==void 0&&(r.viewport=p),M.toneMapping=f}function wt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Tt(o,t,n,s,l,c)}}function Tt(e,t,n,r,i,a){ae!==null&&i.isNodeMaterial&&ae.setObject(e,i),e.onBeforeRender(M,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(M,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=2):M.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(M,t,n,r,i,a)}function Et(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Dt(e,t,n){t.isScene!==!0&&(t=Ne);let r=I.get(e),i=A.state.lights,a=A.state.shadowsArray,o=i.state.version,s=qe.getParameters(e,i.state,a,t,n,A.state.lightProbeGridArray),c=qe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=He.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,pt),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return At(e,s),d}else s.uniforms=qe.getUniforms(e),ae!==null&&e.isNodeMaterial&&ae.build(e,n,s),e.onBeforeCompile(s,M),d=qe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=$e.uniform),At(e,s),r.needsLights=Ft(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Et(A.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Ot(e,t,n,r,i){let a=I.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Dt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function kt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=xl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function At(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function jt(e,t,n,r,i){t.isScene!==!0&&(t=Ne),Ve.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:xt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=He.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=M.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),y=A.state.lights;if(Oe===!0&&(ke===!0||e!==fe)){let t=e===fe&&r.id===de;$e.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==$e.numPlanes||v.numIntersection!==$e.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Et(A.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?Ot(r,t,i,s,h):Dt(r,t,i),ae&&r.isNodeMaterial&&ae.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),ee=v.uniforms;if(F.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==de&&(de=r.id,w=!0),C||fe!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(P,`projectionMatrix`,e.projectionMatrix),E.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(P,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&E.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),fe!==e&&(fe=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(P,`sunShadowMap`,y.state.sunShadowMap,Ve),y.state.directionalShadowMap.length>0&&E.setValue(P,`directionalShadowMap`,y.state.directionalShadowMap,Ve),y.state.spotShadowMap.length>0&&E.setValue(P,`spotShadowMap`,y.state.spotShadowMap,Ve),y.state.pointShadowMap.length>0&&E.setValue(P,`pointShadowMap`,y.state.pointShadowMap,Ve)),i.isSkinnedMesh){E.setOptional(P,i,`bindMatrix`),E.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(P,`boneTexture`,e.boneTexture,Ve))}i.isBatchedMesh&&(E.setOptional(P,i,`batchingTexture`),E.setValue(P,`batchingTexture`,i._matricesTexture,Ve),E.setOptional(P,i,`batchingIdTexture`),E.setValue(P,`batchingIdTexture`,i._indirectTexture,Ve),E.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(P,`batchingColorTexture`,i._colorsTexture,Ve));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&rt.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(ee.envMapIntensity.value=t.environmentIntensity),ee.dfgLUT!==void 0&&(ee.dfgLUT.value=Ru()),w){if(E.setValue(P,`toneMappingExposure`,M.toneMappingExposure),v.needsLights&&Nt(ee,T),a&&r.fog===!0&&Je.refreshFogUniforms(ee,a),Je.refreshMaterialUniforms(ee,r,be,ye,A.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of A.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;ee.probesSH.value=e.textures,ee.probesMin.value=e.min,ee.probesMax.value=e.max,ee.probesResolution.value=e.resolution}xl.upload(P,kt(v),ee,Ve)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(xl.upload(P,kt(v),ee,Ve),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(P,`center`,i.center),E.setValue(P,`modelViewMatrix`,i.modelViewMatrix),E.setValue(P,`normalMatrix`,i.normalMatrix),E.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];z.update(n,S),z.bind(n,S)}}return S}function Nt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ft(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,le=t,ue=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest,F.viewport(pe),F.scissor(me),F.setScissorTest(he),de=-1;return}if(o.__webglFramebuffer===void 0)Ve.setupRenderTarget(e);else if(o.__hasExternalTextures)Ve.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ve.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ve.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest}else pe.copy(Ce).multiplyScalar(be).floor(),me.copy(we).multiplyScalar(be).floor(),he=Te;if(n!==0&&(r=oe),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(pe),F.scissor(me),F.setScissorTest(he),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}de=-1};function It(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Re.textureFormatReadable(e.format),t.__typeReadable=Re.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=It(o);if(u.__formatReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,ot.convert(c),ot.convert(l),a)}finally{let e=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=It(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,ot.convert(l),ot.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await tt(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ve.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=ot.convert(t.format),_=ot.convert(t.type),v;t.isData3DTexture?(Ve.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ve.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(Ve.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,se),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,ce);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&Ve.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ve.setTextureCube(e,0):e.isData3DTexture?Ve.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ve.setTexture2DArray(e,0):Ve.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){le=0,ue=0,N=null,F.reset(),st.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ke}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}},Bu={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Vu=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Hu=new rs(-1,1,1,-1,0,1),Uu=new class extends mr{constructor(){super(),this.setAttribute(`position`,new nr([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new nr([0,2,0,0,2,0],2))}},Wu=class{constructor(e){this._mesh=new G(Uu,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Hu)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Gu=class extends Vu{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof go?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=po.clone(e.uniforms),this.material=new go({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Wu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Ku=class extends Vu{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},qu=class extends Vu{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Ju=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new B);this._width=n.width,this._height=n.height,t=new Pt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:g}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Gu(Bu),this.copyPass.material.blending=0,this.timer=new us}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Ku!==void 0&&(r instanceof Ku?n=!0:r instanceof qu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new B);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Yu=class extends Vu{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new W}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Xu={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new W(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Zu=class e extends Vu{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new B(256,256):new B(e.x,e.y),this.clearColor=new W(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Pt(i,a,{type:g,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Pt(i,a,{type:g,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Pt(i,a,{type:g,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Xu;this.highPassUniforms=po.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new go({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new B(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=po.clone(Bu.uniforms),this.blendMaterial=new go({uniforms:this.copyUniforms,vertexShader:Bu.vertexShader,fragmentShader:Bu.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new W,this._oldClearAlpha=1,this._basic=new Kr,this._fsQuad=new Wu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new B(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new go({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new B(.5,.5)},direction:{value:new B(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new go({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Zu.BlurDirectionX=new B(1,0),Zu.BlurDirectionY=new B(0,1);var Qu={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},$u=class extends Vu{constructor(){super(),this.isOutputPass=!0,this.uniforms=po.clone(Qu.uniforms),this.material=new _o({name:Qu.name,uniforms:this.uniforms,vertexShader:Qu.vertexShader,fragmentShader:Qu.fragmentShader}),this._fsQuad=new Wu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},xt.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},ed=[{id:`valley`,name:`翠语山谷`,desc:`静谧的山谷中，一条蜿蜒小径通往水晶圣坛。适合新手指挥官。`,theme:`grass`,w:22,h:14,difficulty:1,waves:15,paths:[[[0,2],[5,2],[5,10],[11,10],[11,3],[16,3],[16,11],[21,11]]],startGold:320},{id:`lava`,name:`熔火裂谷`,desc:`两条熔岩裂隙同时涌出敌军，在中央汇合。小心分兵防守！`,theme:`lava`,w:22,h:14,difficulty:1.25,waves:15,paths:[[[0,3],[7,3],[7,7],[14,7],[14,2],[19,2],[19,10],[21,10]],[[0,11],[7,11],[7,7],[14,7],[14,2],[19,2],[19,10],[21,10]]],startGold:380},{id:`frost`,name:`霜寒冰原`,desc:`螺旋形冰原长路，敌人更加坚韧，冰霜之下潜伏着远古巨龙。`,theme:`snow`,w:22,h:14,difficulty:1.5,waves:18,paths:[[[0,7],[4,7],[4,1],[18,1],[18,12],[8,12],[8,5],[14,5],[14,8],[11,8]]],startGold:400},{id:`swamp`,name:`暮影沼泽`,desc:`腐雾弥漫的沼泽，两路敌军在中途汇流。巨魔再生、盾卫护阵，虚空领主在终焉降临。`,theme:`swamp`,w:22,h:14,difficulty:1.75,waves:20,paths:[[[0,1],[6,1],[6,6],[12,6],[12,10],[17,10],[17,4],[21,4]],[[0,12],[9,12],[9,6],[12,6],[12,10],[17,10],[17,4],[21,4]]],startGold:460}],td={slime:{icon:`🟢`,name:`果冻史莱姆`,hp:70,speed:2.2,armor:0,mres:0,gold:5,dmg:1,size:.6,color:7266394,model:`slime`},minislime:{icon:`🟢`,name:`小史莱姆`,hp:30,speed:2.8,armor:0,mres:0,gold:2,dmg:1,size:.38,color:10217578,model:`slime`},wolf:{icon:`🐺`,name:`疾风狼`,hp:55,speed:4.3,armor:0,mres:0,gold:6,dmg:1,size:.6,color:9080734,model:`wolf`},knight:{icon:`🛡️`,name:`铁甲骑士`,hp:190,speed:1.6,armor:.5,mres:0,gold:12,dmg:2,size:.7,color:10134712,model:`knight`,atk:22},bat:{icon:`🦇`,name:`暗影蝙蝠`,hp:55,speed:3.3,armor:0,mres:0,gold:7,dmg:1,size:.55,color:8015792,model:`bat`,flying:!0},shaman:{icon:`🧙`,name:`哥布林萨满`,hp:120,speed:2,armor:0,mres:.3,gold:14,dmg:1,size:.6,color:5615738,model:`shaman`,healer:!0},splitter:{icon:`🟣`,name:`分裂母体`,hp:170,speed:1.9,armor:0,mres:0,gold:8,dmg:2,size:.85,color:13658840,model:`slime`,splits:`minislime`},ghost:{icon:`👻`,name:`游荡幽魂`,hp:100,speed:2.6,armor:.65,mres:0,gold:11,dmg:1,size:.6,color:10479871,model:`ghost`,phase:!0},troll:{icon:`🧌`,name:`沼泽巨魔`,hp:280,speed:1.7,armor:.15,mres:.1,gold:15,dmg:2,size:.8,color:5933642,model:`troll`,regen:.05,atk:30},bomber:{icon:`🧨`,name:`自爆地精`,hp:85,speed:3.1,armor:0,mres:0,gold:7,dmg:2,size:.6,color:8018490,model:`bomber`,bomb:!0},shieldbearer:{icon:`🔰`,name:`圣盾卫士`,hp:230,speed:1.75,armor:.35,mres:.2,gold:16,dmg:2,size:.72,color:9083576,model:`shieldbearer`,aura:!0,atk:24},voidling:{icon:`🟪`,name:`虚空仆从`,hp:60,speed:3.3,armor:0,mres:.3,gold:2,dmg:1,size:.45,color:11561727,model:`ghost`},skeleton:{icon:`💀`,name:`骷髅兵`,hp:55,speed:2.4,armor:.2,mres:0,gold:3,dmg:1,size:.55,color:15262415,model:`skeleton`},golem:{icon:`🗿`,name:`岩石巨像`,hp:2600,speed:1,armor:.4,mres:.1,gold:150,dmg:8,size:1.6,color:10193522,model:`golem`,boss:!0,stomp:!0,atk:60},lich:{icon:`☠️`,name:`暗影巫妖`,hp:3200,speed:1.2,armor:.1,mres:.4,gold:180,dmg:10,size:1.4,color:7093200,model:`lich`,boss:!0,summoner:!0,atk:40},voidlord:{icon:`👁️`,name:`虚空领主`,hp:4200,speed:1.15,armor:.2,mres:.35,gold:230,dmg:10,size:1.5,color:9059071,model:`voidlord`,boss:!0,blink:!0,atk:55},dragon:{icon:`🐉`,name:`炽炎古龙`,hp:4800,speed:1.3,armor:.3,mres:.3,gold:250,dmg:10,size:1.8,color:14173228,model:`dragon`,boss:!0,flying:!0,breath:!0}},nd={arrow:{name:`精灵箭塔`,icon:`🏹`,desc:`高速射击单体目标，可攻击空中单位。`,air:!0,dtype:`phys`,levels:[{cost:70,dmg:15,rate:.6,range:7},{cost:80,dmg:26,rate:.5,range:7.5},{cost:150,dmg:44,rate:.38,range:8.5}]},cannon:{name:`矮人炮台`,icon:`💣`,desc:`发射炮弹造成范围伤害，无法攻击空中单位。`,air:!1,dtype:`phys`,splash:2.2,levels:[{cost:110,dmg:42,rate:1.7,range:6.5},{cost:120,dmg:70,rate:1.55,range:7},{cost:210,dmg:120,rate:1.4,range:7.5,splash:2.8}]},arcane:{name:`奥术法师塔`,icon:`🔮`,desc:`发射奥术光弹，造成无视护甲的魔法伤害。`,air:!0,dtype:`magic`,levels:[{cost:120,dmg:34,rate:1,range:7},{cost:130,dmg:58,rate:.9,range:7.5},{cost:230,dmg:100,rate:.8,range:8.5}]},frost:{name:`寒霜方尖碑`,icon:`❄️`,desc:`周期释放寒气脉冲，减速范围内所有敌人。`,air:!0,dtype:`magic`,pulse:!0,levels:[{cost:90,dmg:6,rate:1.5,range:4.5,slow:.4},{cost:100,dmg:12,rate:1.4,range:5,slow:.5},{cost:170,dmg:22,rate:1.2,range:5.8,slow:.6}]},tesla:{name:`雷霆尖塔`,icon:`⚡`,desc:`释放连锁闪电，在多个敌人间跳跃。`,air:!0,dtype:`magic`,chain:3,levels:[{cost:150,dmg:36,rate:1.4,range:6,chain:3},{cost:150,dmg:55,rate:1.3,range:6.5,chain:4},{cost:250,dmg:85,rate:1.15,range:7,chain:6}]},well:{name:`法力之泉`,icon:`💧`,desc:`不攻击，持续为你恢复法力值。`,air:!1,dtype:`none`,support:!0,levels:[{cost:100,mana:.22,range:0},{cost:120,mana:.36,range:0},{cost:180,mana:.55,range:0}]}},rd=[`arrow`,`cannon`,`arcane`,`frost`,`tesla`,`well`],id={paladin:{name:`铁卫·雷恩`,title:`圣光骑士`,icon:`🛡️`,color:16765527,hp:650,atk:30,rate:1,range:1.7,speed:4.6,melee:!0,block:3,cost:120,dtype:`phys`,desc:`坚不可摧的前排，能同时阻挡三名敌人。`,passive:{name:`神圣光环`,icon:`🌟`,desc:`附近 4 范围内的英雄与召唤物受到的伤害 -15%。`},skills:[{key:`Q`,name:`圣光斩`,icon:`⚔️`,cd:6,desc:`挥出圣光，对周围敌人造成 130 点伤害。`},{key:`E`,name:`神圣壁垒`,icon:`✨`,cd:14,desc:`为附近友军恢复 220 生命，并减伤 50% 持续 4 秒。`},{key:`R`,name:`审判之锤`,icon:`🔨`,cd:24,desc:`召唤巨锤砸向目标区域，造成 320 伤害并眩晕 2 秒。`}]},pyro:{name:`焰灵·赛拉`,title:`炎之术士`,icon:`🔥`,color:16738858,hp:320,atk:24,rate:1,range:6,speed:4.2,melee:!1,block:1,cost:140,dtype:`magic`,desc:`操纵烈焰的远程法师，擅长范围爆发。`,passive:{name:`余烬`,icon:`🔥`,desc:`普攻附带灼烧；对灼烧中的敌人伤害 +20%。`},skills:[{key:`Q`,name:`炎爆术`,icon:`☄️`,cd:5,desc:`发射火球，爆炸造成 160 范围伤害并灼烧。`},{key:`E`,name:`烈焰之环`,icon:`🔥`,cd:13,desc:`在目标处燃起火环，5 秒内每秒造成 45 伤害。`},{key:`R`,name:`陨石天降`,icon:`🌋`,cd:30,desc:`召唤 7 颗陨石轰击目标区域。`}]},ranger:{name:`风行者·琳`,title:`林地游侠`,icon:`🏹`,color:5431434,hp:360,atk:18,rate:.55,range:7.5,speed:5.6,melee:!1,block:1,cost:130,dtype:`phys`,desc:`迅捷的神射手，机动性极强。`,passive:{name:`鹰眼`,icon:`🦅`,desc:`普攻与多重射击有 20% 几率暴击，造成 250% 伤害。`},skills:[{key:`Q`,name:`多重射击`,icon:`🎯`,cd:6,desc:`向附近最多 7 名敌人各射出一支 75 伤害的箭。`},{key:`E`,name:`疾风步`,icon:`💨`,cd:8,desc:`向目标方向冲刺，并提升 100% 攻速 4 秒。`},{key:`R`,name:`箭雨`,icon:`🌧️`,cd:22,desc:`目标区域降下箭雨 4 秒，持续伤害并减速。`}]},frost:{name:`霜语·诺娃`,title:`冰霜女巫`,icon:`❄️`,color:8378623,hp:330,atk:17,rate:.9,range:6,speed:4.2,melee:!1,block:1,cost:140,dtype:`magic`,slowAtk:!0,desc:`以寒冰控制战场，攻击附带减速。`,passive:{name:`碎冰`,icon:`❄️`,desc:`对被冻结的敌人造成的伤害 +40%。`},skills:[{key:`Q`,name:`冰晶爆裂`,icon:`🧊`,cd:6,desc:`目标区域冰晶爆裂，造成 100 伤害并冻结 1.5 秒。`},{key:`E`,name:`冰霜领域`,icon:`🌀`,cd:14,desc:`生成冰霜领域 6 秒，减速 60% 并持续伤害。`},{key:`R`,name:`绝对零度`,icon:`💠`,cd:34,desc:`冻结自身周围 8 范围内所有敌人 3 秒，造成 220 伤害。`}]}},ad=[`paladin`,`pyro`,`ranger`,`frost`],J={fireball:{school:`fire`,name:`火球术`,icon:`🔥`,cost:3,rarity:`common`,target:`point`,radius:2.5,color:`#ff6a2a`,desc:`投掷火球，造成 180 点范围伤害并灼烧。`},frostnova:{school:`frost`,name:`冰霜新星`,icon:`❄️`,cost:3,rarity:`common`,target:`point`,radius:3.5,color:`#7fd8ff`,desc:`冻结范围内敌人 2.5 秒，造成 60 伤害。`},chain:{school:`storm`,name:`连锁闪电`,icon:`⚡`,cost:3,rarity:`common`,target:`point`,radius:2,color:`#a8b8ff`,desc:`闪电在 8 名敌人间跳跃，每次 110 伤害。`},meteor:{school:`fire`,name:`陨石术`,icon:`☄️`,cost:6,rarity:`rare`,target:`point`,radius:4,color:`#ff8a3a`,desc:`召唤巨型陨石，延迟后造成 700 点毁灭性伤害。`},heal:{school:`holy`,name:`治愈之光`,icon:`💚`,cost:2,rarity:`common`,target:`point`,radius:5,color:`#6cff9a`,desc:`恢复范围内英雄与召唤物 300 生命。`},golem:{school:`nature`,name:`召唤石像守卫`,icon:`🗿`,cost:5,rarity:`rare`,target:`point`,radius:1.5,color:`#c8b898`,desc:`召唤石像守卫 30 秒，阻挡并攻击敌人。`},wolves:{school:`nature`,name:`狼群召唤`,icon:`🐺`,cost:4,rarity:`common`,target:`point`,radius:2,color:`#b8c8e8`,desc:`召唤 3 只灵狼 22 秒，追击敌人。`},blizzard:{school:`frost`,name:`暴风雪`,icon:`🌨️`,cost:5,rarity:`rare`,target:`point`,radius:4.5,color:`#bfe8ff`,desc:`6 秒暴风雪，减速 50% 并每秒造成 50 伤害。`},poison:{school:`nature`,name:`剧毒之云`,icon:`☠️`,cost:3,rarity:`common`,target:`point`,radius:3.2,color:`#9cff4a`,desc:`剧毒云雾持续 8 秒，每秒造成 40 伤害。`},thunder:{school:`storm`,name:`雷霆一击`,icon:`🌩️`,cost:2,rarity:`common`,target:`point`,radius:1.2,color:`#fff27a`,desc:`对单个目标造成 320 伤害并眩晕 1 秒。`},blackhole:{school:`arcane`,name:`虚空黑洞`,icon:`🌑`,cost:6,rarity:`epic`,target:`point`,radius:5,color:`#b65cff`,desc:`生成黑洞 4 秒，吸引敌人并造成持续伤害。`},timestop:{school:`arcane`,name:`时间停滞`,icon:`⏳`,cost:7,rarity:`epic`,target:`none`,color:`#ffe9a8`,desc:`冻结全场所有敌人 3.5 秒。`},goldrush:{name:`点金术`,icon:`💰`,cost:1,rarity:`common`,target:`none`,color:`#ffd257`,desc:`立即获得 70 金币。`},wisdom:{school:`arcane`,name:`奥术智慧`,icon:`📘`,cost:0,rarity:`common`,target:`none`,color:`#7ab0ff`,desc:`获得 2 点法力并抽 1 张牌。`},drums:{name:`狂暴战鼓`,icon:`🥁`,cost:3,rarity:`rare`,target:`none`,color:`#ff7a5a`,desc:`所有防御塔攻速 +60%，持续 10 秒。`},blessing:{school:`holy`,name:`神圣祝福`,icon:`👼`,cost:3,rarity:`rare`,target:`none`,color:`#fff2a8`,desc:`所有英雄伤害 +60%，回复 150 生命，持续 10 秒。`},repair:{school:`holy`,name:`圣坛修复`,icon:`🏛️`,cost:4,rarity:`rare`,target:`none`,color:`#a8fff0`,desc:`恢复 4 点圣坛生命。`},quake:{school:`nature`,name:`大地震颤`,icon:`🌋`,cost:5,rarity:`rare`,target:`none`,color:`#d8a060`,desc:`对全场地面敌人造成 120 伤害并减速 3 秒。`},firewall:{school:`fire`,name:`烈焰风暴`,icon:`🌪️`,cost:4,rarity:`common`,target:`point`,radius:3,color:`#ff9a3a`,desc:`召唤火焰旋风 6 秒，每秒造成 70 伤害。`},icelance:{school:`frost`,name:`寒冰之枪`,icon:`🗡️`,cost:2,rarity:`common`,target:`point`,radius:1.8,color:`#9fe8ff`,desc:`冰枪贯穿目标区域，造成 200 伤害并冻结 2 秒。`},foresight:{school:`arcane`,name:`先知预言`,icon:`🔭`,cost:1,rarity:`common`,target:`none`,color:`#c8a8ff`,desc:`抽 2 张牌。`},orbital:{school:`arcane`,name:`星辰射线`,icon:`🌠`,cost:5,rarity:`epic`,target:`point`,radius:2.2,color:`#ffffff`,desc:`天降星辰光柱 3 秒，每秒造成 260 伤害。`},revive:{school:`holy`,name:`英灵归来`,icon:`🕊️`,cost:3,rarity:`rare`,target:`none`,color:`#fff8d0`,desc:`复活所有阵亡英雄，并重置全部技能冷却。`},phoenix:{school:`fire`,name:`凤凰召唤`,icon:`🦅`,cost:6,rarity:`epic`,target:`point`,radius:2,color:`#ffb03a`,desc:`召唤凤凰 18 秒，盘旋并向敌人喷射火焰。`},empower:{school:`arcane`,name:`奥术灌注`,icon:`💎`,cost:3,rarity:`rare`,target:`tower`,color:`#5cf0ff`,desc:`永久提升目标防御塔 35% 伤害。`},arcanemissile:{school:`arcane`,name:`奥术飞弹`,icon:`✴️`,cost:2,rarity:`common`,target:`point`,radius:4,color:`#e07aff`,desc:`向区域内敌人发射 6 枚追踪飞弹，每枚 70 伤害。`},inferno:{school:`fire`,name:`炼狱新星`,icon:`🌋`,cost:4,rarity:`rare`,target:`point`,radius:4.5,color:`#ff4a1a`,desc:`三圈火焰由内向外依次爆发，每圈 130 伤害并灼烧。`},glacier:{school:`frost`,name:`冰川壁垒`,icon:`🏔️`,cost:4,rarity:`rare`,target:`point`,radius:2.2,color:`#a8e8ff`,desc:`升起冰墙 5 秒，阻挡途经的地面敌人，结束时碎裂造成 220 伤害。`},tempest:{school:`storm`,name:`雷暴之云`,icon:`⛈️`,cost:5,rarity:`rare`,target:`point`,radius:4,color:`#9ab8ff`,desc:`雷云盘踞 6 秒，每 0.4 秒劈下闪电造成 120 伤害。`},static:{school:`storm`,name:`静电力场`,icon:`🔋`,cost:2,rarity:`common`,target:`point`,radius:3,color:`#c8d8ff`,desc:`电场持续 5 秒，减速 35%，每秒 45 伤害；离开时眩晕 0.6 秒。`},echo:{school:`arcane`,name:`奥术回响`,icon:`🔁`,cost:1,rarity:`rare`,target:`none`,color:`#d0a0ff`,desc:`将你上一张打出的卡牌（非回响）复制一张加入手牌。`},thorns:{school:`nature`,name:`荆棘之地`,icon:`🌿`,cost:3,rarity:`common`,target:`point`,radius:3.2,color:`#7adf5a`,desc:`荆棘蔓延 7 秒，减速 40%，每秒 45 伤害（无视相位）。`},treant:{school:`nature`,name:`古树守卫`,icon:`🌳`,cost:5,rarity:`rare`,target:`point`,radius:1.5,color:`#8ad870`,desc:`召唤古树 28 秒：阻挡 4 名敌人，攻击缠绕目标并治疗附近友军。`},smite:{school:`holy`,name:`圣光审判`,icon:`🌞`,cost:3,rarity:`common`,target:`point`,radius:2.2,color:`#fff0a0`,desc:`圣光自天而降，造成 240 伤害；对首领与幽魂伤害翻倍。`},sanctuary:{school:`holy`,name:`圣域`,icon:`⛪`,cost:4,rarity:`rare`,target:`point`,radius:4,color:`#ffe8a8`,desc:`神圣领域 8 秒：区域内友军每秒恢复 60 生命、伤害 +30%；敌人受到伤害 +20%。`},entangle:{school:`nature`,name:`藤蔓缠绕`,icon:`🪢`,cost:2,rarity:`common`,target:`point`,radius:2.8,color:`#6adf4a`,desc:`藤蔓破土而出，定身范围内地面敌人 2.5 秒并造成 80 伤害。`},bounty:{name:`赏金令`,icon:`📜`,cost:2,rarity:`rare`,target:`none`,color:`#ffc040`,desc:`15 秒内击杀敌人获得的金币翻倍。`},overclock:{school:`arcane`,name:`超载回路`,icon:`⚙️`,cost:2,rarity:`rare`,target:`tower`,color:`#5cf0ff`,desc:`目标防御塔攻击速度 +100%，持续 15 秒。`},judgment:{school:`holy`,name:`末日审判`,icon:`⚖️`,cost:6,rarity:`epic`,target:`none`,color:`#fff0a0`,desc:`圣光审判全场：每个敌人受到 150 + 10% 最大生命伤害（首领 4%），并击碎护盾。`},supernova:{school:`arcane`,name:`超新星`,icon:`💥`,cost:8,rarity:`legendary`,target:`point`,radius:5.5,color:`#ff9aff`,desc:`恒星坍缩 2 秒并吸引敌人，随后爆发造成 1100 伤害并眩晕 1.5 秒。`},armageddon:{school:`fire`,name:`天启`,icon:`🔥`,cost:8,rarity:`legendary`,target:`none`,color:`#ff7a1a`,desc:`14 颗陨石轰炸全场敌人，每颗 400 伤害并灼烧。`},apotheosis:{school:`holy`,name:`神威降临`,icon:`👑`,cost:6,rarity:`legendary`,target:`none`,color:`#ffe066`,desc:`选中英雄化身神祇 12 秒：体型变大、伤害 +100%、受伤 -60%，并立即重置技能。`},maelstrom:{school:`storm`,name:`万雷天牢`,icon:`🌀`,cost:7,rarity:`legendary`,target:`point`,radius:6,color:`#a0c0ff`,desc:`雷霆牢笼 5 秒：困住范围内敌人，连续劈下闪电，每秒 300 伤害。`}},od={common:{name:`普通`,color:`#c8d0e0`},rare:{name:`稀有`,color:`#5cb8ff`},epic:{name:`史诗`,color:`#d070ff`},legendary:{name:`传说`,color:`#ffa53a`}},sd=[`fireball`,`fireball`,`frostnova`,`chain`,`chain`,`heal`,`wolves`,`poison`,`thunder`,`thunder`,`goldrush`,`wisdom`,`firewall`,`icelance`,`meteor`,`drums`];function cd(){let e={};for(let[t,n]of Object.entries(J))e[t]=n.rarity===`common`?2:+(n.rarity===`rare`);return e}function ld(e){let t=J[e].rarity;return t===`epic`||t===`legendary`?1:2}var ud={fire:{name:`烈焰`,icon:`🔥`,color:`#ff7a3a`,tiers:[{n:3,desc:`所有灼烧伤害 +50%`},{n:6,desc:`烈焰卡牌伤害 +30%，英雄炎系技能同样受益`}]},frost:{name:`寒霜`,icon:`❄️`,color:`#7fd8ff`,tiers:[{n:3,desc:`冻结与减速持续时间 +30%`},{n:6,desc:`碎冰：被冻结的敌人受到所有伤害 +25%`}]},storm:{name:`风暴`,icon:`⚡`,color:`#a8b8ff`,tiers:[{n:3,desc:`闪电额外弹跳 +2，雷霆尖塔弹跳 +1`},{n:6,desc:`风暴卡牌伤害 +30%，眩晕时间 +0.5 秒`}]},arcane:{name:`奥术`,icon:`🔮`,color:`#d07aff`,tiers:[{n:3,desc:`法力上限 +2`},{n:6,desc:`法力恢复速度 +30%，奥术法师塔伤害 +20%`}]},nature:{name:`自然`,icon:`🌿`,color:`#7adf5a`,tiers:[{n:3,desc:`召唤物生命与攻击 +40%`},{n:6,desc:`召唤物持续时间 +50%，持续伤害区域伤害 +40%`}]},holy:{name:`圣光`,icon:`✨`,color:`#ffe8a0`,tiers:[{n:3,desc:`所有治疗效果 +50%`},{n:6,desc:`英雄伤害 +15%，阵亡复活时间减半`}]}},dd=[`fire`,`frost`,`storm`,`arcane`,`nature`,`holy`];function fd(e){let t={};for(let e of dd)t[e]=0;for(let n of e){let e=J[n]&&J[n].school;e&&t[e]++}return t}function pd(e){let t=fd(e),n={};for(let e of dd)n[e]=ud[e].tiers.filter(n=>t[e]>=n.n).length;return n}var md={manacrystal:{name:`法力水晶`,icon:`🔷`,desc:`法力上限 +2，立即获得 3 点法力。`},greedring:{name:`贪婪指环`,icon:`💍`,desc:`击杀获得的金币 +25%。`},emberheart:{name:`余烬之心`,icon:`🧡`,desc:`所有灼烧伤害翻倍。`},frostcore:{name:`永冻核心`,icon:`🧊`,desc:`冻结持续时间 +0.8 秒；寒霜方尖碑减速效果 +10%。`},stormtotem:{name:`风暴图腾`,icon:`🌩️`,desc:`雷霆尖塔弹跳 +2；所有闪电卡牌额外弹跳 3 次。`},warbanner:{name:`战争旌旗`,icon:`🚩`,desc:`所有防御塔攻击速度 +15%。`},herocrest:{name:`英雄徽记`,icon:`🎖️`,desc:`英雄伤害 +20%，获得经验 +50%。`},prophecy:{name:`预言之书`,icon:`📖`,desc:`手牌上限 +1；战斗中每 7 秒抽一张牌（原为 9 秒）。`},grail:{name:`复苏圣杯`,icon:`🏆`,desc:`英雄复活时间减半，复活时重置技能冷却。`},alchemy:{name:`炼金坩埚`,icon:`⚗️`,desc:`每波结束额外获得 30 金币与 2 点法力。`},soulreaper:{name:`灵魂镰刀`,icon:`🌙`,desc:`每击杀 15 名敌人，获得 1 点法力。`},stoneheart:{name:`磐石之心`,icon:`🪨`,desc:`圣坛生命 +6。`},echostone:{name:`回响之石`,icon:`🔔`,desc:`打出卡牌时有 20% 几率返还其法力消耗。`},spellblade:{name:`咒刃`,icon:`🗡️`,desc:`每打出一张卡牌，所有英雄技能冷却 -1.5 秒。`},blueprint:{name:`大师蓝图`,icon:`📐`,desc:`防御塔建造与升级费用 -15%。`},lens:{name:`奥术透镜`,icon:`🔍`,desc:`所有卡牌伤害 +20%。`},focus:{name:`专注法珠`,icon:`📿`,desc:`连携上限提升至 5 层，且连携窗口延长至 12 秒。`},bulwark:{name:`守护壁垒`,icon:`🛡️`,desc:`英雄与召唤物受到伤害 -20%；近战英雄额外阻挡 1 名敌人。`}},hd=Object.keys(md),gd=[4,4,3];function _d(e,t){return e===2?[0,3,6,9][t]:[0,1,2,4,6][t]}function vd(e){return 1+.3*(e-1)}function yd(e){return 1-.08*(e-1)}var bd=[[[`slime`,10,.9],[`wolf`,4,.8,8,1]],[[`slime`,10,.7],[`wolf`,6,.6,6,1]],[[`wolf`,9,.55],[`bat`,6,.8,5,1],[`slime`,8,.6,9]],[[`slime`,10,.6],[`knight`,3,1.8,4,1],[`wolf`,5,.5,9]],null,[[`knight`,4,1.5],[`shaman`,1,1,4],[`splitter`,4,1.6,8,1],[`bat`,6,.6,12]],[[`ghost`,7,.8],[`bat`,9,.5,4,1],[`wolf`,10,.4,9],[`bomber`,4,.9,12,1]],[[`splitter`,5,1.3],[`wolf`,10,.4,3,1],[`shaman`,2,3,6],[`knight`,4,1.4,10,1]],[[`knight`,5,1.2],[`shieldbearer`,2,3,3],[`troll`,3,1.6,6,1],[`bat`,8,.5,12]],null,[[`bat`,12,.45],[`ghost`,8,.7,4,1],[`splitter`,5,1.2,9],[`bomber`,6,.6,12,1]],[[`knight`,8,1],[`shaman`,3,2.5,4],[`splitter`,6,1.1,6,1],[`wolf`,10,.35,12,1]],[[`wolf`,16,.3],[`ghost`,9,.7,5,1],[`troll`,5,1.2,9],[`shieldbearer`,2,3,10],[`bat`,10,.4,14,1]],[[`splitter`,6,.9],[`knight`,7,.9,4,1],[`shaman`,3,2,6],[`ghost`,8,.6,10,1],[`bat`,8,.4,14]],null,[[`knight`,8,.8],[`ghost`,9,.55,5,1],[`shieldbearer`,3,2.2,8],[`troll`,5,1.1,10],[`bat`,10,.35,12,1],[`bomber`,8,.5,15,1]],[[`splitter`,7,.8],[`wolf`,14,.25,4,1],[`knight`,7,.8,9],[`ghost`,8,.5,13,1],[`shaman`,3,2,10,1]]];function xd(e,t){let n=[],r=e.paths.length,i=e.waves,a=n=>Math.max(1,Math.round(n*(r>1?.85:1)*(.9+.1*e.difficulty)*(1.2+Math.min(t,10)*.02))),o=(e,t,i,o=0,s=0)=>n.push({type:e,count:a(t),interval:i,delay:o,path:s%r});if(t===i)return o(`knight`,6,1.2,0,0),o(`ghost`,6,.9,3,1),o(`dragon`,1,1,8,0),o(`bat`,9,.5,12,1),o(`shaman`,2,3,8,0),o(`splitter`,4,1.2,18,1),e.id===`frost`&&o(`lich`,1,1,22,0),e.id===`swamp`&&(o(`voidlord`,1,1,20,1),o(`troll`,5,1.2,14,0)),n;if(t%5==0){let i=t/5,a=i===2?`lich`:i===3?`voidlord`:`golem`;return o(`slime`,6+t,.6,0,0),o(a,1,1,4,0),r>1&&o(`wolf`,6+i*2,.5,2,1),i>=2&&o(`knight`,3+i,1.4,8,1),i>=3&&o(`ghost`,8,.6,10,0),e.id===`swamp`&&i>=1&&o(`bomber`,4+i*2,.6,6,1),n}let s=bd[t-1];if(!s){let e=bd[15],n=bd[16];s=(t%2?e:n).map(([e,n,r,i,a])=>[e,n*(1+(t-17)*.15),r,i,a])}for(let[e,t,n,r=0,i=0]of s)o(e,t,n,r,i);return n}function Sd(e,t){return(1+.2*(t-1)+.028*(t-1)*(t-1))*e.difficulty}function Cd(e,t){let n={};for(let r of xd(e,t))n[r.type]=(n[r.type]||0)+r.count;return n}var wd=new URLSearchParams(location.search),Td=typeof matchMedia==`function`&&matchMedia(`(pointer: coarse)`).matches,Ed=wd.has(`touch`)||Td||(navigator.maxTouchPoints||0)>0,Dd=Math.min(screen.width,screen.height)<820,Od=wd.has(`mobile`)||Ed&&Dd,kd={pixelRatio:Od?1.5:2,minPixelRatio:Od?.75:1,antialias:!Od,shadowMap:Od?1024:2048,bloomDiv:Od?4:2,particles:Od?.5:1,glowMax:Od?4e3:9e3,smokeMax:Od?1e3:2500,lights:Od?3:6,maxFloats:Od?18:40,ambient:Od?.4:1};function Ad(){let e=window.innerWidth,t=window.innerHeight;return{w:e,h:t,compact:Math.min(e,t)<560||e<760,portrait:t>e}}function jd(){let e=Ad(),t=document.body.classList;return t.toggle(`touch`,Ed),t.toggle(`compact`,e.compact),t.toggle(`portrait`,e.portrait),t.toggle(`landscape`,!e.portrait),e}function Md(e=12){if(Ed&&navigator.vibrate)try{navigator.vibrate(e)}catch{}}var Nd=new Map;function Y(e,t={}){let n=e+JSON.stringify(t);if(!t.unique&&Nd.has(n))return Nd.get(n);let r=new vo({color:e,flatShading:t.flat!==!1,roughness:t.rough===void 0?.75:t.rough,metalness:t.metal||0,emissive:t.emissive===void 0?0:t.emissive,emissiveIntensity:t.ei===void 0?1:t.ei,transparent:!!t.transparent,opacity:t.opacity===void 0?1:t.opacity,depthWrite:!t.transparent});return t.unique||Nd.set(n,r),r}function Pd(e,t=2){return Y(e,{emissive:e,ei:t,rough:.4})}function X(e,t,n=0,r=0,i=0,a=!0){let o=new G(e,t);return o.position.set(n,r,i),o.castShadow=a,o.receiveShadow=!0,o}var Z={box:(e,t,n)=>new Ni(e,t,n),cyl:(e,t,n,r=8)=>new Fi(e,t,n,r),cone:(e,t,n=8)=>new Ii(e,t,n),sph:(e,t=8,n=6)=>new ao(e,t,n),ico:(e,t=0)=>new $a(e,t),oct:(e,t=0)=>new eo(e,t),dod:(e,t=0)=>new Ri(e,t),tor:(e,t,n=6,r=12,i=Math.PI*2)=>new oo(e,t,n,r,i)};function Fd(e,t,n,r,i=.08,a=16777215,o=!1){let s=o?Pd(a,3):Y(a),c=Y(1118481);for(let a of[-1,1]){let l=X(Z.sph(i,6,5),s,a*r,t,n,!1);if(e.add(l),!o){let o=X(Z.sph(i*.55,5,4),c,a*r,t,n+i*.6,!1);e.add(o)}}}function Id(e){let t=new U,n=new U;t.add(n);let r=e.size,i=Y(e.color,{unique:!0,rough:.5}),a=[i],o={};switch(e.model){case`slime`:{let t=Z.ico(.7,1);t.scale(1,.75,1);let r=new vo({color:e.color,roughness:.2,flatShading:!0,transparent:!0,opacity:.88,emissive:e.color,emissiveIntensity:.25});a[0]=r;let i=X(t,r,0,.5,0);n.add(i);let o=X(Z.ico(.25,0),Pd(16777215,.6),0,.45,0,!1);n.add(o),Fd(n,.65,.52,.22,.11);break}case`wolf`:{n.add(X(Z.box(.6,.5,1.1),i,0,.7,0));let e=new U;e.position.set(0,.95,.6),e.add(X(Z.box(.45,.4,.45),i,0,0,0)),e.add(X(Z.box(.25,.2,.35),Y(5922670),0,-.08,.3));for(let t of[-1,1])e.add(X(Z.cone(.09,.25,4),i,t*.14,.28,-.05));Fd(e,.06,.23,.12,.05,16768307,!0),n.add(e);let t=X(Z.cone(.1,.6,5),i,0,.85,-.7);t.rotation.x=-1,n.add(t),o.legs=[];for(let[e,t]of[[-.2,.35],[.2,.35],[-.2,-.35],[.2,-.35]]){let r=X(Z.box(.14,.5,.14),Y(5922670),e,.25,t);n.add(r),o.legs.push(r)}break}case`knight`:{n.add(X(Z.cyl(.35,.42,.8,8),i,0,.75,0)),n.add(X(Z.sph(.3,8,6),i,0,1.35,0)),n.add(X(Z.box(.4,.06,.1),Y(1118481),0,1.38,.26)),n.add(X(Z.cone(.06,.4,4),Y(13647936),0,1.75,0));let e=X(Z.box(.5,.65,.08),Y(3166368,{metal:.3}),-.45,.8,.15);e.rotation.y=.4,n.add(e),n.add(X(Z.box(.12,.12,.08),Y(16765527,{metal:.6}),-.47,.85,.22));let t=X(Z.box(.08,.9,.05),Y(14673648,{metal:.8,rough:.2}),.45,.95,.2);n.add(t),o.weapon=t;for(let e of[-.15,.15])n.add(X(Z.box(.16,.4,.16),Y(5922928),e,.2,0));break}case`bat`:n.add(X(Z.sph(.3,7,6),i,0,0,0));for(let e of[-1,1])n.add(X(Z.cone(.08,.25,4),i,e*.13,.3,0));Fd(n,.05,.25,.1,.06,16724804,!0),o.wings=[];for(let e of[-1,1]){let t=new U,r=new ha;r.moveTo(0,0),r.lineTo(.9,.25),r.lineTo(.75,-.1),r.lineTo(.5,0),r.lineTo(.3,-.2),r.lineTo(0,-.1);let i=new ro(r);i.rotateX(-Math.PI/2);let a=X(i,Y(3809888,{flat:!0}),0,0,0);a.material.side=2,a.scale.x=e,t.add(a),t.position.x=e*.2,n.add(t),o.wings.push(t)}break;case`shaman`:{n.add(X(Z.cone(.45,.9,7),Y(8014378),0,.45,0)),n.add(X(Z.sph(.28,8,6),i,0,1.05,0));for(let e of[-1,1]){let t=X(Z.cone(.08,.4,4),i,e*.3,1.1,0);t.rotation.z=-e*1.2,n.add(t)}Fd(n,1.1,.22,.1,.05,16772693,!0),n.add(X(Z.cyl(.03,.03,1.3,5),Y(5913114),.4,.75,.1));let e=X(Z.ico(.13,0),Pd(6750105,3),.4,1.45,.1,!1);n.add(e),o.orb=e,n.add(X(Z.cone(.32,.35,6),Y(13672544),0,1.35,0));break}case`ghost`:{let t=new vo({color:e.color,transparent:!0,opacity:.6,emissive:e.color,emissiveIntensity:.9,flatShading:!0,depthWrite:!1});a[0]=t;let r=Z.cone(.5,1.3,7,1);r.rotateX(Math.PI),n.add(X(r,t,0,.9,0,!1)),n.add(X(Z.sph(.42,8,6),t,0,1.45,0,!1)),Fd(n,1.5,.35,.14,.08,1718922,!0);for(let e of[-1,1]){let r=X(Z.cone(.1,.6,5),t,e*.5,1.2,.1,!1);r.rotation.z=e*2.2,n.add(r)}o.ghostMat=t;break}case`skeleton`:{n.add(X(Z.box(.35,.5,.2),i,0,.75,0)),n.add(X(Z.sph(.22,7,6),i,0,1.18,0)),Fd(n,1.2,.17,.08,.05,16729122,!0);for(let e of[-.1,.1])n.add(X(Z.box(.08,.5,.08),i,e,.25,0));let e=X(Z.box(.06,.6,.04),Y(8947848,{metal:.6}),.3,.85,.15);n.add(e),o.weapon=e;break}case`golem`:{let t=Y(e.color,{unique:!0});a[0]=t,n.add(X(Z.dod(.8,0),t,0,1.4,0)),n.add(X(Z.dod(.45,0),t,0,2.3,.15)),Fd(n,2.35,.5,.17,.08,16747050,!0);let r=Pd(16742938,2.5);n.add(X(Z.oct(.18),r,0,1.5,.75,!1)),o.arms=[];for(let e of[-1,1]){let r=new U;r.position.set(e*.95,1.8,0),r.add(X(Z.dod(.35),t,0,-.2,0)),r.add(X(Z.dod(.42),t,0,-.85,.1)),n.add(r),o.arms.push(r)}for(let e of[-1,1])n.add(X(Z.dod(.38),t,e*.4,.4,0));break}case`lich`:{let e=Y(2759242,{unique:!0});a[0]=e,n.add(X(Z.cone(.75,1.9,8),e,0,1.2,0)),n.add(X(Z.sph(.35,8,6),Y(14209216),0,2.35,0)),Fd(n,2.38,.28,.12,.07,11563263,!0);for(let e=0;e<5;e++){let t=X(Z.cone(.06,.35,4),Y(16765527,{metal:.7}),Math.cos(e*1.256)*.28,2.7,Math.sin(e*1.256)*.28);n.add(t)}n.add(X(Z.cyl(.04,.04,2.4,5),Y(3811882),.7,1.3,.2));let t=X(Z.ico(.22,1),Pd(10178047,4),.7,2.6,.2,!1);n.add(t),o.orb=t,o.orbiters=[];for(let e=0;e<3;e++){let e=X(Z.oct(.12),Pd(12615935,3),0,1.6,0,!1);n.add(e),o.orbiters.push(e)}break}case`troll`:{n.add(X(Z.sph(.55,8,6).scale(1,1.1,.9),i,0,1,0)),n.add(X(Z.sph(.32,8,6),i,0,1.75,.2)),n.add(X(Z.box(.36,.14,.2),Y(3824170),0,1.62,.42));for(let e of[-1,1])n.add(X(Z.cone(.05,.18,4),Y(15790288),e*.12,1.66,.5));Fd(n,1.82,.42,.12,.06,16763955,!0);for(let e of[-.25,.25])n.add(X(Z.cyl(.14,.12,.6,6),i,e,.3,0));n.add(X(Z.box(.8,.25,.6),Y(6965802),0,.6,0));let e=new U;e.position.set(.6,1.2,.2),e.add(X(Z.cyl(.07,.1,.9,5),Y(5913114),0,0,0)),e.add(X(Z.dod(.22),Y(8018490),0,.5,0)),n.add(e),o.weapon=e;break}case`bomber`:{n.add(X(Z.cyl(.22,.3,.5,7),i,0,.55,0)),n.add(X(Z.sph(.25,8,6),Y(6991946),0,1,.05));for(let e of[-1,1]){let t=X(Z.cone(.07,.3,4),Y(6991946),e*.27,1.05,0);t.rotation.z=-e*1.3,n.add(t)}Fd(n,1.04,.2,.09,.05,16724770,!0);let e=X(Z.sph(.32,9,7),Y(1710626,{metal:.4,rough:.3}),0,.8,-.38);n.add(e);let t=X(Z.sph(.08,6,5),Pd(16755234,5),0,1.15,-.38,!1);n.add(t),o.orb=t;for(let e of[-.1,.1])n.add(X(Z.box(.1,.32,.1),Y(3815978),e,.16,0));break}case`shieldbearer`:{n.add(X(Z.cyl(.38,.45,.85,8),i,0,.8,0)),n.add(X(Z.sph(.3,8,6),i,0,1.42,0)),Fd(n,1.45,.26,.1,.05,8050943,!0);let e=X(Z.cyl(.55,.55,.1,10),Y(14205040,{metal:.6,rough:.3}),0,.9,.5);e.rotation.x=Math.PI/2,n.add(e),n.add(X(Z.oct(.16),Pd(8050943,3),0,.9,.58,!1));for(let e of[-.16,.16])n.add(X(Z.box(.16,.4,.16),Y(5922928),e,.2,0));o.orb=n.children[n.children.length-3];break}case`voidlord`:{let e=Y(1708080,{unique:!0,rough:.3,metal:.4});a[0]=e,n.add(X(Z.oct(.9,0).scale(1,1.6,1),e,0,2,0)),n.add(X(Z.ico(.42,1),Pd(12602111,4),0,2,0,!1)),Fd(n,2.6,.55,.2,.08,16730864,!0);for(let t of[-1,1]){let r=X(Z.oct(.3),e,t*1.3,1.8,.2);n.add(r)}o.orbiters=[];for(let e=0;e<5;e++){let e=X(Z.oct(.22).scale(.6,1.6,.6),Pd(9059071,2.5),0,2,0,!1);n.add(e),o.orbiters.push(e)}break}case`dragon`:{let t=Y(e.color,{unique:!0,rough:.5});a[0]=t;let r=Y(15773776);n.add(X(Z.sph(.8,8,6).scale(1,.8,1.5),t,0,0,0)),n.add(X(Z.sph(.6,8,6).scale(1,.6,1.3),r,0,-.25,.1));let i=X(Z.cyl(.25,.4,1,6),t,0,.5,1.1);i.rotation.x=.8,n.add(i);let s=new U;s.position.set(0,.95,1.6),s.add(X(Z.box(.5,.4,.7),t,0,0,0)),s.add(X(Z.box(.4,.2,.5),t,0,-.1,.45));for(let e of[-1,1]){let t=X(Z.cone(.07,.5,4),Y(3351074),e*.18,.3,-.25);t.rotation.x=-.8,s.add(t)}Fd(s,.1,.3,.17,.06,16772659,!0),n.add(s),o.head=s;let c=X(Z.cone(.35,1.8,6),t,0,0,-1.7);c.rotation.x=-Math.PI/2,n.add(c),o.wings=[];for(let e of[-1,1]){let t=new U,r=new ha;r.moveTo(0,0),r.lineTo(2.4,.8),r.lineTo(2.2,-.3),r.lineTo(1.5,-.1),r.lineTo(1.1,-.7),r.lineTo(.6,-.3),r.lineTo(0,-.8);let i=new ro(r);i.rotateX(-Math.PI/2);let a=new G(i,new vo({color:9050650,side:2,flatShading:!0,emissive:4198416}));a.castShadow=!0,a.scale.x=e,t.add(a),t.position.set(e*.4,.3,.2),n.add(t),o.wings.push(t)}break}default:n.add(X(Z.box(.8,.8,.8),i,0,.4,0))}return t.scale.setScalar(r*1.2),t.userData={body:n,flash:a,parts:o},t}var Ld=[12088115,12634328,16765527];function Rd(e,t){let n=new U,r=new U,i={},a=Y(Ld[t],{metal:.7,rough:.3}),o=Y(9080730),s=Y(6975354);n.add(X(Z.cyl(.95,1.05,.35,6),s,0,.17,0)),n.add(X(Z.cyl(.98,.98,.08,6),a,0,.36,0));let c=1+t*.08;switch(e){case`arrow`:{let e=Y(9067058);for(let[r,i]of[[-.5,-.5],[.5,-.5],[-.5,.5],[.5,.5]]){let a=X(Z.box(.16,2+t*.3,.16),e,r*.9,1.3+t*.15,i*.9);n.add(a)}let o=X(Z.box(1.4,.15,1.4),Y(6965802),0,2.3+t*.3,0);n.add(o),r.position.y=2.4+t*.3;let s=[2787914,2779818,11156026][t],c=X(Z.cone(1,.8,4),Y(s),0,1.35,0);c.rotation.y=Math.PI/4,r.add(c);for(let[t,n]of[[-.55,-.55],[.55,-.55],[-.55,.55],[.55,.55]])r.add(X(Z.box(.08,.9,.08),e,t,.5,n));let l=new U;l.position.y=.4,l.add(X(Z.box(.12,.12,.9),e,0,0,0));let u=X(Z.tor(.45,.04,4,10,Math.PI),a,0,0,.3);u.rotation.x=Math.PI/2,u.rotation.z=Math.PI,l.add(u),r.add(l),i.muzzle=new dn,i.muzzle.position.set(0,.4,.6),r.add(i.muzzle),t>=2&&r.add(X(Z.oct(.15),Pd(6750105,3),0,1.9,0,!1));break}case`cannon`:{n.add(X(Z.cyl(.8,.95,1.1,8),o,0,.9,0)),n.add(X(Z.cyl(.85,.85,.15,8),a,0,1.45,0));for(let e=0;e<8;e++){let t=e/8*Math.PI*2;n.add(X(Z.box(.25,.25,.2),o,Math.cos(t)*.75,1.6,Math.sin(t)*.75))}r.position.y=1.7,r.add(X(Z.sph(.45,8,6),Y(3816004,{metal:.6,rough:.4}),0,.2,0));let e=new U;e.position.set(0,.3,0);let s=X(Z.cyl(.2+t*.04,.28+t*.04,1.2+t*.15,10),Y(2763312,{metal:.7,rough:.3}),0,0,.55);if(s.rotation.x=Math.PI/2-.15,e.add(s),e.add(X(Z.tor(.3+t*.04,.05,4,10),a,0,.08,1.05)),r.add(e),t>=1){let t=s.clone();t.position.x=.32,s.position.x=-.32,e.add(t)}i.barrel=e,i.muzzle=new dn,i.muzzle.position.set(0,.45,1.3),r.add(i.muzzle);break}case`arcane`:{n.add(X(Z.cyl(.45,.75,2.2,6),Y(5917322),0,1.45,0)),n.add(X(Z.cyl(.55,.55,.15,6),a,0,2.6,0));for(let e=0;e<3;e++){let t=e/3*Math.PI*2,r=X(Z.cone(.12,.8,4),Y(3811946),Math.cos(t)*.5,2.9,Math.sin(t)*.5);r.rotation.z=Math.cos(t)*-.3,r.rotation.x=Math.sin(t)*.3,n.add(r)}r.position.y=3.4;let e=[11560447,13660415,16740576][t],o=X(Z.oct(.4+t*.06,0),Pd(e,2.5),0,0,0,!1);o.scale.y=1.6,r.add(o),i.crystal=o,i.orbiters=[];for(let r=0;r<1+t;r++){let t=X(Z.oct(.1),Pd(e,3),0,0,0,!1);n.add(t),i.orbiters.push(t)}i.muzzle=new dn,r.add(i.muzzle),i.noRotate=!0;break}case`frost`:{let e=Y(12577023,{rough:.2,emissive:3836592,ei:.4}),a=X(Z.cyl(.25,.6,2.4,4),Y(5929626),0,1.5,0);a.rotation.y=Math.PI/4,n.add(a),r.position.y=3.2;let o=X(Z.oct(.45+t*.07,0),Pd(8378623,2.2),0,0,0,!1);o.scale.y=1.8,r.add(o),i.crystal=o;for(let r=0;r<4+t*2;r++){let i=r/(4+t*2)*Math.PI*2,a=X(Z.cone(.12,.7,4),e,Math.cos(i)*.75,.6,Math.sin(i)*.75);a.rotation.z=-Math.cos(i)*.4,a.rotation.x=Math.sin(i)*.4,n.add(a)}i.muzzle=new dn,r.add(i.muzzle),i.noRotate=!0;break}case`tesla`:{let e=Y(6975616,{metal:.8,rough:.3});n.add(X(Z.cyl(.3,.55,2.2,8),e,0,1.45,0));for(let e=0;e<3+t;e++)n.add(X(Z.tor(.42-e*.05,.06,4,12),a,0,.9+e*.45,0).rotateX(Math.PI/2));r.position.y=2.95;let o=X(Z.ico(.38+t*.05,1),Pd(10139903,2.8),0,0,0,!1);r.add(o),i.crystal=o,r.add(X(Z.tor(.55,.04,4,16),Pd(6982399,2),0,0,0,!1)),i.ring=r.children[r.children.length-1],i.muzzle=new dn,r.add(i.muzzle),i.noRotate=!0;break}case`well`:{n.add(X(Z.cyl(.85,.9,.6,10),o,0,.6,0));let e=X(Z.cyl(.7,.7,.05,16),Pd(3844351,1.5),0,.92,0,!1);n.add(e),i.water=e;for(let e=0;e<4;e++){let r=e/4*Math.PI*2+Math.PI/4;n.add(X(Z.cyl(.08,.1,1.6+t*.3,6),a,Math.cos(r)*.7,1.4+t*.15,Math.sin(r)*.7))}r.position.y=2.2+t*.3;let s=X(Z.ico(.3+t*.06,1),Pd(4901119,3),0,0,0,!1);r.add(s),i.crystal=s,i.muzzle=new dn,r.add(i.muzzle),i.noRotate=!0;break}}n.add(r),n.scale.setScalar(c);for(let e=0;e<=t;e++){let r=X(Z.oct(.09),Pd(16765527,2),(e-t/2)*.28,.45,1,!1);n.add(r)}return n.userData={head:r,parts:i},n}function zd({skin:e=1578e4,torso:t,legs:n,cape:r,hair:i}){let a=new U,o={};o.legs=[];for(let e of[-.14,.14]){let t=new U;t.position.set(e,.55,0),t.add(X(Z.box(.18,.55,.2),Y(n),0,-.27,0)),a.add(t),o.legs.push(t)}let s=X(Z.box(.5,.6,.32),Y(t),0,.85,0);a.add(s);let c=X(Z.box(.36,.36,.34),Y(e),0,1.35,0);a.add(c),o.head=c,i&&a.add(X(Z.box(.4,.14,.38),Y(i),0,1.53,-.02)),Fd(a,1.38,.17,.08,.04,2236962,!0),o.arms=[];for(let e of[-1,1]){let n=new U;n.position.set(e*.33,1.1,0),n.add(X(Z.box(.15,.5,.17),Y(t),0,-.22,0)),a.add(n),o.arms.push(n)}if(r){let e=X(Z.box(.48,.8,.05),Y(r),0,.8,-.2);e.rotation.x=.12,a.add(e)}return{g:a,parts:o}}function Bd(e){let t;switch(e){case`paladin`:{t=zd({torso:13159640,legs:7370888,cape:2773184,hair:10512938});let e=X(Z.box(.42,.2,.4),Y(16765527,{metal:.8,rough:.3}),0,1.55,0);t.g.add(e);let n=X(Z.box(.08,.6,.45),Y(2773184),-.08,-.25,.15);n.add(X(Z.box(.1,.12,.12),Y(16765527,{metal:.8}),0,0,0)),t.parts.arms[0].add(n);let r=new U;r.add(X(Z.box(.08,.9,.04),Y(15659775,{metal:.9,rough:.2}),0,-.85,.2)),r.add(X(Z.box(.3,.06,.08),Y(16765527,{metal:.8}),0,-.4,.2)),r.add(X(Z.oct(.06),Pd(16773280,2),0,-1.3,.2,!1)),t.parts.arms[1].add(r),t.g.add(X(Z.box(.62,.15,.36),Y(16765527,{metal:.7}),0,1.15,0));break}case`pyro`:{t=zd({torso:11545130,legs:5904922,cape:6950928,hair:16734762}),t.g.add(X(Z.cone(.42,.6,7),Y(11545130),0,.35,0));let e=X(Z.cone(.32,.7,7),Y(5904922),0,1.9,-.05);e.rotation.x=-.2,t.g.add(e),t.g.add(X(Z.cyl(.42,.42,.05,10),Y(5904922),0,1.58,0));let n=new U;n.add(X(Z.cyl(.035,.035,1.5,5),Y(4860442),0,-.3,.15));let r=X(Z.ico(.14,1),Pd(16742954,4),0,.5,.15,!1);n.add(r),t.parts.orb=r,t.parts.arms[1].add(n);break}case`ranger`:{t=zd({torso:2783802,legs:4864554,cape:1727018,hair:15257712});let e=X(Z.cone(.3,.45,6),Y(1727018),0,1.65,-.05);t.g.add(e);let n=new U,r=X(Z.tor(.5,.035,4,12,Math.PI),Y(9067050),0,-.3,.1);r.rotation.y=Math.PI/2,r.rotation.z=Math.PI/2,n.add(r),t.parts.arms[0].add(n),t.g.add(X(Z.cyl(.08,.08,.6,6),Y(6965802),.15,1,-.25).rotateZ(.3));break}case`frost`:{t=zd({torso:3832504,legs:2771578,cape:12577023,hair:15792383}),t.g.add(X(Z.cone(.45,.7,7),Y(3832504),0,.35,0));for(let e=0;e<5;e++){let n=X(Z.cone(.04,.22,4),Pd(10479871,2),(e-2)*.09,1.66,.05,!1);t.g.add(n)}let e=new U;e.add(X(Z.cyl(.035,.035,1.5,5),Y(14215416),0,-.3,.15));let n=X(Z.oct(.16),Pd(8378623,4),0,.55,.15,!1);n.scale.y=1.6,e.add(n),t.parts.orb=n,t.parts.arms[1].add(e);break}}let n=new U;return t.g.scale.setScalar(1.4),n.add(t.g),n.userData={body:t.g,parts:t.parts},n}function Vd(e){let t=new U,n=new U;t.add(n);let r={};if(e===`golem`){let e=Y(9083560);n.add(X(Z.dod(.7),e,0,1.2,0)),n.add(X(Z.dod(.38),e,0,2,.1)),n.add(X(Z.oct(.2),Pd(4907263,3),0,1.3,.65,!1)),Fd(n,2.05,.4,.14,.07,4907263,!0),r.arms=[];for(let t of[-1,1]){let i=new U;i.position.set(t*.85,1.6,0),i.add(X(Z.dod(.4),e,0,-.6,.1)),n.add(i),r.arms.push(i)}for(let t of[-1,1])n.add(X(Z.dod(.32),e,t*.35,.35,0))}else if(e===`wolf`){let e=new vo({color:10148095,emissive:3836671,emissiveIntensity:1.2,transparent:!0,opacity:.8,flatShading:!0});n.add(X(Z.box(.55,.45,1),e,0,.65,0,!1));let t=X(Z.box(.4,.38,.5),e,0,.9,.6,!1);n.add(t);for(let t of[-1,1])n.add(X(Z.cone(.08,.22,4),e,t*.12,1.18,.55,!1));Fd(n,.95,.86,.1,.05,16777215,!0),r.legs=[];for(let[t,i]of[[-.18,.3],[.18,.3],[-.18,-.3],[.18,-.3]]){let a=X(Z.box(.12,.45,.12),e,t,.22,i,!1);n.add(a),r.legs.push(a)}}else if(e===`treant`){let e=Y(6965802),t=Y(4892730,{emissive:2787866,ei:.4});n.add(X(Z.cyl(.45,.6,1.8,7),e,0,1,0)),n.add(X(Z.dod(.95),t,0,2.4,0)),n.add(X(Z.dod(.6),t,.55,2,.2)),n.add(X(Z.dod(.55),t,-.5,2.1,-.1)),Fd(n,1.45,.42,.16,.07,10157930,!0),r.arms=[];for(let t of[-1,1]){let i=new U;i.position.set(t*.55,1.5,0);let a=X(Z.cyl(.1,.16,1.1,5),e,t*.25,-.4,.1);a.rotation.z=t*.5,i.add(a),n.add(i),r.arms.push(i)}r.legs=[];for(let t of[-1,1]){let i=X(Z.cyl(.14,.22,.5,5),e,t*.28,.2,0);n.add(i),r.legs.push(i)}}else if(e===`phoenix`){n.add(X(Z.sph(.4,8,6).scale(1,.9,1.5),Pd(16747050,2.5),0,0,0,!1)),n.add(X(Z.cone(.15,.4,5).rotateX(Math.PI/2),Pd(16765527,3),0,.1,.75,!1)),r.wings=[];for(let e of[-1,1]){let t=new U,i=new ha;i.moveTo(0,.3),i.lineTo(1.8,.5),i.lineTo(1.4,-.1),i.lineTo(.9,-.2),i.lineTo(0,-.4);let a=new ro(i);a.rotateX(-Math.PI/2);let o=new G(a,new Kr({color:new W(16738842).multiplyScalar(2.5),side:2,transparent:!0,opacity:.9}));o.scale.x=e,t.add(o),t.position.x=e*.3,n.add(t),r.wings.push(t)}let e=X(Z.cone(.25,1.2,5).rotateX(-Math.PI/2),Pd(16730650,2.5),0,0,-.9,!1);n.add(e)}return t.userData={body:n,parts:r},t}function Hd(e,t){let n=new U;if(e===`lava`){let e=Y(2760736),r=X(Z.cyl(.08,.18,1.6,5),e,0,.8,0);r.rotation.z=(t()-.5)*.3,n.add(r);for(let r=0;r<3;r++){let i=X(Z.cyl(.03,.07,.8,4),e,0,1+r*.25,0);i.rotation.z=(r%2?1:-1)*(.7+t()*.4),i.position.x=(r%2?-1:1)*.2,n.add(i)}return n}if(e===`swamp`){let e=Y(3814184);n.add(X(Z.cyl(.1,.24,1.6,6),e,0,.8,0));let r=Y([3824186,4876858,2771514][Math.floor(t()*3)]),i=X(Z.sph(.9,7,5).scale(1,.55,1),r,0,1.75,0);n.add(i);for(let e=0;e<5;e++){let i=e*1.256+t(),a=X(Z.cyl(.03,.05,1,4),r,Math.cos(i)*.7,1.2,Math.sin(i)*.7);n.add(a)}if(t()<.6){let e=[7012288,12610303,6996223][Math.floor(t()*3)];for(let r=0;r<3;r++){let r=t()*6.28,i=.4+t()*.4;n.add(X(Z.cyl(.03,.04,.22,5),Y(14209216),Math.cos(r)*i,.11,Math.sin(r)*i,!1)),n.add(X(new ao(.11,7,4,0,Math.PI*2,0,Math.PI/2),Pd(e,1.8),Math.cos(r)*i,.2,Math.sin(r)*i,!1))}}return n.scale.setScalar(.85+t()*.5),n}let r=e===`snow`;n.add(X(Z.cyl(.12,.18,.7,5),Y(6965802),0,.35,0));let i=Y(r?2779738:[3840586,4893242,2787930][Math.floor(t()*3)]);for(let e=0;e<3;e++){let t=.9-e*.22,a=.9;n.add(X(Z.cone(t,a,6),i,0,.9+e*.5,0)),r&&n.add(X(Z.cone(t*.6,a*.45,6),Y(16054527),0,1.15+e*.5,0))}let a=.8+t()*.6;return n.scale.setScalar(a),n}function Ud(e,t){let n=e===`lava`?3813428:e===`snow`?10135736:e===`swamp`?4870216:9079424,r=new U,i=X(Z.dod(.4+t()*.4),Y(n),0,.2,0);if(i.scale.y=.6+t()*.5,i.rotation.y=t()*6,r.add(i),e===`snow`){let e=X(Z.dod(.3),Y(16054527),0,.45,0);e.scale.y=.4,r.add(e)}return r}function Wd(e,t){let n=new U,r=2+Math.floor(t()*3);for(let i=0;i<r;i++){let r=X(Z.oct(.2+t()*.2),Pd(e,1.6),(t()-.5)*.5,.3,(t()-.5)*.5,!1);r.scale.y=2+t(),r.rotation.z=(t()-.5)*.6,n.add(r)}return n}function Gd(e){let t=new U,n=[16738970,16765527,16777215,11565823];return t.add(X(Z.cyl(.02,.02,.3,3),Y(3836474),0,.15,0,!1)),t.add(X(Z.ico(.09,0),Y(n[Math.floor(e()*n.length)],{emissive:2236962}),0,.32,0,!1)),t}function Kd(){let e=new U,t=Y(14209216);e.add(X(Z.cyl(1.6,1.9,.5,8),t,0,.25,0)),e.add(X(Z.cyl(1.3,1.5,.4,8),Y(12103840),0,.7,0));for(let n=0;n<4;n++){let r=n/4*Math.PI*2+Math.PI/4,i=X(Z.cyl(.15,.2,2.2,6),t,Math.cos(r)*1.3,1.6,Math.sin(r)*1.3);e.add(i),e.add(X(Z.oct(.2),Pd(8057087,2.5),Math.cos(r)*1.3,2.85,Math.sin(r)*1.3,!1))}let n=X(Z.oct(.8,0),Pd(5955839,2.2),0,2.6,0,!1);return n.scale.y=1.7,e.add(n),e.userData.crystal=n,e}function qd(e){let t=new U,n=X(Z.tor(1.1,.15,6,20),Y(3813440),0,1.3,0);t.add(n);let r=new G(new Pi(1,24),new Kr({color:new W(e).multiplyScalar(1.6),transparent:!0,opacity:.7,side:2,depthWrite:!1}));return r.position.y=1.3,t.add(r),t.userData.inner=r,t}var Jd={grass:{sky:[6994175,14217471],fog:12115184,ground:5941322,ground2:5151296,path:13149290,pathEdge:10123850,hill:4885050,hillTop:8042586,liquid:`water`,sun:16773848,sunI:2.6,hemi:[12574975,4876858],amb:`firefly`,crystal:7008511},lava:{sky:[2755088,9058842],fog:4856340,ground:5916230,ground2:5127744,path:8018500,pathEdge:3811874,hill:2760740,hillTop:4863028,liquid:`lava`,sun:16756864,sunI:2.4,hemi:[16751210,2756624],amb:`ember`,crystal:16734762},swamp:{sky:[2767418,9085066],fog:5925466,ground:4872762,ground2:4346426,path:6969920,pathEdge:3813926,hill:3424302,hillTop:5135930,liquid:`bog`,sun:15265992,sunI:1.9,hemi:[11585696,2765860],amb:`spore`,crystal:7012288},snow:{sky:[9089240,15266047],fog:13689072,ground:12899042,ground2:11978456,path:9085114,pathEdge:6979736,hill:11057356,hillTop:14477556,liquid:`ice`,sun:15791359,sunI:1.9,hemi:[14215423,6978202],amb:`snow`,crystal:10150143}};function Yd(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Xd(e,t){let n=Math.sin(e*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)}function Zd(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=Xd(n,r),l=Xd(n+1,r),u=Xd(n,r+1),d=Xd(n+1,r+1);return c+(l-c)*o+(u-c)*s+(c-l-u+d)*o*s}var Qd=class{constructor(e,t){this.scene=e,this.map=t,this.theme=Jd[t.theme],this.group=new U,e.add(this.group),this.W=t.w,this.H=t.h,this.animated=[],this.time=0,this.build()}toWorld(e,t){return new V((e-this.W/2+.5)*2,0,(t-this.H/2+.5)*2)}toGrid(e,t){return[Math.floor(e/2+this.W/2),Math.floor(t/2+this.H/2)]}inGrid(e,t){return e>=0&&t>=0&&e<this.W&&t<this.H}build(){let{map:e,theme:t}=this,n=Yd(e.id.length*977+e.w*13);this.cells=[];for(let e=0;e<this.H;e++){this.cells.push([]);for(let t=0;t<this.W;t++)this.cells[e].push({path:!1,tower:null,deco:!1})}this.portalColor={lava:16730666,swamp:4915098}[e.theme]||10504959,this.paths=[];for(let t of e.paths){let e=[];for(let n=0;n<t.length;n++){let[r,i]=t[n];if(n>0){let[e,a]=t[n-1],o=Math.sign(r-e),s=Math.sign(i-a),c=e,l=a;for(;c!==r||l!==i;)this.inGrid(c,l)&&(this.cells[l][c].path=!0),c+=o,l+=s}this.inGrid(r,i)&&(this.cells[i][r].path=!0),e.push(this.toWorld(r,i))}let n=e[0],r=e[1],i=new V().subVectors(n,r).normalize();e.unshift(n.clone().addScaledVector(i,5));let a=this.makePolyline(e);this.paths.push(a)}let r=e.paths[0][e.paths[0].length-1];this.basePos=this.toWorld(r[0],r[1]),this.buildSky(),this.buildLights(),this.buildTerrain(n),this.buildDecor(n),this.base=Kd(),this.base.position.copy(this.basePos),this.group.add(this.base),this.portals=[];for(let e of this.paths){let t=qd(this.portalColor),n=e.points[0],r=e.points[1];t.position.copy(n).lerp(r,.25),t.lookAt(r.x,0,r.z),this.group.add(t),this.portals.push(t)}}makePolyline(e){let t=[0],n=0;for(let r=1;r<e.length;r++)n+=e[r].distanceTo(e[r-1]),t.push(n);return{points:e,lens:t,length:n,at(r,i=new V){r=Math.max(0,Math.min(n,r));let a=1;for(;a<t.length-1&&t[a]<r;)a++;let o=t[a]-t[a-1],s=o>0?(r-t[a-1])/o:0;return i.lerpVectors(e[a-1],e[a],s)},dirAt(r,i=new V){r=Math.max(0,Math.min(n-.01,r));let a=1;for(;a<t.length-1&&t[a]<r;)a++;return i.subVectors(e[a],e[a-1]).normalize()}}}buildSky(){let{theme:e}=this,t=new ao(400,32,16),n=new go({side:1,depthWrite:!1,fog:!1,uniforms:{top:{value:new W(e.sky[0])},bot:{value:new W(e.sky[1])}},vertexShader:`varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} `,fragmentShader:`varying vec3 vP; uniform vec3 top; uniform vec3 bot; void main(){ float h = normalize(vP).y; gl_FragColor = vec4(mix(bot, top, smoothstep(-0.1, 0.6, h)), 1.0);} `});this.sky=new G(t,n),this.group.add(this.sky),this.scene.fog=new yn(e.fog,60,160)}buildLights(){let{theme:e}=this,t=new Ho(e.hemi[0],e.hemi[1],1.1);this.group.add(t);let n=new as(e.sun,e.sunI);n.position.set(-18,32,14),n.castShadow=!0,n.shadow.mapSize.set(kd.shadowMap,kd.shadowMap);let r=n.shadow.camera;r.left=-30,r.right=30,r.top=24,r.bottom=-24,r.near=1,r.far=90,n.shadow.bias=-5e-4,n.shadow.normalBias=.03,this.group.add(n),this.group.add(n.target),this.sun=n}buildTerrain(e){let{theme:t}=this,n=this.W*2/2,r=this.H*2/2,i=new to(220,220,110,110);i.rotateX(-Math.PI/2);let a=i.attributes.position,o=[],s=new W(t.hill),c=new W(t.hillTop),l=new W;for(let e=0;e<a.count;e++){let i=a.getX(e),u=a.getZ(e),d=Math.max(0,Math.abs(i)-n-1.5),f=Math.max(0,Math.abs(u)-r-1.5),p=Math.sqrt(d*d+f*f),m=-.6;if(p>0){let e=Zd(i*.12,u*.12)*.6+Zd(i*.3,u*.3)*.4;m=-.6+Math.min(1,p/6)*(e*6+p*.25)-(p<4?(1-p/4)*.8*!!t.liquid:0),p<5&&(m=-.6-Math.sin(p/5*Math.PI)*1.2+p/5*e*2)}a.setY(e,m),l.copy(s).lerp(c,Math.max(0,Math.min(1,(m-0)/6))),l.offsetHSL(0,0,(Xd(i,u)-.5)*.05),o.push(l.r,l.g,l.b)}i.setAttribute(`color`,new nr(o,3)),i.computeVertexNormals();let u=new G(i,new vo({vertexColors:!0,flatShading:!0,roughness:.95}));u.receiveShadow=!0,this.group.add(u),this.buildLiquid(n,r);let d=new Ni(1.92,.5,1.92);d.translate(0,-.25,0);let f=new Ni(2,.5,2);f.translate(0,-.3,0);let p=0,m=0;for(let e=0;e<this.H;e++)for(let t=0;t<this.W;t++)this.cells[e][t].path?m++:p++;let h=new hi(d,new vo({flatShading:!0,roughness:.9}),p),g=new hi(f,new vo({flatShading:!0,roughness:1}),m+8);h.receiveShadow=!0,g.receiveShadow=!0;let _=new Lt,v=new W,y=0,b=0;for(let n=0;n<this.H;n++)for(let r=0;r<this.W;r++){let i=this.toWorld(r,n);this.cells[n][r].path?(_.makeTranslation(i.x,0,i.z),g.setMatrixAt(b,_),v.set(t.path).offsetHSL(0,0,(e()-.5)*.04),g.setColorAt(b++,v)):(_.makeTranslation(i.x,(e()-.5)*.04,i.z),h.setMatrixAt(y,_),v.set((r+n)%2?t.ground:t.ground2).offsetHSL(0,0,(e()-.5)*.04),h.setColorAt(y++,v))}for(let e of this.paths){let n=e.points[0],r=e.points[1];for(let e=0;e<3;e++){let i=new V().lerpVectors(r,n,(e+1)/3);_.makeTranslation(i.x,0,i.z),b<m+8&&(g.setMatrixAt(b,_),g.setColorAt(b++,v.set(t.path)))}}g.count=b,this.group.add(h,g);let x=new Ri(.16,0),S=Y(t.pathEdge),C=[];for(let t=0;t<this.H;t++)for(let n=0;n<this.W;n++){if(!this.cells[t][n].path)continue;let r=this.toWorld(n,t);for(let[i,a]of[[1,0],[-1,0],[0,1],[0,-1]]){let o=n+i,s=t+a;if(this.inGrid(o,s)&&!this.cells[s][o].path)for(let t=0;t<3;t++){let n=(t-1)*.6+(e()-.5)*.2;C.push([r.x+i*.95+(a===0?0:n),r.z+a*.95+(i===0?0:n)])}}}let w=new hi(x,S,C.length);C.forEach(([t,n],r)=>{_.compose(new V(t,-.05,n),new mt().setFromEuler(new qt(e()*3,e()*3,0)),new V(1,.6,1)),w.setMatrixAt(r,_)}),w.castShadow=!0,this.group.add(w);let T=new to(1.9,1.9);T.rotateX(-Math.PI/2),this.hover=new G(T,new Kr({color:6750088,transparent:!0,opacity:.35,depthWrite:!1})),this.hover.position.y=.03,this.hover.visible=!1,this.group.add(this.hover)}buildLiquid(e,t){let n=this.theme.liquid,r=new to(220,220,1,1);r.rotateX(-Math.PI/2);let i={water:[1731240,7000319],lava:[16726538,16760896],ice:[9091288,14742783],bog:[1718826,5937770]}[n],a=new go({uniforms:{uTime:{value:0},c1:{value:new W(i[0])},c2:{value:new W(i[1])},uKind:{value:n===`lava`?1:n===`ice`?2:0},fogColor:{value:new W(this.theme.fog)}},vertexShader:`varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`
        varying vec3 vW; uniform float uTime; uniform vec3 c1; uniform vec3 c2; uniform float uKind; uniform vec3 fogColor;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
        float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
          return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y); }
        float fbm(vec2 p){ float v=0.0, a=0.5; for(int i=0;i<4;i++){ v+=a*noise(p); p*=2.03; a*=0.5;} return v; }
        void main(){
          vec2 p = vW.xz * 0.15;
          vec3 col;
          if (uKind > 0.5 && uKind < 1.5) {
            float n = fbm(p * 1.5 + vec2(uTime * 0.05, uTime * 0.03));
            float n2 = fbm(p * 3.0 - vec2(uTime * 0.08, 0.0) + n);
            float cracks = smoothstep(0.45, 0.55, n2);
            col = mix(c1 * 1.2, c2 * 2.5, cracks) * (0.7 + 0.6 * n);
            col = mix(vec3(0.15,0.03,0.02), col, smoothstep(0.3, 0.6, n2 + 0.1));
          } else if (uKind > 1.5) {
            float n = fbm(p * 2.0);
            col = mix(c1, c2, n);
            col += pow(noise(p * 20.0), 20.0) * 2.0;
          } else {
            float n = fbm(p * 2.0 + vec2(uTime * 0.04, uTime * 0.02));
            float n2 = fbm(p * 4.0 - vec2(uTime * 0.05, -uTime * 0.03));
            col = mix(c1, c2, n * 0.6);
            col += smoothstep(0.62, 0.7, n2) * 0.6;
          }
          float d = length(vW.xz);
          float f = smoothstep(70.0, 150.0, d);
          gl_FragColor = vec4(mix(col, fogColor, f), 1.0);
        }`}),o=new G(r,a);if(o.position.y=n===`ice`?-.9:-1.1,this.group.add(o),this.liquid=a,n===`lava`){let e=new ns(16734746,30,40,1.5);e.position.set(0,-.5,t+4),this.group.add(e);let n=e.clone();n.position.set(0,-.5,-t-4),this.group.add(n)}}buildDecor(e){let{theme:t,map:n}=this,r=this.W*2/2,i=this.H*2/2,a=(t,n,r,i=0)=>{t.position.set(n,i,r),t.rotation.y=e()*Math.PI*2,t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),this.group.add(t)};for(let o=0;o<140;o++){let o=e()*Math.PI*2,s=6+e()*26,c=Math.cos(o)*(r+s),l=Math.sin(o)*(i+s),u=Math.max(0,Math.abs(c)-r-1.5),d=Math.max(0,Math.abs(l)-i-1.5),f=Math.sqrt(u*u+d*d);if(f<5.5)continue;let p=Zd(c*.12,l*.12)*.6+Zd(c*.3,l*.3)*.4,m=-.6+Math.min(1,f/6)*(p*6+f*.25),h=e();h<.6?a(Hd(t===Jd.lava?`lava`:n.theme,e),c,l,m-.1):a(h<.85?Ud(n.theme,e):Wd(t.crystal,e),c,l,m)}let o=0;for(let r=0;r<200&&o<10;r++){let r=Math.floor(e()*this.W),i=Math.floor(e()*this.H),s=this.cells[i][r];if(s.path||s.deco)continue;let c=!1;for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++)this.inGrid(r+t,i+e)&&this.cells[i+e][r+t].path&&(c=!0);if(c&&e()<.7)continue;s.deco=!0;let l=this.toWorld(r,i),u=e();a(u<.5?Hd(n.theme,e):u<.8?Ud(n.theme,e):Wd(t.crystal,e),l.x,l.z),o++}if(n.theme===`grass`)for(let t=0;t<80;t++){let t=Math.floor(e()*this.W),n=Math.floor(e()*this.H);if(this.cells[n][t].path)continue;let r=this.toWorld(t,n),i=Gd(e);i.position.set(r.x+(e()-.5)*1.6,0,r.z+(e()-.5)*1.6),this.group.add(i)}}canBuild(e,t){if(!this.inGrid(e,t))return!1;let n=this.cells[t][e];return!n.path&&!n.tower&&!n.deco}update(e){if(this.time+=e,this.liquid&&(this.liquid.uniforms.uTime.value=this.time),this.base){let t=this.base.userData.crystal;t.rotation.y+=e*.8,t.position.y=2.6+Math.sin(this.time*2)*.15}for(let e of this.portals)e.userData.inner.material.opacity=.55+Math.sin(this.time*4)*.2}dispose(){this.scene.remove(this.group),this.group.traverse(e=>{e.geometry&&e.geometry.dispose()}),this.scene.fog=null}},Q=(e,t)=>e+Math.random()*(t-e),$d=class{constructor(e,t,n){this.max=t,this.count=0,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.size=new Float32Array(t),this.alpha=new Float32Array(t),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.grav=new Float32Array(t),this.drag=new Float32Array(t),this.s0=new Float32Array(t),this.s1=new Float32Array(t),this.c0=new Float32Array(t*3),this.c1=new Float32Array(t*3),this.a0=new Float32Array(t);let r=new mr;this.aPos=new $n(this.pos,3).setUsage(Ge),this.aCol=new $n(this.col,3).setUsage(Ge),this.aSize=new $n(this.size,1).setUsage(Ge),this.aAlpha=new $n(this.alpha,1).setUsage(Ge),r.setAttribute(`position`,this.aPos),r.setAttribute(`color`,this.aCol),r.setAttribute(`size`,this.aSize),r.setAttribute(`alpha`,this.aAlpha),r.setDrawRange(0,0),this.geo=r,this.mat=new go({uniforms:{uScale:{value:400}},vertexShader:`
        attribute float size; attribute float alpha; attribute vec3 color;
        varying vec3 vCol; varying float vA;
        uniform float uScale;
        void main(){
          vCol = color; vA = alpha;
          vec4 mv = modelViewMatrix * vec4(position,1.0);
          gl_PointSize = size * uScale / -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:n?`
        varying vec3 vCol; varying float vA;
        void main(){
          vec2 p = gl_PointCoord - 0.5;
          float d = length(p) * 2.0;
          float a = pow(max(0.0, 1.0 - d), 1.8);
          float core = pow(max(0.0, 1.0 - d * 2.2), 2.0);
          gl_FragColor = vec4(vCol * a * vA + vec3(core) * vA * 0.6, 1.0);
        }`:`
        varying vec3 vCol; varying float vA;
        void main(){
          vec2 p = gl_PointCoord - 0.5;
          float d = length(p) * 2.0;
          float a = smoothstep(1.0, 0.3, d) * vA;
          if (a < 0.01) discard;
          gl_FragColor = vec4(vCol, a);
        }`,transparent:!0,depthWrite:!1,blending:n?2:1}),this.points=new Di(r,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=n?10:9,e.add(this.points)}emit(e){if(this.count>=this.max)return;let t=this.count++,n=t*3;this.pos[n]=e.x,this.pos[n+1]=e.y,this.pos[n+2]=e.z,this.vel[n]=e.vx||0,this.vel[n+1]=e.vy||0,this.vel[n+2]=e.vz||0,this.life[t]=0,this.maxLife[t]=e.life||1,this.grav[t]=e.gravity||0,this.drag[t]=e.drag||0,this.s0[t]=e.size||1,this.s1[t]=e.sizeEnd===void 0?0:e.sizeEnd;let r=e.color,i=e.color2||e.color;this.c0[n]=r.r,this.c0[n+1]=r.g,this.c0[n+2]=r.b,this.c1[n]=i.r,this.c1[n+1]=i.g,this.c1[n+2]=i.b,this.a0[t]=e.alpha===void 0?1:e.alpha,this.size[t]=this.s0[t],this.alpha[t]=this.a0[t],this.col[n]=r.r,this.col[n+1]=r.g,this.col[n+2]=r.b}update(e){let t=0;for(;t<this.count;){if(this.life[t]+=e,this.life[t]>=this.maxLife[t]){this.kill(t);continue}let n=t*3,r=this.life[t]/this.maxLife[t],i=Math.max(0,1-this.drag[t]*e);this.vel[n]*=i,this.vel[n+1]*=i,this.vel[n+2]*=i,this.vel[n+1]-=this.grav[t]*e,this.pos[n]+=this.vel[n]*e,this.pos[n+1]+=this.vel[n+1]*e,this.pos[n+2]+=this.vel[n+2]*e,this.pos[n+1]<.02&&this.grav[t]>0&&(this.pos[n+1]=.02,this.vel[n+1]*=-.3,this.vel[n]*=.6,this.vel[n+2]*=.6),this.size[t]=this.s0[t]+(this.s1[t]-this.s0[t])*r,this.alpha[t]=this.a0[t]*(r<.1?r/.1:1-(r-.1)/.9),this.col[n]=this.c0[n]+(this.c1[n]-this.c0[n])*r,this.col[n+1]=this.c0[n+1]+(this.c1[n+1]-this.c0[n+1])*r,this.col[n+2]=this.c0[n+2]+(this.c1[n+2]-this.c0[n+2])*r,t++}this.geo.setDrawRange(0,this.count),this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aSize.needsUpdate=!0,this.aAlpha.needsUpdate=!0}kill(e){let t=--this.count;if(e===t)return;let n=e*3,r=t*3;for(let e=0;e<3;e++)this.pos[n+e]=this.pos[r+e],this.vel[n+e]=this.vel[r+e],this.col[n+e]=this.col[r+e],this.c0[n+e]=this.c0[r+e],this.c1[n+e]=this.c1[r+e];this.life[e]=this.life[t],this.maxLife[e]=this.maxLife[t],this.grav[e]=this.grav[t],this.drag[e]=this.drag[t],this.s0[e]=this.s0[t],this.s1[e]=this.s1[t],this.a0[e]=this.a0[t],this.size[e]=this.size[t],this.alpha[e]=this.alpha[t]}clear(){this.count=0,this.geo.setDrawRange(0,0)}},ef=new ao(1,24,16),tf=new to(1,1);tf.rotateX(-Math.PI/2);function nf(e,t=0){return new go({uniforms:{uColor:{value:new W(e)},uP:{value:0},uA:{value:1},uKind:{value:t},uTime:{value:0}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);} `,fragmentShader:`
      varying vec2 vUv; uniform vec3 uColor; uniform float uP; uniform float uA; uniform float uKind; uniform float uTime;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
        return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y); }
      void main(){
        vec2 c = vUv - 0.5;
        float r = length(c) * 2.0;
        float a = 0.0;
        if (uKind < 0.5) {
          // 冲击波环
          float w = 0.12 + 0.1 * (1.0 - uP);
          a = smoothstep(w, 0.0, abs(r - uP)) * (1.0 - uP);
          a += smoothstep(uP, 0.0, r) * 0.15 * (1.0 - uP);
        } else if (uKind < 1.5) {
          // 区域法阵 (持续效果)：外环 + 符文带 + 旋转刻度 + 流动噪声
          float ang = atan(c.y, c.x);
          float edge = smoothstep(1.0, 0.95, r) * smoothstep(0.88, 0.94, r);
          float edgePulse = 0.8 + 0.4 * sin(uTime * 4.0);
          float band = smoothstep(0.74, 0.76, r) * smoothstep(0.86, 0.84, r);
          float glyph = step(0.55, fract((ang + uTime * 0.6) * 3.8197)) * step(0.3, noise(vec2(floor((ang + uTime * 0.6) * 3.8197 * 2.0), 3.0)));
          float rune = band * (0.35 + 0.65 * glyph);
          float ticks = smoothstep(0.62, 0.64, r) * smoothstep(0.7, 0.68, r) * step(0.7, fract((ang - uTime * 0.9) * 7.639));
          float n = noise(vec2(ang * 3.0 + uTime * 0.4, r * 5.0 - uTime * 1.8));
          float n2 = noise(c * 6.0 + uTime * 0.7);
          float fill = smoothstep(1.0, 0.0, r) * 0.22 * (0.5 + 0.8 * n * n2);
          float core = smoothstep(0.2, 0.0, r) * 0.25;
          a = (edge * 1.3 * edgePulse + rune * 0.9 + ticks * 0.8 + fill + core) * step(r, 1.0);
        } else if (uKind > 3.5) {
          // 魔法印记：双环 + 六芒星 + 旋转符文
          float ang = atan(c.y, c.x) + uTime;
          float ring1 = smoothstep(0.035, 0.0, abs(r - 0.95));
          float ring2 = smoothstep(0.025, 0.0, abs(r - 0.78));
          float ring3 = smoothstep(0.02, 0.0, abs(r - 0.42));
          // 六芒星：两个旋转三角形的边
          float star = 0.0;
          for (int k = 0; k < 2; k++) {
            float off = float(k) * 3.14159 / 3.0 - uTime * 0.7;
            for (int j = 0; j < 3; j++) {
              float th = off + float(j) * 2.0944;
              vec2 nrm = vec2(cos(th), sin(th));
              star += smoothstep(0.02, 0.0, abs(dot(c * 2.0, nrm) - 0.39)) * step(r, 0.79);
            }
          }
          float runes = smoothstep(0.8, 0.82, r) * smoothstep(0.93, 0.91, r) * step(0.5, fract(ang * 2.546)) * (0.5 + 0.5 * sin(ang * 24.0));
          float glow = smoothstep(1.0, 0.0, r) * 0.15;
          a = (ring1 * 1.4 + ring2 + ring3 * 0.8 + min(star, 1.0) * 0.9 + runes * 0.8 + glow) * (0.85 + 0.15 * sin(uTime * 10.0));
        } else if (uKind < 2.5) {
          // 焦痕
          float n = noise(c * 8.0) * 0.5 + noise(c * 20.0) * 0.5;
          a = smoothstep(1.0, 0.2, r + n * 0.4) * 0.8;
        } else {
          // 黑洞
          float ang = atan(c.y, c.x);
          float sw = sin(ang * 3.0 + r * 14.0 - uTime * 8.0) * 0.5 + 0.5;
          a = smoothstep(1.0, 0.3, r) * sw * 0.9 + smoothstep(0.25, 0.15, r) * 2.0;
        }
        if (uKind > 1.5 && uKind < 2.5) gl_FragColor = vec4(uColor, a * uA);
        else if (uKind > 3.5) gl_FragColor = vec4(uColor * a * uA * 1.6 + vec3(a * a * 0.25 * uA), a * uA);
        else if (uKind > 2.5) gl_FragColor = vec4(mix(uColor * a, vec3(0.0), smoothstep(0.22,0.12,r)), a * uA);
        else gl_FragColor = vec4(uColor * a * uA, a * uA);
      }`,transparent:!0,depthWrite:!1,blending:t===2?1:2})}var rf=class{constructor(e,t){this.scene=e,this.camera=t,this.glow=new $d(e,kd.glowMax,!0),this.smoke=new $d(e,kd.smokeMax,!1),this.items=[],this.shakeAmt=0,this.shakeOffset=new V,this.time=0,this.lights=[];for(let t=0;t<kd.lights;t++){let t=new ns(16777215,0,10,2);t.userData.life=0,e.add(t),this.lights.push(t)}this.flashEl=document.getElementById(`screen-flash`),this.tmpC=new W,this.tmpC2=new W}setScale(e,t){let n=e/(2*Math.tan(t*Math.PI/360));this.glow.mat.uniforms.uScale.value=n*.35,this.smoke.mat.uniforms.uScale.value=n*.35}col(e,t=1){let n=new W(e);return n.r*=t,n.g*=t,n.b*=t,n}burst(e,t){let n=t.count||20,r=kd.particles>=1?n:Math.max(1,Math.round(n*kd.particles+Math.random()-.5)),i=t.smoke?this.smoke:this.glow,a=t.color instanceof W?t.color:this.col(t.color,t.intensity||1),o=t.color2===void 0?a:t.color2 instanceof W?t.color2:this.col(t.color2,t.intensity2||1);for(let n=0;n<r;n++){let n=t.speed===void 0?5:t.speed,r,s,c;if(t.dir)r=t.dir.x*n+Q(-1,1)*(t.spread||1),s=t.dir.y*n+Q(-1,1)*(t.spread||1),c=t.dir.z*n+Q(-1,1)*(t.spread||1);else{let e=Math.random()*Math.PI*2,i=t.flat?Q(-.15,.15):Math.acos(Q(-1,1)),a=n*Q(.3,1);r=Math.sin(i)*Math.cos(e)*a,c=Math.sin(i)*Math.sin(e)*a,s=t.flat?Q(0,.5):Math.cos(i)*a,t.flat&&(r=Math.cos(e)*a,c=Math.sin(e)*a),t.up&&(s=Math.abs(s)+t.up)}let l=t.radius||0,u=l?Q(-l,l):0,d=l?Q(-l,l):0;i.emit({x:e.x+u,y:e.y+(t.ry?Q(0,t.ry):0),z:e.z+d,vx:r,vy:s,vz:c,life:Q(t.life?t.life*.6:.4,t.life||.8),gravity:t.gravity||0,drag:t.drag===void 0?2:t.drag,size:Q(.7,1.2)*(t.size||1),sizeEnd:t.sizeEnd===void 0?0:t.sizeEnd*Q(.7,1.2),color:a,color2:o,alpha:t.alpha===void 0?1:t.alpha})}}trail(e,t,n=.8,r=.4,i=.05,a=1.5){kd.particles<1&&Math.random()>kd.particles+.2||(this.tmpC.set(t).multiplyScalar(a),this.glow.emit({x:e.x+Q(-i,i),y:e.y+Q(-i,i),z:e.z+Q(-i,i),vx:Q(-.3,.3),vy:Q(0,.6),vz:Q(-.3,.3),life:r,size:n,sizeEnd:0,color:this.tmpC.clone(),drag:1}))}explosion(e,t=16742954,n=1,r={}){let i=n;this.burst(e,{count:Math.floor(40*i),color:16777215,color2:t,intensity:3,intensity2:2,speed:9*Math.sqrt(i),life:.5,size:1.6*i,sizeEnd:.2,drag:4}),this.burst(e,{count:Math.floor(30*i),color:t,color2:3346688,intensity:2.5,speed:5*Math.sqrt(i),life:.9,size:2.2*i,sizeEnd:.5,drag:3,up:1}),this.burst(e,{count:Math.floor(25*i),color:2236962,color2:5592405,smoke:!0,speed:2.5*Math.sqrt(i),life:1.6,size:2.5*i,sizeEnd:4*i,drag:2,up:1.5,alpha:.55}),this.burst(e,{count:Math.floor(16*i),color:16765056,intensity:3,speed:12,life:1,size:.35,sizeEnd:.1,gravity:14,drag:.5,up:4}),this.flashSphere(e,t,1.6*i,.35+.1*i),this.ring(e,t,4*i,.45),this.ring(e,16777215,2.2*i,.25),this.light(e,t,6*i,8*i,.35),r.noDecal||this.scorch(e,2.2*i)}ring(e,t,n,r=.5,i=0){let a=nf(t,i),o=new G(tf,a);o.position.set(e.x,(e.y||0)+.08,e.z),o.scale.setScalar(n*2),o.renderOrder=8,this.scene.add(o);let s=0;this.items.push({update:e=>(s+=e,a.uniforms.uP.value=Math.min(1,s/r),s<r),dispose:()=>{this.scene.remove(o),a.dispose()}})}circle(e,t,n,r=1){let i=nf(t,r),a=new G(tf,i);a.position.set(e.x,.1,e.z),a.scale.setScalar(n*2),a.renderOrder=7,this.scene.add(a);let o={mesh:a,mat:i,alpha:0,target:1,dead:!1,kill(){this.target=0}};return this.items.push({update:e=>(i.uniforms.uTime.value+=e,o.alpha+=(o.target-o.alpha)*Math.min(1,e*6),i.uniforms.uA.value=o.alpha,r===3&&(a.rotation.y+=e*2),!(o.target===0&&o.alpha<.02)),dispose:()=>{this.scene.remove(a),i.dispose()}}),o}scorch(e,t){let n=nf(1116164,2),r=new G(tf,n);r.position.set(e.x,.05+Math.random()*.01,e.z),r.rotation.y=Math.random()*6,r.scale.setScalar(t*2),r.renderOrder=1,this.scene.add(r);let i=0;this.items.push({update:e=>(i+=e,n.uniforms.uA.value=i<6?1:Math.max(0,1-(i-6)/3),i<9),dispose:()=>{this.scene.remove(r),n.dispose()}})}sigil(e,t,n=2,r=1,i={}){let a=nf(t,4),o=new G(tf,a);o.position.set(e.x,(i.y||0)+.11,e.z),o.renderOrder=8,this.scene.add(o);let s=i.spin||2,c=0;this.items.push({update:e=>{c+=e;let t=c/r,i=1-(1-Math.min(1,c/.18))**3;return o.scale.setScalar(n*2*(.4+.6*i)*(1+t*.08)),a.uniforms.uTime.value=c*s*.5,a.uniforms.uA.value=(t>.7?Math.max(0,(1-t)/.3):1)*i,c<r},dispose:()=>{this.scene.remove(o),a.dispose()}}),i.light!==!1&&this.light(e,t,2.5,n*3,Math.min(.5,r))}flashSphere(e,t,n=1.5,r=.4){let i=new go({uniforms:{uColor:{value:this.col(t,2.5)},uA:{value:1}},vertexShader:`varying vec3 vN; varying vec3 vV; void main(){ vec4 wp = modelMatrix*vec4(position,1.0); vN = normalize(mat3(modelMatrix)*normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix*viewMatrix*wp; }`,fragmentShader:`varying vec3 vN; varying vec3 vV; uniform vec3 uColor; uniform float uA;
        void main(){ float f = abs(dot(vN, vV)); float rim = pow(1.0 - f, 2.0); float core = pow(f, 3.0);
          vec3 c = uColor * (rim * 1.2 + 0.3) + vec3(1.0, 0.95, 0.85) * core * 1.5;
          gl_FragColor = vec4(c * uA, uA); }`,transparent:!0,depthWrite:!1,blending:2}),a=new G(ef,i);a.position.set(e.x,(e.y||0)+n*.3,e.z),a.renderOrder=11,this.scene.add(a);let o=0;this.items.push({update:e=>{o+=e;let t=Math.min(1,o/r);return a.scale.setScalar(n*(.3+.7*(1-(1-t)**3))),i.uniforms.uA.value=(1-t)**1.5,o<r},dispose:()=>{this.scene.remove(a),i.dispose()}})}vortex(e,t,n=3,r=6,i={}){let a=this.col(t,i.intensity||2.5),o=i.color2===void 0?a:this.col(i.color2,1.5);for(let t=0;t<r;t++){let t=Math.random()*Math.PI*2,r=n*Q(.7,1.1),s=e.x+Math.cos(t)*r,c=e.z+Math.sin(t)*r,l=i.swirl===void 0?4:i.swirl,u=i.inward===void 0?1.6:i.inward;this.glow.emit({x:s,y:(e.y||0)+Q(.1,i.h||1.5),z:c,vx:(e.x-s)*u-Math.sin(t)*l,vy:i.vy||.5,vz:(e.z-c)*u+Math.cos(t)*l,life:i.life||.6,size:i.size||.5,sizeEnd:.05,color:a,color2:o,drag:0})}}light(e,t,n=5,r=8,i=.3){let a=this.lights.find(e=>e.userData.life<=0);a||=this.lights.reduce((e,t)=>e.userData.life<t.userData.life?e:t),a.color.set(t),a.position.set(e.x,(e.y||0)+1.5,e.z),a.distance=r,a.userData.life=i,a.userData.max=i,a.userData.int=n*4,a.intensity=a.userData.int}lightning(e,t,n=11189247,r=.18,i=.25,a=!0){let o=Math.max(4,Math.floor(e.distanceTo(t)*1.5)),s=new mr,c=new Float32Array((o+1)*2*3);s.setAttribute(`position`,new $n(c,3));let l=[];for(let e=0;e<o;e++){let t=e*2;l.push(t,t+1,t+2,t+1,t+3,t+2)}s.setIndex(l);let u=new Kr({color:this.col(n,4),transparent:!0,blending:2,depthWrite:!1,side:2}),d=new G(s,u);d.frustumCulled=!1,d.renderOrder=11,this.scene.add(d);let f=new mr,p=new Float32Array(c.length);f.setAttribute(`position`,new $n(p,3)),f.setIndex(l);let m=new Kr({color:this.col(n,1.2),transparent:!0,opacity:.35,blending:2,depthWrite:!1,side:2}),h=new G(f,m);h.frustumCulled=!1,h.renderOrder=10,this.scene.add(h);let g=new V().subVectors(t,e),_=g.length();g.normalize();let v=new V(-g.z,0,g.x);v.lengthSq()<.01&&v.set(1,0,0),v.normalize();let y=new V().crossVectors(g,v).normalize(),b=()=>{for(let t=0;t<=o;t++){let n=t/o,i=Math.sin(n*Math.PI)*Math.min(1.2,_*.12),a=t===0||t===o?0:Q(-i,i),s=t===0||t===o?0:Q(-i,i),l=e.x+g.x*_*n+v.x*a+y.x*s,u=e.y+g.y*_*n+v.y*a+y.y*s,d=e.z+g.z*_*n+v.z*a+y.z*s,f=r*(.6+Math.random()*.6);c[t*6]=l-v.x*f,c[t*6+1]=u+f*.5,c[t*6+2]=d-v.z*f,c[t*6+3]=l+v.x*f,c[t*6+4]=u-f*.5,c[t*6+5]=d+v.z*f;let m=r*4;p[t*6]=l-v.x*m,p[t*6+1]=u+m*.5,p[t*6+2]=d-v.z*m,p[t*6+3]=l+v.x*m,p[t*6+4]=u-m*.5,p[t*6+5]=d+v.z*m}s.attributes.position.needsUpdate=!0,f.attributes.position.needsUpdate=!0};b();let x=0,S=0;if(this.items.push({update:e=>(x+=e,S+=e,S>.04&&(S=0,b()),u.opacity=1-x/i,m.opacity=.35*(1-x/i),x<i),dispose:()=>{this.scene.remove(d),this.scene.remove(h),s.dispose(),u.dispose(),f.dispose(),m.dispose()}}),a&&_>2)for(let a=0;a<2;a++){let a=Q(.2,.8),o=new V().lerpVectors(e,t,a),s=o.clone().add(new V(Q(-1.5,1.5),Q(-.5,.8),Q(-1.5,1.5)));this.lightning(o,s,n,r*.5,i*.7,!1)}this.burst(t,{count:12,color:n,intensity:3,speed:6,life:.3,size:.5})}pillar(e,t,n=1,r=30,i=1,a=.1){let o=new Fi(n,n,r,24,1,!0);o.translate(0,r/2,0);let s=new go({uniforms:{uColor:{value:this.col(t,3)},uA:{value:0},uTime:{value:0}},vertexShader:`varying vec2 vUv; varying vec3 vN; varying vec3 vV; void main(){ vUv=uv; vec4 wp = modelMatrix*vec4(position,1.0); vN = normalize(mat3(modelMatrix)*normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix*viewMatrix*wp; }`,fragmentShader:`varying vec2 vUv; varying vec3 vN; varying vec3 vV; uniform vec3 uColor; uniform float uA; uniform float uTime;
        void main(){ float f = abs(dot(vN, vV)); float core = pow(f, 2.0);
          float stripes = 0.7 + 0.3 * sin(vUv.y * 40.0 - uTime * 20.0 + vUv.x * 6.28 * 3.0);
          float fade = smoothstep(1.0, 0.6, vUv.y) * smoothstep(0.0, 0.03, vUv.y);
          float a = core * stripes * fade * uA;
          gl_FragColor = vec4(uColor * a + vec3(1.0) * pow(f, 6.0) * a, a); }`,transparent:!0,depthWrite:!1,blending:2,side:2}),c=new G(o,s);c.position.set(e.x,0,e.z),c.renderOrder=12,this.scene.add(c);let l=0;this.items.push({update:e=>{l+=e,s.uniforms.uTime.value=l;let t=l<a?l/a:l>i-.25?Math.max(0,(i-l)/.25):1;return s.uniforms.uA.value=t,c.scale.set(.3+.7*t,1,.3+.7*t),l<i},dispose:()=>{this.scene.remove(c),o.dispose(),s.dispose()}})}add(e){this.items.push(e)}shake(e){this.shakeAmt=Math.min(1.6,this.shakeAmt+e)}screenFlash(e=`#ffffff`,t=.5){if(this.flashEl||=document.getElementById(`screen-flash`),!this.flashEl)return;let n=this.flashEl;n.style.transition=`none`,n.style.background=`radial-gradient(circle, ${e} 0%, transparent 85%)`,n.style.opacity=String(t),requestAnimationFrame(()=>{n.style.transition=`opacity 0.45s ease-out`,n.style.opacity=`0`})}update(e){this.time+=e,this.glow.update(e),this.smoke.update(e);for(let t=this.items.length-1;t>=0;t--){let n=this.items[t];n.update(e)||(n.dispose&&n.dispose(),this.items.splice(t,1))}for(let t of this.lights)t.userData.life>0?(t.userData.life-=e,t.intensity=Math.max(0,t.userData.int*(t.userData.life/t.userData.max))):t.intensity=0;this.shakeAmt=Math.max(0,this.shakeAmt-e*2.2);let t=this.shakeAmt*this.shakeAmt*.6;this.shakeOffset.set(Q(-t,t),Q(-t,t)*.6,Q(-t,t))}clear(){for(let e of this.items)e.dispose&&e.dispose();this.items=[],this.glow.clear(),this.smoke.clear();for(let e of this.lights)e.userData.life=0,e.intensity=0;this.shakeAmt=0}},$=new class{constructor(){this.ctx=null,this.master=null,this.sfxGain=null,this.musicGain=null,this.noiseBuf=null,this.last={},this.muted=!1,this.musicOn=!0,this.musicTimer=null,this.musicStep=0}init(){if(this.ctx){this.ctx.state===`suspended`&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.7;let t=this.ctx.createDynamicsCompressor();t.threshold.value=-14,t.ratio.value=6,this.master.connect(t),t.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=.55,this.sfxGain.connect(this.master),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.12,this.musicGain.connect(this.master);let n=this.ctx.sampleRate*1.5;this.noiseBuf=this.ctx.createBuffer(1,n,this.ctx.sampleRate);let r=this.noiseBuf.getChannelData(0);for(let e=0;e<n;e++)r[e]=Math.random()*2-1;this.reverb=this.ctx.createConvolver();let i=this.ctx.sampleRate*1.8,a=this.ctx.createBuffer(2,i,this.ctx.sampleRate);for(let e=0;e<2;e++){let t=a.getChannelData(e);for(let e=0;e<i;e++)t[e]=(Math.random()*2-1)*(1-e/i)**3}this.reverb.buffer=a;let o=this.ctx.createGain();o.gain.value=.25,this.reverb.connect(o),o.connect(this.master)}setMuted(e){this.muted=e,this.master&&(this.master.gain.value=e?0:.7)}tone({type:e=`sine`,f0:t=440,f1:n=null,t:r=.2,vol:i=.3,attack:a=.005,delay:o=0,rev:s=!1,detune:c=0}){let l=this.ctx,u=l.currentTime+o,d=l.createOscillator();d.type=e,d.frequency.setValueAtTime(t,u),n!==null&&d.frequency.exponentialRampToValueAtTime(Math.max(1,n),u+r),d.detune.value=c;let f=l.createGain();f.gain.setValueAtTime(1e-4,u),f.gain.exponentialRampToValueAtTime(i,u+a),f.gain.exponentialRampToValueAtTime(1e-4,u+r),d.connect(f),f.connect(this.sfxGain),s&&f.connect(this.reverb),d.start(u),d.stop(u+r+.05)}noise({t:e=.3,vol:t=.3,filter:n=`lowpass`,f0:r=2e3,f1:i=null,q:a=1,attack:o=.005,delay:s=0,rev:c=!1}){let l=this.ctx,u=l.currentTime+s,d=l.createBufferSource();d.buffer=this.noiseBuf;let f=l.createBiquadFilter();f.type=n,f.frequency.setValueAtTime(r,u),i!==null&&f.frequency.exponentialRampToValueAtTime(Math.max(20,i),u+e),f.Q.value=a;let p=l.createGain();p.gain.setValueAtTime(1e-4,u),p.gain.exponentialRampToValueAtTime(t,u+o),p.gain.exponentialRampToValueAtTime(1e-4,u+e),d.connect(f),f.connect(p),p.connect(this.sfxGain),c&&p.connect(this.reverb),d.start(u,Math.random()*.5),d.stop(u+e+.05)}play(e,t=1){if(!this.ctx||this.muted)return;let n=performance.now(),r={arrow:45,hit:40,zap:60,frost:120,magic:60,cannon:70,coin:50,step:80}[e]||25;if(this.last[e]&&n-this.last[e]<r)return;this.last[e]=n;let i=t;switch(e){case`click`:this.tone({type:`triangle`,f0:880,f1:1320,t:.08,vol:.15*i});break;case`hover`:this.tone({type:`sine`,f0:1200,t:.04,vol:.05*i});break;case`arrow`:this.noise({t:.08,vol:.12*i,filter:`bandpass`,f0:3e3,f1:1200,q:2}),this.tone({type:`triangle`,f0:700,f1:300,t:.06,vol:.05*i});break;case`cannon`:this.noise({t:.35,vol:.35*i,f0:900,f1:80}),this.tone({type:`sine`,f0:120,f1:40,t:.3,vol:.4*i});break;case`magic`:this.tone({type:`sine`,f0:600,f1:1400,t:.18,vol:.12*i,rev:!0}),this.tone({type:`triangle`,f0:900,f1:1800,t:.14,vol:.06*i,detune:7});break;case`zap`:this.noise({t:.2,vol:.18*i,filter:`highpass`,f0:2500,q:.5}),this.tone({type:`sawtooth`,f0:220,f1:1800,t:.12,vol:.08*i}),this.tone({type:`square`,f0:1600,f1:200,t:.15,vol:.05*i,delay:.03});break;case`frost`:this.noise({t:.4,vol:.12*i,filter:`highpass`,f0:4e3,f1:8e3,q:1,rev:!0}),this.tone({type:`sine`,f0:2400,f1:1800,t:.3,vol:.06*i,rev:!0});break;case`freeze`:this.noise({t:.6,vol:.25*i,filter:`bandpass`,f0:6e3,f1:2e3,q:3,rev:!0});for(let e=0;e<4;e++)this.tone({type:`sine`,f0:2e3+e*600,t:.25,vol:.05*i,delay:e*.05,rev:!0});break;case`hit`:this.noise({t:.06,vol:.1*i,f0:1500,f1:400});break;case`explode`:this.noise({t:.7,vol:.5*i,f0:1400,f1:60,rev:!0}),this.tone({type:`sine`,f0:90,f1:30,t:.6,vol:.5*i});break;case`bigexplode`:this.noise({t:1.6,vol:.7*i,f0:2e3,f1:40,rev:!0}),this.tone({type:`sine`,f0:70,f1:20,t:1.4,vol:.7*i}),this.tone({type:`sawtooth`,f0:110,f1:30,t:.8,vol:.15*i});break;case`fire`:this.noise({t:.5,vol:.25*i,filter:`bandpass`,f0:600,f1:1800,q:.8,attack:.05}),this.tone({type:`sawtooth`,f0:160,f1:80,t:.4,vol:.06*i});break;case`meteor`:this.noise({t:1,vol:.25*i,filter:`bandpass`,f0:300,f1:2500,q:1,attack:.6});break;case`thunder`:this.noise({t:.9,vol:.55*i,f0:5e3,f1:100,rev:!0}),this.tone({type:`square`,f0:80,f1:30,t:.5,vol:.2*i});break;case`heal`:[523,659,784,1046].forEach((e,t)=>this.tone({type:`sine`,f0:e,t:.5,vol:.1*i,delay:t*.07,rev:!0}));break;case`summon`:this.tone({type:`sawtooth`,f0:110,f1:440,t:.7,vol:.1*i,rev:!0}),this.tone({type:`sine`,f0:220,f1:880,t:.7,vol:.15*i,rev:!0}),this.noise({t:.8,vol:.15*i,filter:`bandpass`,f0:400,f1:3e3,q:2,attack:.3,rev:!0});break;case`card`:this.noise({t:.12,vol:.1*i,filter:`bandpass`,f0:2e3,f1:5e3,q:1}),this.tone({type:`triangle`,f0:660,f1:990,t:.12,vol:.06*i});break;case`cast`:this.tone({type:`sine`,f0:400,f1:1200,t:.3,vol:.12*i,rev:!0}),this.tone({type:`triangle`,f0:800,f1:2400,t:.25,vol:.06*i,delay:.05,rev:!0});break;case`coin`:this.tone({type:`square`,f0:988,t:.06,vol:.05*i}),this.tone({type:`square`,f0:1319,t:.15,vol:.05*i,delay:.06});break;case`build`:this.noise({t:.25,vol:.2*i,f0:600,f1:200}),this.tone({type:`triangle`,f0:330,f1:660,t:.2,vol:.12*i,delay:.08});break;case`upgrade`:[440,554,659,880].forEach((e,t)=>this.tone({type:`triangle`,f0:e,t:.25,vol:.1*i,delay:t*.06,rev:!0}));break;case`sell`:this.tone({type:`triangle`,f0:660,f1:330,t:.2,vol:.1*i});break;case`leak`:this.tone({type:`sawtooth`,f0:300,f1:100,t:.4,vol:.18*i}),this.noise({t:.3,vol:.15*i,f0:800,f1:100});break;case`wave`:[262,330,392].forEach((e,t)=>this.tone({type:`sawtooth`,f0:e,t:.6,vol:.06*i,delay:t*.12,rev:!0})),this.tone({type:`sine`,f0:131,t:1,vol:.2*i,delay:.36});break;case`boss`:this.tone({type:`sawtooth`,f0:55,f1:45,t:2,vol:.25*i,attack:.3,rev:!0}),this.tone({type:`sawtooth`,f0:82,f1:70,t:2,vol:.18*i,attack:.3,rev:!0,detune:10}),this.noise({t:2,vol:.15*i,f0:300,f1:80,attack:.5});break;case`victory`:[523,659,784,1046,784,1046].forEach((e,t)=>this.tone({type:`triangle`,f0:e,t:.4,vol:.12*i,delay:t*.13,rev:!0}));break;case`defeat`:[392,349,311,262].forEach((e,t)=>this.tone({type:`sawtooth`,f0:e,t:.6,vol:.08*i,delay:t*.25,rev:!0}));break;case`herodie`:this.tone({type:`sawtooth`,f0:400,f1:80,t:.8,vol:.12*i,rev:!0});break;case`swing`:this.noise({t:.12,vol:.12*i,filter:`bandpass`,f0:1200,f1:3e3,q:1.5});break;case`levelup`:[523,784,1046,1568].forEach((e,t)=>this.tone({type:`sine`,f0:e,t:.5,vol:.1*i,delay:t*.08,rev:!0}));break;case`error`:this.tone({type:`square`,f0:180,t:.15,vol:.08*i});break;case`stomp`:this.tone({type:`sine`,f0:60,f1:25,t:.6,vol:.5*i}),this.noise({t:.5,vol:.3*i,f0:400,f1:60});break;case`void`:this.tone({type:`sine`,f0:200,f1:40,t:1.5,vol:.25*i,attack:.2,rev:!0}),this.tone({type:`sawtooth`,f0:100,f1:30,t:1.5,vol:.06*i,attack:.2,detune:15});break;case`beam`:this.tone({type:`sawtooth`,f0:880,f1:220,t:1.2,vol:.08*i,rev:!0}),this.noise({t:1.5,vol:.2*i,filter:`bandpass`,f0:1500,q:.5,attack:.1,rev:!0});break;case`roar`:this.tone({type:`sawtooth`,f0:140,f1:50,t:1.2,vol:.25*i,attack:.08,rev:!0}),this.tone({type:`square`,f0:95,f1:40,t:1,vol:.1*i,attack:.1,detune:20}),this.noise({t:1.1,vol:.3*i,filter:`bandpass`,f0:500,f1:200,q:1,attack:.1,rev:!0});break;case`blink`:this.tone({type:`sine`,f0:1800,f1:200,t:.35,vol:.12*i,rev:!0}),this.tone({type:`sine`,f0:200,f1:1600,t:.3,vol:.1*i,delay:.2,rev:!0});break;case`shield`:this.tone({type:`triangle`,f0:520,f1:780,t:.4,vol:.1*i,rev:!0}),this.tone({type:`sine`,f0:1040,t:.5,vol:.06*i,delay:.05,rev:!0});break;case`whoosh`:this.noise({t:.35,vol:.12*i,filter:`bandpass`,f0:400,f1:2400,q:1.2,attack:.08});break;case`heartbeat`:this.tone({type:`sine`,f0:70,f1:45,t:.16,vol:.4*i}),this.tone({type:`sine`,f0:65,f1:40,t:.18,vol:.3*i,delay:.22});break;case`perfect`:[784,988,1175,1568].forEach((e,t)=>this.tone({type:`triangle`,f0:e,t:.35,vol:.09*i,delay:t*.09,rev:!0})),this.tone({type:`sine`,f0:2093,t:.8,vol:.05*i,delay:.36,rev:!0});break;case`nova`:this.tone({type:`sine`,f0:60,f1:600,t:2,vol:.18*i,attack:1.6,rev:!0}),this.noise({t:2,vol:.2*i,filter:`bandpass`,f0:200,f1:4e3,q:1,attack:1.8,rev:!0})}}startMusic(e=`calm`){if(!this.ctx||(this.stopMusic(),!this.musicOn))return;let t={calm:[[220,261.6,329.6],[174.6,220,261.6],[196,246.9,293.7],[164.8,207.7,246.9]],battle:[[146.8,174.6,220],[116.5,146.8,174.6],[130.8,164.8,196],[110,138.6,164.8]]},n=t[e]||t.calm,r=e===`battle`?.22:.32;this.musicStep=0;let i=()=>{if(!this.ctx||this.muted)return;let t=n[Math.floor(this.musicStep/16)%n.length],i=this.musicStep%16,a=this.ctx,o=a.currentTime,s=(e,t,n,r=`triangle`)=>{let i=a.createOscillator();i.type=r,i.frequency.value=e;let s=a.createGain();s.gain.setValueAtTime(1e-4,o),s.gain.exponentialRampToValueAtTime(n,o+.02),s.gain.exponentialRampToValueAtTime(1e-4,o+t),i.connect(s),s.connect(this.musicGain),s.connect(this.reverb),i.start(o),i.stop(o+t+.05)};if(i%2==0&&s(t[[0,1,2,1,2,0,1,2][i/2%8]]*2,r*2.5,.25),i===0&&(s(t[0]/2,r*16,.35,`sine`),s(t[1],r*16,.12,`sine`)),e===`battle`&&i%4==0){let e=a.createBufferSource();e.buffer=this.noiseBuf;let t=a.createBiquadFilter();t.type=`lowpass`,t.frequency.value=180;let n=a.createGain();n.gain.setValueAtTime(.9,o),n.gain.exponentialRampToValueAtTime(.001,o+.18),e.connect(t),t.connect(n),n.connect(this.musicGain),e.start(o),e.stop(o+.2)}this.musicStep++};this.musicTimer=setInterval(i,r*1e3)}stopMusic(){this.musicTimer&&clearInterval(this.musicTimer),this.musicTimer=null}},af=new V,of=new V,sf=new Tr({color:1118481,depthTest:!1,transparent:!0,opacity:.75});function cf(e,t=1.2){let n=new U,r=new zr(sf);r.scale.set(t+.08,.2,1),r.renderOrder=20;let i=new zr(new Tr({color:e,depthTest:!1}));return i.center.set(0,.5),i.position.x=-t/2,i.scale.set(t,.13,1),i.renderOrder=21,n.add(r,i),n.userData={fg:i,width:t},n}function lf(e,t){let{fg:n,width:r}=e.userData;n.scale.x=Math.max(.001,r*t)}var uf=e=>!!e.def.regen,df=class e{constructor(e,t,n,r,i=0,a=null){this.game=e,this.type=t,this.def=td[t],this.path=e.world.paths[n],this.pathIdx=n,this.maxHp=Math.round(this.def.hp*(this.def.boss?1+(r-1)*.55:r)),this.hp=this.maxHp,this.dist=i,this.lateral=a===null?Q(-.55,.55):a,this.flying=!!this.def.flying,this.boss=!!this.def.boss,this.alive=!0,this.slowMul=1,this.slowUntil=0,this.frozenUntil=0,this.stunUntil=0,this.burnDps=0,this.burnUntil=0,this.blockedBy=null,this.atkCD=1,this.specialCD=this.boss?4:2.5,this.phaseUntil=0,this.flashT=0,this.t=Math.random()*10,this.mesh=Id(this.def),this.mesh.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),this.pos=this.mesh.position,this.height=this.flying?2.6:0;let o=this.boss?2.6:1.1;this.bar=cf(this.boss?16728128:16738890,o),this.bar.position.y=this.boss?this.def.size*3.2:this.def.size*2.4+.4,this.barHolder=new U,this.barHolder.add(this.bar),e.scene.add(this.mesh),e.scene.add(this.barHolder),this.updatePos(0),this.iceShell=null,this.shieldedUntil=0,this.barrierUntil=0,this.lastHit=-9,this.enraged=!1,this.barrierMarks=this.def.blink?[.66,.33]:[],this.barrierMesh=null}explode(){if(this.exploded)return;this.exploded=!0;let e=this.game,t=this.pos.clone();t.y=.3,e.fx.explosion(t,16747050,.8),e.fx.shake(.25),$.play(`explode`,.7);for(let n of e.units)n.alive&&!n.flying&&n.pos.distanceToSquared(t)<2.6*2.6&&(n.takeDamage(110),n.stunUntil=Math.max(n.stunUntil||0,e.time+1))}enrage(){this.enraged=!0;let e=this.game;e.fx.ring(this.pos,16726570,6,.8),e.fx.burst(this.center,{count:60,color:16730666,color2:16764006,intensity:3,speed:7,life:.9,size:.9,up:2}),e.fx.shake(.7),e.fx.screenFlash(`rgba(255,40,20,0.45)`,.4),$.play(`roar`),e.ui.banner(`${this.def.name} 狂暴了！`,`#ff5a3a`,`移动与技能频率提升`);for(let e of this.mesh.userData.flash)e.color&&e.color.lerp(new W(16726570),.35)}startBarrier(){let t=this.game;this.barrierUntil=t.time+3.5,$.play(`void`,.8),t.ui.toast(`🛡 ${this.def.name} 展开虚空屏障（受到伤害 -90%）并召唤仆从！`),this.barrierMesh||(this.barrierMesh=new G(new $a(this.def.size*2.1,1),new Kr({color:11561727,transparent:!0,opacity:.28,wireframe:!0,blending:2,depthWrite:!1})),t.scene.add(this.barrierMesh));for(let n=0;n<5;n++){let r=new e(t,`voidling`,this.pathIdx,t.waveScale,Math.max(0,this.dist-.5-n*.7),Q(-.7,.7));t.enemies.push(r)}t.fx.burst(this.center,{count:50,color:11561727,intensity:3,speed:6,life:.9,size:.8})}get center(){return of.set(this.pos.x,this.pos.y+(this.boss?1.5:.6)*this.def.size,this.pos.z)}centerClone(){return this.center.clone()}isFrozen(e){return e<this.frozenUntil||e<this.game.timeStopUntil}isPhased(e){return e<this.phaseUntil}updatePos(e){this.path.at(this.dist,this.pos);let t=this.path.dirAt(this.dist,af);this.pos.x+=-t.z*this.lateral,this.pos.z+=t.x*this.lateral;let n=this.flying?Math.sin(this.t*3)*.25:0;this.pos.y=this.height+n;let r=Math.atan2(t.x,t.z)-this.mesh.rotation.y;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;this.mesh.rotation.y+=r*Math.min(1,e*8),this.barHolder.position.set(this.pos.x,this.pos.y,this.pos.z)}update(e){let t=this.game,n=t.time;this.t+=e;let r=this.isFrozen(n),i=n<this.stunUntil;if(n<this.burnUntil&&(t.damageEnemy(this,this.burnDps*e,`magic`,null,!0),Math.random()<e*12&&t.fx.trail(this.center,16738842,.9,.5,.3,2),!this.alive))return;if(uf(this)&&n>=this.burnUntil&&n-this.lastHit>1.5&&this.hp<this.maxHp&&(this.hp=Math.min(this.maxHp,this.hp+this.maxHp*this.def.regen*e),Math.random()<e*3&&t.fx.trail(af.set(this.pos.x+Q(-.4,.4),this.pos.y+1,this.pos.z+Q(-.4,.4)),6750054,.6,.6,0,1.5)),this.boss){let r=this.hp/this.maxHp;!this.enraged&&r<=.5&&this.enrage(),this.barrierMarks.length&&r<=this.barrierMarks[0]&&(this.barrierMarks.shift(),this.startBarrier()),this.barrierMesh&&(n<this.barrierUntil?(this.barrierMesh.position.set(this.pos.x,this.pos.y+this.def.size*1.4,this.pos.z),this.barrierMesh.rotation.y+=e*1.5,this.barrierMesh.rotation.x+=e*.7,this.barrierMesh.material.opacity=.22+Math.sin(n*10)*.08):(t.scene.remove(this.barrierMesh),this.barrierMesh.geometry.dispose(),this.barrierMesh.material.dispose(),this.barrierMesh=null))}let a=(n<this.slowUntil?this.slowMul:1)*(this.enraged?1.3:1);if(this.zoneSlow&&=(a=Math.min(a,this.zoneSlow),0),this.blockedBy&&(!this.blockedBy.alive||this.flying)&&(this.blockedBy=null),!r&&!i){if(this.blockedBy){if(this.atkCD-=e,this.def.bomb){this.blockedBy.takeDamage(60),this.hp=0,t.killEnemy(this,null);return}if(this.atkCD<=0){this.atkCD=this.boss?this.enraged?1.1:1.6:1.2;let e=this.def.atk||12+this.maxHp*.03;this.blockedBy.takeDamage(e),this.attackAnim=.3}}else if(this.dist+=this.def.speed*Math.min(a,this.enraged?1.3:1)*e,this.dist>=this.path.length){t.leak(this);return}this.special(e,n)}if(this.animate(e,r||i,a),this.updatePos(e),r&&!this.iceShell?(this.iceShell=new G(new $a(.9*this.def.size*(this.boss?1.8:1),0),new vo({color:12577023,transparent:!0,opacity:.55,emissive:4892927,emissiveIntensity:.6,flatShading:!0,roughness:.1})),this.iceShell.scale.y=1.3,t.scene.add(this.iceShell)):!r&&this.iceShell&&(t.fx.burst(this.center,{count:10,color:12577023,intensity:1.5,speed:4,life:.5,size:.5,gravity:10}),t.scene.remove(this.iceShell),this.iceShell.geometry.dispose(),this.iceShell.material.dispose(),this.iceShell=null),this.iceShell&&this.iceShell.position.set(this.pos.x,this.pos.y+.6*this.def.size*(this.boss?1.8:1),this.pos.z),this.flashT>0){this.flashT-=e;let t=Math.max(0,this.flashT/.12);for(let e of this.mesh.userData.flash)e.emissive.setRGB(t*1.5,t*1.5,t*1.5);if(this.flashT<=0)for(let e of this.mesh.userData.flash)e.emissive.set(this.def.model===`ghost`||this.def.model===`slime`?this.def.color:0),e.emissiveIntensity=this.def.model===`ghost`?.9:this.def.model===`slime`?.25:1}i&&Math.random()<e*8&&t.fx.trail(af.set(this.pos.x+Math.cos(this.t*6)*.4,this.pos.y+1.6*this.def.size+.4,this.pos.z+Math.sin(this.t*6)*.4),16772710,.5,.3,0,2),lf(this.bar,this.hp/this.maxHp),this.bar.visible=this.hp<this.maxHp||this.boss}special(t,n){let r=this.game,i=this.def;if(this.specialCD-=t*(this.enraged?1.5:1),i.aura){if(this.auraT=(this.auraT||0)-t,this.auraT<=0){this.auraT=.4;for(let e of r.enemies)e!==this&&e.alive&&e.pos.distanceToSquared(this.pos)<12.25&&(e.shieldedUntil=n+.6)}this.specialCD<=0&&(this.specialCD=2.2,r.fx.ring(this.pos,8050943,3.5,.6))}if(i.bomb&&Math.random()<t*10&&r.fx.trail(af.set(this.pos.x,this.pos.y+1.2,this.pos.z),16755234,.4,.3,.1,3),i.blink&&this.specialCD<=0){this.specialCD=9;let e=this.centerClone();r.fx.burst(e,{count:40,color:9059071,intensity:3,speed:5,life:.6,size:.8}),r.fx.ring(this.pos,11561727,3,.5),this.dist=Math.min(this.path.length-3,this.dist+5),this.blockedBy=null,this.updatePos(0);let t=this.centerClone();r.fx.lightning(e,t,12610303,.25,.35,!1),r.fx.burst(t,{count:40,color:12610303,intensity:3,speed:5,life:.6,size:.8}),r.fx.light(t,11561727,6,10,.4),$.play(`blink`)}if(i.phase){let e=this.isPhased(n),i=this.mesh.userData.parts.ghostMat;i&&(i.opacity+=((e?.15:.6)-i.opacity)*Math.min(1,t*8)),this.specialCD<=0&&(this.specialCD=5,this.phaseUntil=n+1.3,r.fx.burst(this.center,{count:14,color:10479871,intensity:1.5,speed:2,life:.6,size:.6}))}if(i.healer&&this.specialCD<=0){this.specialCD=2.5;let e=!1;for(let t of r.enemies)t!==this&&t.alive&&t.hp<t.maxHp&&t.pos.distanceToSquared(this.pos)<16&&(t.hp=Math.min(t.maxHp,t.hp+t.maxHp*.12),r.fx.burst(t.center,{count:8,color:6750088,intensity:2,speed:1.5,life:.7,size:.5,up:1.5}),e=!0);e&&r.fx.ring(this.pos,4521847,4,.6)}if(i.summoner&&this.specialCD<=0){this.specialCD=8,r.fx.ring(this.pos,10178047,3,.7),r.fx.burst(this.center,{count:40,color:10178047,intensity:2.5,speed:5,life:.8,size:.9}),$.play(`void`,.6);for(let t=0;t<4;t++){let n=new e(r,`skeleton`,this.pathIdx,r.waveScale,Math.max(0,this.dist-1-t*.8),Q(-.6,.6));r.enemies.push(n)}}if(i.stomp&&this.specialCD<=0){this.specialCD=7,this.attackAnim=.5,r.fx.ring(this.pos,14196832,5,.6),r.fx.burst(this.pos,{count:50,color:9075290,smoke:!0,speed:6,flat:!0,life:1,size:1.6,sizeEnd:3,alpha:.6}),r.fx.shake(.6),$.play(`stomp`);for(let e of r.units)e.alive&&!e.flying&&e.pos.distanceToSquared(this.pos)<25&&(e.takeDamage(80),e.stunUntil=n+1.5)}if(i.breath&&this.specialCD<=0){let e=null,t=64;for(let n of r.units){if(!n.alive)continue;let r=n.pos.distanceToSquared(this.pos);r<t&&(t=r,e=n)}if(e){this.specialCD=5;let t=this.centerClone(),n=e.pos.clone();$.play(`fire`);for(let e=0;e<60;e++){let e=Math.random(),i=t.clone().lerp(n,e);r.fx.burst(i,{count:1,color:16755251,color2:16720384,intensity:3,speed:2,life:.6,size:1.4*(.5+e),sizeEnd:2})}r.fx.explosion(n,16734746,.8,{noDecal:!1});for(let e of r.units)e.alive&&e.pos.distanceToSquared(n)<9&&e.takeDamage(120)}else this.specialCD=1}}animate(e,t,n){let r=this.mesh.userData,i=r.parts,a=r.body,o=t?0:n,s=this.t;switch(this.attackAnim>0&&(this.attackAnim-=e),this.def.model){case`slime`:{let e=Math.abs(Math.sin(s*6*o+1e-4));a.scale.set(1+(1-e)*.15,.85+e*.3,1+(1-e)*.15),a.position.y=e*.35*o;break}case`wolf`:i.legs&&i.legs.forEach((e,t)=>e.rotation.x=Math.sin(s*14*o+(t%2?Math.PI:0)+ +(t>1))*.6*o),a.position.y=Math.abs(Math.sin(s*14*o))*.12;break;case`bat`:case`dragon`:i.wings&&i.wings.forEach((e,t)=>e.rotation.z=(t?-1:1)*Math.sin(s*(this.def.model===`bat`?18:5))*.6),i.head&&this.specialCD<.6?i.head.rotation.x=-.4:i.head&&(i.head.rotation.x=0);break;case`ghost`:a.position.y=Math.sin(s*2.5)*.15+.2;break;case`lich`:a.position.y=Math.sin(s*2)*.15+.3,i.orbiters&&i.orbiters.forEach((e,t)=>e.position.set(Math.cos(s*2+t*2.1)*1.1,1.6+Math.sin(s*3+t)*.3,Math.sin(s*2+t*2.1)*1.1)),Math.random()<e*10&&this.game.fx.trail(af.set(this.pos.x+Q(-.5,.5),this.pos.y+.3,this.pos.z+Q(-.5,.5)),7093200,1.2,.8,0,1.5);break;case`voidlord`:a.position.y=Math.sin(s*1.6)*.2+.2,a.rotation.y=Math.sin(s*.7)*.3,i.orbiters&&i.orbiters.forEach((e,t)=>{let n=s*1.8+t*1.2566;e.position.set(Math.cos(n)*1.7,2+Math.sin(s*3+t)*.4,Math.sin(n)*1.7),e.rotation.y=n}),Math.random()<e*8&&this.game.fx.trail(af.set(this.pos.x+Q(-.8,.8),this.pos.y+.4,this.pos.z+Q(-.8,.8)),9059071,1.3,.8,0,1.6);break;case`golem`:i.arms&&i.arms.forEach((e,t)=>e.rotation.x=this.attackAnim>0?-2*(this.attackAnim/.5):Math.sin(s*3*o+t*Math.PI)*.4),a.rotation.z=Math.sin(s*3*o)*.06;break;default:a.position.y=Math.abs(Math.sin(s*8*o))*.1,a.rotation.z=Math.sin(s*8*o)*.08,i.weapon&&(i.weapon.rotation.x=this.attackAnim>0?-1.2:0),i.orb&&(i.orb.rotation.y+=e*3)}}destroy(){this.alive=!1,this.game.scene.remove(this.mesh),this.game.scene.remove(this.barHolder),this.bar.userData.fg.material.dispose();for(let e of this.mesh.userData.flash)e.dispose();this.barrierMesh&&=(this.game.scene.remove(this.barrierMesh),this.barrierMesh.geometry.dispose(),this.barrierMesh.material.dispose(),null),this.iceShell&&(this.game.scene.remove(this.iceShell),this.iceShell.geometry.dispose(),this.iceShell.material.dispose())}},ff=class{constructor(e,t,n,r){this.game=e,this.type=t,this.def=nd[t],this.level=0,this.gx=n,this.gz=r,this.pos=e.world.toWorld(n,r),this.cd=.5,this.dmgMul=1,this.spent=this.def.levels[0].cost,this.kills=0,this.t=Math.random()*10,this.buildMesh(),this.buildAnim=0}get stats(){return this.def.levels[this.level]}get range(){return this.stats.range}buildMesh(){this.mesh&&this.game.scene.remove(this.mesh),this.mesh=Rd(this.type,this.level),this.mesh.position.copy(this.pos),this.mesh.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),this.game.scene.add(this.mesh),this.buildAnim=0}upgrade(e){this.level++,this.spent+=e===void 0?this.stats.cost:e,this.buildMesh()}muzzlePos(){let e=this.mesh.userData.parts.muzzle;return this.mesh.updateMatrixWorld(!0),e?e.getWorldPosition(new V):this.pos.clone().setY(2.5)}findTarget(){let e=this.game,t=this.range*this.range,n=null,r=-1;for(let i of e.enemies){if(!i.alive||i.flying&&!this.def.air)continue;let e=i.pos.x-this.pos.x,a=i.pos.z-this.pos.z;if(e*e+a*a>t)continue;let o=i.dist+(i.boss?3:0);o>r&&(r=o,n=i)}return n}update(e){let t=this.game;this.t+=e;let n=this.mesh.userData;if(this.buildAnim<1){this.buildAnim=Math.min(1,this.buildAnim+e*3);let t=this.buildAnim,n=(1+this.level*.08)*(t<.7?t/.7*1.15:1.15-(t-.7)/.3*.15);this.mesh.scale.setScalar(n)}let r=n.parts;if(r.crystal&&(r.crystal.rotation.y+=e*1.5,r.crystal.position.y=Math.sin(this.t*2)*.12),r.orbiters&&r.orbiters.forEach((e,t)=>e.position.set(Math.cos(this.t*2+t*2.1)*.9,3.4+Math.sin(this.t*3+t)*.2,Math.sin(this.t*2+t*2.1)*.9)),r.ring&&(r.ring.rotation.x=this.t*2),r.water&&(r.water.material.emissiveIntensity=1.3+Math.sin(this.t*3)*.3),this.def.support){Math.random()<e*4&&t.fx.trail(af.set(this.pos.x+Q(-.6,.6),1,this.pos.z+Q(-.6,.6)),4901119,.6,1.2,0,2);return}let i=t.time<(this.overclockUntil||0),a=t.towerHasteMul*(i?2:1);if(i&&Math.random()<e*8&&t.fx.trail(af.set(this.pos.x+Q(-.6,.6),2+Q(0,1.5),this.pos.z+Q(-.6,.6)),6091007,.6,.5,0,2.5),t.time<t.buffs.towerHaste&&Math.random()<e*6&&t.fx.trail(af.set(this.pos.x+Q(-.8,.8),.5,this.pos.z+Q(-.8,.8)),16734778,.7,.6,0,2),this.cd-=e*a,this.def.pulse){if(this.cd<=0){let e=t.enemiesInRadius(this.pos,this.range,!0);e.length&&(this.cd=this.stats.rate,this.firePulse(e))}return}let o=this.findTarget();if(o&&!r.noRotate){let t=Math.atan2(o.pos.x-this.pos.x,o.pos.z-this.pos.z)-n.head.rotation.y;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;n.head.rotation.y+=t*Math.min(1,e*10)}r.barrel&&r.barrel.position.z<0&&(r.barrel.position.z=Math.min(0,r.barrel.position.z+e*2)),o&&this.cd<=0&&(this.cd=this.stats.rate,this.fire(o))}fire(e){let t=this.game,n=this.stats.dmg*this.dmgMul*(this.type===`arcane`&&t.tiers.arcane>=2?1.2:1),r=this.muzzlePos();switch(this.type){case`arrow`:$.play(`arrow`,.8),t.spawnProjectile({from:r,target:e,speed:26,kind:`arrow`,color:this.level>=2?6750105:16769184,onHit:(e,r)=>{r&&r.alive&&t.damageEnemy(r,n,`phys`,this),t.fx.burst(e,{count:5,color:16769184,intensity:1.5,speed:3,life:.25,size:.4})}});break;case`cannon`:{$.play(`cannon`,.7);let i=this.mesh.userData.parts;i.barrel&&(i.barrel.position.z=-.25),t.fx.burst(r,{count:12,color:6710886,smoke:!0,speed:2,life:.8,size:1.2,sizeEnd:2,alpha:.6}),t.fx.burst(r,{count:10,color:16755268,intensity:3,speed:4,life:.2,size:.8});let a=e.def.speed*.6,o=e.path.at(Math.min(e.path.length,e.dist+(e.blockedBy?0:a))),s=this.stats.splash||this.def.splash;t.spawnProjectile({from:r,targetPos:o,speed:14,kind:`shell`,arc:3,color:2236962,onHit:e=>{e.y=0,t.fx.explosion(e,16747066,.55+this.level*.15,{noDecal:this.level<2}),$.play(`explode`,.5),t.fx.shake(.12);for(let r of t.enemiesInRadius(e,s,!1))t.damageEnemy(r,n,`phys`,this)}});break}case`arcane`:{$.play(`magic`,.7);let i=[11560447,13660415,16740576][this.level];t.fx.burst(r,{count:10,color:i,intensity:3,speed:3,life:.3,size:.6}),t.spawnProjectile({from:r,target:e,speed:16,kind:`orb`,color:i,size:.25+this.level*.05,onHit:(e,r)=>{if(r&&r.alive&&t.damageEnemy(r,n,`magic`,this),t.fx.burst(e,{count:16,color:i,intensity:3,speed:5,life:.4,size:.6}),this.level>=2)for(let i of t.enemiesInRadius(e,1.6,!0))i!==r&&t.damageEnemy(i,n*.4,`magic`,this)}});break}case`tesla`:{$.play(`zap`,.7);let i=this.stats.chain+t.teslaBonus,a=new Set,o=e,s=r;for(let e=0;e<i&&o;e++){a.add(o);let r=o.centerClone();t.fx.lightning(s,r,10139903,.12,.2,e===0),t.damageEnemy(o,n*.85**e,`magic`,this),s=r;let i=null,c=16;for(let e of t.enemies){if(!e.alive||a.has(e))continue;let t=e.pos.distanceToSquared(o.pos);t<c&&(c=t,i=e)}o=i}t.fx.light(r,10139903,3,6,.15);break}}}firePulse(e){let t=this.game;$.play(`frost`,.6);let n=this.stats;t.fx.ring(this.pos,8378623,n.range,.6),t.fx.burst(this.pos.clone().setY(1),{count:30,color:12577023,intensity:2,speed:n.range*1.6,flat:!0,life:.5,size:.6,drag:3});for(let r of e){t.damageEnemy(r,n.dmg*this.dmgMul,`magic`,this);let e=Math.min(.85,n.slow+(t.has(`frostcore`)?.1:0));(!r.boss||Math.random()<.5)&&t.slowEnemy(r,1-e,1.6)}}destroy(){this.game.scene.remove(this.mesh)}},pf={golem:{name:`石像守卫`,hp:900,atk:40,rate:1.2,range:1.8,speed:2.5,melee:!0,block:3,dtype:`phys`},wolf:{name:`灵狼`,hp:220,atk:26,rate:.7,range:1.4,speed:6,melee:!0,block:1,dtype:`magic`},phoenix:{name:`凤凰`,hp:9999,atk:55,rate:.6,range:7,speed:5,melee:!1,block:0,dtype:`magic`,flying:!0},treant:{name:`古树守卫`,hp:1300,atk:34,rate:1.4,range:2,speed:1.8,melee:!0,block:4,dtype:`phys`,root:!0}},mf=class{constructor(e,t,n,r,i=0){if(this.game=e,this.kind=t,this.id=n,this.def=t===`hero`?id[n]:pf[n],this.level=1,this.xp=0,this.summonMul=t===`summon`?e.summonMul:1,this.maxHp=Math.round(this.def.hp*(this.def.flying?1:this.summonMul)),this.hp=this.maxHp,this.alive=!0,this.ranks=[1,1,0],this.skillPts=0,this.focus=null,this.holdPos=!1,this.avatarUntil=0,this.sancUntil=0,this.critNext=!1,this.flying=!!this.def.flying,this.atkCD=0,this.moveTarget=null,this.anchor=r.clone(),this.target=null,this.stunUntil=0,this.drUntil=0,this.hasteUntil=0,this.lifetime=i*(t===`summon`?e.summonDur:1),this.respawn=0,this.lastHurt=-10,this.cds=[0,0,0],this.t=Math.random()*10,this.attackAnim=0,this.mesh=t===`hero`?Bd(n):Vd(n),this.mesh.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),this.mesh.position.copy(r),this.pos=this.mesh.position,e.scene.add(this.mesh),t===`hero`){let e=new no(.75,.95,32);e.rotateX(-Math.PI/2),this.selRing=new G(e,new Kr({color:new W(this.def.color).multiplyScalar(2),transparent:!0,opacity:.9,depthWrite:!1})),this.selRing.position.y=.05,this.mesh.add(this.selRing),this.selRing.visible=!1,this.bar=cf(5963642,1.3),this.bar.position.y=3}else this.bar=cf(5949695,1),this.bar.position.y=this.id===`golem`||this.id===`treant`?3.4:1.8;this.mesh.add(this.bar),this.flying&&(this.pos.y=3.2,this.bar.visible=!1),this.orbitA=0}get dmgMul(){let e=this.game,t=1+(this.level-1)*.1;return this.kind===`hero`?(e.time<e.buffs.heroDmg&&(t*=1.6),e.has(`herocrest`)&&(t*=1.2),e.tiers.holy>=2&&(t*=1.15),e.time<this.avatarUntil&&(t*=2)):t*=this.summonMul,e.time<this.sancUntil&&(t*=1.3),t}get blockCap(){let e=this.def.block;return this.kind===`hero`&&this.game.has(`bulwark`)&&e++,this.game.time<this.avatarUntil&&(e+=2),e}takeDamage(e){if(!this.alive||this.flying)return;let t=this.game;t.time<this.drUntil&&(e*=.5),t.time<this.avatarUntil&&(e*=.4),t.has(`bulwark`)&&(e*=.8);for(let n of t.units)if(n.kind===`hero`&&n.id===`paladin`&&n.alive&&n.pos.distanceToSquared(this.pos)<16){e*=.85;break}this.hp-=e,this.lastHurt=this.game.time,this.hp<=0&&this.die()}heal(e){this.alive&&(this.hp=Math.min(this.maxHp,this.hp+e))}die(){let e=this.game;this.alive=!1,this.hp=0,e.fx.burst(this.pos.clone().setY(1),{count:40,color:this.kind===`hero`?this.def.color:8050943,intensity:2.5,speed:5,life:.8,size:.8,up:2}),e.fx.ring(this.pos,16777215,2.5,.5);for(let t of e.enemies)t.blockedBy===this&&(t.blockedBy=null);this.kind===`hero`?($.play(`herodie`),this.respawn=(12+this.level)*(e.has(`grail`)?.5:1)*(e.tiers.holy>=2?.5:1),this.mesh.visible=!1,this.focus=null,e.ui.toast(`${this.def.name} 倒下了！${Math.ceil(this.respawn)} 秒后复活`)):(this.mesh.visible=!1,this.removed=!0)}revive(){let e=this.game;this.alive=!0,this.hp=this.maxHp,this.respawn=0;let t=e.world.paths[0];t.at(t.length-4,this.pos),this.pos.y=0,this.anchor.copy(this.pos),this.moveTarget=null,this.mesh.visible=!0,e.has(`grail`)&&(this.cds=[0,0,0]),e.fx.pillar(this.pos,this.def.color,1,20,.9),e.fx.sigil(this.pos,this.def.color,2,1.2),e.fx.burst(this.pos.clone().setY(1),{count:40,color:this.def.color,intensity:3,speed:4,life:.8,size:.8,up:2}),$.play(`summon`,.7)}gainXp(e){if(this.kind!==`hero`||!this.alive||this.level>=10)return;this.xp+=e*(this.game.has(`herocrest`)?1.5:1);let t=60+this.level*50;for(;this.xp>=t&&this.level<10;){this.xp-=t,this.level++,this.skillPts++,this.level===3&&this.ranks[2]===0&&(this.ranks[2]=1,this.skillPts--,this.game.ui.toast(`${this.def.name} 领悟了终极技能「${this.def.skills[2].name}」！`));let e=this.hp/this.maxHp;this.maxHp=Math.round(this.def.hp*(1+(this.level-1)*.12)),this.hp=Math.min(this.maxHp,this.maxHp*e+this.maxHp*.3);let n=this.game;n.fx.pillar(this.pos,16765527,.9,12,1),n.fx.burst(this.pos.clone().setY(1),{count:30,color:16765527,intensity:3,speed:3,life:1,size:.7,up:3}),n.ui.floatText(this.pos.clone().setY(3),`升级！Lv.${this.level}`,`#ffd257`,!0),n.fx.sigil(this.pos,16765527,2.2,1.2,{spin:3}),$.play(`levelup`),n.ui.renderHeroes(),t=60+this.level*50}}blockingCount(){let e=0;for(let t of this.game.enemies)t.alive&&t.blockedBy===this&&e++;return e}releaseBlocks(){for(let e of this.game.enemies)e.blockedBy===this&&(e.blockedBy=null)}moveToward(e,t,n){let r=e.x-this.pos.x,i=e.z-this.pos.z,a=Math.hypot(r,i);if(a<.05)return!0;let o=Math.min(a,n*t);return this.pos.x+=r/a*o,this.pos.z+=i/a*o,this.face(r,i,t),this.walking=!0,a-o<.05}face(e,t,n){let r=Math.atan2(e,t)-this.mesh.rotation.y;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;this.mesh.rotation.y+=r*Math.min(1,n*12)}clampToMap(){let e=this.game.world,t=e.W*2/2-.5,n=e.H*2/2-.5;this.pos.x=Math.max(-t,Math.min(t,this.pos.x)),this.pos.z=Math.max(-n,Math.min(n,this.pos.z))}update(e){let t=this.game,n=t.time;this.t+=e,this.walking=!1;for(let t=0;t<3;t++)this.cds[t]=Math.max(0,this.cds[t]-e);if(!this.alive){this.kind===`hero`&&(this.respawn-=e,this.respawn<=0&&this.revive());return}if(this.lifetime>0&&(this.lifetime-=e,this.lifetime<=0)){this.die();return}if(this.flying){this.updateFlying(e);return}if(n-this.lastHurt>3&&this.hp<this.maxHp&&this.heal(this.maxHp*.03*e),n<this.stunUntil){this.animate(e);return}let r=this.def.speed*(n<this.hasteUntil?1.3:1)*(n<this.avatarUntil?1.2:1);this.focus&&(!this.focus.alive||this.manual||this.moveTarget)&&(this.focus=null);let i=n<this.avatarUntil?1.45:1,a=this.mesh.scale.x+(i-this.mesh.scale.x)*Math.min(1,e*5);if(this.mesh.scale.setScalar(a),i>1&&Math.random()<e*20&&t.fx.trail(af.set(this.pos.x+Q(-.6,.6),Q(.2,2.6),this.pos.z+Q(-.6,.6)),16769126,.7,.8,0,2.5),this.manual&&(this.manual.x||this.manual.z)){this.releaseBlocks(),this.moveTarget=null;let t=Math.hypot(this.manual.x,this.manual.z);this.pos.x+=this.manual.x/t*r*e,this.pos.z+=this.manual.z/t*r*e,this.clampToMap(),this.face(this.manual.x,this.manual.z,e),this.anchor.copy(this.pos),this.walking=!0,this.tryAttack(e,!1)}else this.moveTarget?(this.releaseBlocks(),this.moveToward(this.moveTarget,e,r)&&(this.anchor.copy(this.moveTarget),this.moveTarget=null),this.def.melee||this.tryAttack(e,!1)):this.focus?this.focusCombat(e,r):this.combat(e,r);this.animate(e),this.selRing&&(this.selRing.visible=t.selectedHero===this,this.selRing.rotation.y+=e),lf(this.bar,this.hp/this.maxHp)}focusCombat(e,t){let n=this.focus,r=this.def.melee?this.def.range+n.def.size*.5:this.def.range*.92;Math.hypot(n.pos.x-this.pos.x,n.pos.z-this.pos.z)>r?(this.releaseBlocks(),this.moveToward(n.pos,e,t),this.clampToMap(),this.anchor.copy(this.pos),this.def.melee||this.tryAttack(e,!1,n)):(this.anchor.copy(this.pos),this.def.melee?(!n.flying&&!n.blockedBy&&this.blockingCount()<this.blockCap&&(n.blockedBy=this),this.face(n.pos.x-this.pos.x,n.pos.z-this.pos.z,e),this.atkCD-=e,this.atkCD<=0&&!n.flying?this.meleeHit(n):n.flying&&(this.focus=null)):this.tryAttack(e,!0,n))}meleeHit(e){let t=this.game;this.atkCD=this.def.rate,this.attackAnim=.3,$.play(`swing`,.6),t.damageEnemy(e,this.def.atk*this.dmgMul,this.def.dtype,this);let n=e.centerClone(),r=this.kind===`hero`?this.def.color:this.id===`treant`?9099376:10148095;if(t.fx.burst(n,{count:10,color:r,intensity:2.5,speed:4,life:.3,size:.5}),t.fx.burst(n,{count:4,color:16777215,intensity:2,speed:7,life:.15,size:.3}),this.def.root&&e.alive){t.slowEnemy(e,.3,1.2);for(let e of t.units)e.alive&&!e.flying&&e.pos.distanceToSquared(this.pos)<16&&e.heal(18*t.healMul);t.fx.burst(this.pos.clone().setY(1),{count:6,color:9109370,intensity:2,speed:1.5,life:.8,size:.4,up:1.5,radius:1.5})}}combat(e,t){let n=this.game;if(this.def.melee){let r=this.blockCap,i=this.blockingCount();if(i<r){for(let e of n.enemies)if(!(!e.alive||e.flying||e.blockedBy)&&e.pos.distanceToSquared(this.pos)<(1.4+e.def.size*.6)**2&&(e.blockedBy=this,++i>=r))break}let a=null;for(let e of n.enemies)if(e.alive&&e.blockedBy===this){a=e;break}if(!a){let r=this.holdPos?this.def.range+.6:this.id===`wolf`?7:this.id===`golem`||this.id===`treant`?2.5:4,i=r*r;for(let e of n.enemies){if(!e.alive||e.flying)continue;let t=e.pos.distanceToSquared(this.anchor);t<i&&(i=t,a=e)}a?a.pos.distanceTo(this.pos)>this.def.range&&this.moveToward(a.pos,e,t):this.pos.distanceToSquared(this.anchor)>.05&&this.moveToward(this.anchor,e,t)}if(a){let t=a.pos.distanceTo(this.pos);this.face(a.pos.x-this.pos.x,a.pos.z-this.pos.z,e),this.atkCD-=e,t<=this.def.range+a.def.size*.5+.3&&this.atkCD<=0&&this.meleeHit(a)}else this.atkCD=Math.max(0,this.atkCD-e)}else this.pos.distanceToSquared(this.anchor)>.05&&this.moveToward(this.anchor,e,t),this.tryAttack(e,!0)}tryAttack(e,t,n=null){let r=this.game,i=(r.time<this.hasteUntil?2:1)*(r.time<this.avatarUntil?1.3:1);this.atkCD-=e*i;let a=null;if(a=n&&n.alive&&n.pos.distanceToSquared(this.pos)<=this.def.range*this.def.range?n:r.nearestEnemy(this.pos,this.def.range,!0),!a||(t&&this.face(a.pos.x-this.pos.x,a.pos.z-this.pos.z,e),this.atkCD>0))return;this.atkCD=this.def.rate,this.attackAnim=.25;let o=this.pos.clone().setY(1.6),s=this.def.atk*this.dmgMul;if(this.id===`ranger`){$.play(`arrow`,.7);let e=Math.random()<.2;r.spawnProjectile({from:o,target:a,speed:e?40:30,kind:`arrow`,color:e?16777215:8060842,onHit:(t,n)=>{n&&n.alive&&(this.critNext=e,r.damageEnemy(n,s,`phys`,this),this.critNext=!1),e&&(r.fx.burst(t,{count:14,color:8060842,color2:16777215,intensity:3,speed:6,life:.3,size:.5}),r.fx.ring(t.clone().setY(0),8060842,1.2,.25))}})}else this.id===`pyro`?($.play(`magic`,.5),r.spawnProjectile({from:o,target:a,speed:16,kind:`orb`,color:16738842,size:.22,onHit:(e,t)=>{t&&t.alive&&(r.damageEnemy(t,s,`magic`,this),r.burnEnemy(t,10,2)),r.fx.burst(e,{count:10,color:16738842,intensity:3,speed:4,life:.3,size:.5})}})):this.id===`frost`?($.play(`magic`,.5),r.spawnProjectile({from:o,target:a,speed:16,kind:`orb`,color:8378623,size:.2,onHit:(e,t)=>{t&&t.alive&&(r.damageEnemy(t,s,`magic`,this),r.slowEnemy(t,.7,1.5)),r.fx.burst(e,{count:10,color:12577023,intensity:2,speed:4,life:.3,size:.5})}})):this.id===`phoenix`&&($.play(`fire`,.4),r.spawnProjectile({from:this.pos.clone(),target:a,speed:18,kind:`orb`,color:16747050,size:.3,onHit:(e,t)=>{r.fx.explosion(e,16742938,.4,{noDecal:!0});for(let t of r.enemiesInRadius(e,1.8,!0))r.damageEnemy(t,s,`magic`,this),r.burnEnemy(t,15,2)}}))}updateFlying(e){this.orbitA+=e*1.2;let t=this.anchor.x+Math.cos(this.orbitA)*3,n=this.anchor.z+Math.sin(this.orbitA)*3,r=t-this.pos.x,i=n-this.pos.z;this.pos.x=t,this.pos.z=n,this.pos.y=3.2+Math.sin(this.t*2)*.3,this.face(r,i,e);let a=this.mesh.userData.parts;a.wings&&a.wings.forEach((e,t)=>e.rotation.z=(t?-1:1)*Math.sin(this.t*8)*.5),this.game.fx.trail(this.pos,16742938,1.4,.6,.2,2.5),Math.random()<.5&&this.game.fx.trail(this.pos,16765527,.8,.9,.5,2);let o=this.game.nearestEnemy(this.anchor,9,!0);o&&this.anchor.lerp(o.pos,Math.min(1,e*.8)),this.tryAttack(e,!1)}animate(e){let t=this.mesh.userData.parts,n=+!!this.walking,r=this.t;this.attackAnim>0&&(this.attackAnim-=e),t.legs&&t.legs.length===2?(t.legs[0].rotation.x=Math.sin(r*12)*.7*n,t.legs[1].rotation.x=-Math.sin(r*12)*.7*n):t.legs&&t.legs.forEach((e,t)=>e.rotation.x=Math.sin(r*16+t%2*Math.PI)*.6*n),t.arms&&t.arms.length===2&&(this.kind===`hero`?(t.arms[0].rotation.x=-Math.sin(r*12)*.5*n,t.arms[1].rotation.x=this.attackAnim>0?-2.2*(this.attackAnim/.3):Math.sin(r*12)*.5*n):t.arms.forEach((e,t)=>e.rotation.x=this.attackAnim>0?-1.8:Math.sin(r*4+t*Math.PI)*.3*n));let i=this.mesh.userData.body;if(i.position.y=this.walking?Math.abs(Math.sin(r*12))*.08:Math.sin(r*2)*.02,t.orb&&Math.random()<e*10){let e=t.orb.getWorldPosition(af);this.game.fx.trail(e,this.id===`pyro`?16738842:8378623,.5,.5,.05,2)}this.id===`treant`&&Math.random()<e*4&&this.game.fx.trail(af.copy(this.pos).add(of.set(Q(-.8,.8),Q(1.5,3),Q(-.8,.8))),9109370,.5,1.2,.1,1.8),this.id===`wolf`&&Math.random()<e*8&&this.game.fx.trail(af.copy(this.pos).setY(.7),6994175,.7,.5,.3,1.5)}destroy(){this.game.scene.remove(this.mesh)}},hf={arrow:(()=>{let e=new Fi(.03,.03,.8,4);return e.rotateX(Math.PI/2),e})(),orb:new $a(1,1),shell:new $a(.22,1)},gf=new vo({color:2236968,metalness:.6,roughness:.4}),_f=class{constructor(e,t){this.game=e,this.o=t,this.pos=t.from.clone(),this.start=t.from.clone(),this.target=t.target||null,this.targetPos=t.targetPos?t.targetPos.clone():t.target?t.target.centerClone():this.pos.clone(),this.speed=t.speed||15,this.alive=!0,this.t=0;let n;t.kind===`arrow`?n=new G(hf.arrow,Pd(t.color||16769184,2)):t.kind===`shell`?n=new G(hf.shell,gf):t.kind===`mesh`?n=t.mesh:(n=new G(hf.orb,Pd(t.color||16777215,4)),n.scale.setScalar(t.size||.25)),this.mesh=n,n.position.copy(this.pos),e.scene.add(n),t.arc&&(this.flatDist=Math.hypot(this.targetPos.x-this.start.x,this.targetPos.z-this.start.z),this.travel=0)}update(e){let t=this.game,n=this.o;if(this.t+=e,this.target&&this.target.alive&&this.targetPos.copy(this.target.center),n.arc){this.travel+=this.speed*e;let r=Math.min(1,this.travel/Math.max(.01,this.flatDist));this.pos.lerpVectors(this.start,this.targetPos,r),this.pos.y=this.start.y*(1-r)+this.targetPos.y*r+Math.sin(r*Math.PI)*n.arc,Math.random()<.6&&t.fx.burst(this.pos,{count:1,color:7829367,smoke:!0,speed:.3,life:.6,size:.6,sizeEnd:1.2,alpha:.4}),this.mesh.position.copy(this.pos),r>=1&&this.hit();return}let r=af.subVectors(this.targetPos,this.pos),i=r.length(),a=this.speed*e;i<=a||i<.2?(this.pos.copy(this.targetPos),this.hit()):(r.multiplyScalar(1/i),this.pos.addScaledVector(r,a),this.mesh.position.copy(this.pos),(n.kind===`arrow`||n.kind===`mesh`)&&this.mesh.lookAt(of.copy(this.pos).add(r)),n.kind===`arrow`?t.fx.trail(this.pos,n.color||16769184,.35,.18,.02,1.2):n.kind===`orb`&&(t.fx.trail(this.pos,n.color,(n.size||.25)*4,.35,.05,2.5),Math.random()<.5&&t.fx.trail(this.pos,16777215,(n.size||.25)*2,.2,.1,1.5)),n.onTrail&&n.onTrail(this.pos,e),this.t>8&&this.hit())}hit(){this.alive&&(this.alive=!1,this.game.scene.remove(this.mesh),this.o.kind===`mesh`&&this.mesh.traverse(e=>{e.isMesh&&e.geometry&&e.geometry.dispose()}),this.o.onHit&&this.o.onHit(this.pos.clone(),this.target))}},vf=(e,t,n)=>new V(e,t,n);function yf(e,t,{color:n,height:r=18,speed:i=30,size:a=.6,onHit:o,offset:s=6,meshFn:c}){let l=vf(t.x-s*.6,r,t.z-s);e.spawnProjectile({from:l,targetPos:t.clone(),speed:i,kind:c?`mesh`:`orb`,mesh:c?c():void 0,color:n,size:a,onTrail:t=>{e.fx.trail(t,n,a*5,.5,a*.6,2.5),e.fx.trail(t,16777215,a*2.5,.25,a*.3,2)},onHit:o})}function bf(e,t,n,r=10,i=1.6){let a=new U,o=Y(12577023,{emissive:4892927,ei:.8,rough:.1,transparent:!0,opacity:.85});for(let e=0;e<r;e++){let e=Math.random()*Math.PI*2,r=Math.sqrt(Math.random())*n,i=new G(new Ii(.2+Math.random()*.2,1+Math.random()*1.2,5),o);i.position.set(t.x+Math.cos(e)*r,0,t.z+Math.sin(e)*r),i.rotation.set(Q(-.4,.4),0,Q(-.4,.4)),i.userData.h=i.geometry.parameters.height,a.add(i)}e.scene.add(a);let s=0;e.fx.add({update:e=>{s+=e;let t=s<.15?s/.15:s>i-.4?Math.max(0,(i-s)/.4):1;return a.children.forEach(e=>{e.scale.set(1,t,1),e.position.y=e.userData.h*.5*t-.1}),s<i},dispose:()=>{e.scene.remove(a),a.children.forEach(e=>e.geometry.dispose())}})}function xf(e,t,n,r,i,a){for(let o of e.enemiesInRadius(t,n,!0))e.damageEnemy(o,r,`magic`,a),e.freezeEnemy(o,o.boss?i*.4:i)}function Sf(e,t,n,r,i,a,o,s={}){let c=e.fx.circle(t,i,n,a);e.zones.push({pos:t.clone(),radius:n,dur:r,t:0,circ:c,update(e){return this.t+=e,o(e,this),this.t>=this.dur?(c.kill(),s.onEnd&&s.onEnd(),!1):!0}})}function Cf(e,t,n){return e.nearestEnemy(t,n,!0)}function wf(e,t,n,r){r*=e.healMul;for(let i of e.units)i.alive&&!i.flying&&i.pos.distanceToSquared(t)<=n*n&&(i.heal(r),e.fx.burst(i.pos.clone().setY(1),{count:20,color:7143322,intensity:2.5,speed:2,life:1,size:.6,up:2}),e.ui.floatText(i.pos.clone().setY(2.5),`+${Math.round(r)}`,`#6cff9a`))}function Tf(e,t,n,r){let i=e.fx,a={card:t,mul:e.cardPower(t)},o=J[t];switch(n&&o.target===`point`&&i.sigil(n,new W(o.color).getHex(),(o.radius||1.5)*1.1,.9,{spin:3,light:!1}),t){case`fireball`:$.play(`fire`),yf(e,n,{color:16738842,size:.5,speed:34,onHit:t=>{t.y=0,i.explosion(t,16738842,1.2),i.shake(.35),$.play(`explode`);for(let n of e.enemiesInRadius(t,2.5,!0))e.damageEnemy(n,180,`magic`,a),e.burnEnemy(n,25,3)}});break;case`frostnova`:$.play(`freeze`),i.ring(n,12577023,3.5,.6),i.ring(n,5945599,4.5,.9),i.burst(n.clone().setY(.5),{count:80,color:14743807,color2:5945599,intensity:2,speed:10,flat:!0,life:.7,size:.8,drag:3}),i.burst(n.clone().setY(.5),{count:30,color:16777215,intensity:2,speed:4,life:1.2,size:.4,up:3,gravity:3}),i.light(n,8378623,6,10,.5),i.screenFlash(`rgba(150,220,255,0.6)`,.35),bf(e,n,3.5,14,2.5),xf(e,n,3.5,60,2.5,a);break;case`chain`:{$.play(`thunder`,.8);let t=Cf(e,n,3.5),r=vf(n.x,16,n.z);if(!t){i.lightning(r,n.clone(),11057407,.3,.3),i.light(n,11057407,6,8,.3);break}let o=new Set,s=r,c=0,l=()=>{if(!t||c>=8+e.chainBonus)return;o.add(t);let n=t.centerClone();i.lightning(s,n,11057407,c===0?.3:.18,.3),i.light(n,9087231,4,7,.2),e.damageEnemy(t,110,`magic`,a),e.stunEnemy(t,.3),$.play(`zap`),s=n;let r=null,u=36;for(let n of e.enemies){if(!n.alive||o.has(n))continue;let e=n.pos.distanceToSquared(t.pos);e<u&&(u=e,r=n)}t=r,c++,e.later(.08,l)};l();break}case`meteor`:{$.play(`meteor`);let t=i.circle(n,16730650,4,1);yf(e,n,{color:16738842,size:1,speed:22,height:30,offset:14,meshFn:()=>new G(new Ri(1.3,0),Y(3809312,{emissive:16730650,ei:1.2})),onHit:n=>{t.kill(),n.y=0,i.explosion(n,16734746,3),i.explosion(n,16765527,1.5,{noDecal:!0}),i.ring(n,16755285,8,.8),i.burst(n,{count:40,color:3809312,color2:1708048,smoke:!1,intensity:1,speed:14,life:1.4,size:.8,gravity:18,up:6}),i.pillar(n,16742954,2.5,14,.5,.05),i.shake(1.3),i.screenFlash(`rgba(255,180,90,0.8)`,.6),$.play(`bigexplode`);for(let t of e.enemiesInRadius(n,4,!0))e.damageEnemy(t,700,`magic`,a),e.burnEnemy(t,30,4),e.stunEnemy(t,.8)}});break}case`heal`:$.play(`heal`),i.pillar(n,7143322,2.2,16,1.2),i.ring(n,7143322,5,.9),i.burst(n,{count:60,color:7143322,color2:16777215,intensity:2.5,speed:2,life:1.5,size:.6,up:3,radius:3,drag:1}),wf(e,n,5,300);break;case`golem`:{Ef(e,n,4907263);let t=new mf(e,`summon`,`golem`,n.clone().setY(0),30);e.units.push(t),i.shake(.5);break}case`wolves`:Ef(e,n,6994175);for(let t=0;t<3;t++){let r=t/3*Math.PI*2;e.units.push(new mf(e,`summon`,`wolf`,vf(n.x+Math.cos(r),0,n.z+Math.sin(r)),22))}break;case`blizzard`:$.play(`freeze`),Sf(e,n,4.5,6,10475775,1,(t,r)=>{for(let e=0;e<6;e++){let e=Math.random()*Math.PI*2,t=Math.sqrt(Math.random())*4.5;i.glow.emit({x:n.x+Math.cos(e)*t,y:6+Math.random()*2,z:n.z+Math.sin(e)*t,vx:3,vy:-9,vz:1,life:.8,size:.45,sizeEnd:.3,color:i.col(15268095,1.5),drag:0})}Math.random()<t*3&&i.burst(n.clone().setY(.3),{count:6,color:16777215,smoke:!0,speed:3,flat:!0,life:1.2,size:2,sizeEnd:3,alpha:.25,radius:3});for(let r of e.enemiesInRadius(n,4.5,!0))r.zoneSlow=.5,e.damageEnemy(r,50*t,`magic`,a,!0)});break;case`poison`:$.play(`void`,.6),Sf(e,n,3.2,8,8060730,1,t=>{Math.random()<t*14&&i.burst(n.clone().setY(.3),{count:1,color:4885018,smoke:!0,speed:.6,life:2,size:2.5,sizeEnd:4,alpha:.35,radius:2.5,up:.5}),Math.random()<t*20&&i.burst(n.clone().setY(.1),{count:1,color:10288970,intensity:2,speed:.5,life:1.2,size:.5,sizeEnd:.8,radius:2.8,up:1.2});for(let r of e.enemiesInRadius(n,3.2,!0))e.damageEnemy(r,40*t,`magic`,a,!0)});break;case`thunder`:{let t=Cf(e,n,2.5),r=t?t.centerClone():n.clone();$.play(`thunder`),i.lightning(vf(r.x+1,22,r.z-2),r,16773754,.45,.4),i.lightning(vf(r.x-1,22,r.z-1),r,16777215,.25,.3,!1),i.ring(r.clone().setY(0),16773754,2.5,.4),i.light(r,16773754,10,12,.4),i.screenFlash(`rgba(255,250,200,0.9)`,.4),i.shake(.4),i.scorch(r.clone().setY(0),1.2),t&&(e.damageEnemy(t,320,`magic`,a),e.stunEnemy(t,1));break}case`blackhole`:{$.play(`void`);let t=new G(new ao(.7,16,12),new Kr({color:0}));t.position.set(n.x,1.2,n.z),e.scene.add(t);let r=new G(new oo(1,.08,6,32),Pd(11951359,4));r.position.copy(t.position),e.scene.add(r),Sf(e,n,5,4,10107647,3,(o,s)=>{let c=Math.min(1,s.t*3)*(s.t>3.6?(4-s.t)/.4:1);t.scale.setScalar(c),r.scale.setScalar(c*(1+Math.sin(s.t*20)*.05)),r.rotation.x=s.t*2,r.rotation.y=s.t*3;for(let e=0;e<6;e++){let e=Math.random()*Math.PI*2,t=4+Math.random()*1.5,r=n.x+Math.cos(e)*t,a=n.z+Math.sin(e)*t;i.glow.emit({x:r,y:.3+Math.random()*2,z:a,vx:(n.x-r)*1.6-Math.sin(e)*4,vy:.4,vz:(n.z-a)*1.6+Math.cos(e)*4,life:.6,size:.6,sizeEnd:.1,color:i.col(Math.random()<.5?11951359:5933823,2.5),drag:0})}for(let t of e.enemiesInRadius(n,5,!0)){t.zoneSlow=.05,t.lateral*=1-o*2;let r=t.path.at(t.dist+.5),i=t.pos.distanceToSquared(n);r.distanceToSquared(n)<i?t.dist+=o*2.5:t.dist=Math.max(0,t.dist-o*2.5),e.damageEnemy(t,90*o,`magic`,a,!0)}},{onEnd:()=>{e.scene.remove(t),e.scene.remove(r),t.geometry.dispose(),r.geometry.dispose(),i.explosion(n.clone().setY(1),11951359,1.5,{noDecal:!0}),i.shake(.5),$.play(`explode`);for(let t of e.enemiesInRadius(n,5,!0))e.damageEnemy(t,150,`magic`,a)}});break}case`timestop`:{$.play(`freeze`),$.play(`void`,.5),e.timeStopUntil=e.time+3.5,i.screenFlash(`rgba(255,233,168,0.9)`,.6);let t=e.world.basePos.clone().set(0,0,0);i.ring(t,16771496,30,1.2),i.ring(t,16777215,20,.8);for(let t of e.enemies)i.burst(t.centerClone(),{count:12,color:16771496,intensity:2.5,speed:2,life:1,size:.6});e.ui.banner(`⏳ 时间停滞`,`#ffe9a8`);break}case`goldrush`:{$.play(`coin`),e.later(.15,()=>$.play(`coin`)),e.later(.3,()=>$.play(`coin`)),e.addGold(70);let t=e.world.basePos.clone();i.burst(t.clone().setY(3),{count:60,color:16765527,intensity:2.5,speed:7,life:1.5,size:.6,gravity:12,up:6}),e.ui.floatText(t.setY(4),`+70 💰`,`#ffd257`,!0);break}case`wisdom`:$.play(`cast`),e.mana=Math.min(e.maxMana,e.mana+2),e.drawCards(1);break;case`drums`:$.play(`boss`,.4),e.buffs.towerHaste=e.time+10;for(let t of e.towers)i.ring(t.pos,16734778,2.5,.6),i.burst(t.pos.clone().setY(2),{count:15,color:16743002,intensity:2.5,speed:3,life:.6,size:.6,up:2});e.ui.banner(`🥁 狂暴战鼓！`,`#ff7a5a`);break;case`blessing`:$.play(`heal`),e.buffs.heroDmg=e.time+10;for(let t of e.units)t.kind===`hero`&&t.alive&&(t.heal(150*e.healMul),i.pillar(t.pos,16773800,1,14,1),i.burst(t.pos.clone().setY(1),{count:25,color:16773800,intensity:3,speed:3,life:1,size:.6,up:2}));e.ui.banner(`👼 神圣祝福`,`#fff2a8`);break;case`repair`:{$.play(`heal`),e.lives=Math.min(e.maxLives+10,e.lives+4);let t=e.world.basePos;i.pillar(t,11075568,2.5,20,1.3),i.ring(t,11075568,5,.8),i.burst(t.clone().setY(2),{count:50,color:11075568,intensity:2.5,speed:4,life:1.2,size:.7,up:3}),e.ui.floatText(t.clone().setY(5),`+4 ❤`,`#a8fff0`,!0);break}case`quake`:$.play(`bigexplode`,.7),$.play(`stomp`),i.shake(1.5);for(let t of e.enemies.slice())t.alive&&!t.flying&&(i.burst(t.pos,{count:10,color:9075290,smoke:!0,speed:3,flat:!0,life:1,size:1.4,sizeEnd:2.5,alpha:.6}),i.burst(t.pos,{count:6,color:5917242,speed:6,life:.9,size:.4,gravity:18,up:5,intensity:.8}),e.slowEnemy(t,.5,3),e.damageEnemy(t,120,`phys`,a));i.ring(vf(0,0,0),14196832,25,1);break;case`firewall`:$.play(`fire`),Sf(e,n,3,6,16742938,1,(t,r)=>{for(let e=0;e<5;e++){let t=Math.random()*5,a=r.t*6+t*1.2+Math.random()*.5+e*1.256,o=.5+t*.35;i.glow.emit({x:n.x+Math.cos(a)*o,y:t,z:n.z+Math.sin(a)*o,vx:-Math.sin(a)*4,vy:2.5,vz:Math.cos(a)*4,life:.5,size:1.2-t*.1,sizeEnd:.2,color:i.col(Math.random()<.3?16765527:16734746,2.5),color2:i.col(6689024,1),drag:1})}Math.random()<t*4&&$.play(`fire`,.3);for(let r of e.enemiesInRadius(n,3,!0))e.damageEnemy(r,70*t,`magic`,a,!0)}),i.light(n,16738842,6,10,6);break;case`icelance`:$.play(`freeze`),yf(e,n,{color:10479871,size:.4,speed:45,meshFn:()=>{let e=new G(new Ii(.35,4,6),Y(14743807,{emissive:5945599,ei:1.5}));return e.geometry.rotateX(Math.PI/2),e},offset:4,onHit:t=>{t.y=0,i.ring(t,10479871,2.5,.5),i.burst(t.clone().setY(.5),{count:50,color:14743807,color2:5945599,intensity:2,speed:8,life:.6,size:.6,up:2}),i.light(t,8378623,6,8,.4),i.shake(.3),bf(e,t,1.8,8,2.2),xf(e,t,1.8,200,2,a)}});break;case`foresight`:$.play(`cast`),e.drawCards(2);break;case`orbital`:$.play(`beam`),i.pillar(n,16777215,2.2,40,3.2,.15),i.pillar(n,9091327,3,40,3.2,.3),i.screenFlash(`rgba(255,255,255,0.7)`,.4),Sf(e,n,2.2,3.2,12572927,1,t=>{i.burst(n.clone().setY(.2),{count:4,color:16777215,color2:9091327,intensity:3,speed:7,flat:!0,life:.4,size:.5}),Math.random()<t*10&&i.shake(.05);for(let r of e.enemiesInRadius(n,2.2,!0))e.damageEnemy(r,260*t,`magic`,a,!0)},{onEnd:()=>i.scorch(n,2.5)}),i.light(n,12572927,10,14,3.2);break;case`revive`:$.play(`summon`);for(let t of e.units)t.kind===`hero`&&(t.alive||t.revive(),t.cds=[0,0,0],i.pillar(t.pos,16775376,1,16,1));e.ui.banner(`🕊️ 英灵归来`,`#fff8d0`);break;case`phoenix`:{Ef(e,n,16747050),i.explosion(n.clone().setY(1),16755251,1,{noDecal:!0}),$.play(`fire`);let t=new mf(e,`summon`,`phoenix`,n.clone(),18);e.units.push(t);break}case`empower`:if(!r)return!1;$.play(`upgrade`),r.dmgMul*=1.35,i.pillar(r.pos,6091007,1.2,14,1),i.burst(r.pos.clone().setY(2),{count:40,color:6091007,intensity:3,speed:4,life:1,size:.6,up:2}),e.ui.floatText(r.pos.clone().setY(4),`伤害 +35%`,`#5cf0ff`,!0);break;case`arcanemissile`:{$.play(`magic`);let t=e.enemiesInRadius(n,4,!0);for(let r=0;r<6;r++)e.later(r*.09,()=>{let o=t.filter(e=>e.alive),s=o.length?o[r%o.length]:null,c=vf(n.x+Q(-3,3),9+Q(0,3),n.z+Q(-6,-3));$.play(`magic`,.5),e.spawnProjectile({from:c,target:s,targetPos:s?void 0:n.clone().add(vf(Q(-2,2),0,Q(-2,2))),speed:18,kind:`orb`,color:14711551,size:.22,onHit:(t,n)=>{i.burst(t,{count:14,color:14711551,intensity:3,speed:5,life:.4,size:.6}),i.light(t,14711551,2,5,.15),n&&n.alive&&e.damageEnemy(n,70,`magic`,a)}})});break}case`entangle`:$.play(`swing`),$.play(`stomp`,.4),i.ring(n,7003978,2.8,.6),i.burst(n.clone().setY(.3),{count:50,color:7003978,color2:2779674,intensity:2,speed:5,flat:!0,life:.8,size:.6,radius:1.5});for(let e=0;e<14;e++){let e=Math.random()*Math.PI*2,t=Math.sqrt(Math.random())*2.8;i.burst(vf(n.x+Math.cos(e)*t,.1,n.z+Math.sin(e)*t),{count:4,color:9109338,intensity:2,speed:1,life:.9,size:.5,up:3,drag:1})}for(let t of e.enemiesInRadius(n,2.8,!1))e.damageEnemy(t,80,`magic`,a),e.stunEnemy(t,2.5),e.slowEnemy(t,.5,3.5);break;case`bounty`:$.play(`coin`),e.later(.12,()=>$.play(`coin`)),e.buffs.bounty=e.time+15,e.ui.banner(`📜 赏金令`,`#ffc040`,`15 秒内击杀金币翻倍`),i.burst(e.world.basePos.clone().setY(3),{count:40,color:16760896,intensity:2.5,speed:5,life:1.2,size:.5,up:4,gravity:8});break;case`overclock`:if(!r||r.def.support)return r&&e.ui.toast(`法力之泉无法超载`),!1;$.play(`zap`),$.play(`upgrade`,.6),r.overclockUntil=e.time+15,i.ring(r.pos,6091007,2.5,.5),i.lightning(vf(r.pos.x,14,r.pos.z),r.pos.clone().setY(3),6091007,.25,.3,!1),i.burst(r.pos.clone().setY(2.5),{count:40,color:6091007,intensity:3,speed:5,life:.7,size:.5}),e.ui.floatText(r.pos.clone().setY(4),`攻速 +100%`,`#5cf0ff`,!0);break;case`judgment`:$.play(`heal`),$.play(`thunder`,.6),i.screenFlash(`rgba(255,240,180,0.7)`,.5),i.shake(.5),e.enemies.filter(e=>e.alive).forEach((t,n)=>{n<24&&i.pillar(t.pos,16773280,t.boss?1.6:.6,16,.7),t.shieldedUntil=0,t.barrierUntil=0,e.damageEnemy(t,150+t.maxHp*(t.boss?.04:.1)/(a.mul||1),`magic`,a)}),e.ui.banner(`⚖️ 末日审判`,`#fff0a0`);break;case`supernova`:{$.play(`nova`);let t=new G(new ao(1,20,14),Pd(16761087,6));t.position.set(n.x,2,n.z),e.scene.add(t),i.sigil(n,16751359,5.5,2.2,{spin:6}),Sf(e,n,5.5,2,16743167,3,(r,a)=>{let o=1.6-a.t*.7;t.scale.setScalar(Math.max(.15,o)*(1+Math.sin(a.t*30)*.08));for(let e=0;e<5;e++){let e=Math.random()*Math.PI*2,t=5+Math.random(),r=n.x+Math.cos(e)*t,a=n.z+Math.sin(e)*t;i.glow.emit({x:r,y:.5+Math.random()*3,z:a,vx:(n.x-r)*2.2,vy:.6,vz:(n.z-a)*2.2,life:.45,size:.6,sizeEnd:.1,color:i.col(Math.random()<.5?16751359:16769184,3),drag:0})}for(let t of e.enemiesInRadius(n,5.5,!0))t.zoneSlow=.15,t.path.at(t.dist+.5).distanceToSquared(n)<t.pos.distanceToSquared(n)?t.dist+=r*2:t.dist=Math.max(0,t.dist-r*2),t.lateral*=1-r*2},{onEnd:()=>{e.scene.remove(t),t.geometry.dispose();let r=n.clone().setY(1.5);i.explosion(r,16751359,2.6),i.explosion(r,16777215,1.4,{noDecal:!0}),i.ring(n,16777215,7,.6),i.ring(n,16751359,9,1),i.pillar(n,16761087,3,30,1),i.light(n,16751359,12,20,.8),i.shake(1.2),i.screenFlash(`rgba(255,200,255,0.85)`,.5),$.play(`bigexplode`);for(let t of e.enemiesInRadius(n,5.5,!0))e.damageEnemy(t,1100,`magic`,a),e.stunEnemy(t,1.5)}});break}case`inferno`:$.play(`fire`),i.light(n,16730650,8,12,1.2);for(let t=0;t<3;t++)e.later(t*.28,()=>{let r=1.5+t*1.5;$.play(`explode`,.7),i.ring(n,16738842,r+.6,.45);let o=6+t*5;for(let e=0;e<o;e++){let a=e/o*Math.PI*2+t,s=vf(n.x+Math.cos(a)*r,.3,n.z+Math.sin(a)*r);i.burst(s,{count:8,color:16765527,color2:16726538,intensity:3,speed:3,life:.6,size:1.2,sizeEnd:.2,up:4})}i.shake(.25);let s=t===0?0:1.5+(t-1)*1.5-.3;for(let t of e.enemiesInRadius(n,r+.8,!0))t.pos.distanceTo(n)<s||(e.damageEnemy(t,130,`magic`,a),e.burnEnemy(t,25,3))});e.later(.9,()=>i.scorch(n,4));break;case`glacier`:{$.play(`freeze`),i.screenFlash(`rgba(170,230,255,0.5)`,.3),bf(e,n,2.2,22,5),i.ring(n,12577023,3,.5);let t={alive:!0,takeDamage(){},pos:n};Sf(e,n,2.2,5,11069695,1,r=>{Math.random()<r*10&&i.burst(n.clone().setY(.5),{count:2,color:16777215,color2:8378623,intensity:1.5,speed:1,life:1,size:.4,radius:2,up:.8});for(let r of e.enemiesInRadius(n,2.2,!1))!r.blockedBy&&!r.boss&&(r.blockedBy=t)},{onEnd:()=>{t.alive=!1,$.play(`freeze`),i.burst(n.clone().setY(1),{count:90,color:14743807,color2:5945599,intensity:2.5,speed:9,life:.8,size:.6,gravity:10,up:3}),i.ring(n,10479871,3.5,.5),i.shake(.4),xf(e,n,3,220,1,a)}});break}case`tempest`:{$.play(`thunder`,.6);let t=vf(n.x,9,n.z),r=0;Sf(e,n,4,6,10139903,1,o=>{for(let e=0;e<3;e++)i.burst(vf(t.x+Q(-4,4),t.y+Q(-.6,.6),t.z+Q(-4,4)),{count:1,color:3817568,smoke:!0,speed:.4,life:1.2,size:3.5,sizeEnd:4.5,alpha:.35});if(Math.random()<o*6&&i.burst(vf(t.x+Q(-3,3),t.y,t.z+Q(-3,3)),{count:2,color:11061503,intensity:3,speed:2,life:.2,size:1.2}),r+=o,r>=.4){r=0;let o=e.enemiesInRadius(n,4,!0),s=o.length?o[Math.floor(Math.random()*o.length)]:null,c=s?s.centerClone():vf(n.x+Q(-3,3),0,n.z+Q(-3,3));i.lightning(vf(c.x+Q(-1,1),t.y,c.z+Q(-1,1)),c,12110079,.2,.25),i.light(c,10139903,4,7,.15),$.play(`zap`,.6),s&&(e.damageEnemy(s,120,`magic`,a),e.stunEnemy(s,.2))}});break}case`static`:{$.play(`zap`);let t=new Set;Sf(e,n,3,5,13162751,1,r=>{if(Math.random()<r*8){let e=Math.random()*Math.PI*2,t=e+Q(.5,2);i.lightning(vf(n.x+Math.cos(e)*2.8,.3,n.z+Math.sin(e)*2.8),vf(n.x+Math.cos(t)*2.8,.3,n.z+Math.sin(t)*2.8),13162751,.06,.15,!1)}let o=new Set(e.enemiesInRadius(n,3,!0));for(let t of o)t.zoneSlow=Math.min(t.zoneSlow||1,.65),e.damageEnemy(t,45*r,`magic`,a,!0);for(let n of t)!o.has(n)&&n.alive&&(e.stunEnemy(n,.6),i.burst(n.centerClone(),{count:8,color:13162751,intensity:3,speed:3,life:.3,size:.4}));t.clear(),o.forEach(e=>t.add(e))});break}case`echo`:{let t=e.lastCard;if(!t||e.hand.length>=e.maxHand)return e.ui.toast(t?`手牌已满`:`还没有可以回响的卡牌`),!1;$.play(`magic`),e.hand.push(t),e.ui.toast(`🔁 回响：「${J[t].name}」加入手牌`),i.sigil(e.world.basePos,13672703,3,1);break}case`thorns`:{$.play(`void`,.4);let t=new U,r=Y(4885034,{emissive:2779674,ei:.6});for(let e=0;e<16;e++){let e=Math.random()*Math.PI*2,i=Math.sqrt(Math.random())*3,a=new G(new Ii(.12,.9+Math.random()*.6,4),r);a.position.set(n.x+Math.cos(e)*i,0,n.z+Math.sin(e)*i),a.rotation.set(Q(-.6,.6),0,Q(-.6,.6)),t.add(a)}e.scene.add(t),Sf(e,n,3.2,7,8052570,1,(r,o)=>{let s=Math.min(1,o.t*4)*(o.t>6.6?(7-o.t)/.4:1);t.children.forEach(e=>{e.scale.y=Math.max(.01,s),e.position.y=.4*s}),Math.random()<r*8&&i.burst(n.clone().setY(.2),{count:1,color:10157930,intensity:2,speed:.5,life:1,size:.4,radius:3,up:1});for(let t of e.enemiesInRadius(n,3.2,!1))t.zoneSlow=Math.min(t.zoneSlow||1,.6),e.damageEnemy(t,45*r,`true`,a,!0)},{onEnd:()=>{e.scene.remove(t),t.children.forEach(e=>e.geometry.dispose())}});break}case`treant`:Ef(e,n,9099376),i.burst(n.clone().setY(.2),{count:40,color:6965802,smoke:!0,speed:3,flat:!0,life:1,size:1.4,sizeEnd:2.5,alpha:.5}),e.units.push(new mf(e,`summon`,`treant`,n.clone().setY(0),28)),i.shake(.4);break;case`smite`:$.play(`heal`),$.play(`thunder`,.5),i.pillar(n,16773280,2.2,30,.7,.04),i.pillar(n,16777215,.8,30,.6,.04),i.flashSphere(n,16769152,2.5,.4),i.ring(n,16773280,3.5,.5),i.burst(n.clone().setY(.5),{count:60,color:16777215,color2:16765527,intensity:3,speed:8,flat:!0,life:.6,size:.6}),i.screenFlash(`rgba(255,245,200,0.6)`,.3),i.shake(.4);for(let t of e.enemiesInRadius(n,2.2,!0))e.damageEnemy(t,t.boss||t.def.phase?480:240,`true`,a);break;case`sanctuary`:$.play(`heal`),i.pillar(n,16771240,3.8,4,8,.4),Sf(e,n,4,8,16771240,1,t=>{Math.random()<t*12&&i.burst(n.clone().setY(.1),{count:1,color:16773832,intensity:2,speed:.3,life:1.6,size:.5,radius:3.5,up:1.5});for(let r of e.units)!r.alive||r.flying||r.pos.distanceToSquared(n)>16||(r.heal(60*e.healMul*t),r.sancUntil=e.time+.3);for(let t of e.enemiesInRadius(n,4,!0))t.sanctified=e.time+.3});break;case`armageddon`:$.play(`meteor`),i.screenFlash(`rgba(255,120,40,0.6)`,.6),e.ui.banner(`🔥 天启降临`,`#ff7a1a`);for(let t=0;t<14;t++)e.later(.2+t*.16,()=>{let t=e.enemies.filter(e=>e.alive),n=t.length?t[Math.floor(Math.random()*t.length)]:null;yf(e,n?vf(n.pos.x,0,n.pos.z):vf(Q(-18,18),0,Q(-12,12)),{color:16738842,size:.7,speed:34,height:26,offset:12,meshFn:()=>new G(new Ri(.8,0),Y(3809312,{emissive:16730650,ei:1.5})),onHit:t=>{t.y=0,i.explosion(t,16734746,1.4),i.shake(.5),$.play(`explode`,.6);for(let n of e.enemiesInRadius(t,2.4,!0))e.damageEnemy(n,400,`magic`,a),e.burnEnemy(n,30,4)}})});break;case`apotheosis`:{let t=e.selectedHero&&e.selectedHero.alive?e.selectedHero:e.units.find(e=>e.kind===`hero`&&e.alive);if(!t)return e.ui.toast(`需要一名存活的英雄`),!1;$.play(`levelup`),$.play(`summon`),t.avatarUntil=e.time+12,t.cds=[0,0,0],t.heal(t.maxHp),i.pillar(t.pos,16769126,2,40,1.5,.1),i.sigil(t.pos,16769126,4,2,{spin:4}),i.burst(t.pos.clone().setY(1),{count:120,color:16777215,color2:16765527,intensity:3,speed:9,life:1.2,size:.8,up:3}),i.screenFlash(`rgba(255,240,170,0.8)`,.5),i.shake(.6),e.ui.banner(`👑 ${t.def.name} 神威降临`,`#ffe066`);break}case`maelstrom`:{$.play(`thunder`),$.play(`void`,.5),i.screenFlash(`rgba(170,190,255,0.7)`,.4);let t=new U;for(let e=0;e<12;e++){let r=e/12*Math.PI*2,i=new G(new Fi(.06,.06,7,4),Pd(10535167,3));i.position.set(n.x+Math.cos(r)*6,3.5,n.z+Math.sin(r)*6),t.add(i)}e.scene.add(t);let r=0;Sf(e,n,6,5,10535167,1,(o,s)=>{t.rotation.y=0;let c=Math.min(1,s.t*3)*(s.t>4.6?(5-s.t)/.4:1);if(t.children.forEach(e=>{e.scale.y=Math.max(.01,c)}),i.vortex(n,10535167,6,4,{swirl:8,inward:.6,h:5,life:.7,size:.4}),r+=o,r>.15){r=0;let e=Math.random()*Math.PI*2;i.lightning(vf(n.x+Math.cos(e)*6,Q(1,6),n.z+Math.sin(e)*6),vf(n.x+Q(-3,3),Q(.3,2),n.z+Q(-3,3)),10535167,.12,.2,!1),$.play(`zap`,.3)}for(let t of e.enemiesInRadius(n,6,!0))t.zoneSlow=.02,e.damageEnemy(t,300*o,`magic`,a,!0),Math.random()<o*2&&i.lightning(vf(t.pos.x,12,t.pos.z),t.centerClone(),13162751,.15,.2,!1)},{onEnd:()=>{e.scene.remove(t),t.children.forEach(e=>e.geometry.dispose()),i.flashSphere(n,10535167,6,.5),i.ring(n,13162751,8,.6),i.shake(.7),$.play(`bigexplode`,.6)}});break}default:return!1}return!0}function Ef(e,t,n){$.play(`summon`),e.fx.pillar(t,n,1.5,18,1),e.fx.ring(t,n,3,.7),e.fx.circle(t,n,2.2,1).kill(),e.fx.burst(t.clone().setY(.5),{count:50,color:n,intensity:3,speed:5,life:.9,size:.7,up:3})}function Df(e,t){return{paladin:[!0,!0,!1],pyro:[!1,!1,!1],ranger:[!0,!1,!1],frost:[!1,!1,!0]}[e][t]?0:11}function Of(e,t){return{paladin:[3,5,3.5],pyro:[2.5,3.5,4.5],ranger:[9,.8,4],frost:[2.5,3.5,8]}[e][t]}function kf(e,t,n,r){let i=e.fx,a=t.pos.clone(),o=t.dmgMul*vd(t.ranks[n]);t.id===`pyro`&&e.tiers.fire>=2&&(o*=1.3);let s=r.clone(),c=Df(t.id,n);if(c>0){let e=s.distanceTo(a);e>c&&(s=a.clone().add(s.sub(a).multiplyScalar(c/e)))}switch(s.y=0,t.face(s.x-a.x,s.z-a.z,1),t.attackAnim=.35,t.id+n){case`paladin0`:$.play(`swing`),$.play(`heal`,.5),i.ring(a,16765527,3.2,.4),i.burst(a.clone().setY(1),{count:50,color:16773800,color2:16765527,intensity:3,speed:10,flat:!0,life:.4,size:.8,drag:5}),i.light(a,16765527,5,8,.3);for(let n of e.enemiesInRadius(a,3,!1))e.damageEnemy(n,130*o,`phys`,t);break;case`paladin1`:$.play(`heal`),i.pillar(a,16765527,1.3,16,1),i.ring(a,16765527,5,.7);for(let n of e.units)!n.alive||n.flying||n.pos.distanceToSquared(a)>25||(n.heal(220*vd(t.ranks[1])*e.healMul),n.drUntil=e.time+4,i.burst(n.pos.clone().setY(1),{count:20,color:16773800,intensity:3,speed:2,life:1,size:.6,up:2}));break;case`paladin2`:{$.play(`cast`);let n=()=>{let e=new U,t=new G(new Ni(1.6,1,1),Pd(16765527,1.6)),n=new G(new Fi(.12,.12,2.6,6),Y(16773848,{emissive:16765527,ei:.5}));return n.rotation.x=Math.PI/2,n.position.z=-1.4,e.add(t,n),e},r=i.circle(s,16765527,3.5,1);yf(e,s,{color:16765527,size:.7,speed:32,height:20,offset:3,meshFn:n,onHit:n=>{r.kill(),n.y=0,i.ring(n,16765527,5,.6),i.ring(n,16777215,3.5,.35),i.pillar(n,16765527,2,14,.5,.03),i.burst(n.clone().setY(.5),{count:70,color:16773800,color2:16752672,intensity:3,speed:12,life:.6,size:.8,up:2}),i.burst(n,{count:25,color:9075290,smoke:!0,speed:4,flat:!0,life:1.2,size:1.8,sizeEnd:3,alpha:.5}),i.light(n,16765527,10,12,.5),i.scorch(n,2.5),i.shake(1),i.screenFlash(`rgba(255,230,150,0.8)`,.45),$.play(`bigexplode`,.8);for(let r of e.enemiesInRadius(n,3.5,!0))e.damageEnemy(r,320*o,`magic`,t),e.stunEnemy(r,2)}});break}case`pyro0`:$.play(`fire`),e.spawnProjectile({from:a.clone().setY(1.6),targetPos:s.clone().setY(.5),speed:22,kind:`orb`,color:16738842,size:.45,onHit:n=>{n.y=0,i.explosion(n,16738842,1.1),i.shake(.35),$.play(`explode`);for(let r of e.enemiesInRadius(n,2.5,!0))e.damageEnemy(r,160*o,`magic`,t),e.burnEnemy(r,25,3)}});break;case`pyro1`:$.play(`fire`),i.ring(s,16738842,3.5,.5),Sf(e,s,3.5,5,16734746,1,(n,r)=>{for(let e=0;e<8;e++){let e=Math.random()*Math.PI*2;i.glow.emit({x:s.x+Math.cos(e)*3.3,y:.1,z:s.z+Math.sin(e)*3.3,vx:0,vy:2+Math.random()*3,vz:0,life:.6,size:1,sizeEnd:.1,color:i.col(Math.random()<.3?16765527:16734746,2.5),color2:i.col(6689024),drag:1})}for(let r of e.enemiesInRadius(s,3.5,!0))e.damageEnemy(r,45*o*n,`magic`,t,!0)}),i.light(s,16738842,5,9,5);break;case`pyro2`:$.play(`meteor`);for(let n=0;n<7;n++)e.later(n*.25,()=>{let n=Math.random()*Math.PI*2,r=Math.sqrt(Math.random())*3.5,a=vf(s.x+Math.cos(n)*r,0,s.z+Math.sin(n)*r),c=Cf(e,a,2);yf(e,c&&!c.flying?c.pos.clone().setY(0):a,{color:16738842,size:.6,speed:28,height:22,offset:10,meshFn:()=>new G(new Ri(.6,0),Y(3809312,{emissive:16730650,ei:1.5})),onHit:n=>{n.y=0,i.explosion(n,16734746,1.2),i.shake(.5),$.play(`explode`,.7);for(let r of e.enemiesInRadius(n,2,!0))e.damageEnemy(r,120*o,`magic`,t),e.burnEnemy(r,20,3)}})});break;case`ranger0`:{$.play(`arrow`);let n=e.enemiesInRadius(a,9,!0).sort((e,t)=>e.pos.distanceToSquared(a)-t.pos.distanceToSquared(a)).slice(0,7);i.burst(a.clone().setY(1.6),{count:20,color:8060842,intensity:3,speed:5,life:.4,size:.5}),n.forEach((n,r)=>{e.later(r*.04,()=>{$.play(`arrow`,.6),e.spawnProjectile({from:a.clone().setY(1.6),target:n,speed:34,kind:`arrow`,color:8060842,onHit:(n,r)=>{r&&r.alive&&(t.critNext=Math.random()<.2,e.damageEnemy(r,75*o,`phys`,t),t.critNext=!1),i.burst(n,{count:10,color:8060842,intensity:3,speed:4,life:.3,size:.5})}})})});break}case`ranger1`:{$.play(`swing`);let n=s.clone(),r=n.clone().sub(a);r.length()>7&&n.copy(a).add(r.setLength(7)),t.releaseBlocks();for(let e=0;e<=12;e++){let t=a.clone().lerp(n,e/12).setY(1);i.burst(t,{count:4,color:12582872,intensity:2,speed:1,life:.6,size:.8})}t.pos.copy(n),t.clampToMap(),t.anchor.copy(t.pos),t.moveTarget=null,t.hasteUntil=e.time+4,i.ring(t.pos,8060842,2,.4);break}case`ranger2`:$.play(`arrow`),Sf(e,s,4,4,8060842,1,(n,r)=>{for(let e=0;e<3;e++){let e=Math.random()*Math.PI*2,t=Math.sqrt(Math.random())*4;i.glow.emit({x:s.x+Math.cos(e)*t-1,y:8,z:s.z+Math.sin(e)*t-1.5,vx:3,vy:-26,vz:4.5,life:.3,size:.35,sizeEnd:.35,color:i.col(12582872,2),drag:0})}if(Math.random()<n*25){let e=Math.random()*Math.PI*2,t=Math.sqrt(Math.random())*4;i.burst(vf(s.x+Math.cos(e)*t,.1,s.z+Math.sin(e)*t),{count:3,color:8060842,intensity:2,speed:2,life:.25,size:.4})}Math.random()<n*12&&$.play(`arrow`,.3);for(let r of e.enemiesInRadius(s,4,!0))r.zoneSlow=.7,e.damageEnemy(r,100*o*n,`phys`,t,!0)});break;case`frost0`:$.play(`freeze`),i.ring(s,10479871,2.8,.5),i.burst(s.clone().setY(.5),{count:50,color:14743807,color2:5945599,intensity:2.5,speed:7,life:.6,size:.6,up:1}),i.light(s,8378623,5,8,.4),bf(e,s,2.5,9,1.8),xf(e,s,2.5,100*o,1.5,t);break;case`frost1`:$.play(`frost`),Sf(e,s,3.5,6,8378623,1,n=>{if(Math.random()<n*30){let e=Math.random()*Math.PI*2,t=Math.sqrt(Math.random())*3.5;i.glow.emit({x:s.x+Math.cos(e)*t,y:.1,z:s.z+Math.sin(e)*t,vx:0,vy:1.2,vz:0,life:1.2,size:.4,sizeEnd:.1,color:i.col(12577023,2),drag:0})}for(let r of e.enemiesInRadius(s,3.5,!0))r.zoneSlow=.4,e.damageEnemy(r,25*o*n,`magic`,t,!0)});break;case`frost2`:$.play(`freeze`),$.play(`void`,.4),i.ring(a,14743807,8,.8),i.ring(a,5945599,9,1.1),i.pillar(a,10479871,1.5,20,1),i.burst(a.clone().setY(.5),{count:150,color:16777215,color2:5945599,intensity:2.5,speed:16,flat:!0,life:.8,size:.9,drag:3}),i.screenFlash(`rgba(180,230,255,0.9)`,.55),i.shake(.6),bf(e,a,8,30,3.2),xf(e,a,8,220*o,3,t)}}function Af(e,t=``){let n=J[e],r=od[n.rarity];return`<div class="card rarity-${n.rarity}" data-id="${e}" style="--cc:${n.color};--rc:${r.color}" ${t}>
    <div class="card-cost">${n.cost}</div>
    <div class="card-art"><span>${n.icon}</span></div>
    <div class="card-name">${n.name}</div>
    <div class="card-desc">${n.desc}</div>
    <div class="card-rarity">${r.name}</div>
    ${n.school?`<div class="card-school" style="--sc:${ud[n.school].color}" title="${ud[n.school].name}流派">${ud[n.school].icon}</div>`:``}
  </div>`}var jf=(e,t,n)=>{let r=document.createElement(e);return t&&(r.className=t),n!==void 0&&(r.innerHTML=n),r},Mf=class{constructor(e){this.game=e,this.root=jf(`div`,`hud`),document.getElementById(`ui`).appendChild(this.root),this.hoverSkill=-1,this.refreshT=0,this.floats=[],this.lpFired=!1,this.build(),this.root.addEventListener(`click`,e=>{this.lpFired&&(this.lpFired=!1,e.stopPropagation(),e.preventDefault())},!0),this._docDown=e=>{this.lpFired=!1,e.pointerType!==`mouse`&&(e.target.closest&&e.target.closest(`.tooltip`)||this.tooltip(null))},document.addEventListener(`pointerdown`,this._docDown,!0)}bindTip(e,t,n={}){if(e.addEventListener(`pointerenter`,r=>{r.pointerType===`mouse`&&(this.tooltip(e,t()),n.enter&&n.enter())}),e.addEventListener(`pointerleave`,e=>{e.pointerType===`mouse`&&(this.tooltip(null),n.leave&&n.leave())}),!Ed)return;let r=null,i=0,a=0;e.addEventListener(`pointerdown`,n=>{n.pointerType!==`mouse`&&(this.lpFired=!1,i=n.clientX,a=n.clientY,clearTimeout(r),r=setTimeout(()=>{this.tooltip(e,t()),this.lpFired=!0,clearTimeout(this.tipHideT),this.tipHideT=setTimeout(()=>this.tooltip(null),4e3),Md(8)},430))}),e.addEventListener(`pointermove`,e=>{Math.hypot(e.clientX-i,e.clientY-a)>10&&clearTimeout(r)});for(let t of[`pointerup`,`pointercancel`,`pointerleave`])e.addEventListener(t,()=>clearTimeout(r))}bindDragOut(e,{onStart:t,icon:n,color:r,threshold:i=22}){e.addEventListener(`pointerdown`,e=>{if(e.pointerType===`mouse`&&e.button!==0)return;let a=e.pointerId,o=e.clientX,s=e.clientY,c=null,l=this.game,u=e=>{if(e.pointerId!==a)return;if(!c){if(Math.hypot(e.clientX-o,e.clientY-s)<i)return;if(t()===!1){f();return}c=jf(`div`,`drag-ghost`,`<span>${n}</span>`),c.style.setProperty(`--cc`,r),this.root.appendChild(c),this.lpFired=!0,this.tooltip(null),Md(10)}c.style.transform=`translate(${e.clientX}px, ${e.clientY}px)`;let u=document.elementFromPoint(e.clientX,e.clientY);c.classList.toggle(`over-ui`,u!==l.app.renderer.domElement),l.dragAimTo(e.clientX,e.clientY)},d=e=>{e.pointerId===a&&(f(),c&&(c.remove(),e.type===`pointercancel`?l.cancelModes():l.dragAimRelease(e.clientX,e.clientY)))},f=()=>{window.removeEventListener(`pointermove`,u),window.removeEventListener(`pointerup`,d),window.removeEventListener(`pointercancel`,d)};window.addEventListener(`pointermove`,u),window.addEventListener(`pointerup`,d),window.addEventListener(`pointercancel`,d)})}build(){let e=this.game;this.root.innerHTML=`
      <div class="topbar">
        <div class="stat" title="圣坛生命"><span class="ico">❤️</span><b id="st-lives"></b></div>
        <div class="stat" title="金币"><span class="ico">💰</span><b id="st-gold"></b></div>
        <div class="stat" title="波次"><span class="ico">🌊</span><b id="st-wave"></b></div>
        <div class="stat map-name">${e.map.name}</div>
        <div class="relic-bar" id="relic-bar"></div>
        <div class="syn-bar" id="syn-bar"></div>
        <div class="spacer"></div>
        <button class="btn small" id="bt-speed" title="游戏速度">▶ x1</button>
        <button class="btn small" id="bt-sound" title="声音">🔊</button>
        <button class="btn small" id="bt-pause" title="暂停 (Esc)">⏸</button>
      </div>
      <div class="mode-bar hidden" id="mode-bar"></div>
      <div class="boss-bar hidden" id="boss-bar"><div class="boss-name" id="boss-name"></div><div class="boss-track"><div class="boss-fill" id="boss-fill"></div></div></div>
      <div class="build-panel" id="build-panel"><div class="panel-title">防御塔</div></div>
      <div class="tower-panel hidden" id="tower-panel"></div>
      <div class="hero-panel" id="hero-panel">
        <div class="panel-title">英雄 <small>(最多 3 名)</small></div>
        <div class="hero-list" id="hero-list"></div>
        <div class="skill-bar" id="skill-bar"></div>
      </div>
      <div class="hand-area">
        <div class="mana-wrap">
          <div class="mana-orb"><span id="mana-num">0</span></div>
          <div class="mana-track"><div class="mana-fill" id="mana-fill"></div><div class="mana-ticks" id="mana-ticks">${`<i></i>`.repeat(10)}</div></div>
        </div>
        <div class="combo-timer hidden" id="combo-timer"></div>
        <div class="hand" id="hand"></div>
        <div class="pile-info"><span title="抽牌堆">🂠 <b id="pile-draw"></b></span><span title="弃牌堆">🗑 <b id="pile-disc"></b></span></div>
      </div>
      <div class="wave-preview" id="wave-preview"></div>
      <button class="btn primary wave-btn" id="bt-wave">⚔ 开始第 1 波 <small class="kbd">(空格)</small></button>
      <div class="help-tip ${Ed?`hidden`:``}">左键：选择/移动 · 点敌人：集火 · WASD：操控 · 按住 Q/E/R 瞄准松开施放 · Shift+Q/E/R：学习技能 · H：坚守 · 1-9：出牌</div>
      <div class="danger-vignette" id="danger"></div>
      <div class="banner" id="banner"></div>
      <div class="toasts" id="toasts"></div>
      <div class="floats" id="floats"></div>
      <div class="overlay scroll-y hidden" id="overlay"></div>
    `;let t=e=>this.root.querySelector(`#`+e);this.$=t;let n=t(`build-panel`);this.buildBtns={};for(let t of rd){let r=nd[t],i=jf(`button`,`build-btn`,`<span class="bi">${r.icon}</span><span class="bn">${r.name}</span><span class="bc">💰${e.towerCost(t,0)}</span>`);i.title=r.desc,i.addEventListener(`click`,()=>{$.play(`click`),e.buildType===t?e.cancelModes():e.setBuildType(t)}),this.bindTip(i,()=>`<b>${r.icon} ${r.name}</b> · 💰${e.towerCost(t,0)}<br>${r.desc}<br>${Nf(r,0)}`),n.appendChild(i),this.buildBtns[t]=i}let r=t(`hero-list`);this.heroBtns={};for(let t of ad){let n=id[t],i=jf(`button`,`hero-btn`,`<div class="hp-face" style="--hc:#${n.color.toString(16).padStart(6,`0`)}">${n.icon}</div>
        <div class="hero-info"><div class="hn">${n.name}</div><div class="hbar"><i></i></div><div class="hs"></div></div>`);i.addEventListener(`click`,()=>e.summonOrSelectHero(t)),this.bindTip(i,()=>`<b>${n.icon} ${n.title} · ${n.name}</b><br>${n.desc}<br>生命 ${n.hp} · 攻击 ${n.atk} · 召唤 💰${n.cost}<hr><b>被动 ${n.passive.icon} ${n.passive.name}</b><br><small>${n.passive.desc}</small><br>${n.skills.map(e=>`<b>[${e.key}] ${e.icon} ${e.name}</b> (${e.cd}秒)<br><small>${e.desc}</small>`).join(`<br>`)}<hr><small>${Ed?`升级获得技能点：点击技能上的「+」学习`:`升级获得技能点：Shift+Q/E/R 学习`}。终极技能 3 级解锁。</small>`),r.appendChild(i),this.heroBtns[t]=i}t(`bt-wave`).addEventListener(`click`,()=>{$.play(`click`),e.startWave()}),t(`bt-speed`).addEventListener(`click`,()=>{e.speed=e.speed===1?2:e.speed===2?3:1,t(`bt-speed`).textContent=`▶ x${e.speed}`,$.play(`click`)}),t(`bt-sound`).addEventListener(`click`,()=>{$.setMuted(!$.muted),t(`bt-sound`).textContent=$.muted?`🔇`:`🔊`}),t(`bt-pause`).addEventListener(`click`,()=>this.togglePause()),this.renderRelics(),this.renderSynergies(),this.tip=jf(`div`,`tooltip hidden`),this.root.appendChild(this.tip)}tooltip(e,t){if(!e){this.tip.classList.add(`hidden`);return}this.tip.innerHTML=t,this.tip.classList.remove(`hidden`);let n=e.getBoundingClientRect(),r=this.tip.getBoundingClientRect(),i=n.left+n.width/2-r.width/2,a=n.top-r.height-10;a<10&&(a=n.bottom+10),i=Math.max(8,Math.min(window.innerWidth-r.width-8,i)),this.tip.style.left=i+`px`,this.tip.style.top=a+`px`}renderAll(){this.renderHand(!0),this.renderHeroes(),this.updateBuildButtons(),this.refresh(!0)}renderHand(e=!1){let t=this.game,n=this.$(`hand`),r=n.children.length;n.innerHTML=``;let i=t.hand.length;t.hand.forEach((a,o)=>{let s=jf(`div`,`hand-slot`),c=o-(i-1)/2;s.style.setProperty(`--rot`,`${c*4}deg`),s.style.setProperty(`--ty`,`${Math.abs(c)*Math.abs(c)*3}px`),s.innerHTML=Af(a)+`<div class="card-key">${o+1}</div>`;let l=s.firstElementChild;t.mana<J[a].cost&&l.classList.add(`unaffordable`),t.pendingCard===o&&s.classList.add(`pending`),e&&o>=r&&s.classList.add(`drawn`);let u=J[a];s.addEventListener(`click`,e=>{e.stopPropagation(),t.pendingCard===o?t.cancelModes():(Md(8),t.selectCard(o))}),this.bindTip(s,()=>`<b>${u.icon} ${u.name}</b> · 法力 ${u.cost} · <span style="color:${od[u.rarity].color}">${od[u.rarity].name}</span>${u.school?` · ${ud[u.school].icon}${ud[u.school].name}`:``}<br>${u.desc}<br><small>${u.target===`none`?`立即生效`:u.target===`tower`?`选择一座防御塔`:`点击或拖到地面释放`}</small>`),this.bindDragOut(s,{icon:u.icon,color:u.color,onStart:()=>t.state===`over`||t.state===`reward`||t.paused?!1:t.mana<u.cost?($.play(`error`),this.toast(`法力不足！`),!1):u.target===`none`?(t.cancelModes(),t.dragNoneCard=o,!0):(t.pendingCard!==o&&t.selectCard(o),t.pendingCard===o)}),n.appendChild(s)}),this.$(`pile-draw`).textContent=t.drawPile.length,this.$(`pile-disc`).textContent=t.discard.length,this.lastManaInt=-1}cardCastFx(e){let t=jf(`div`,`cast-flash`,`<span>${e.icon}</span><b>${e.name}</b>`);t.style.setProperty(`--cc`,e.color),this.root.appendChild(t),setTimeout(()=>t.remove(),1100),$.play(`cast`,.6)}renderHeroes(){let e=this.game;for(let t of ad){let n=this.heroBtns[t],r=e.heroOnField(t);n.classList.toggle(`summoned`,!!r),n.classList.toggle(`selected`,!!r&&e.selectedHero===r),n.classList.toggle(`dead`,!!r&&!r.alive)}let t=this.$(`skill-bar`);t.innerHTML=``;let n=e.selectedHero;if(!n){t.innerHTML=`<div class="skill-hint">点击头像召唤英雄</div>`;return}let r=id[n.id],i=jf(`div`,`passive-ico`,r.passive.icon);this.bindTip(i,()=>`<b>被动：${r.passive.name}</b><br>${r.passive.desc}`),Ed&&i.addEventListener(`click`,()=>{this.tooltip(i,`<b>被动：${r.passive.name}</b><br>${r.passive.desc}`),clearTimeout(this.tipHideT),this.tipHideT=setTimeout(()=>this.tooltip(null),3e3)}),t.appendChild(i),r.skills.forEach((i,a)=>{let o=n.ranks[a],s=n.skillPts>0&&o<gd[a]&&n.level>=_d(a,o+1),c=Array.from({length:gd[a]},(e,t)=>`<i class="${t<o?`on`:``}"></i>`).join(``),l=jf(`button`,`skill-btn ${o===0?`locked`:``}`,`<span class="si">${i.icon}</span><span class="sk">${i.key}</span><div class="cd"></div><span class="cdt"></span><div class="pips">${c}</div>${s?`<div class="learn" title="学习 (Shift+`+i.key+`)">+</div>`:``}`),u=Df(n.id,a)===0;l.addEventListener(`click`,t=>{t.target.classList.contains(`learn`)?e.learnSkill(n,a):e.aimSkill===a?e.cancelModes():Ed&&u?e.canCast(n,a)&&(Md(12),e.castHeroSkill(a,n.pos.clone())):(this.aimFromButton=!0,e.beginAim(a))}),this.bindTip(l,()=>{let e=(i.cd*yd(Math.max(1,o))).toFixed(1),t=o<gd[a]?_d(a,o+1):0;return`<b>[${i.key}] ${i.name}</b> · ${o?`${o} 级`:`未学习`} · 冷却 ${e} 秒<br>${i.desc}<br><small>当前威力 ×${vd(Math.max(1,o)).toFixed(1)}；每级伤害/治疗 +30%、冷却 -8%</small><br><small>${o<gd[a]?`下一级需要英雄 Lv.${t}（可用技能点 ${n.skillPts}）`:`已满级`}</small><br><small>${Ed?u?`点击立即施放`:`点击后点地面，或直接拖到目标处松手施放`:`按住 ${i.key} 瞄准、松开施放；或点击按钮后点击地面`}</small>`},{enter:()=>{this.hoverSkill=a},leave:()=>{this.hoverSkill=-1}}),u||this.bindDragOut(l,{icon:i.icon,color:`#`+r.color.toString(16).padStart(6,`0`),onStart:()=>e.paused||e.state===`over`||e.state===`reward`||!e.canCast(n,a,!0)?!1:(this.aimFromButton=!0,e.beginAim(a),this.aimFromButton=!0,e.aimSkill===a)}),t.appendChild(l)});let a=jf(`button`,`hold-btn ${n.holdPos?`on`:``}`,`🛡<small>${n.holdPos?`坚守`:`追击`}</small>`);a.addEventListener(`click`,()=>e.toggleHold()),this.bindTip(a,()=>`<b>${n.holdPos?`坚守原地`:`自由追击`}</b><br>切换英雄是否离开站位追击敌人${Ed?``:`（H）`}`),t.appendChild(a),n.skillPts>0&&t.appendChild(jf(`div`,`pts-badge`,`${n.skillPts}`)),this.skillEls=[...t.querySelectorAll(`.skill-btn`)],this.lastPts=n.skillPts}renderRelics(){let e=this.game,t=this.$(`relic-bar`);if(t){t.innerHTML=``;for(let n of e.relics){let e=md[n],r=jf(`div`,`relic`,e.icon);this.bindTip(r,()=>`<b>${e.icon} ${e.name}</b><br>${e.desc}`),Ed&&r.addEventListener(`click`,()=>this.tapTip(r,`<b>${e.icon} ${e.name}</b><br>${e.desc}`)),t.appendChild(r)}}}renderSynergies(){let e=this.game,t=this.$(`syn-bar`);if(!t)return;t.innerHTML=``;let n=fd(e.deck);for(let r of dd){if(!n[r])continue;let i=ud[r],a=e.tiers[r],o=jf(`div`,`syn tier${a}`,`${i.icon}<b>${n[r]}</b>`);o.style.setProperty(`--sc`,i.color);let s=()=>`<b>${i.icon} ${i.name}流派</b>（卡组中 ${n[r]} 张）<br>${i.tiers.map((e,t)=>`<span style="opacity:${t<a?1:.45}">${t<a?`✔`:`○`} [${e.n}] ${e.desc}</span>`).join(`<br>`)}<br><small>连续打出同流派卡牌触发连携，伤害逐层 +15%</small>`;this.bindTip(o,s),Ed&&o.addEventListener(`click`,()=>this.tapTip(o,s())),t.appendChild(o)}}tapTip(e,t){this.tooltip(e,t),clearTimeout(this.tipHideT),this.tipHideT=setTimeout(()=>this.tooltip(null),3500)}comboFx(e,t){let n=jf(`div`,`combo-pop`,`${t.icon} 连携 ×${e}<small>伤害 +${(e-1)*15}%</small>`);n.style.setProperty(`--sc`,t.color),this.root.appendChild(n),setTimeout(()=>n.remove(),1300),$.play(`magic`,.5+e*.1)}renderWavePreview(){let e=this.game,t=this.$(`wave-preview`);if(e.state!==`build`||e.wave>=e.map.waves){t.classList.add(`hidden`);return}let n=Cd(e.map,e.wave+1);if(t.classList.remove(`hidden`),t.innerHTML=`<div class="wp-title">下一波</div>`+Object.entries(n).map(([e,t])=>{let n=td[e],r=[n.flying?`飞行`:``,n.armor>=.4?`重甲`:``,n.mres>=.3?`魔抗`:``,n.phase?`相位`:``,n.healer?`治疗`:``,n.splits?`分裂`:``,n.regen?`再生`:``,n.bomb?`自爆`:``,n.aura?`护盾光环`:``,n.blink?`闪烁`:``,n.boss?`首领`:``].filter(Boolean).join(` `);return`<span class="wp-e ${n.boss?`boss`:``}" data-t="${e}" title="${n.name}${r?`（`+r+`）`:``}">${n.icon}<b>×${t}</b></span>`}).join(``),!t.dataset.bound){t.dataset.bound=`1`;let n=()=>{let t=Cd(e.map,e.wave+1);return`<b>第 ${e.wave+1} 波</b><br>`+Object.entries(t).map(([e,t])=>{let n=td[e],r=[n.flying?`飞行`:``,n.armor>=.4?`重甲`:``,n.mres>=.3?`魔抗`:``,n.phase?`相位(免疫物理)`:``,n.healer?`治疗友军`:``,n.splits?`死亡分裂`:``,n.regen?`再生(灼烧可抑制)`:``,n.bomb?`自爆眩晕英雄`:``,n.aura?`周围敌人减伤30%`:``,n.blink?`向前闪烁/虚空屏障`:``].filter(Boolean).join(`、`);return`${n.icon} ${n.name} ×${t}${r?` <small>${r}</small>`:``}`}).join(`<br>`)};this.bindTip(t,n),Ed&&t.addEventListener(`click`,()=>this.tapTip(t,n()))}}updateBuildButtons(){let e=this.game;for(let[t,n]of Object.entries(this.buildBtns))n.classList.toggle(`active`,e.buildType===t),n.classList.toggle(`disabled`,e.gold<e.towerCost(t,0))}showTowerPanel(e){let t=this.game,n=this.$(`tower-panel`);n.classList.remove(`hidden`);let r=e.def,i=e.level<2?{...r.levels[e.level+1],cost:t.towerCost(e.type,e.level+1)}:null;n.innerHTML=`
      <div class="tp-title">${r.icon} ${r.name} <span class="lv">Lv.${e.level+1}</span></div>
      <div class="tp-stats">${Nf(r,e.level,e.dmgMul)}${e.kills?`<br>击杀：${e.kills}`:``}</div>
      ${i?`<div class="tp-next">升级后：${Nf(r,e.level+1,e.dmgMul)}</div>`:`<div class="tp-next">已达最高等级</div>`}
      <div class="tp-btns">
        ${i?`<button class="btn primary" id="tp-up">⬆ 升级 💰${i.cost} <small class="kbd">(U)</small></button>`:``}
        <button class="btn danger" id="tp-sell">出售 +${Math.floor(e.spent*.7)} <small class="kbd">(X)</small></button>
        <button class="btn tp-close" id="tp-close" title="关闭">✖</button>
      </div>`;let a=n.querySelector(`#tp-up`);a&&(a.classList.toggle(`disabled`,t.gold<i.cost),a.addEventListener(`click`,()=>t.upgradeTower(e))),n.querySelector(`#tp-sell`).addEventListener(`click`,()=>t.sellTower(e)),n.querySelector(`#tp-close`).addEventListener(`click`,()=>{$.play(`click`),t.selectedTower=null,this.hideTowerPanel()}),this.panelTower=e,this.panelGold=t.gold}hideTowerPanel(){this.$(`tower-panel`).classList.add(`hidden`),this.panelTower=null}bossBar(e){this.boss=e,this.$(`boss-bar`).classList.remove(`hidden`),this.$(`boss-name`).textContent=`👑 ${e.def.name}`}refresh(e=!1){let t=this.game,n=(e,t)=>{let n=this.$(e);n.textContent!==String(t)&&(n.textContent=t)};n(`st-lives`,t.lives),n(`st-gold`,t.gold),n(`st-wave`,`${t.wave} / ${t.map.waves}`);let r=this.$(`bt-wave`),i=t.state===`build`;if(r.classList.toggle(`hidden`,!i),i){let e=`⚔ 开始第 ${t.wave+1} 波 <small class="kbd">(空格)</small>`;this.lastWaveHtml!==e&&(this.lastWaveHtml=e,r.innerHTML=e)}(e||this.lastPreviewWave!==t.wave+`:`+t.state)&&(this.lastPreviewWave=t.wave+`:`+t.state,this.renderWavePreview()),this.updateBuildButtons();for(let e of ad){let n=this.heroBtns[e],r=t.heroOnField(e),i=n.querySelector(`.hbar i`),a=n.querySelector(`.hs`);if(r)i.style.width=`${r.hp/r.maxHp*100}%`,a.textContent=t.app.layout&&t.app.layout.compact?r.alive?`Lv${r.level}${r.skillPts?`✦`:``}`:`${Math.ceil(r.respawn)}s`:r.alive?`Lv.${r.level}${r.skillPts?` · ✦${r.skillPts}`:``}${r.focus?` · 🎯`:``}${r.holdPos?` · 🛡坚守`:``}`:`复活 ${Math.ceil(r.respawn)}s`;else{i.style.width=`0%`;let r=t.app.layout&&t.app.layout.compact;a.textContent=t.heroCount()>=3?r?`已满`:`队伍已满`:r?`💰${id[e].cost}`:`召唤 💰${id[e].cost}`,n.classList.toggle(`disabled`,t.gold<id[e].cost||t.heroCount()>=3)}r&&r.alive===n.classList.contains(`dead`)&&this.renderHeroes()}t.selectedHero&&t.selectedHero.skillPts!==this.lastPts&&this.renderHeroes(),this.panelTower&&this.panelGold!==t.gold&&this.showTowerPanel(this.panelTower)}update(e){let t=this.game,n=t.mana;this.$(`mana-fill`).style.width=`${n/t.maxMana*100}%`;let r=Math.floor(n);if(r!==this.lastManaInt&&(this.lastManaInt=r,this.$(`mana-num`).textContent=t.maxMana>10?`${r}`:r,this.lastMaxMana!==t.maxMana&&(this.lastMaxMana=t.maxMana,this.$(`mana-ticks`).innerHTML=`<i></i>`.repeat(t.maxMana)),this.$(`hand`).querySelectorAll(`.card`).forEach((e,n)=>e.classList.toggle(`unaffordable`,t.mana<J[t.hand[n]].cost))),this.skillEls&&t.selectedHero){let e=t.selectedHero,n=id[e.id];this.skillEls.forEach((r,i)=>{let a=e.cds[i],o=a/n.skills[i].cd;r.querySelector(`.cd`).style.height=`${o*100}%`,r.querySelector(`.cdt`).textContent=a>0?Math.ceil(a):``,r.classList.toggle(`ready`,a<=0&&e.alive&&e.ranks[i]>0),r.classList.toggle(`aiming`,t.aimSkill===i)})}t.aimSkill<0&&(this.aimFromButton=!1),this.updateModeBar();let i=t.lives<=5&&t.lives>0&&t.state===`wave`&&!t.paused;i!==this.dangerOn&&(this.dangerOn=i,this.$(`danger`).classList.toggle(`on`,i)),i&&(this.beatT=(this.beatT||0)-e,this.beatT<=0&&(this.beatT=1.1,$.play(`heartbeat`,.8)));let a=this.$(`combo-timer`);if(a){let e=t.combo,n=e.n>=1&&t.time<e.until;if(a.classList.toggle(`hidden`,!n),n){let n=ud[e.school];a.style.setProperty(`--sc`,n.color),a.innerHTML=`${n.icon} 连携 ${e.n}/${t.comboMax}<i style="width:${(e.until-t.time)/t.comboWindow*100}%"></i>`}}if(this.boss&&(this.boss.alive?this.$(`boss-fill`).style.width=`${this.boss.hp/this.boss.maxHp*100}%`:(this.boss=null,this.$(`boss-bar`).classList.add(`hidden`)),!this.boss)){let e=t.enemies.find(e=>e.boss&&e.alive);e&&this.bossBar(e)}let o=t.camera,s=new V;for(let t=this.floats.length-1;t>=0;t--){let n=this.floats[t];n.t+=e,n.pos.y+=e*1.5,s.copy(n.pos).project(o),n.el.style.transform=`translate(${(s.x*.5+.5)*window.innerWidth}px, ${(-s.y*.5+.5)*window.innerHeight}px) translate(-50%,-50%) scale(${n.big?1.3:1})`,n.el.style.opacity=String(Math.max(0,1-Math.max(0,n.t-.6)/.5)),n.t>1.1&&(n.el.remove(),this.floats.splice(t,1))}this.refreshT+=e,this.refreshT>.1&&(this.refreshT=0,this.refresh())}updateModeBar(){let e=this.game,t=``,n=``;if(e.pendingCard>=0&&e.hand[e.pendingCard]){let r=J[e.hand[e.pendingCard]];t=`c`+e.pendingCard+r.name,n=`<span class="mb-ico" style="--cc:${r.color}">${r.icon}</span><span class="mb-txt"><b>${r.name}</b><small>${r.target===`tower`?`点击一座防御塔`:Ed?`点击 / 拖动到目标处松手释放`:`点击地面释放 · 右键取消`}</small></span>`}else if(e.aimSkill>=0&&e.selectedHero){let r=id[e.selectedHero.id].skills[e.aimSkill];t=`s`+e.aimSkill+e.selectedHero.id,n=`<span class="mb-ico">${r.icon}</span><span class="mb-txt"><b>${r.name}</b><small>${Ed?`点击 / 拖动到目标处松手施放`:`点击地面施放 · 右键取消`}</small></span>`}else if(e.buildType){let r=nd[e.buildType];t=`b`+e.buildType,n=`<span class="mb-ico">${r.icon}</span><span class="mb-txt"><b>建造${r.name} · 💰${e.towerCost(e.buildType,0)}</b><small>${Ed?`点击空地建造（可拖动预览位置）`:`点击空地建造 · Shift 连续建造 · 右键取消`}</small></span>`}if(t===this.modeKey)return;this.modeKey=t;let r=this.$(`mode-bar`);r.classList.toggle(`hidden`,!t),t&&(r.innerHTML=n+`<button class="btn small mb-cancel">✖ 取消</button>`,r.querySelector(`.mb-cancel`).addEventListener(`click`,t=>{t.stopPropagation(),$.play(`click`),e.cancelModes()}))}floatText(e,t,n=`#fff`,r=!1){this.floats.length>kd.maxFloats&&this.floats.shift().el.remove();let i=jf(`div`,`float-text`+(r?` big`:``),String(t));i.style.color=n,this.$(`floats`).appendChild(i),this.floats.push({el:i,pos:e.clone(),t:0,big:r})}toast(e){let t=this.$(`toasts`),n=jf(`div`,`toast`,e);for(t.appendChild(n);t.children.length>4;)t.firstChild.remove();setTimeout(()=>n.classList.add(`out`),2200),setTimeout(()=>n.remove(),2700)}banner(e,t=`#fff`,n=``){let r=this.$(`banner`);r.innerHTML=`<div class="bt" style="color:${t}">${e}</div>${n?`<div class="bs">${n}</div>`:``}`,r.classList.remove(`show`),r.offsetWidth,r.classList.add(`show`)}showReward(e,t){let n=this.$(`overlay`);n.classList.remove(`hidden`),n.innerHTML=`<div class="reward-box">
      <h2>✨ 第 ${this.game.wave} 波胜利！选择一张卡牌加入卡组</h2>
      <div class="reward-cards">${e.map(e=>Af(e)).join(``)}</div>
      <div class="rw-btns"><button class="btn" id="rw-thin">✂ 改为精简卡组（移除一张）</button><button class="btn" id="rw-skip">跳过（+35 金币）</button></div>
      <div class="thin-list scroll-y hidden" id="rw-thin-list"></div>
    </div>`,n.querySelectorAll(`.card`).forEach((e,r)=>{e.style.animationDelay=`${r*.12}s`,e.addEventListener(`mouseenter`,()=>$.play(`hover`)),e.addEventListener(`click`,()=>{$.play(`card`),$.play(`upgrade`,.6),e.classList.add(`picked`),setTimeout(()=>{n.classList.add(`hidden`),n.innerHTML=``,t(e.dataset.id),this.renderHand()},450)},{once:!0})}),n.querySelector(`#rw-skip`).addEventListener(`click`,()=>{$.play(`click`),n.classList.add(`hidden`),n.innerHTML=``,t(null),this.renderHand()}),n.querySelector(`#rw-thin`).addEventListener(`click`,()=>{$.play(`click`);let e=this.game,r=n.querySelector(`#rw-thin-list`);e.deck.length<=8?this.toast(`卡组至少保留 8 张`):(r.classList.toggle(`hidden`),r.innerHTML=`<div class="wp-title">点击要移除的卡牌（本局有效）</div>`+[...new Set(e.deck)].sort((e,t)=>J[e].cost-J[t].cost).map(t=>{let n=J[t];return`<div class="deck-row" data-id="${t}" style="--cc:${n.color};--rc:${od[n.rarity].color}"><span class="dr-cost">${n.cost}</span><span class="dr-icon">${n.icon}</span><span class="dr-name">${n.name}</span><span class="dr-n">×${e.deck.filter(e=>e===t).length}</span></div>`}).join(``),r.querySelectorAll(`.deck-row`).forEach(e=>e.addEventListener(`click`,()=>{$.play(`sell`),n.classList.add(`hidden`),n.innerHTML=``,t(null,e.dataset.id),this.renderHand()},{once:!0})))})}showRelicChoice(e,t,n,r=null){let i=this.$(`overlay`);i.classList.remove(`hidden`),i.innerHTML=`<div class="reward-box">
      <h2>${t}</h2>
      <p class="rw-sub">遗物在本局持续生效</p>
      <div class="reward-cards relics">${e.map(e=>{let t=md[e];return`<div class="relic-card" data-id="${e}"><div class="rc-icon">${t.icon}</div><div class="rc-name">${t.name}</div><div class="rc-desc">${t.desc}</div></div>`}).join(``)}</div>
      ${r?`<button class="btn" id="rl-skip">${r}</button>`:``}
    </div>`,i.querySelectorAll(`.relic-card`).forEach((e,t)=>{e.style.animationDelay=`${t*.12}s`,e.addEventListener(`mouseenter`,()=>$.play(`hover`)),e.addEventListener(`click`,()=>{e.classList.add(`picked`),setTimeout(()=>{i.classList.add(`hidden`),i.innerHTML=``,n(e.dataset.id)},400)},{once:!0})});let a=i.querySelector(`#rl-skip`);a&&a.addEventListener(`click`,()=>{$.play(`click`),i.classList.add(`hidden`),i.innerHTML=``,n(null)})}showEnd(e){let t=this.game,n=this.$(`overlay`);n.classList.remove(`hidden`);let r=t.stats;n.innerHTML=`<div class="end-box ${e?`win`:`lose`}">
      <h1>${e?`🏆 胜利！`:`💀 圣坛陷落`}</h1>
      <p>${e?`你成功守护了「${t.map.name}」！`:`你坚持到了第 ${t.wave} 波。`}</p>
      <div class="end-stats">
        <div><b>${r.kills}</b><span>击杀</span></div>
        <div><b>${r.cardsPlayed}</b><span>使用卡牌</span></div>
        <div><b>${r.maxCombo}</b><span>最高连携</span></div>
        <div><b>${t.relics.map(e=>md[e].icon).join(``)||`—`}</b><span>遗物</span></div>
        <div><b>${r.goldEarned}</b><span>获得金币</span></div>
        <div><b>${t.towers.length}</b><span>防御塔</span></div>
      </div>
      <div class="end-btns">
        <button class="btn primary" id="end-retry">再来一次</button>
        <button class="btn" id="end-menu">返回主菜单</button>
      </div>
    </div>`,n.querySelector(`#end-retry`).addEventListener(`click`,()=>{$.play(`click`),t.app.startGame(t.mapIdx)}),n.querySelector(`#end-menu`).addEventListener(`click`,()=>{$.play(`click`),t.app.showTitle()})}togglePause(){let e=this.game;if(e.state===`over`||e.state===`reward`)return;e.paused=!e.paused,$.play(`click`);let t=this.$(`overlay`);e.paused?(t.classList.remove(`hidden`),t.innerHTML=`<div class="end-box">
        <h1>⏸ 已暂停</h1>
        <div class="end-btns col">
          <button class="btn primary" id="pa-resume">继续游戏</button>
          <button class="btn" id="pa-restart">重新开始</button>
          <button class="btn" id="pa-menu">返回主菜单</button>
        </div></div>`,t.querySelector(`#pa-resume`).addEventListener(`click`,()=>this.togglePause()),t.querySelector(`#pa-restart`).addEventListener(`click`,()=>e.app.startGame(e.mapIdx)),t.querySelector(`#pa-menu`).addEventListener(`click`,()=>e.app.showTitle())):(t.classList.add(`hidden`),t.innerHTML=``)}dispose(){this.root.remove(),document.removeEventListener(`pointerdown`,this._docDown,!0)}};function Nf(e,t,n=1){let r=e.levels[t];if(e.support)return`法力恢复 +${r.mana}/秒`;let i=[`伤害 ${Math.round(r.dmg*n)}`,`间隔 ${r.rate}s`,`射程 ${r.range}`];return e.pulse&&i.push(`减速 ${Math.round(r.slow*100)}%`),r.chain&&i.push(`弹跳 ${r.chain}`),e.splash&&i.push(`溅射 ${r.splash||e.splash}`),i.push(e.air?`可对空`:`仅对地`),i.push(e.dtype===`magic`?`魔法`:`物理`),i.join(` · `)}var Pf=[`Q`,`E`,`R`],Ff=class{constructor(e,t,n){this.app=e,this.camera=e.camera,this.map=ed[t],this.mapIdx=t,this.scene=new bn,this.world=new Qd(this.scene,this.map),this.fx=new rf(this.scene,this.camera),this.fx.setScale(e.height,this.camera.fov),this.enemies=[],this.towers=[],this.units=[],this.projectiles=[],this.zones=[],this.timers=[],this.time=0,this.gold=this.map.startGold,this.maxLives=20,this.lives=20,this.mana=5,this.maxMana=10,this.wave=0,this.state=`build`,this.speed=1,this.paused=!1,this.buffs={towerHaste:0,heroDmg:0,bounty:0},this.timeStopUntil=0,this.waveScale=1,this.spawnQueue=[],this.waveTime=0,this.drawTimer=0,this.stats={kills:0,cardsPlayed:0,goldEarned:0,leaks:0,maxCombo:0},this.tiers=pd(n),this.relics=[],this.combo={school:null,n:0,until:0},this.lastCard=null,this.soulKills=0,this.aimSkill=-1,this.tiers.arcane>=1&&(this.maxMana+=2),this.deck=n.slice(),this.drawPile=If(this.deck.slice()),this.discard=[],this.hand=[],this.maxHand=7,this.selectedHero=null,this.selectedTower=null,this.buildType=null,this.pendingCard=-1,this.mouse=new B,this.mouseWorld=new V,this.mouseValid=!1,this.keys={},this.raycaster=new Ts,this.groundPlane=new Sr(new V(0,1,0),0),this.camTarget=new V(0,0,1),this.camZoom=1,this.camYaw=0,this.zoomMin=.7,this.zoomMax=1.5,this.touches=new Map,this.dragNoneCard=-1,this.gest=null,this.camSnapUntil=0,this.layoutKey=``,this.onResize(),this.ambT=0,this.buildHelpers(),this.ui=new Mf(this),this.drawCards(4,!0),this.ui.renderAll(),$.startMusic(`calm`),this.state=`reward`,this.ui.showRelicChoice(this.rollRelics(),`选择一件初始遗物`,e=>{e&&this.addRelic(e),this.state=`build`,this.ui.banner(`${this.map.name}`,`#ffffff`,`布置防御塔，召唤英雄，然后开始第一波！`),this.ui.refresh(!0)})}buildHelpers(){let e=new no(.97,1,64);e.rotateX(-Math.PI/2),this.rangeRing=new G(e,new Kr({color:8969727,transparent:!0,opacity:.8,depthWrite:!1}));let t=new Pi(1,64);t.rotateX(-Math.PI/2),this.rangeFill=new G(t,new Kr({color:8969727,transparent:!0,opacity:.08,depthWrite:!1})),this.rangeRing.add(this.rangeFill),this.rangeRing.position.y=.06,this.rangeRing.visible=!1,this.scene.add(this.rangeRing);let n=new no(.9,1,64);n.rotateX(-Math.PI/2),this.targetRing=new G(n,new Kr({color:16755285,transparent:!0,opacity:.9,depthWrite:!1,blending:2}));let r=new G(t,new Kr({color:16755285,transparent:!0,opacity:.15,depthWrite:!1,blending:2}));this.targetRing.add(r),this.targetFill=r,this.targetRing.position.y=.08,this.targetRing.visible=!1,this.scene.add(this.targetRing);let i=new no(.3,.45,24);i.rotateX(-Math.PI/2),this.moveMarker=new G(i,new Kr({color:6750088,transparent:!0,depthWrite:!1})),this.moveMarker.visible=!1,this.scene.add(this.moveMarker);let a=new no(.985,1,96);a.rotateX(-Math.PI/2),this.castRing=new G(a,new Kr({color:16777215,transparent:!0,opacity:.35,depthWrite:!1})),this.castRing.visible=!1,this.scene.add(this.castRing);let o=new no(.8,1,4,1);o.rotateX(-Math.PI/2),this.focusMarker=new G(o,new Kr({color:16730682,transparent:!0,opacity:.9,depthWrite:!1,blending:2})),this.focusMarker.visible=!1,this.scene.add(this.focusMarker),this.focusEnemy=null,this.ghost=null,this.ghostMat=new Kr({color:8978346,transparent:!0,opacity:.4,depthWrite:!1})}has(e){return this.relics.includes(e)}addRelic(e){if(this.has(e))return;this.relics.push(e),e===`manacrystal`&&(this.maxMana+=2,this.mana=Math.min(this.maxMana,this.mana+3)),e===`stoneheart`&&(this.maxLives+=6,this.lives+=6),e===`prophecy`&&(this.maxHand+=1);let t=this.world.basePos;this.fx.sigil(t,16765527,3.5,1.6),this.fx.pillar(t,16765527,1.6,18,1.2),$.play(`upgrade`),this.ui.toast(`获得遗物：${md[e].icon} ${md[e].name}`),this.ui.renderRelics()}rollRelics(){let e=hd.filter(e=>!this.has(e));return If(e),e.slice(0,3)}get burnMul(){return(this.tiers.fire>=1?1.5:1)*(this.has(`emberheart`)?2:1)}get freezeMul(){return this.tiers.frost>=1?1.3:1}get chainBonus(){return(this.tiers.storm>=1?2:0)+(this.has(`stormtotem`)?3:0)}get teslaBonus(){return+(this.tiers.storm>=1)+(this.has(`stormtotem`)?2:0)}get towerHasteMul(){return(this.time<this.buffs.towerHaste?1.6:1)*(this.has(`warbanner`)?1.15:1)}get healMul(){return this.tiers.holy>=1?1.5:1}get summonMul(){return this.tiers.nature>=1?1.4:1}get summonDur(){return this.tiers.nature>=2?1.5:1}get comboMax(){return this.has(`focus`)?5:3}get comboWindow(){return this.has(`focus`)?12:8}towerCost(e,t){return Math.round(nd[e].levels[t].cost*(this.has(`blueprint`)?.85:1))}cardPower(e){let t=J[e],n=this.has(`lens`)?1.2:1;return(t.school===`fire`&&this.tiers.fire>=2||t.school===`storm`&&this.tiers.storm>=2)&&(n*=1.3),this.combo.school===t.school&&this.combo.n>=2&&(n*=1+.15*(this.combo.n-1)),n}enemiesInRadius(e,t,n){let r=[],i=t*t;for(let t of this.enemies){if(!t.alive||t.flying&&!n)continue;let a=t.pos.x-e.x,o=t.pos.z-e.z;a*a+o*o<=i+(t.boss?2:0)&&r.push(t)}return r}nearestEnemy(e,t,n){let r=null,i=t*t;for(let t of this.enemies){if(!t.alive||t.flying&&!n)continue;let a=t.pos.x-e.x,o=t.pos.z-e.z,s=a*a+o*o;s<i&&(i=s,r=t)}return r}damageEnemy(e,t,n,r,i=!1){if(!e.alive)return;if(e.isPhased(this.time)&&n===`phys`){i||this.fx.burst(e.center,{count:3,color:10479871,intensity:1,speed:2,life:.2,size:.3});return}let a=t;n===`phys`?a*=1-e.def.armor:n===`magic`&&(a*=1-e.def.mres);let o=e.isFrozen(this.time),s=!1;r&&r.card?(a*=r.mul||1,i&&this.tiers.nature>=2&&(a*=1.4)):r&&r.kind===`hero`&&(r.id===`pyro`&&this.time<e.burnUntil&&(a*=1.2),r.id===`frost`&&o&&(a*=1.4)),o&&this.tiers.frost>=2&&(a*=1.25),e.sanctified>this.time&&(a*=1.2),e.shieldedUntil>this.time&&(a*=.7),e.barrierUntil>this.time&&(a*=.1),e.lastHit=this.time,r&&r.critNext&&(a*=2.5,s=!0,r.critNext=!1),e.hp-=a,i||(e.flashT=.12,s?this.ui.floatText(e.centerClone().setY(e.pos.y+2.2),`💥${Math.round(a)}`,`#7affaa`,!0):a>=90&&this.ui.floatText(e.centerClone().setY(e.pos.y+2),Math.round(a),r&&r.card?`#ffcc66`:`#ffffff`,a>=300)),r&&r.gainXp&&r.gainXp(a*.05),e.hp<=0&&this.killEnemy(e,r)}killEnemy(e,t){if(!e.alive)return;let n=e.centerClone();e.destroy(),this.stats.kills++;let r=this.time<this.buffs.bounty,i=Math.round(e.def.gold*(1+.04*(this.wave-1))*(this.has(`greedring`)?1.25:1)*(r?2:1));r&&!e.boss&&this.fx.trail(n,16760896,1.2,.6,0,3),e.def.bomb&&e.explode(),this.addGold(i,!0),this.has(`soulreaper`)&&++this.soulKills>=15&&(this.soulKills=0,this.mana=Math.min(this.maxMana,this.mana+1),this.fx.trail(n,8040703,1.5,.8,0,3)),this.focusEnemy===e&&(this.focusEnemy=null),t&&t.kills!==void 0&&t.kills++;let a=e.def.color;if(e.boss){this.fx.explosion(n,a,2.5),this.fx.explosion(n,16777215,1.2,{noDecal:!0}),this.fx.pillar(n,a,3,30,1.2),this.fx.shake(1.2),this.fx.screenFlash(`rgba(255,255,255,0.8)`,.5),$.play(`bigexplode`),this.ui.banner(`击败首领：${e.def.name}！`,`#ffd257`);for(let e of this.units)e.gainXp(150)}else this.fx.burst(n,{count:18,color:a,intensity:1.6,speed:5,life:.6,size:.6,gravity:8,up:2}),this.fx.burst(n,{count:6,color:8947848,smoke:!0,speed:1.5,life:.8,size:1,sizeEnd:1.8,alpha:.4}),this.fx.burst(n,{count:4,color:16765527,intensity:2.5,speed:2,life:.7,size:.35,up:3}),$.play(`hit`,.6),Math.random()<.3&&$.play(`coin`,.4);for(let t of this.units)t.kind===`hero`&&t.alive&&t.pos.distanceToSquared(e.pos)<100&&t.gainXp(e.def.gold*1.5);if(e.def.splits)for(let t=0;t<3;t++){let n=new df(this,e.def.splits,e.pathIdx,this.waveScale,Math.max(0,e.dist-t*.5),Q(-.7,.7));this.enemies.push(n)}}slowEnemy(e,t,n){n*=this.freezeMul,(this.time>e.slowUntil||t<e.slowMul)&&(e.slowMul=t),e.slowUntil=Math.max(e.slowUntil,this.time+n)}freezeEnemy(e,t){t=t*this.freezeMul+(this.has(`frostcore`)?.8:0),e.frozenUntil=Math.max(e.frozenUntil,this.time+t)}stunEnemy(e,t){this.tiers.storm>=2&&(t+=.5),e.stunUntil=Math.max(e.stunUntil,this.time+(e.boss?t*.4:t))}burnEnemy(e,t,n){t*=this.burnMul,e.burnDps=Math.max(e.burnDps*+(this.time<e.burnUntil),t),e.burnUntil=this.time+n}spawnProjectile(e){this.projectiles.push(new _f(this,e))}later(e,t){this.timers.push({t:e,fn:t})}addGold(e,t=!1){this.gold+=e,this.stats.goldEarned+=e}leak(e){let t=e.def.dmg;e.destroy(),this.lives-=t,this.stats.leaks+=t,$.play(`leak`),this.fx.shake(.4),this.fx.screenFlash(`rgba(255,40,40,0.6)`,.35);let n=this.world.basePos;this.fx.burst(n.clone().setY(2.5),{count:30,color:16726586,intensity:2.5,speed:5,life:.6,size:.7}),this.ui.floatText(n.clone().setY(4),`-${t} ❤`,`#ff5a5a`,!0),this.waveLeaks=(this.waveLeaks||0)+t,Md(t>3?80:30),this.lives<=0&&(this.lives=0,this.gameOver(!1))}drawCards(e,t=!1){for(let n=0;n<e;n++){if(!this.drawPile.length){if(!this.discard.length)break;this.drawPile=If(this.discard),this.discard=[],t||this.ui.toast(`弃牌堆已重新洗入抽牌堆`)}let e=this.drawPile.pop();this.hand.length>=this.maxHand?(this.discard.push(e),this.ui.toast(`手牌已满，「${J[e].name}」被弃置`)):(this.hand.push(e),t||$.play(`card`))}this.ui.renderHand(!0)}selectCard(e){if(this.state===`over`||this.state===`reward`||e<0||e>=this.hand.length)return;let t=J[this.hand[e]];this.mana<t.cost?($.play(`error`),this.ui.toast(`法力不足！`)):(this.cancelModes(),t.target===`none`?this.playCard(e,null,null):(this.pendingCard=e,$.play(`click`),this.ui.renderHand()))}playCard(e,t,n){let r=this.hand[e],i=J[r];if(this.mana<i.cost)return!1;let a={...this.combo};if(i.school&&(this.combo.school===i.school&&this.time<this.combo.until?this.combo.n=Math.min(this.comboMax,this.combo.n+1):(this.combo.school=i.school,this.combo.n=1),this.combo.until=this.time+this.comboWindow),Tf(this,r,t,n)===!1)return this.combo=a,$.play(`error`),!1;if(this.mana-=i.cost,this.hand.splice(e,1),this.discard.push(r),this.stats.cardsPlayed++,r!==`echo`&&(this.lastCard=r),i.school&&this.combo.n>=2){this.stats.maxCombo=Math.max(this.stats.maxCombo,this.combo.n);let e=ud[i.school];this.ui.comboFx(this.combo.n,e)}if(this.has(`echostone`)&&i.cost>0&&Math.random()<.2&&(this.mana=Math.min(this.maxMana,this.mana+i.cost),this.ui.toast(`🔔 回响之石：返还 ${i.cost} 法力`)),this.has(`spellblade`))for(let e of this.units)e.kind===`hero`&&(e.cds=e.cds.map(e=>Math.max(0,e-1.5)));return this.pendingCard=-1,this.targetRing.visible=!1,this.ui.cardCastFx(i),this.ui.renderHand(),!0}heroOnField(e){return this.units.find(t=>t.kind===`hero`&&t.id===e)}heroCount(){return this.units.filter(e=>e.kind===`hero`).length}summonOrSelectHero(e){let t=this.heroOnField(e);if(t){this.selectedHero===t&&this.focusCamOn(t.pos),this.selectedHero=t,$.play(`click`),this.ui.renderHeroes();return}let n=id[e];if(this.heroCount()>=3){$.play(`error`),this.ui.toast(`最多同时召唤 3 名英雄`);return}if(this.gold<n.cost){$.play(`error`),this.ui.toast(`金币不足！`);return}this.gold-=n.cost;let r=this.world.paths[0],i=this.heroCount(),a=r.at(r.length-5-i*1.5),o=r.dirAt(r.length-5-i*1.5),s=i%2?1.6:-1.6;a.x+=-o.z*s,a.z+=o.x*s,a.y=0;let c=new mf(this,`hero`,e,a);this.clampUnit(c),this.units.push(c),this.selectedHero=c,this.fx.pillar(c.pos,n.color,1.6,30,1.2,.1),this.fx.ring(c.pos,n.color,4,.8),this.fx.burst(c.pos.clone().setY(.5),{count:80,color:n.color,color2:16777215,intensity:3,speed:7,life:1,size:.8,up:3}),this.fx.light(c.pos,n.color,8,10,.8),this.fx.shake(.3),$.play(`summon`),this.ui.toast(`${n.title} ${n.name} 响应了召唤！`),this.ui.renderHeroes()}clampUnit(e){e.clampToMap(),e.anchor.copy(e.pos)}canCast(e,t,n=!1){if(!e||!e.alive||this.state===`over`)return!1;let r=e=>(n||($.play(`error`),e&&this.ui.toast(e)),!1);return e.ranks[t]<=0?r(t===2?`终极技能需要英雄等级 3 并学习（Shift+${`QER`[t]}）`:`尚未学习该技能`):e.cds[t]>0?r():this.time<e.stunUntil?r(`英雄被眩晕了！`):!0}castHeroSkill(e,t){let n=this.selectedHero;if(this.aimSkill=-1,!this.canCast(n,e))return;let r=t||(this.mouseValid?this.mouseWorld.clone():n.pos.clone());kf(this,n,e,r),n.cds[e]=id[n.id].skills[e].cd*yd(n.ranks[e]),this.fx.sigil(n.pos,id[n.id].color,1.4,.7,{spin:4}),this.ui.renderHeroes()}beginAim(e){let t=this.selectedHero;this.canCast(t,e)&&(this.cancelModes(),this.aimSkill=e,$.play(`click`,.6))}learnSkill(e,t){if(!e)return;let n=e.ranks[t];if(e.skillPts<=0){$.play(`error`),this.ui.toast(`没有可用的技能点（英雄升级获得）`);return}if(n>=gd[t]){$.play(`error`),this.ui.toast(`该技能已满级`);return}let r=_d(t,n+1);e.level<r?($.play(`error`),this.ui.toast(`需要英雄等级 ${r}`)):(e.ranks[t]++,e.skillPts--,$.play(`levelup`,.7),this.fx.sigil(e.pos,16765527,1.8,.9,{spin:6}),this.fx.burst(e.pos.clone().setY(1.2),{count:30,color:16765527,intensity:3,speed:3,life:.8,size:.5,up:2}),this.ui.floatText(e.pos.clone().setY(3),`${id[e.id].skills[t].name} → ${e.ranks[t]} 级`,`#ffd257`),this.ui.renderHeroes())}setBuildType(e){this.cancelModes(),this.buildType=e,this.selectedTower=null,this.ui.hideTowerPanel(),this.ghost&&this.scene.remove(this.ghost),this.ghost=Rd(e,0),this.ghost.traverse(e=>{e.isMesh&&(e.material=this.ghostMat,e.castShadow=!1)}),this.ghost.visible=!1,this.scene.add(this.ghost),this.ui.updateBuildButtons()}tryBuild(e,t){if(nd[this.buildType],!this.world.canBuild(e,t)){$.play(`error`);return}let n=this.towerCost(this.buildType,0);if(this.gold<n){$.play(`error`),this.ui.toast(`金币不足！`);return}this.gold-=n;let r=new ff(this,this.buildType,e,t);r.spent=n,this.world.cells[t][e].tower=r,this.towers.push(r),$.play(`build`),this.fx.burst(r.pos.clone().setY(.3),{count:25,color:12101768,smoke:!0,speed:3,flat:!0,life:.8,size:1.2,sizeEnd:2,alpha:.6}),this.fx.burst(r.pos.clone().setY(1),{count:20,color:16771232,intensity:2,speed:4,life:.6,size:.5,up:2}),(!this.keys.Shift||this.gold<n)&&this.cancelModes()}upgradeTower(e){if(e.level>=2)return;let t=this.towerCost(e.type,e.level+1);this.gold<t?($.play(`error`),this.ui.toast(`金币不足！`)):(this.gold-=t,e.upgrade(t),$.play(`upgrade`),this.fx.pillar(e.pos,16765527,1.2,12,.8),this.fx.burst(e.pos.clone().setY(1.5),{count:40,color:16765527,intensity:3,speed:5,life:.8,size:.6,up:2}),this.fx.ring(e.pos,16765527,2.5,.5),this.ui.showTowerPanel(e))}sellTower(e){let t=Math.floor(e.spent*.7);this.gold+=t,this.world.cells[e.gz][e.gx].tower=null,e.destroy(),this.towers.splice(this.towers.indexOf(e),1),$.play(`sell`),this.fx.burst(e.pos.clone().setY(1),{count:30,color:16765527,intensity:2,speed:4,life:.8,size:.5,up:3}),this.ui.floatText(e.pos.clone().setY(2),`+${t} 💰`,`#ffd257`),this.selectedTower=null,this.ui.hideTowerPanel()}cancelModes(){this.buildType=null,this.pendingCard=-1,this.aimSkill=-1,this.ghost&&=(this.scene.remove(this.ghost),null),this.targetRing.visible=!1,this.ui&&this.ui.updateBuildButtons(),this.ui&&this.ui.renderHand()}startWave(){if(this.state!==`build`)return;this.wave++,this.state=`wave`,this.waveScale=Sd(this.map,this.wave);let e=xd(this.map,this.wave);this.spawnQueue=[];let t=!1;for(let n of e){for(let e=0;e<n.count;e++)this.spawnQueue.push({t:n.delay+e*n.interval,type:n.type,path:n.path});td[n.type].boss&&(t=!0)}this.spawnQueue.sort((e,t)=>e.t-t.t),this.waveTime=0,this.drawTimer=0,this.drawCards(2),this.waveLeaks=0,Md(t?[40,60,40]:20),$.play(t?`boss`:`wave`),$.startMusic(`battle`),t?this.ui.banner(`第 ${this.wave} 波 · 首领来袭！`,`#ff5a5a`,`强大的敌人正在接近……`):this.ui.banner(`第 ${this.wave} 波`,`#ffffff`,`共 ${this.spawnQueue.length} 名敌人`),this.ui.refresh(!0)}endWave(){let e=30+this.wave*4+(this.has(`alchemy`)?30:0);if(this.addGold(e),this.waveLeaks)this.ui.banner(`第 ${this.wave} 波完成`,`#ffffff`,`+${e} 金币`);else{let e=10+this.wave*2;this.addGold(e),this.stats.perfect=(this.stats.perfect||0)+1,this.later(.3,()=>{$.play(`perfect`),this.ui.banner(`完美防守！`,`#7affaa`,`无一漏网 · 额外 +${e} 金币`)});let t=this.world.basePos;this.fx.burst(t.clone().setY(3),{count:50,color:8060842,color2:16777215,intensity:2.5,speed:6,life:1.2,size:.6,up:4,gravity:6})}if(this.waveLeaks=0,this.has(`alchemy`)&&(this.mana=Math.min(this.maxMana,this.mana+2)),$.play(`coin`),$.startMusic(`calm`),this.wave>=this.map.waves){this.gameOver(!0);return}this.ui.toast(`第 ${this.wave} 波完成！获得 ${e} 金币`),this.state=`reward`,this.cancelModes();let t=()=>{this.state=`build`,this.ui.refresh(!0)};this.wave%5==0?this.ui.showRelicChoice(this.rollRelics(),`✨ 击败首领！选择一件遗物`,e=>{e?this.addRelic(e):(this.addGold(60),this.ui.toast(`跳过遗物，获得 60 金币`)),t()},`跳过（+60 金币）`):this.ui.showReward(this.rollRewards(),(e,n)=>{n?(this.removeFromDeck(n),this.ui.toast(`「${J[n].name}」已从本局卡组移除`)):e?(this.deck.push(e),this.discard.push(e),this.app.unlockCard(e),this.ui.toast(`「${J[e].name}」加入了卡组！`)):(this.addGold(35),this.ui.toast(`跳过奖励，获得 35 金币`)),this.refreshTiers(),t()})}removeFromDeck(e){let t=this.deck.indexOf(e);if(!(t<0)){this.deck.splice(t,1);for(let t of[this.drawPile,this.discard,this.hand]){let n=t.indexOf(e);if(n>=0){t.splice(n,1);break}}this.ui.renderHand()}}refreshTiers(){let e=this.tiers;this.tiers=pd(this.deck);let t=(this.tiers.arcane>=1?2:0)-(e.arcane>=1?2:0);this.maxMana+=t,this.mana=Math.min(this.mana,this.maxMana);for(let t of Object.keys(this.tiers))this.tiers[t]>e[t]&&this.ui.toast(`${ud[t].icon} ${ud[t].name}羁绊 ${this.tiers[t]} 阶激活：${ud[t].tiers[this.tiers[t]-1].desc}`);this.ui.renderSynergies()}rollRewards(){let e=Object.keys(J),t=[],n=6+this.wave*.8,r=this.wave>=6?2+(this.wave-6)*.6:0,i={};for(let e of this.deck){let t=J[e].school;t&&(i[t]=(i[t]||0)+1)}let a=Object.keys(i).sort((e,t)=>i[t]-i[e])[0];if(a&&Math.random()<.75){let r=e.filter(e=>J[e].school===a&&J[e].rarity!==`legendary`&&(J[e].rarity!==`epic`||Math.random()*100<n*2));r.length&&t.push(r[Math.floor(Math.random()*r.length)])}let o=0;for(;t.length<3&&o++<200;){let i=Math.random()*100,a=i<r?`legendary`:i<r+n?`epic`:i<r+n+30?`rare`:`common`,o=e.filter(e=>J[e].rarity===a&&!t.includes(e));o.length&&t.push(o[Math.floor(Math.random()*o.length)])}return t}gameOver(e){if(this.state!==`over`){if(this.state=`over`,this.cancelModes(),$.stopMusic(),$.play(e?`victory`:`defeat`),e){this.app.markCleared(this.map.id);for(let e=0;e<6;e++)this.later(e*.3,()=>this.fx.explosion(new V(Q(-15,15),3+Q(0,4),Q(-10,10)),[16765527,5955839,16740576][e%3],1,{noDecal:!0}))}this.later(e?1.8:1,()=>this.ui.showEnd(e))}}updateMouse(e,t){let n=this.app.renderer.domElement.getBoundingClientRect();this.mouse.set((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1),this.raycaster.setFromCamera(this.mouse,this.camera),this.mouseValid=!!this.raycaster.ray.intersectPlane(this.groundPlane,this.mouseWorld)}onPointerMove(e){this.updateMouse(e.clientX,e.clientY)}bossIntro(e){let t={golem:`践踏：眩晕附近英雄 · 半血狂暴`,lich:`每 8 秒召唤骷髅兵 · 半血狂暴`,dragon:`飞行 · 对英雄喷吐烈焰 · 半血狂暴`,voidlord:`相位跃迁向前闪烁 · 66%/33% 生命展开虚空屏障并召唤仆从`}[e.type]||``,n=this.camTarget.clone();this.gest||(this.focusCamOn(e.pos),this.later(1.6,()=>{this.gest||this.camTarget.copy(n)})),this.later(.2,()=>this.ui.banner(`${e.def.icon} ${e.def.name}`,`#ff6a5a`,t)),$.play(`roar`,.7)}onResize(){let e=this.app.layout||{compact:!1,portrait:!1,w:innerWidth,h:innerHeight},t=`${e.compact}|${e.portrait}`;if(t===this.layoutKey)return;if(this.layoutKey=t,this.camYaw=e.portrait?Math.PI/2:0,!e.compact){this.zoomMin=.7,this.zoomMax=1.5,this.camZoom=1;return}let n=this.camera,r=(e.portrait?this.map.h:this.map.w)*2*.98,i=2*Math.atan(Math.tan(n.fov*Math.PI/360)*n.aspect),a=r/(74.4*Math.tan(i/2));this.camZoom=Math.max(.8,Math.min(2.2,a)),this.zoomMin=.6,this.zoomMax=Math.max(1.6,this.camZoom*1.35),this.camTarget.set(e.portrait?6:0,0,e.portrait?0:3)}screenToWorldDir(e,t){let n=Math.cos(this.camYaw),r=Math.sin(this.camYaw);return{x:e*n-t*r,z:-e*r-t*n}}groundAt(e,t,n){let r=this.app.renderer.domElement.getBoundingClientRect(),i=new B((e-r.left)/r.width*2-1,-((t-r.top)/r.height)*2+1);return this.raycaster.setFromCamera(i,this.camera),this.raycaster.ray.intersectPlane(this.groundPlane,n)}panBy(e,t,n,r){let i=this.groundAt(e,t,new V),a=this.groundAt(n,r,new V);i&&a&&(this.camTarget.x+=i.x-a.x,this.camTarget.z+=i.z-a.z,this.clampCam(),this.camSnapUntil=performance.now()+120)}clampCam(){let e=this.app.layout&&this.app.layout.compact?6:0;this.camTarget.x=Math.max(-18-e,Math.min(18+e,this.camTarget.x)),this.camTarget.z=Math.max(-12-e,Math.min(14+e,this.camTarget.z))}isTargeting(){return!!this.buildType||this.pendingCard>=0||this.aimSkill>=0}touchDown(e){if(this.state===`over`||this.paused)return;let t=this.touches;if(t.set(e.pointerId,{x:e.clientX,y:e.clientY}),t.size===1){let t=this.isTargeting()&&this.state!==`reward`;this.gest={mode:t?`aim`:`tap`,id:e.pointerId,sx:e.clientX,sy:e.clientY,lx:e.clientX,ly:e.clientY},t&&this.updateMouse(e.clientX,e.clientY)}else if(t.size===2){let[e,n]=[...t.values()];this.gest={mode:`pinch`,d0:Math.max(20,Math.hypot(e.x-n.x,e.y-n.y)),z0:this.camZoom,mx:(e.x+n.x)/2,my:(e.y+n.y)/2}}}touchMove(e){let t=this.touches,n=t.get(e.pointerId);if(!n)return;n.x=e.clientX,n.y=e.clientY;let r=this.gest;if(r){if(r.mode===`pinch`){if(t.size<2)return;let[e,n]=[...t.values()],i=Math.max(20,Math.hypot(e.x-n.x,e.y-n.y));this.camZoom=Math.max(this.zoomMin,Math.min(this.zoomMax,r.z0*r.d0/i));let a=(e.x+n.x)/2,o=(e.y+n.y)/2;this.panBy(r.mx,r.my,a,o),r.mx=a,r.my=o}else e.pointerId===r.id&&(r.mode===`tap`&&Math.hypot(e.clientX-r.sx,e.clientY-r.sy)>12&&(r.mode=`pan`),r.mode===`pan`?this.panBy(r.lx,r.ly,e.clientX,e.clientY):r.mode===`aim`&&this.updateMouse(e.clientX,e.clientY),r.lx=e.clientX,r.ly=e.clientY)}}touchUp(e,t){let n=this.touches;if(!n.has(e.pointerId))return;n.delete(e.pointerId);let r=this.gest;if(r){if(r.mode===`pinch`){if(n.size===0)this.gest=null;else{let[e,t]=[...n.entries()][0];this.gest={mode:`pan`,id:e,sx:t.x,sy:t.y,lx:t.x,ly:t.y}}}else e.pointerId===r.id&&(this.gest=null,t||this.state===`over`||this.paused||(r.mode===`tap`||r.mode===`aim`)&&this.onPointerDown({button:0,clientX:e.clientX,clientY:e.clientY,touch:!0}))}}dragAimTo(e,t){this.updateMouse(e,t)}dragAimRelease(e,t){let n=document.elementFromPoint(e,t)===this.app.renderer.domElement;if(this.dragNoneCard>=0){let e=this.dragNoneCard;this.dragNoneCard=-1,n&&this.selectCard(e)}else n&&this.isTargeting()?this.onPointerDown({button:0,clientX:e,clientY:t,touch:!0}):this.cancelModes()}toggleHold(){let e=this.selectedHero;e&&e.alive&&(e.holdPos=!e.holdPos,$.play(`click`),this.ui.toast(e.holdPos?`英雄坚守原地（不追击）`:`英雄恢复自由追击`),this.ui.renderHeroes())}focusCamOn(e){this.camTarget.set(e.x,0,e.z),this.clampCam()}pickEnemy(){let e=null,t=1.6*1.6;for(let n of this.enemies){if(!n.alive)continue;let r=(n.pos.x-this.mouseWorld.x)**2+(n.pos.z-this.mouseWorld.z)**2-(n.boss?2:0);r<t&&(t=r,e=n)}return e}focusOrder(e){let t=this.selectedHero;return!t||!t.alive?!1:(t.focus=e,t.moveTarget=null,this.focusEnemy=e,this.fx.ring(e.pos,16734778,1.5,.35),$.play(`click`),!0)}pickHero(){let e=null,t=3.24;for(let n of this.units){if(n.kind!==`hero`||!n.alive)continue;let r=n.pos.distanceToSquared(this.mouseWorld);r<t&&(t=r,e=n)}return e}onPointerDown(e){if(this.state===`over`||this.paused||(this.updateMouse(e.clientX,e.clientY),!this.mouseValid))return;let[t,n]=this.world.toGrid(this.mouseWorld.x,this.mouseWorld.z);if(e.button===2){if(this.buildType||this.pendingCard>=0||this.aimSkill>=0){this.cancelModes();return}let e=this.pickEnemy();if(e&&this.focusOrder(e))return;this.orderMove();return}if(e.button!==0)return;if(this.aimSkill>=0){this.castHeroSkill(this.aimSkill,this.mouseWorld.clone());return}if(this.pendingCard>=0){if(J[this.hand[this.pendingCard]].target===`tower`){let e=this.world.inGrid(t,n)&&this.world.cells[n][t].tower;if(!e){$.play(`error`),this.ui.toast(`请选择一座防御塔`);return}this.playCard(this.pendingCard,null,e)}else this.playCard(this.pendingCard,this.mouseWorld.clone(),null);return}if(this.buildType){this.tryBuild(t,n);return}let r=this.pickHero();if(r){this.selectedHero=r,$.play(`click`),this.ui.renderHeroes();return}let i=this.world.inGrid(t,n)&&this.world.cells[n][t].tower;if(i){this.selectedTower=i,$.play(`click`),this.ui.showTowerPanel(i);return}this.selectedTower&&(this.selectedTower=null,this.ui.hideTowerPanel());let a=this.pickEnemy();a&&this.focusOrder(a)||this.orderMove()}orderMove(){let e=this.selectedHero;if(!e||!e.alive)return;let t=this.mouseWorld.clone(),n=this.world,r=n.W-.5,i=n.H-.5;t.x=Math.max(-r,Math.min(r,t.x)),t.z=Math.max(-i,Math.min(i,t.z)),t.y=0,e.moveTarget=t,e.focus=null,this.focusEnemy=null,this.moveMarker.position.set(t.x,.07,t.z),this.moveMarker.visible=!0,this.moveMarker.userData.t=0,this.fx.burst(t,{count:10,color:6750088,intensity:2,speed:2,flat:!0,life:.4,size:.4})}onWheel(e){this.camZoom=Math.max(this.zoomMin,Math.min(this.zoomMax,this.camZoom*(e.deltaY>0?1.1:.9)))}onKeyDown(e){let t=e.key.length===1?e.key.toUpperCase():e.key;if(this.keys[t]=!0,e.key===`Shift`&&(this.keys.Shift=!0),this.state===`over`)return;if(t===`Escape`){this.buildType||this.pendingCard>=0?this.cancelModes():this.selectedTower?(this.selectedTower=null,this.ui.hideTowerPanel()):this.ui.togglePause();return}if(this.paused||this.state===`reward`)return;if(t===` `){e.preventDefault(),document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),this.startWave();return}if(t>=`1`&&t<=`9`){this.selectCard(Number(t)-1);return}let n=Pf.indexOf(t);if(n>=0){if(e.repeat)return;if(e.shiftKey){this.learnSkill(this.selectedHero,n);return}this.ui.aimFromButton=!1,this.beginAim(n)}else if(t===`H`)this.toggleHold();else if(t===`Tab`){e.preventDefault();let t=this.units.filter(e=>e.kind===`hero`);if(t.length){let e=t.indexOf(this.selectedHero);this.selectedHero=t[(e+1)%t.length],this.ui.renderHeroes()}}else t===`F`?this.selectedHero&&this.focusCamOn(this.selectedHero.pos):(t===`U`&&this.selectedTower&&this.upgradeTower(this.selectedTower),t===`X`&&this.selectedTower&&this.sellTower(this.selectedTower))}onKeyUp(e){let t=e.key.length===1?e.key.toUpperCase():e.key;this.keys[t]=!1;let n=Pf.indexOf(t);n>=0&&this.aimSkill===n&&!this.ui.aimFromButton&&this.castHeroSkill(n),e.key===`Shift`&&(this.keys.Shift=!1)}update(e){let t=this.paused?0:Math.min(.05,e)*this.speed;this.updateCamera(e),t>0&&this.step(t),this.updateHover(),this.fx.update(this.paused?0:Math.min(.05,e)*this.speed),this.world.update(t),this.ui.update(e)}step(e){this.time+=e;for(let t=this.timers.length-1;t>=0;t--){let n=this.timers[t];n.t-=e,n.t<=0&&(this.timers.splice(t,1),n.fn())}let t=.45;for(let e of this.towers)e.def.support&&(t+=e.stats.mana);if(this.tiers.arcane>=2&&(t*=1.3),this.mana=Math.min(this.maxMana,this.mana+t*e),this.state===`wave`){for(this.waveTime+=e;this.spawnQueue.length&&this.spawnQueue[0].t<=this.waveTime;){let e=this.spawnQueue.shift(),t=new df(this,e.type,e.path,this.waveScale);this.enemies.push(t);let n=this.world.portals[e.path];this.fx.burst(n.position.clone().setY(1.3),{count:15,color:this.world.portalColor,intensity:2.5,speed:3,life:.5,size:.6}),t.boss&&(this.fx.shake(.8),this.ui.bossBar(t),this.bossIntro(t))}this.drawTimer+=e,this.drawTimer>=(this.has(`prophecy`)?7:9)&&(this.drawTimer=0,this.drawCards(1))}let n=this.selectedHero;for(let e of this.units)e.manual=null;if(n&&n.alive&&this.state!==`reward`){let e=+!!this.keys.D-!!this.keys.A,t=+!!this.keys.W-!!this.keys.S;if(e||t){let r=this.screenToWorldDir(e,t);n.manual={x:Math.round(r.x*1e3)/1e3,z:Math.round(r.z*1e3)/1e3}}}for(let t of this.enemies)t.alive&&t.update(e);this.enemies=this.enemies.filter(e=>e.alive);for(let t of this.towers)t.update(e);for(let t of this.units)t.update(e);for(let e=this.units.length-1;e>=0;e--)this.units[e].removed&&(this.selectedHero===this.units[e]&&(this.selectedHero=null),this.units[e].destroy(),this.units.splice(e,1));for(let t of this.projectiles)t.update(e);if(this.projectiles=this.projectiles.filter(e=>e.alive),this.zones=this.zones.filter(t=>t.update(e)),this.moveMarker.visible){this.moveMarker.userData.t+=e;let t=this.moveMarker.userData.t;this.moveMarker.scale.setScalar(1+t*2),this.moveMarker.material.opacity=Math.max(0,1-t*1.5),t>.7&&(this.moveMarker.visible=!1)}this.ambient(e),this.state===`wave`&&!this.spawnQueue.length&&!this.enemies.length&&this.endWave()}ambient(e){this.ambT+=e;let t=this.world.theme.amb,n=this.fx,r=+(Math.random()<e*20*kd.ambient);for(let e=0;e<r;e++){let e=Q(-28,28),r=Q(-20,20);if(t===`firefly`)n.glow.emit({x:e,y:Q(.3,2.5),z:r,vx:Q(-.4,.4),vy:Q(-.1,.3),vz:Q(-.4,.4),life:4,size:.35,sizeEnd:.2,color:n.col(14221178,2),drag:0});else if(t===`spore`)n.glow.emit({x:e,y:Q(0,1),z:r,vx:Q(-.2,.2),vy:Q(.3,.8),vz:Q(-.2,.2),life:5,size:.3,sizeEnd:.1,color:n.col(Math.random()<.5?7012288:12618495,1.8),drag:0});else if(t===`ember`)n.glow.emit({x:e,y:0,z:r,vx:Q(-.3,.3),vy:Q(1,2.5),vz:Q(-.3,.3),life:3,size:.3,sizeEnd:.05,color:n.col(16742954,3),color2:n.col(16722432,1),drag:0});else for(let e=0;e<3;e++)n.glow.emit({x:Q(-28,28),y:Q(8,14),z:Q(-22,18),vx:Q(.3,1),vy:-1.6,vz:Q(-.2,.2),life:7,size:.3,sizeEnd:.3,color:n.col(16777215,.9),drag:0})}}updateCamera(e){let t=18*e*this.camZoom,n=+!!this.keys.ArrowRight-!!this.keys.ArrowLeft,r=+!!this.keys.ArrowUp-!!this.keys.ArrowDown;if(n||r){let e=this.screenToWorldDir(n,r);this.camTarget.x+=e.x*t,this.camTarget.z+=e.z*t}this.clampCam();let i=this.camZoom,a=Math.sin(this.camYaw)*22*i,o=Math.cos(this.camYaw)*22*i;this._camDesired||=new V;let s=this._camDesired.set(this.camTarget.x+a,30*i,this.camTarget.z+o),c=performance.now()<this.camSnapUntil;this.camera.position.lerp(s,c?1:Math.min(1,e*8)),this.camera.position.add(this.fx.shakeOffset),this.camera.lookAt(this.camera.position.x-a,0,this.camera.position.z-o)}updateHover(){let e=this.world,t=null;if(this.selectedTower&&!this.selectedTower.def.support&&(t=[this.selectedTower.pos,this.selectedTower.range,8969727]),e.hover.visible=!1,this.ghost&&(this.ghost.visible=!1),this.buildType&&this.mouseValid){let[n,r]=e.toGrid(this.mouseWorld.x,this.mouseWorld.z);if(e.inGrid(n,r)){let i=e.toWorld(n,r),a=e.canBuild(n,r)&&this.gold>=this.towerCost(this.buildType,0);e.hover.visible=!0,e.hover.position.set(i.x,.03,i.z),e.hover.material.color.set(a?6750088:16733525),this.ghost.visible=!0,this.ghost.position.copy(i),this.ghostMat.color.set(a?8978346:16742263);let o=nd[this.buildType].levels[0].range;o&&(t=[i,o,a?8978346:16742263])}}if(t?(this.rangeRing.visible=!0,this.rangeRing.position.set(t[0].x,.06,t[0].z),this.rangeRing.scale.setScalar(t[1]),this.rangeRing.material.color.set(t[2]),this.rangeFill.material.color.set(t[2])):this.rangeRing.visible=!1,this.pendingCard>=0&&this.mouseValid){let t=J[this.hand[this.pendingCard]];if(t.target===`tower`){let[t,n]=e.toGrid(this.mouseWorld.x,this.mouseWorld.z),r=e.inGrid(t,n)&&e.cells[n][t].tower;this.targetRing.visible=!!r,r&&(this.targetRing.position.set(r.pos.x,.08,r.pos.z),this.targetRing.scale.setScalar(1.3))}else this.targetRing.visible=!0,this.targetRing.position.set(this.mouseWorld.x,.08,this.mouseWorld.z),this.targetRing.scale.setScalar(t.radius||1.5);this.targetRing.material.color.set(t.color),this.targetFill.material.color.set(t.color),this.targetRing.rotation.y+=.02}else if((this.aimSkill>=0||this.ui.hoverSkill>=0)&&this.selectedHero&&this.selectedHero.alive){let e=this.selectedHero,t=this.aimSkill>=0?this.aimSkill:this.ui.hoverSkill,n=Df(e.id,t),r=n===0?e.pos:this.mouseWorld;if(this.targetRing.visible=!0,this.targetRing.position.set(r.x,.08,r.z),this.targetRing.scale.setScalar(Of(e.id,t)),this.targetRing.material.color.set(id[e.id].color),this.targetFill.material.color.set(id[e.id].color),this.targetRing.rotation.y+=.03,n>0){this.castRing.visible=!0,this.castRing.position.set(e.pos.x,.07,e.pos.z),this.castRing.scale.setScalar(n);let t=r.x-e.pos.x,i=r.z-e.pos.z,a=Math.hypot(t,i);a>n&&this.targetRing.position.set(e.pos.x+t/a*n,.08,e.pos.z+i/a*n)}}else this.targetRing.visible=!1;(!(this.aimSkill>=0||this.ui.hoverSkill>=0)||!this.targetRing.visible||this.pendingCard>=0)&&(this.castRing.visible=!1);let n=this.focusEnemy;n&&n.alive&&this.selectedHero&&this.selectedHero.focus===n?(this.focusMarker.visible=!0,this.focusMarker.position.set(n.pos.x,.09,n.pos.z),this.focusMarker.scale.setScalar(n.def.size*(n.boss?2:1.3)+.3),this.focusMarker.rotation.y-=.05):this.focusMarker.visible=!1}dispose(){$.stopMusic(),this.fx.clear();for(let e of this.enemies)e.destroy();this.world.dispose(),this.ui.dispose()}};function If(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}var Lf=`arcane-bastion-save-v1`,Rf=class{constructor(){this.container=document.getElementById(`app`),this.renderer=new zu({antialias:kd.antialias,powerPreference:`high-performance`}),this.pixelRatio=Math.min(window.devicePixelRatio||1,kd.pixelRatio),this.renderer.setPixelRatio(this.pixelRatio),this.perf={acc:0,frames:0,slow:0},this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=1,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.05,this.container.appendChild(this.renderer.domElement),this.camera=new es(45,1,.5,600),this.camera.position.set(0,30,22),this.camera.lookAt(0,0,0),this.scene=null,this.composer=new Ju(this.renderer),this.renderPass=new Yu(new bn,this.camera),this.bloom=new Zu(new B(512,512),.7,.55,.9),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloom),this.composer.addPass(new $u),this.ui=document.getElementById(`ui`),this.CARDS=J,this.load(),this.resize(),window.addEventListener(`resize`,()=>this.resize()),this.bindInput(),this.timer=new us,this.timer.connect(document),this.game=null,this.title=null,this.showTitle(),this.renderer.setAnimationLoop(()=>this.frame())}load(){let e=null;try{e=JSON.parse(localStorage.getItem(Lf))}catch{e=null}let t=cd();this.save={collection:{...t,...e&&e.collection},deck:e&&Array.isArray(e.deck)&&e.deck.length>=10?e.deck.filter(e=>J[e]):sd.slice(),cleared:e&&e.cleared||{}};for(let e of Object.keys(J))this.save.collection[e]=Math.max(t[e],this.save.collection[e]||0);this.save.deck.length<10&&(this.save.deck=sd.slice())}persist(){try{localStorage.setItem(Lf,JSON.stringify(this.save))}catch{}}unlockCard(e){this.save.collection[e]=Math.min(ld(e),(this.save.collection[e]||0)+1),this.persist()}markCleared(e){this.save.cleared[e]=!0,this.persist()}resize(){let e=jd();this.layout=e;let t=window.innerWidth,n=window.innerHeight;this.width=t,this.height=n,this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(t,n),this.composer.setPixelRatio(this.pixelRatio),this.composer.setSize(t,n),this.bloom.resolution.set(t/kd.bloomDiv,n/kd.bloomDiv),this.camera.aspect=t/n,this.camera.fov=e.portrait?55:45,this.camera.updateProjectionMatrix();let r=this.game?this.game.fx:this.title&&this.title.fx;r&&r.setScale(n,this.camera.fov),this.game&&this.game.onResize()}adaptPerf(e){let t=this.perf;if(t.acc+=e,t.frames++,t.acc<2)return;let n=t.frames/t.acc;t.acc=0,t.frames=0,document.hidden||(n<38&&this.pixelRatio>kd.minPixelRatio?++t.slow>=2&&(t.slow=0,this.pixelRatio=Math.max(kd.minPixelRatio,this.pixelRatio-.25),this.resize()):t.slow=0)}bindInput(){let e=this.renderer.domElement;e.addEventListener(`contextmenu`,e=>e.preventDefault()),e.addEventListener(`pointermove`,e=>{e.pointerType===`mouse`&&this.game&&this.game.onPointerMove(e)}),e.addEventListener(`pointerdown`,e=>{$.init(),this.game&&(e.pointerType===`mouse`?this.game.onPointerDown(e):(e.preventDefault(),this.game.touchDown(e)))}),window.addEventListener(`pointermove`,e=>{e.pointerType!==`mouse`&&this.game&&this.game.touchMove(e)});let t=e=>{e.pointerType!==`mouse`&&this.game&&this.game.touchUp(e,e.type===`pointercancel`)};window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t),e.addEventListener(`wheel`,e=>{e.preventDefault(),this.game&&this.game.onWheel(e)},{passive:!1});let n=e=>e.preventDefault();document.addEventListener(`gesturestart`,n,{passive:!1}),document.addEventListener(`gesturechange`,n,{passive:!1}),document.addEventListener(`dblclick`,n,{passive:!1}),document.addEventListener(`touchmove`,e=>{(e.touches.length>1||!e.target.closest||!e.target.closest(`.scroll-y`))&&e.preventDefault()},{passive:!1}),Ed&&document.addEventListener(`contextmenu`,n);for(let e of[`touchend`,`click`])document.addEventListener(e,()=>$.init(),{once:!0});document.addEventListener(`visibilitychange`,()=>{document.hidden&&this.game&&!this.game.paused&&this.game.state!==`over`&&this.game.state!==`reward`&&this.game.ui.togglePause()}),window.addEventListener(`keydown`,e=>{$.init(),this.game?this.game.onKeyDown(e):e.key===`Escape`&&this.showTitle()}),window.addEventListener(`keyup`,e=>this.game&&this.game.onKeyUp(e)),window.addEventListener(`blur`,()=>{this.game&&(this.game.keys={},this.game.aimSkill=-1)}),document.addEventListener(`pointerdown`,()=>$.init(),{once:!0}),document.addEventListener(`mouseover`,e=>{e.target.closest&&e.target.closest(`.btn`)&&$.ctx&&$.play(`hover`,.6)})}frame(){this.timer.update();let e=this.timer.getDelta(),t=Math.min(.1,e);this.adaptPerf(Math.min(.5,e)),this.game?this.game.update(t):this.title&&this.updateTitle(t);let n=this.game?this.game.scene:this.title?this.title.scene:null;n&&(this.renderPass.scene=n,this.composer.render())}clearScreens(){this.game&&=(this.game.dispose(),null),this.ui.innerHTML=``}ensureTitleScene(){if(this.title)return;let e=new bn,t=new Qd(e,ed[0]),n=new rf(e,this.camera);n.setScale(this.height,this.camera.fov);let r=[];ad.forEach((t,n)=>{let i=Bd(t);i.position.set(-3+n*2,0,2),i.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),e.add(i),r.push(i)}),this.title={scene:e,world:t,fx:n,t:0,heroes:r,castT:0}}disposeTitle(){this.title&&=(this.title.fx.clear(),this.title.world.dispose(),null)}updateTitle(e){let t=this.title;t.t+=e;let n=t.t*.06;if(this.camera.position.set(Math.sin(n)*30,16+Math.sin(t.t*.2)*2,Math.cos(n)*30),this.camera.lookAt(0,1,0),t.world.update(e),t.heroes.forEach((e,r)=>{e.rotation.y=n+Math.PI+Math.sin(t.t+r)*.3,e.userData.body.position.y=Math.abs(Math.sin(t.t*2+r))*.15}),t.castT-=e,t.castT<=0){t.castT=1.2+Math.random();let e=new V(Q(-14,14),0,Q(-10,10)),n=Math.floor(Math.random()*4),r=[16738842,8378623,11560447,7143322];n===0?t.fx.explosion(e,r[0],1,{noDecal:!0}):n===1?(t.fx.ring(e,r[1],4,.8),t.fx.burst(e.clone().setY(.5),{count:60,color:14743807,color2:5945599,intensity:2,speed:8,flat:!0,life:.7,size:.7})):n===2?(t.fx.lightning(new V(e.x,18,e.z),e.clone().setY(.2),11057407,.3,.35),t.fx.light(e,11057407,6,10,.3)):(t.fx.pillar(e,r[3],1.5,18,1.2),t.fx.burst(e.clone().setY(.5),{count:40,color:r[3],intensity:2.5,speed:2,life:1.4,size:.6,up:3}))}Math.random()<e*20&&t.fx.glow.emit({x:Q(-25,25),y:Q(.3,3),z:Q(-18,18),vx:Q(-.4,.4),vy:Q(0,.3),vz:Q(-.4,.4),life:4,size:.35,sizeEnd:.2,color:t.fx.col(14221178,2),drag:0}),t.fx.update(e)}showTitle(e=!1){if(this.game&&e!==!0){this.fadeTo(()=>this.showTitle(!0));return}this.clearScreens(),this.ensureTitleScene(),$.startMusic(`calm`);let t=document.createElement(`div`);t.className=`screen title-screen`,t.innerHTML=`
      <div class="title-wrap">
        <div class="logo">
          <div class="logo-sub">ARCANE BASTION</div>
          <h1>奥术壁垒</h1>
          <div class="logo-tag">英雄 · 卡牌 · 塔防</div>
        </div>
        <div class="menu">
          <button class="btn primary big" id="m-start">⚔ 开始征程</button>
          <button class="btn big" id="m-deck">🃏 卡组构筑</button>
          <button class="btn big" id="m-help">📜 游戏说明</button>
        </div>
        <div class="title-foot">程序生成的低多边形美术 · Web Audio 合成音效 · three.js</div>
      </div>`,this.ui.appendChild(t),t.querySelector(`#m-start`).onclick=()=>{$.init(),$.play(`click`),this.showMapSelect()},t.querySelector(`#m-deck`).onclick=()=>{$.init(),$.play(`click`),this.showDeckBuilder()},t.querySelector(`#m-help`).onclick=()=>{$.init(),$.play(`click`),this.showHelp()}}showMapSelect(){this.clearScreens(),this.ensureTitleScene();let e=document.createElement(`div`);e.className=`screen panel-screen`;let t={grass:`🌿`,lava:`🌋`,snow:`❄️`,swamp:`🍄`};e.innerHTML=`
      <div class="panel-box wide scroll-y">
        <h2>选择战场</h2>
        <div class="map-list">
          ${ed.map((e,n)=>`
            <div class="map-card theme-${e.theme}" data-i="${n}">
              <div class="map-icon">${t[e.theme]}</div>
              <h3>${e.name} ${this.save.cleared[e.id]?`<span class="cleared">✔ 已通关</span>`:``}</h3>
              <p>${e.desc}</p>
              <div class="map-meta"><span>波次 ${e.waves}</span><span>难度 ${`★`.repeat(Math.round(e.difficulty*4-3))}</span><span>路线 ${e.paths.length}</span><span>初始 💰${e.startGold}</span></div>
            </div>`).join(``)}
        </div>
        <div class="deck-summary">当前卡组：<b>${this.save.deck.length}</b> 张 <button class="btn small" id="ms-deck">编辑卡组</button></div>
        <div class="row-btns"><button class="btn" id="ms-back">← 返回</button></div>
      </div>`,this.ui.appendChild(e),e.querySelectorAll(`.map-card`).forEach(e=>e.addEventListener(`click`,()=>{$.play(`click`),this.startGame(Number(e.dataset.i))})),e.querySelector(`#ms-back`).onclick=()=>{$.play(`click`),this.showTitle()},e.querySelector(`#ms-deck`).onclick=()=>{$.play(`click`),this.showDeckBuilder()}}showHelp(){this.clearScreens(),this.ensureTitleScene();let e=document.createElement(`div`);e.className=`screen panel-screen`,e.innerHTML=`
      <div class="panel-box help scroll-y">
        <h2>游戏说明</h2>
        <div class="help-cols">
          <div>
            <h3>🏰 目标</h3>
            <p>敌人会沿道路冲向水晶圣坛。圣坛生命归零即失败，撑过所有波次即胜利。</p>
            <h3>🗼 防御塔</h3>
            <p>点击右侧按钮选择防御塔，再点击空地建造（按住 Shift 连续建造）。点击已建造的塔可以升级(U)或出售(X)。</p>
            <ul>${rd.map(e=>`<li>${nd[e].icon} <b>${nd[e].name}</b>：${nd[e].desc}</li>`).join(``)}</ul>
          </div>
          <div>
            <h3>🦸 英雄</h3>
            <p>点击左下角英雄头像花费金币召唤（最多 3 名）。选中英雄后：</p>
            <ul>
              <li>左键/右键点击地面：移动到目标点</li>
              <li><b>WASD</b>：直接操控英雄移动</li>
              <li><b>按住 Q / E / R</b> 瞄准（显示施法距离），松开施放</li>
              <li><b>点击敌人</b>：集火目标 · <b>H</b>：坚守原地</li>
              <li><b>Shift + Q/E/R</b>：用技能点学习/升级技能（每级 +30% 威力、-8% 冷却）</li>
              <li><b>Tab</b>：切换英雄 · <b>F</b>：镜头聚焦</li>
            </ul>
            <p>近战英雄能阻挡敌人；英雄升级获得技能点，终极技能 3 级时领悟。每名英雄还有独特被动。</p>
            <ul>${ad.map(e=>`<li>${id[e].icon} <b>${id[e].name}</b>：${id[e].desc}</li>`).join(``)}</ul>
          </div>
          <div>
            <h3>🃏 魔法卡牌</h3>
            <p>出征前在「卡组构筑」中组建 10-20 张的卡组。每波开始抽 2 张，战斗中每 9 秒再抽 1 张。</p>
            <p>法力随时间恢复（法力之泉可加速）。点击卡牌或按数字键 <b>1-9</b> 选择，再点击地面释放；右键取消。</p>
            <p>每波结束后可从 3 张卡中选择 1 张加入卡组（永久解锁），或改为<b>精简卡组</b>移除一张。史诗与传说卡只能这样获得！</p>
            <h3>🔗 流派与连携</h3>
            <p>卡牌分属 ${dd.map(e=>ud[e].icon+ud[e].name).join(`、`)} 六个流派。卡组中同流派卡牌达到 3 / 6 张时激活<b>羁绊</b>加成。连续打出同流派卡牌触发<b>连携</b>，每层伤害 +15%。</p>
            <h3>🏺 遗物</h3>
            <p>开局与每次击败首领后，从 3 件遗物中选择 1 件，本局持续生效。共 ${Object.keys(md).length} 种。</p>
            <h3>📱 触屏操作</h3>
            <p>单指点击：选择 / 建造 / 移动英雄 · 单指拖动：平移镜头 · 双指捏合：缩放</p>
            <p>把<b>卡牌或技能按钮直接拖到战场</b>松手即施放；也可先点卡牌再点地面。长按按钮查看详情，顶部提示条可随时取消。</p>
            <h3>⌨ 键盘</h3>
            <p><b>空格</b>开始下一波 · <b>Esc</b> 暂停 · 方向键平移镜头 · 滚轮缩放</p>
            <h3>👹 敌人机制</h3>
            <p>🧌 巨魔会再生（灼烧可抑制）· 🧨 自爆地精被阻挡或死亡时爆炸眩晕英雄 · 🔰 圣盾卫士让周围敌人减伤 30% · 首领半血狂暴；👁️ 虚空领主会向前闪烁并展开虚空屏障。</p>
          </div>
        </div>
        <div class="row-btns"><button class="btn" id="h-back">← 返回</button></div>
      </div>`,this.ui.appendChild(e),e.querySelector(`#h-back`).onclick=()=>{$.play(`click`),this.showTitle()}}showDeckBuilder(){this.clearScreens(),this.ensureTitleScene();let e=this.save.deck.slice(),t=document.createElement(`div`);t.className=`screen panel-screen`,t.innerHTML=`
      <div class="panel-box deck-builder">
        <div class="db-left">
          <div class="db-head">
            <h2>卡牌收藏</h2>
            <div class="db-filters">
              <button class="btn small active" data-f="all">全部</button>
              <button class="btn small" data-f="common">普通</button>
              <button class="btn small" data-f="rare">稀有</button>
              <button class="btn small" data-f="epic">史诗</button>
              <button class="btn small" data-f="legendary">传说</button>
              <span class="db-sep"></span>
              ${dd.map(e=>`<button class="btn small" data-f="s:${e}" title="${ud[e].name}">${ud[e].icon}</button>`).join(``)}
            </div>
          </div>
          <div class="collection scroll-y" id="db-col"></div>
        </div>
        <div class="db-right">
          <h2>我的卡组 <span id="db-count"></span></h2>
          <div class="curve" id="db-curve"></div>
          <div class="db-syn" id="db-syn"></div>
          <div class="deck-list scroll-y" id="db-list"></div>
          <div class="db-btns">
            <button class="btn small" id="db-default">推荐卡组</button>
            <button class="btn small" id="db-clear">清空</button>
          </div>
          <div class="db-btns">
            <button class="btn primary" id="db-save">保存并返回</button>
          </div>
          <div class="db-msg" id="db-msg"></div>
        </div>
      </div>`,this.ui.appendChild(t);let n=`all`,r=t=>e.filter(e=>e===t).length,i=()=>{let o=t.querySelector(`#db-col`);o.innerHTML=Object.keys(J).filter(e=>n===`all`||J[e].rarity===n||n.startsWith(`s:`)&&J[e].school===n.slice(2)).sort((e,t)=>J[e].cost-J[t].cost).map(e=>{let t=this.save.collection[e]||0,n=r(e),i=t===0;return`<div class="col-slot ${i?`locked`:``} ${n>=t&&!i?`maxed`:``}">${Af(e)}<div class="own">${i?`🔒 未解锁`:`${n} / ${t}`}</div></div>`}).join(``),o.querySelectorAll(`.col-slot`).forEach(t=>{let n=t.querySelector(`.card`).dataset.id;t.addEventListener(`click`,()=>{let t=this.save.collection[n]||0;t===0?($.play(`error`),a(`该卡牌尚未解锁：在战斗奖励中获得它！`)):r(n)>=t?($.play(`error`),a(`「${J[n].name}」已全部加入卡组`)):e.length>=20?($.play(`error`),a(`卡组最多 20 张`)):(e.push(n),$.play(`card`),i())})});let s=t.querySelector(`#db-list`);s.innerHTML=[...new Set(e)].sort((e,t)=>J[e].cost-J[t].cost).map(e=>{let t=J[e];return`<div class="deck-row rarity-${t.rarity}" data-id="${e}" style="--cc:${t.color};--rc:${od[t.rarity].color}">
          <span class="dr-cost">${t.cost}</span><span class="dr-icon">${t.icon}</span><span class="dr-name">${t.name}</span><span class="dr-n">×${r(e)}</span></div>`}).join(``)||`<div class="empty">点击左侧卡牌加入卡组</div>`,s.querySelectorAll(`.deck-row`).forEach(t=>t.addEventListener(`click`,()=>{let n=e.lastIndexOf(t.dataset.id);n>=0&&e.splice(n,1),$.play(`click`),i()}));let c=t.querySelector(`#db-count`);c.textContent=`${e.length} / 20`,c.className=e.length<10?`bad`:`good`;let l=[0,0,0,0,0,0,0,0];e.forEach(e=>l[Math.min(7,J[e].cost)]++);let u=Math.max(1,...l),d=fd(e);t.querySelector(`#db-syn`).innerHTML=dd.map(e=>{let t=ud[e],n=t.tiers.filter(t=>d[e]>=t.n).length,r=t.tiers[n];return`<div class="dbs tier${n}" style="--sc:${t.color}" title="${t.tiers.map(e=>`[${e.n}] ${e.desc}`).join(`
`)}">
          <span>${t.icon} ${t.name}</span><b>${d[e]}</b>
          <small>${n?t.tiers[n-1].desc:``}${r?`${n?` · `:``}再 ${r.n-d[e]} 张：${r.desc}`:``}</small></div>`}).join(``),t.querySelector(`#db-curve`).innerHTML=l.map((e,t)=>`<div class="cbar"><i style="height:${e/u*100}%"></i><span>${t===7?`7+`:t}</span></div>`).join(``)},a=e=>{let n=t.querySelector(`#db-msg`);n.textContent=e,clearTimeout(this.msgT),this.msgT=setTimeout(()=>n.textContent=``,2500)};t.querySelectorAll(`.db-filters .btn`).forEach(e=>e.addEventListener(`click`,()=>{t.querySelectorAll(`.db-filters .btn`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),n=e.dataset.f,$.play(`click`),i()})),t.querySelector(`#db-default`).onclick=()=>{e.length=0;let t={};for(let n of sd)t[n]=(t[n]||0)+1,t[n]<=(this.save.collection[n]||0)&&e.push(n);$.play(`click`),i()},t.querySelector(`#db-clear`).onclick=()=>{e.length=0,$.play(`click`),i()},t.querySelector(`#db-save`).onclick=()=>{e.length<10?($.play(`error`),a(`卡组至少需要 10 张卡牌`)):(this.save.deck=e.slice(),this.persist(),$.play(`upgrade`),this.showTitle())},i()}fadeTo(e){this.fadeEl||(this.fadeEl=document.createElement(`div`),this.fadeEl.className=`screen-fade`,document.body.appendChild(this.fadeEl)),this.fading||(this.fading=!0,$.play(`whoosh`),this.fadeEl.classList.add(`on`),setTimeout(()=>{try{e()}finally{requestAnimationFrame(()=>{this.fadeEl.classList.remove(`on`),this.fading=!1})}},280))}startGame(e,t=!1){t?(this.clearScreens(),this.disposeTitle(),$.init(),this.camera.position.set(0,30,23),this.camera.lookAt(0,0,1),this.game=new Ff(this,e,this.save.deck)):this.fadeTo(()=>this.startGame(e,!0))}};window.addEventListener(`DOMContentLoaded`,()=>{try{window.__app=new Rf}catch(e){console.error(e),document.getElementById(`ui`).innerHTML=`<div class="screen panel-screen"><div class="panel-box"><h2>无法启动游戏</h2><p>你的浏览器可能不支持 WebGL。</p><pre>${String(e)}</pre></div></div>`}});