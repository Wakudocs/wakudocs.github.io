import{b$ as N,V as m,c0 as _,S as x,c1 as S,ax as E,T as R,bS as g,b_ as y,bZ as $,bT as l,c2 as C,c3 as F,bV as j,c4 as I,bU as A,c5 as K,c6 as P,ag as O,$ as H}from"./app-BYb5VymE.js";import{VideoProvider as Q}from"./vidstack-video-CFEaLysn.js";import{R as V}from"./vidstack-D6ttsqNA-LqAMYM_H.js";import"./vidstack-BJs9jZ9Z-R6kVtUI6.js";function L(n){try{return new Intl.DisplayNames(navigator.languages,{type:"language"}).of(n)??null}catch{return null}}const G=n=>`dash-${H(n)}`;class z{constructor(t,i){this.m=t,this.b=i,this.d=null,this.qb=null,this.rb={},this.sb=new Set,this.Kb=null,this.oe={},this.na=-1}get instance(){return this.d}setup(t){this.d=t().create();const i=this.Ii.bind(this);for(const e of Object.values(t.events))this.d.on(e,i);this.d.on(t.events.ERROR,this.Q.bind(this));for(const e of this.sb)e(this.d);this.b.player.dispatch("dash-instance",{detail:this.d}),this.d.initialize(this.m,void 0,!1),this.d.updateSettings({streaming:{text:{defaultEnabled:!1,dispatchForManualRendering:!0},buffer:{fastSwitchEnabled:!0}},...this.rb}),this.d.on(t.events.FRAGMENT_LOADING_STARTED,this.Ji.bind(this)),this.d.on(t.events.FRAGMENT_LOADING_COMPLETED,this.Ki.bind(this)),this.d.on(t.events.MANIFEST_LOADED,this.Li.bind(this)),this.d.on(t.events.QUALITY_CHANGE_RENDERED,this.Za.bind(this)),this.d.on(t.events.TEXT_TRACKS_ADDED,this.Mi.bind(this)),this.d.on(t.events.TRACK_CHANGE_RENDERED,this.pc.bind(this)),this.b.qualities[S.Ia]=this.je.bind(this),E(this.b.qualities,"change",this.ke.bind(this)),E(this.b.audioTracks,"change",this.le.bind(this)),this.qb=R(this.me.bind(this))}aa(t){return new g(G(t.type),{detail:t})}me(){if(!this.b.$state.live())return;const t=new V(this.ne.bind(this));return t.Xa(),t.$.bind(t)}ne(){if(!this.d)return;const t=this.d.duration()-this.d.time();this.b.$state.liveSyncPosition.set(isNaN(t)?1/0:t)}Ii(t){var i;(i=this.b.player)==null||i.dispatch(this.aa(t))}Ni(t){var a;const i=(a=this.Kb)==null?void 0:a[y._],e=(i==null?void 0:i.track).cues;if(!i||!e)return;const d=this.Kb.id,o=this.oe[d]??0,h=this.aa(t);for(let u=o;u<e.length;u++){const r=e[u];r.positionAlign||(r.positionAlign="auto"),this.Kb.addCue(r,h)}this.oe[d]=e.length}Mi(t){var o;if(!this.d)return;const i=t.tracks,e=[...this.m.textTracks].filter(h=>"manualMode"in h),d=this.aa(t);for(let h=0;h<e.length;h++){const a=i[h],u=e[h],r=`dash-${a.kind}-${h}`,c=new $({id:r,label:(a==null?void 0:a.label)??((o=a.labels.find(s=>s.text))==null?void 0:o.text)??((a==null?void 0:a.lang)&&L(a.lang))??(a==null?void 0:a.lang)??void 0,language:a.lang??void 0,kind:a.kind,default:a.defaultTrack});c[y._]={managed:!0,track:u},c[y.ma]=2,c[y.hb]=()=>{this.d&&(c.mode==="showing"?(this.d.setTextTrack(h),this.Kb=c):(this.d.setTextTrack(-1),this.Kb=null))},this.b.textTracks.add(c,d)}}pc(t){const{mediaType:i,newMediaInfo:e}=t;if(i==="audio"){const d=this.b.audioTracks.getById(`dash-audio-${e.index}`);if(d){const o=this.aa(t);this.b.audioTracks[l.ea](d,!0,o)}}}Za(t){if(t.mediaType!=="video")return;const i=this.b.qualities[t.newQuality];if(i){const e=this.aa(t);this.b.qualities[l.ea](i,!0,e)}}Li(t){if(this.b.$state.canPlay()||!this.d)return;const{type:i,mediaPresentationDuration:e}=t.data,d=this.aa(t);this.b.delegate.c("stream-type-change",i!=="static"?"live":"on-demand",d),this.b.delegate.c("duration-change",e,d),this.b.qualities[S.Wa](!0,d);const o=this.d.getVideoElement(),h=this.d.getTracksForTypeFromManifest("video",t.data),a=[...new Set(h.map(s=>s.mimeType))].find(s=>s&&C(o,s)),u=h.filter(s=>a===s.mimeType)[0];let r=this.d.getTracksForTypeFromManifest("audio",t.data);const c=[...new Set(r.map(s=>s.mimeType))].find(s=>s&&F(o,s));if(r=r.filter(s=>c===s.mimeType),u.bitrateList.forEach((s,f)=>{var p;const T={id:((p=s.id)==null?void 0:p.toString())??`dash-bitrate-${f}`,width:s.width??0,height:s.height??0,bitrate:s.bandwidth??0,codec:u.codec,index:f};this.b.qualities[l.da](T,d)}),j(u.index)){const s=this.b.qualities[u.index];s&&this.b.qualities[l.ea](s,!0,d)}r.forEach((s,f)=>{const p=s.labels.find(w=>navigator.languages.some(q=>w.lang&&q.toLowerCase().startsWith(w.lang.toLowerCase())))||s.labels[0],M={id:`dash-audio-${s==null?void 0:s.index}`,label:(p==null?void 0:p.text)??(s.lang&&L(s.lang))??s.lang??"",language:s.lang??"",kind:"main",mimeType:s.mimeType,codec:s.codec,index:f};this.b.audioTracks[l.da](M,d)}),o.dispatchEvent(new g("canplay",{trigger:d}))}Q(t){const{type:i,error:e}=t;switch(e.code){case 27:this.pe(e);break;default:this.qc(e);break}}Ji(){this.na>=0&&this._a()}Ki(t){t.mediaType==="text"&&requestAnimationFrame(this.Ni.bind(this,t))}pe(t){var i;this._a(),(i=this.d)==null||i.play(),this.na=window.setTimeout(()=>{this.na=-1,this.qc(t)},5e3)}_a(){clearTimeout(this.na),this.na=-1}qc(t){this.b.delegate.c("error",{message:t.message??"",code:1,error:t})}je(){var i;this.lg("video",!0);const{qualities:t}=this.b;(i=this.d)==null||i.setQualityFor("video",t.selectedIndex,!0)}lg(t,i){var e;(e=this.d)==null||e.updateSettings({streaming:{abr:{autoSwitchBitrate:{[t]:i}}}})}ke(){const{qualities:t}=this.b;!this.d||t.auto||!t.selected||(this.lg("video",!1),this.d.setQualityFor("video",t.selectedIndex,t.switch==="current"),I&&(this.m.currentTime=this.m.currentTime))}le(){if(!this.d)return;const{audioTracks:t}=this.b,i=this.d.getTracksFor("audio").find(e=>t.selected&&t.selected.id===`dash-audio-${e.index}`);i&&this.d.setCurrentTrack(i)}z(){this._a(),this.Kb=null,this.oe={}}loadSource(t){var i;this.z(),m(t.src)&&((i=this.d)==null||i.attachSource(t.src))}destroy(){var t,i;this.z(),(t=this.d)==null||t.destroy(),this.d=null,(i=this.qb)==null||i.call(this),this.qb=null}}class J{constructor(t,i,e){this.L=t,this.b=i,this.La=e,this.qe()}async qe(){const t={onLoadStart:this.Ma.bind(this),onLoaded:this.tb.bind(this),onLoadError:this.re.bind(this)};let i=await Z(this.L,t);if(A(i)&&!m(this.L)&&(i=await U(this.L,t)),!i)return null;if(!window.dashjs.supportsMediaSource()){const e="[vidstack] `dash.js` is not supported in this environment";return this.b.player.dispatch(new g("dash-unsupported")),this.b.delegate.c("error",{message:e,code:4}),null}return i}Ma(){this.b.player.dispatch(new g("dash-lib-load-start"))}tb(t){this.b.player.dispatch(new g("dash-lib-loaded",{detail:t})),this.La(t)}re(t){const i=K(t);this.b.player.dispatch(new g("dash-lib-load-error",{detail:i})),this.b.delegate.c("error",{message:i.message,code:4,error:i})}}async function U(n,t={}){var i,e,d,o,h,a,u;if(!A(n)){if((i=t.onLoadStart)==null||i.call(t),B(n))return(e=t.onLoaded)==null||e.call(t,n),n;if(v(n)){const r=n.MediaPlayer;return(d=t.onLoaded)==null||d.call(t,r),r}try{const r=(o=await n())==null?void 0:o.default;if(v(r))return(h=t.onLoaded)==null||h.call(t,r.MediaPlayer),r.MediaPlayer;if(r)(a=t.onLoaded)==null||a.call(t,r);else throw Error("");return r}catch(r){(u=t.onLoadError)==null||u.call(t,r)}}}async function Z(n,t={}){var i,e,d;if(m(n)){(i=t.onLoadStart)==null||i.call(t);try{if(await P(n),!O(window.dashjs.MediaPlayer))throw Error("");const o=window.dashjs.MediaPlayer;return(e=t.onLoaded)==null||e.call(t,o),o}catch(o){(d=t.onLoadError)==null||d.call(t,o)}}}function B(n){return n&&n.prototype&&n.prototype!==Function}function v(n){return n&&"MediaPlayer"in n}const W="https://cdn.jsdelivr.net",b=class b extends Q{constructor(){super(...arguments),this.$$PROVIDER_TYPE="DASH",this.rc=null,this.e=new z(this.video,this.b),this.oa=`${W}/npm/dashjs@4.7.4/dist/dash.all.min.js`}get ctor(){return this.rc}get instance(){return this.e.instance}get type(){return"dash"}get canLiveSync(){return!0}get config(){return this.e.rb}set config(t){this.e.rb=t}get library(){return this.oa}set library(t){this.oa=t}preconnect(){m(this.oa)&&_(this.oa)}setup(){super.setup(),new J(this.oa,this.b,t=>{this.rc=t,this.e.setup(t),this.b.delegate.c("provider-setup",this);const i=x(this.b.$state.source);i&&this.loadSource(i)})}async loadSource(t,i){if(!m(t.src)){this.oc();return}this.a.preload=i||"",this.ge(t,"application/x-mpegurl"),this.e.loadSource(t),this.K=t}onInstance(t){const i=this.e.instance;return i&&t(i),this.e.sb.add(t),()=>this.e.sb.delete(t)}destroy(){this.e.destroy()}};b.supported=N();let D=b;export{D as DASHProvider};
