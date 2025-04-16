import{_ as a,c as i,ac as e,o as n}from"./chunks/framework.CeO_JeQa.js";const u=JSON.parse('{"title":"Pull Request 提交步骤","description":"","frontmatter":{},"headers":[],"relativePath":"zh_CN/contribute/pull_request_process.md","filePath":"zh_CN/contribute/pull_request_process.md","lastUpdated":1744789501000}'),t={name:"zh_CN/contribute/pull_request_process.md"};function l(p,s,r,h,o,d){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="pull-request-提交步骤" tabindex="-1">Pull Request 提交步骤 <a class="header-anchor" href="#pull-request-提交步骤" aria-label="Permalink to &quot;Pull Request 提交步骤&quot;">​</a></h1><div class="note custom-block github-alert"><p class="custom-block-title">作者</p><p>ccb5</p></div><p>本文说明 XFusion 的 Pull Request 提交步骤。</p><h1 id="pull-request-是什么" tabindex="-1">Pull Request 是什么 <a class="header-anchor" href="#pull-request-是什么" aria-label="Permalink to &quot;Pull Request 是什么&quot;">​</a></h1><p>Pull Request (以下简称 PR) 和 Merge Request (以下简称 MR) 都是代码协作中<strong>用于请求将代码更改合并到主分支的机制。</strong></p><p>当你想要贡献代码到一个项目时，你通常需要从原项目中 fork 一份副本，然后在你的副本上进行更改。更改完成后，你会向原项目发起一个 Pull Request，请求项目维护者拉取(pull)你的更改并合并到他们的项目。</p><p>Pull Request 是在 GitHub 上使用的术语，而 Merge Request 通常与 GitLab 关联，只是 Merge Request 更直接地反映了请求的最终操作，即合并(merge)代码到主分支。因此 <strong>PR 和 MR 在下文中不作区分。</strong></p><h1 id="xfusion-的-pull-request-提交步骤" tabindex="-1">XFusion 的 Pull Request 提交步骤 <a class="header-anchor" href="#xfusion-的-pull-request-提交步骤" aria-label="Permalink to &quot;XFusion 的 Pull Request 提交步骤&quot;">​</a></h1><p>XFusion 不允许直接推送代码到主分支(main)，因此您必须先要 fork 一份副本。以下是具体的操作方法：</p><blockquote><p>本文假设读者已经安装好了 git, 并且注册了 GitHub 账户。</p></blockquote><ol><li><p><strong>Fork 项目。</strong></p><p>访问{XFusion 仓库链接}，并且点击页面右上角的 Fork 按钮，fork 一份 XFusion 副本。</p></li><li><p><strong>克隆仓库。</strong></p><ol><li><p>打开您 fork 的 XFusion 仓库副本网页，点击网页上的<code>Code</code>获取 https 克隆链接。</p></li><li><p>然后打开您的本地终端，克隆您 fork 的仓库。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 克隆仓库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --recursive</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {您</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fork</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 的</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> XFusion</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 仓库链接}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> XFusion</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> XFusion</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 添加上游仓库，即 XFusion 原始仓库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upstream</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {XFusion</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 仓库链接}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>创建新的分支。</p><p>在新分支上修改，有几个优势：</p><ol><li><strong>能够保持主分支干净</strong>。</li><li><strong>易于管理</strong>：如果你在主分支上直接进行开发，那么每次上游仓库更新时，你都需要处理合并冲突。而如果你在不同的分支上工作，就可以更容易地拉取上游的更新，并且在必要时只合并你的特定更改。</li><li><strong>并行开发</strong>：创建新分支可以让你同时在多个功能上工作，而不会互相干扰。这对于处理多个问题或添加多个功能特别有用。</li><li><strong>代码审查</strong>：在单独的分支上工作可以让其他贡献者更容易地审查你的代码，因为它们只包含相关的更改。</li></ol><p>可以通过以下命令创建新的分支。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 切换到新的分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> local-branch</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 推送 local-branch 到远端</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ol></li><li><p><strong>做出修改。</strong></p><p>您的修改可以是修复代码或者文档的 bug，提交新的功能等等，xfusion 欢迎您的任何与 XFusion 发展方向相符的贡献。</p><p>请注意，xfusion 的<strong>每个 PR 只接受 1 个 commit</strong>，因此每次 PR 不要涉及不同的方面。如需修改多个方面，请创建多个分支，各自修改后再提交 PR。</p><ol><li><p>做出修改。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 此时已经在 local-branch 分支了</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 做出您的修改，此处以 my-file.c 为例子</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-file.c</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>检查风格。</p><p>您的代码应当符合<a href="./">贡献指南</a>中提到的<a href="./coding_style_guide.html">编码风格指南</a>等注意事项。您也可以用格式化脚本先格式化您的代码。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${您的xfusion路径}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/tools/format_code/format.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-file.c</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>推送到 fork 仓库中。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将 my-file.c 的修改添加到暂存区</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-file.c</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交暂存区到本地仓库，注意 commit 消息的格式，这在下文可以找到</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-file.c</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 推送到您 fork 的 XFusion 远端仓库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p>NOTE: commit 消息的格式请见下文：👉<a href="#commit-消息的格式">commit 消息的格式</a>👈</p></blockquote></li><li><p>保持同步。</p><p>当您测试了代码后就可以准备提交了。在提交前请确保您的 fork 和上游保持同步。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 拉取上游，也就是 XFusion 原始仓库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fetch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upstream</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 合并上游到本地</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upstream/main</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>将本地 main 分支与本地新建的分支合并。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> local-branch</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>根据需要重复以上步骤。</p></li><li><p>如果你的修改已经完毕，但是有多个 commit，再提交前请用 rebase 来压缩他们。</p><blockquote><p>如果您不清楚如何才能压缩他们，请参考： <a href="https://eli.thegreenplace.net/2014/02/19/squashing-github-pull-requests-into-a-single-commit/" target="_blank" rel="noreferrer">将 Github 拉取请求压缩到一个提交中- Eli Bendersky 的网站 --- Squashing Github pull requests into a single commit - Eli Bendersky&#39;s website (thegreenplace.net)</a></p></blockquote></li></ol></li><li><p><strong>创建 Pull Request。</strong></p><ol><li><p>在 git 仓库中选择需要合并到主分支的分支，这里是<code>local-branch</code>，点击 create Pull Request 按钮创建 Pull Request。</p></li><li><p>请确认提交前的检查清单。</p></li><li><p>签署 CLA。</p></li><li><p>创建 Pull Request 成功后，审核人员会审核您的代码，相关意见会在 Pull Request 页面中反馈给您，您需要根据意见修改。一旦审核人员认为您的修改没有问题了，请及时压缩到一个 commit，之后审核人员通过您的贡献。</p></li></ol></li></ol><h1 id="commit-消息的格式" tabindex="-1">commit 消息的格式 <a class="header-anchor" href="#commit-消息的格式" aria-label="Permalink to &quot;commit 消息的格式&quot;">​</a></h1><p>XFusion 目前使用 vscode 插件<code>redjue.git-commit-plugin</code>生成 commit 消息。</p><h2 id="格式" tabindex="-1">格式 <a class="header-anchor" href="#格式" aria-label="Permalink to &quot;格式&quot;">​</a></h2><p>格式遵循 <a href="https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines" target="_blank" rel="noreferrer">Angular Team Commit Specification</a>，如下所示：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;</span></span>
<span class="line"><span>&lt;BLANK LINE&gt;</span></span>
<span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>&lt;BLANK LINE&gt;</span></span>
<span class="line"><span>&lt;footer&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="type-类型" tabindex="-1">type(类型) <a class="header-anchor" href="#type-类型" aria-label="Permalink to &quot;type(类型)&quot;">​</a></h3><p>必须是以下之一：</p><table tabindex="0"><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><strong>init</strong></td><td>项目初始化</td></tr><tr><td><strong>feat</strong></td><td>添加新特性</td></tr><tr><td><strong>fix</strong></td><td>修复 bug</td></tr><tr><td><strong>docs</strong></td><td>仅仅修改文档</td></tr><tr><td><strong>style</strong>:</td><td>不影响代码逻辑的更改（仅仅修空格、格式、缺少分号等）</td></tr><tr><td><strong>refactor</strong></td><td>既不修复错误也不添加功能的代码更改</td></tr><tr><td><strong>perf</strong></td><td>优化相关，比如提升性能、体验</td></tr><tr><td><strong>test</strong></td><td>添加或纠正现有测试</td></tr><tr><td><strong>build</strong></td><td>依赖相关的内容</td></tr><tr><td><strong>ci</strong></td><td>ci 配置相关</td></tr><tr><td><strong>chore</strong></td><td>对构建过程或辅助工具和库（例如文档生成）的更改</td></tr><tr><td><strong>revert</strong></td><td>回滚到上一个版本</td></tr></tbody></table><h3 id="scope-修改范围" tabindex="-1">scope(修改范围) <a class="header-anchor" href="#scope-修改范围" aria-label="Permalink to &quot;scope(修改范围)&quot;">​</a></h3><p>范围可以是指定提交更改位置的任何内容。</p><p>修改范围是<strong>必填</strong>项目，目前使用的格式约定如下：</p><p><code>最外层目录名-修改的模块</code>.</p><p>例如：</p><div class="language-txt vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>🐞 fix(example-gatt): 延时改xf task；修正部分log输出</span></span>
<span class="line"><span>📃 docs(ports-ws63): 上传readme</span></span>
<span class="line"><span>🐞 fix(components-xf_hal..): 更新日志等级</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="subject-概述" tabindex="-1">subject(概述) <a class="header-anchor" href="#subject-概述" aria-label="Permalink to &quot;subject(概述)&quot;">​</a></h3><p>概述是对更改的简要描述：</p><ul><li>使用祈使式、现在时：&quot;change&quot; not &quot;changed&quot; nor &quot;changes&quot;。</li><li>不要将首字母大写。</li><li>结尾无点(.)。</li><li>最多 20 个字符。</li><li>目前以中文为主，不排除修改为英文的可能。</li></ul><h3 id="body-详情" tabindex="-1">body(详情) <a class="header-anchor" href="#body-详情" aria-label="Permalink to &quot;body(详情)&quot;">​</a></h3><p>用于描述此更改的详情。</p><h3 id="备注" tabindex="-1">备注 <a class="header-anchor" href="#备注" aria-label="Permalink to &quot;备注&quot;">​</a></h3><p>备注通常是修复 bug 的链接。</p><p><strong>重大变更</strong>应以<code>BREAKING CHANGE:</code>一词开头，并带有一个空格或两个换行符。</p><blockquote><p>格式详情见：<a href="https://github.com/RedJue/git-commit-plugin/tree/master" target="_blank" rel="noreferrer">RedJue/git-commit-plugin: Automatically generate git commit (github.com)</a></p></blockquote><h1 id="本文待办事项" tabindex="-1">本文待办事项 <a class="header-anchor" href="#本文待办事项" aria-label="Permalink to &quot;本文待办事项&quot;">​</a></h1><p>TODO: 1. 持续集成（CI）Continuous Integration (CI)。 TODO: 2. 替换链接<code>{XFusion 仓库链接}</code>，给出详细的步骤截图。 TODO: 3. 预 commit。 TODO: 4. git 相关教程链接。 TODO: 5. 使用 vscode 相关插件优化步骤。 TODO: 6. rebase 具体步骤。见<a href="https://nuttx.apache.org/docs/latest/contributing/making-changes.html" target="_blank" rel="noreferrer">使用 Git 进行更改</a>。 TODO: 7. 提交前的检查清单。</p><h1 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h1><ul><li><a href="https://nuttx.apache.org/docs/latest/contributing/making-changes.html" target="_blank" rel="noreferrer">使用 Git 进行更改- NuttX latest 文档 --- Making Changes Using Git — NuttX latest documentation (apache.org)</a></li><li><a href="https://cwiki.apache.org/confluence/display/NUTTX/NuttX+RFC+0001%3A+Code+Contribution+Workflow" target="_blank" rel="noreferrer">NuttX RFC 0001：代码贡献工作流- NUTTX - Apache 软件基金会 --- NuttX RFC 0001: Code Contribution Workflow - NUTTX - Apache Software Foundation</a></li><li><a href="https://docs.lvgl.io/master/CONTRIBUTING.html" target="_blank" rel="noreferrer">贡献- LVGL 文档 --- Contributing — LVGL documentation</a></li><li><a href="https://docs.espressif.com/projects/esp-idf/en/latest/esp32/contribute/index.html" target="_blank" rel="noreferrer">投稿指南-ESP 32- - ESP-IDF 编程指南最新文档 --- Contributions Guide - ESP32 - — ESP-IDF Programming Guide latest documentation (espressif.com)</a></li><li><a href="https://gist.github.com/brianclements/841ea7bffdb01346392c" target="_blank" rel="noreferrer">Angular 提交格式参考表 --- Angular Commit Format Reference Sheet (github.com)</a></li><li><a href="https://github.com/RedJue/git-commit-plugin" target="_blank" rel="noreferrer">RedJue/git-commit-plugin: Automatically generate git commit (github.com)</a></li></ul>`,38)]))}const k=a(t,[["render",l]]);export{u as __pageData,k as default};
