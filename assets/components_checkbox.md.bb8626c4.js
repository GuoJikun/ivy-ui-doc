import{_ as l,o,c as n,a,b as s}from"./app.0a811f3e.js";const g=JSON.parse('{"title":"Checkbox \u591A\u9009\u6846","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u81EA\u5B9A\u4E49\u9009\u4E2D\u548C\u6CA1\u6709\u9009\u4E2D\u7684\u503C","slug":"\u81EA\u5B9A\u4E49\u9009\u4E2D\u548C\u6CA1\u6709\u9009\u4E2D\u7684\u503C"},{"level":2,"title":"\u7981\u7528\u6548\u679C","slug":"\u7981\u7528\u6548\u679C"},{"level":2,"title":"\u914D\u5408ivy-checkbox-group\u4F7F\u7528","slug":"\u914D\u5408ivy-checkbox-group\u4F7F\u7528"}],"relativePath":"components/checkbox.md","lastUpdated":1660641690000}'),e={name:"components/checkbox.md"},p=a(`<h1 id="checkbox-\u591A\u9009\u6846" tabindex="-1">Checkbox \u591A\u9009\u6846 <a class="header-anchor" href="#checkbox-\u591A\u9009\u6846" aria-hidden="true">#</a></h1><p>\u4E00\u7EC4\u5907\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9009</p><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h2><ivy-checkbox>\u82F9\u679C</ivy-checkbox><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ivy-checkbox</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u82F9\u679C</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ivy-checkbox</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u81EA\u5B9A\u4E49\u9009\u4E2D\u548C\u6CA1\u6709\u9009\u4E2D\u7684\u503C" tabindex="-1">\u81EA\u5B9A\u4E49\u9009\u4E2D\u548C\u6CA1\u6709\u9009\u4E2D\u7684\u503C <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u9009\u4E2D\u548C\u6CA1\u6709\u9009\u4E2D\u7684\u503C" aria-hidden="true">#</a></h2><p>?&gt; \u901A\u8FC7 <code>true-label</code> \u548C <code>false-label</code> \u6765\u8BBE\u7F6E\u9009\u4E2D\u548C\u6CA1\u6709\u9009\u4E2D\u7684\u503C\uFF0C\u901A\u5E38\u9002\u7528\u4E8E\u5355\u4E2A\u9009\u62E9\u6846\u7684\u60C5\u51B5</p>`,7),c=s("ivy-checkbox",{"true-label":"1","false-label":"0",checked:"",onchange:"console.log(this.value)"},"\u52FE\u9009\u5373\u540C\u610F\u672C\u534F\u8BAE",-1),t=a(`<div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ivy-checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">true-label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">false-label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u52FE\u9009\u5373\u540C\u610F\u672C\u534F\u8BAE</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ivy-checkbox</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u7981\u7528\u6548\u679C" tabindex="-1">\u7981\u7528\u6548\u679C <a class="header-anchor" href="#\u7981\u7528\u6548\u679C" aria-hidden="true">#</a></h2><ivy-checkbox disabled>\u82F9\u679C</ivy-checkbox><ivy-checkbox disabled checked>\u82F9\u679C</ivy-checkbox><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ivy-checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u82F9\u679C</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ivy-checkbox</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u914D\u5408ivy-checkbox-group\u4F7F\u7528" tabindex="-1">\u914D\u5408<code>ivy-checkbox-group</code>\u4F7F\u7528 <a class="header-anchor" href="#\u914D\u5408ivy-checkbox-group\u4F7F\u7528" aria-hidden="true">#</a></h2>`,6),r=s("ivy-checkbox-group",{onchange:"console.log(this.value)"},[s("ivy-checkbox",{label:"1",checked:""},"\u82F9\u679C"),s("ivy-checkbox",{label:"2"},"\u6A58\u5B50"),s("ivy-checkbox",{label:"3"},"\u9999\u8549")],-1),D=a(`<div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ivy-checkbox-group</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onchange</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#C3E88D;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">value</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ivy-checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">checked</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u82F9\u679C</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ivy-checkbox</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ivy-checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6A58\u5B50</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ivy-checkbox</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ivy-checkbox</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u9999\u8549</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ivy-checkbox</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ivy-checkbox-group</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,1),y=[p,c,t,r,D];function F(i,h,d,b,_,u){return o(),n("div",null,y)}var x=l(e,[["render",F]]);export{g as __pageData,x as default};
