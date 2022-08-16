import{_ as s,o as a,c as l,a as n}from"./app.0a811f3e.js";const C=JSON.parse('{"title":"\u5FEB\u901F\u5F00\u59CB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u901A\u8FC7 script \u5F15\u5165","slug":"\u901A\u8FC7-script-\u5F15\u5165"},{"level":2,"title":"\u901A\u8FC7\u5305\u7BA1\u7406\u5668\u4F7F\u7528","slug":"\u901A\u8FC7\u5305\u7BA1\u7406\u5668\u4F7F\u7528"},{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":3,"title":"vue \u4E2D\u4F7F\u7528","slug":"vue-\u4E2D\u4F7F\u7528"},{"level":3,"title":"react \u4E2D\u4F7F\u7528","slug":"react-\u4E2D\u4F7F\u7528"},{"level":2,"title":"\u5DF2\u6709\u7EC4\u4EF6","slug":"\u5DF2\u6709\u7EC4\u4EF6"},{"level":2,"title":"\u672A\u5B8C\u6210\u7EC4\u4EF6","slug":"\u672A\u5B8C\u6210\u7EC4\u4EF6"}],"relativePath":"components/index.md","lastUpdated":1660641690000}'),o={name:"components/index.md"},e=n(`<h1 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1">\u5FEB\u901F\u5F00\u59CB <a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a></h1><h2 id="\u901A\u8FC7-script-\u5F15\u5165" tabindex="-1">\u901A\u8FC7 script \u5F15\u5165 <a class="header-anchor" href="#\u901A\u8FC7-script-\u5F15\u5165" aria-hidden="true">#</a></h2><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!--\u6700\u65B0\u7248--&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">//cdn.jsdelivr.net/npm/ivy-ui</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!--\u6307\u5B9A\u7248\u672C\u53F7--&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">//cdn.jsdelivr.net/npm/ivy-ui@0.4.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u901A\u8FC7\u5305\u7BA1\u7406\u5668\u4F7F\u7528" tabindex="-1">\u901A\u8FC7\u5305\u7BA1\u7406\u5668\u4F7F\u7528 <a class="header-anchor" href="#\u901A\u8FC7\u5305\u7BA1\u7406\u5668\u4F7F\u7528" aria-hidden="true">#</a></h2><h3 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h3><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm i ivy-ui</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#OR</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add ivy-ui</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#OR</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm add ivy-ui</span></span>
<span class="line"></span></code></pre></div><h3 id="vue-\u4E2D\u4F7F\u7528" tabindex="-1">vue \u4E2D\u4F7F\u7528 <a class="header-anchor" href="#vue-\u4E2D\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// vue2</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Vue </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ivy-ui</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ignoredElements </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u7528\u4E00\u4E2A \`RegExp\` \u5FFD\u7565\u6240\u6709\u201Cion-\u201D\u5F00\u5934\u7684\u5143\u7D20</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u4EC5\u5728 2.5+ \u652F\u6301</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#C3E88D;">ivy-</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// vue3</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">compilerOptions</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isCustomElement</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">tag</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  tag</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">startsWith</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ivy-</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="react-\u4E2D\u4F7F\u7528" tabindex="-1">react \u4E2D\u4F7F\u7528 <a class="header-anchor" href="#react-\u4E2D\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ivy-ui</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//\u5982\u9700\u5355\u72EC\u4F7F\u7528</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ivy-ui/dist/es/ivy-button.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ivy-button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">button</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">ivy-button</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5DF2\u6709\u7EC4\u4EF6" tabindex="-1">\u5DF2\u6709\u7EC4\u4EF6 <a class="header-anchor" href="#\u5DF2\u6709\u7EC4\u4EF6" aria-hidden="true">#</a></h2><ul><li>[x] <code>Row</code> \u7EC4\u4EF6</li><li>[x] <code>Col</code> \u7EC4\u4EF6</li><li>[x] <code>Switch</code> \u7EC4\u4EF6</li><li>[x] <code>Collapse</code> \u7EC4\u4EF6</li><li>[x] <code>CollapseItem</code> \u7EC4\u4EF6</li><li>[x] <code>Drawer</code> \u7EC4\u4EF6</li><li>[x] <code>Icon</code> \u7EC4\u4EF6</li><li>[x] <code>Progress</code> \u7EC4\u4EF6</li><li>[x] <code>Button</code> \u7EC4\u4EF6</li><li>[x] <code>card</code> \u7EC4\u4EF6</li><li>[x] <code>timeline</code> \u7EC4\u4EF6</li><li>[x] <code>divider</code> \u7EC4\u4EF6</li><li>[x] <code>Modal</code> \u7EC4\u4EF6</li><li>[x] <code>Rate</code> \u7EC4\u4EF6</li><li>[x] <code>tab</code> \u7EC4\u4EF6</li><li>[x] <code>tab-pane</code> \u7EC4\u4EF6</li><li>[x] <code>Image</code> \u7EC4\u4EF6</li><li>[x] <code>Tooltip</code> \u7EC4\u4EF6</li><li>[x] <code>Table</code> \u7EC4\u4EF6</li><li>[x] <code>Input</code> \u7EC4\u4EF6</li><li>[x] <code>Checkbox</code> \u7EC4\u4EF6</li><li>[x] <code>CheckboxGroup</code> \u7EC4\u4EF6</li><li>[x] <code>Radio</code> \u7EC4\u4EF6</li><li>[x] <code>RadioGroup</code> \u7EC4\u4EF6</li><li>[x] <code>Tag</code> \u7EC4\u4EF6</li><li>[x] <code>Clipboard-copy</code> \u7EC4\u4EF6</li><li>[x] <code>Badge</code> \u7EC4\u4EF6</li><li>[x] <code>Contextmenu</code> \u7EC4\u4EF6</li></ul><h2 id="\u672A\u5B8C\u6210\u7EC4\u4EF6" tabindex="-1">\u672A\u5B8C\u6210\u7EC4\u4EF6 <a class="header-anchor" href="#\u672A\u5B8C\u6210\u7EC4\u4EF6" aria-hidden="true">#</a></h2><ul><li>[ ] <code>Message</code> \u7EC4\u4EF6</li><li>[ ] <code>Select</code> \u7EC4\u4EF6</li><li>[ ] <code>Slider</code> \u7EC4\u4EF6</li><li>[ ] <code>Pagination</code> \u7EC4\u4EF6</li><li>[ ] <code>DatePicker</code> \u7EC4\u4EF6</li></ul>`,14),p=[e];function t(c,r,i,D,y,F){return a(),l("div",null,p)}var u=s(o,[["render",t]]);export{C as __pageData,u as default};