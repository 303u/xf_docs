import{_ as i,c as a,ac as e,o as n}from"./chunks/framework.CeO_JeQa.js";const p="/document/image/starting_with_esp32-compilation_success.png",t="/document/image/starting_with_esp32-example_log_output.png",u=JSON.parse('{"title":"从 esp32 开始","description":"","frontmatter":{},"headers":[],"relativePath":"zh_CN/get-started/starting_with_esp32.md","filePath":"zh_CN/get-started/starting_with_esp32.md","lastUpdated":1732596327000}'),l={name:"zh_CN/get-started/starting_with_esp32.md"};function h(r,s,d,o,k,c){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="从-esp32-开始" tabindex="-1">从 esp32 开始 <a class="header-anchor" href="#从-esp32-开始" aria-label="Permalink to &quot;从 esp32 开始&quot;">​</a></h1><p>本文说明如何基于 esp-idf 使用 xfusion。</p><hr><p><strong>阅读对象：</strong></p><ul><li>基于 esp-idf 平台使用 xfusion 的用户。</li></ul><hr><h1 id="安装-esp-idf" tabindex="-1">安装 ESP-IDF <a class="header-anchor" href="#安装-esp-idf" aria-label="Permalink to &quot;安装 ESP-IDF&quot;">​</a></h1><p>注意，xfusion 目前对接的是 esp-idf v5.0 版本。</p><p>详细步骤见 ESP-IDF 官方文档：</p><p>《<a href="https://docs.espressif.com/projects/esp-idf/zh_CN/v5.0.6/esp32/get-started/index.html" target="_blank" rel="noreferrer">快速入门 - ESP32 - — ESP-IDF 编程指南 v5.0.6 文档 (espressif.com)</a>》。</p><h1 id="基于-esp-idf-使用-xfusion" tabindex="-1">基于 ESP-IDF 使用 xfusion <a class="header-anchor" href="#基于-esp-idf-使用-xfusion" aria-label="Permalink to &quot;基于 ESP-IDF 使用 xfusion&quot;">​</a></h1><ol><li><p>vscode 远程连接到虚拟机，并且打开 xfusion 文件夹。</p></li><li><p><strong>先导出 esp-idf 环境变量</strong>，再导出 xfusion 环境变量。</p><p>以下代码中 <code>get_idf5.0</code> 为自定义的导出 esp-idf 环境的命令的别名，见 《<a href="https://docs.espressif.com/projects/esp-idf/zh_CN/v5.0.6/esp32/get-started/linux-macos-setup.html#get-started-set-up-env" target="_blank" rel="noreferrer">Linux 和 macOS 平台工具链的标准设置 - ESP32 - — ESP-IDF 编程指南 v5.0.6 文档 (espressif.com)</a>》.</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xfusion</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get_idf5.0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 先导出 esp-idf 环境变量</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./export.sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> esp32</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 再导出 xfusion 环境变量</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>移动到 <code>log</code>​ 例程内。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> examples/system/log</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>清除、配置、编译。</p><ol><li><p>运行以下命令：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> menuconfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>效果：</p><p>编译成功后可以看到此提示信息：</p><p>​<img src="`+p+`" alt="image">​</p></li></ol></li><li><p>烧录。有两种方式可以烧录并打开终端。</p><ol><li><p>将 esp32 连接到 linux 虚拟机。</p></li><li><p>烧录。</p><ol><li><p>使用 xf 命令（目前暂时不能指定端口号）。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> monitor</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>使用 esp-idf 自带的命令（可以指定端口号）。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xfusion</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> boards/espressif/esp32</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get_idf5.0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># /dev/ttyUSB0 为 esp32 开发板端口号</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">idf.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> monitor</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/ttyUSB0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ol></li></ol></li><li><p>观察运行现象。</p><ol><li><p>运行现象如下图所示。</p><p>​<img src="`+t+'" alt="image">​</p></li></ol></li></ol><p>‍</p>',13)]))}const F=i(l,[["render",h]]);export{u as __pageData,F as default};