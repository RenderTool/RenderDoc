const e=JSON.parse('{"key":"v-7728bea7","path":"/tools/github/2-switch-multiple-github-accounts.html","title":"Github-2.切换多个账号","lang":"zh-CN","frontmatter":{"title":"Github-2.切换多个账号","order":2,"category":["Github"],"tag":["踩坑记录"],"description":"问题详情 有时候要对多个 github 账号进行切换。 解决思路 前置准备 账户名 邮箱 username-1 your_email_a@example.com username-n your_email_n@example.com","head":[["meta",{"property":"og:url","content":"https://rendertool.github.io/RenderDoc/RenderDoc/tools/github/2-switch-multiple-github-accounts.html"}],["meta",{"property":"og:site_name","content":"RenderDoc"}],["meta",{"property":"og:title","content":"Github-2.切换多个账号"}],["meta",{"property":"og:description","content":"问题详情 有时候要对多个 github 账号进行切换。 解决思路 前置准备 账户名 邮箱 username-1 your_email_a@example.com username-n your_email_n@example.com"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-23T11:15:30.000Z"}],["meta",{"property":"article:author","content":"Mr.Si"}],["meta",{"property":"article:tag","content":"踩坑记录"}],["meta",{"property":"article:modified_time","content":"2023-11-23T11:15:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Github-2.切换多个账号\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-23T11:15:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Si\\",\\"url\\":\\"https://rendertool.github.io/RenderDoc/\\"}]}"]]},"headers":[{"level":2,"title":"问题详情","slug":"问题详情","link":"#问题详情","children":[]},{"level":2,"title":"解决思路","slug":"解决思路","link":"#解决思路","children":[{"level":3,"title":"前置准备","slug":"前置准备","link":"#前置准备","children":[]},{"level":3,"title":"1. 生成其中一个账户密钥","slug":"_1-生成其中一个账户密钥","link":"#_1-生成其中一个账户密钥","children":[]},{"level":3,"title":"2. 创建 ssh key","slug":"_2-创建-ssh-key","link":"#_2-创建-ssh-key","children":[]},{"level":3,"title":"3. 拷贝上传至服务器(名字随意即可)","slug":"_3-拷贝上传至服务器-名字随意即可","link":"#_3-拷贝上传至服务器-名字随意即可","children":[]},{"level":3,"title":"4. 其他账号重复1-3在 ~/.ssh/ 目录下创建 config 文件","slug":"_4-其他账号重复1-3在-ssh-目录下创建-config-文件","link":"#_4-其他账号重复1-3在-ssh-目录下创建-config-文件","children":[]},{"level":3,"title":"5. 修改config 内容(config文件的规则很简单——在每个Host寻找对应的秘钥。)","slug":"_5-修改config-内容-config文件的规则很简单——在每个host寻找对应的秘钥。","link":"#_5-修改config-内容-config文件的规则很简单——在每个host寻找对应的秘钥。","children":[]},{"level":3,"title":"6. 测试","slug":"_6-测试","link":"#_6-测试","children":[]},{"level":3,"title":"7. 切换账户","slug":"_7-切换账户","link":"#_7-切换账户","children":[]},{"level":3,"title":"8. clone or add","slug":"_8-clone-or-add","link":"#_8-clone-or-add","children":[]},{"level":3,"title":"9. push 项目","slug":"_9-push-项目","link":"#_9-push-项目","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1698994095000,"updatedTime":1700738130000,"contributors":[{"name":"admin","email":"750831855@qq.com","commits":5}]},"readingTime":{"minutes":2.08,"words":624},"filePathRelative":"tools/github/2-switch-multiple-github-accounts.md","localizedDate":"2023年11月3日","excerpt":"<h2> 问题详情</h2>\\n<p>有时候要对多个 github 账号进行切换。</p>\\n<h2> 解决思路</h2>\\n<h3> 前置准备</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>账户名</th>\\n<th>邮箱</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>username-1</td>\\n<td>your_email_a@example.com</td>\\n</tr>\\n<tr>\\n<td>username-n</td>\\n<td>your_email_n@example.com</td>\\n</tr>\\n</tbody>\\n</table>\\n<div id=\\"section1\\">\\n</div>","autoDesc":true}');export{e as data};