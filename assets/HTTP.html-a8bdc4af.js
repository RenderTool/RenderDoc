import{_ as d,r as s,o as i,c as l,d as e,w as o,a as r,b as t,e as h}from"./app-89c110f4.js";const p="/RenderDoc/assets/http-bb16ec66.jpeg",c={},T=r("h2",{id:"老生常谈",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#老生常谈","aria-hidden":"true"},"#"),t(" 老生常谈")],-1),g=h('<table><thead><tr><th>协议</th><th>全称</th><th>描述</th></tr></thead><tbody><tr><td>HTTP</td><td>Hyper Text Transfer Protocol</td><td>用于从服务器传输超文本到本地浏览器的传送协议。</td></tr><tr><td>HTTPS</td><td>HyperText Transfer Protocol Secure</td><td>一种通过计算机网络进行安全通信的传输协议，利用 SSL/TLS 加密数据包，提供身份认证和保护隐私与完整性。</td></tr><tr><td>默认端口</td><td>80</td><td>443</td></tr><tr><td>URL 示例</td><td>http://</td><td>https://</td></tr></tbody></table><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="http请求操作" tabindex="-1"><a class="header-anchor" href="#http请求操作" aria-hidden="true">#</a> HTTP请求操作</h3><ol><li><p><strong>GET</strong>：用于从服务器获取指定资源的数据。GET 请求通常用于获取网页、图像、文本文件等。它是一个幂等操作，即多次发起相同的GET请求会产生相同的结果。</p></li><li><p><strong>POST</strong>：用于向服务器提交数据，通常用于向服务器发送表单数据或上传文件。POST请求对提交的数据没有长度限制，且可以发送敏感信息（例如密码）。</p></li><li><p><strong>PUT</strong>：用于向服务器上传数据，将指定资源的内容替换为请求中提供的数据。</p></li><li><p><strong>DELETE</strong>：用于从服务器删除指定资源。</p></li><li><p><strong>HEAD</strong>：与GET类似，但服务器只返回响应头部信息，而不返回实际内容主体。通常用于获取资源的元数据，而无需获取实际数据。</p></li><li><p><strong>OPTIONS</strong>：用于获取服务器支持的HTTP方法列表。可以用来确定服务器支持哪些方法。</p></li><li><p><strong>PATCH</strong>：用于部分更新资源，只更新资源的一部分内容。</p></li><li><p><strong>TRACE</strong>：用于在请求-响应链上的代理服务器之间跟踪请求的传输。</p></li><li><p><strong>CONNECT</strong>：用于将连接改为隧道，通常用于加密连接（例如TLS/SSL）的代理服务器。</p></li><li><p><strong>LINK</strong> 和 <strong>UNLINK</strong>：用于在资源之间建立或取消链接关系。</p></li></ol><h2 id="测试工具" tabindex="-1"><a class="header-anchor" href="#测试工具" aria-hidden="true">#</a> 测试工具</h2>',5),_={href:"https://www.toolscat.com/dev/postman",target:"_blank",rel:"noopener noreferrer"};function f(m,P){const a=s("ChatMessage"),n=s("ExternalLinkIcon");return i(),l("div",null,[e(a,{avatar:"../../../assets/emoji/dsyj.png",avatarWidth:40},{default:o(()=>[t(" 本节目标：手撸一个HTTP插件 ")]),_:1}),T,e(a,{avatar:"../../../assets/emoji/hx.png",avatarWidth:40},{default:o(()=>[t(" 什么是HTTP? ")]),_:1}),e(a,{avatar:"../../../assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:o(()=>[t(" HTTP（超文本传输协议）是一种用于在互联网上传输信息的应用层协议。 ")]),_:1}),g,r("p",null,[r("a",_,[t("在线测试"),e(n)])])])}const x=d(c,[["render",f],["__file","HTTP.html.vue"]]);export{x as default};