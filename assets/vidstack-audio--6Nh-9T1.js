import{bB as i}from"./app-B2-FSYVK.js";import{H as r,a as s}from"./vidstack-Dgd3Tj9x-DYydyF_S.js";import"./vidstack-Ccp8mxka-BYMk5Wcu.js";class u extends r{constructor(t,e){super(t,e),this.$$PROVIDER_TYPE="AUDIO",i(()=>{this.airPlay=new s(this.media,e)},this.scope)}get type(){return"audio"}setup(){super.setup(),this.type==="audio"&&this.b.delegate.c("provider-setup",this)}get audio(){return this.a}}export{u as AudioProvider};
