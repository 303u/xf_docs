import{_ as n,c as a,ac as p,o as e}from"./chunks/framework.CeO_JeQa.js";const u=JSON.parse('{"title":"移植指南","description":"","frontmatter":{},"headers":[],"relativePath":"zh_CN/insight/porting/index.md","filePath":"zh_CN/insight/porting/index.md","lastUpdated":1732596327000}'),l={name:"zh_CN/insight/porting/index.md"};function t(i,s,o,r,c,d){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="移植指南" tabindex="-1">移植指南 <a class="header-anchor" href="#移植指南" aria-label="Permalink to &quot;移植指南&quot;">​</a></h1><p>本文说明 xfusion 如何添加新的平台或芯片支持、外设驱动或组件对接支持。</p><hr><p><strong>阅读对象：</strong></p><ul><li>想要添加新的平台或芯片支持/外设驱动支持的移植开发者。</li></ul><hr><h1 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h1><p>为 xfusion 移植通常分为两个部分：</p><ol><li><p><strong>移植新的平台或芯片。</strong></p><p>比如添加 stm32f103ze、esp32、at32f407vgt7 等新的芯片及其原始工程。</p></li><li><p><strong>移植外设驱动或组件对接。</strong></p><p>比如添加 xf_hal 中驱动的实现。</p></li></ol><p>如图所示:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>xfusion/                   xfusion/                   xfusion/</span></span>
<span class="line"><span>┗ boards/                  ┗ ports/                    ┗ components/</span></span>
<span class="line"><span>  ┗ st/             (对应)   ┗ st/           (对接)      ┃</span></span>
<span class="line"><span>    ┣ stm32f103c8/ ───&gt;─┬──────╊ stm32f1xx/ ───&gt;─┬───────╊ xf_hal/</span></span>
<span class="line"><span>    ┣ stm32f103ze/ ───&gt;─┤      ┃                 │       ┗ .../</span></span>
<span class="line"><span>    ┣ stm32f1..../ ───&gt;─┘      ┃                 │</span></span>
<span class="line"><span>    ┃                          ┃                 │                ┃</span></span>
<span class="line"><span>    ┣ stm32f407zg/ ───&gt;─┬──────┺ stm32f4xx/ ───&gt;─┘                ┃</span></span>
<span class="line"><span>    ┣ stm32f411ce/ ───&gt;─┤                ┃                        ┃</span></span>
<span class="line"><span>    ┗ stm32f4..../ ───&gt;─┘                ┃                        ┃</span></span>
<span class="line"><span>      ┃                                  ┃                        ┃</span></span>
<span class="line"><span>      ┃   原始工程 sdk 代码可存在的范围   ┃                        ┃</span></span>
<span class="line"><span>      ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛                        ┃</span></span>
<span class="line"><span>      ┃            xfusion/components 代码可存在的范围             ┃</span></span>
<span class="line"><span>      ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>根据上图，为 xfusion 移植的两个部分可重新解释为：</p><ol><li><p><strong>移植新的平台或芯片。</strong></p><p>即图中左侧的<code>boards</code>和<code>ports</code>部分，一是添加适配 xfusion 环境变量的原始工程，如<code>stm32f103c8</code>；二是创建原始工程<code>stm32f103c8/</code>和实现对接的代码<code>stm32f1xx/</code>(本质上是原始工程的组件)的关系，即将实现对接的代码加入编译或调用。</p></li><li><p><strong>移植外设驱动或组件对接。</strong></p><p>即图中右侧的<code>ports</code>和<code>components</code>部分。 也就是在<code>ports</code>内，根据<code>components</code>内的组件的接口要求实现<code>components</code>内组件的对接。</p></li></ol><h1 id="子文档" tabindex="-1">子文档 <a class="header-anchor" href="#子文档" aria-label="Permalink to &quot;子文档&quot;">​</a></h1><ul><li><a href="./porting_new_platform_support.html">移植示例 - 添加新平台支持</a></li><li><a href="./porting_component_support.html">移植示例 - 添加组件支持</a></li></ul>`,15)]))}const b=n(l,[["render",t]]);export{u as __pageData,b as default};