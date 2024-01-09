import{_ as e,b as o,c as i,m as d}from"./index-jRSp3SF2.js";const l={},c={class:"help"},s=d(`<h1 id="faq">FAQ</h1><h3 id="-">一、怎么下载/怎么安装？</h3><p>方法一：进入链接<a href="https://github.com/xaoyaoo/PyWxDump/releases">releases</a>下载最新版本exe文件</p><p>方法二：（本地安装有python环境）使用pip安装</p><pre><code>pip install PyWxDump
</code></pre><h3 id="-">二、怎么使用</h3><ol><li>打开微信电脑版，登录微信</li><li>进入下载的exe文件所在目录,使用pip安装，跳过此步</li><li>按住shift键，同时鼠标右键，选择“在此处打开命令窗口”，或者“在此处打开powershell窗口”</li><li>在命令窗口中输入<code>./wxdump.exe</code>，按回车键（pip安装输入<code>wxdump</code>）</li><li>接着根据提示输入参数，回车键确认</li></ol><h3 id="-key-">三、每台电脑上微信账户的key是不是永远不会变？</h3><ol><li>同一设备，同一微信号，不删除数据情况下，key（密钥）相同</li></ol><h3 id="-">四、刚打开就闪退的问题</h3><ol><li>请检查是否由cmd或powershell打开，不要直接双击exe文件</li><li>如果使用方法二安装，请检查是否已经安装了python环境（如果使用pip安装，命令行直接输入wxdump即可）</li><li>如果使用方法二安装，检查是否将python安装目录添加到了环境变量中，如果没有，请添加</li></ol><h3 id="-">五、如果遇到其他问题</h3><ol><li>截图或复制错误信息，请全截图或全复制，不要只截一部分或复制部分信息。</li><li>通过issue反馈问题，或者加入QQ群：<a href="https://s.xaoyo.top/gOLUDl">加入QQ群</a></li></ol><h3 id="-pywxdump-pr-">六、如何为PyWxDump贡献代码（提交pr）</h3><p>提交拉取请求（Pull Request），请按照以下步骤进行操作：</p><ol><li>Fork 仓库：首先，在项目的 GitHub 页面上点击 &quot;Fork&quot; 按钮，将项目的代码仓库 fork 到你自己的 GitHub 账号下。 </li><li>克隆仓库：在你自己的 GitHub 账号下找到 fork 后的项目，点击 <code>Clone or download</code>按钮，获取仓库的 URL。然后在本地使用 Git 命令克隆仓库到你的电脑上：<code>git clone 仓库的URL</code></li><li>创建分支：在本地仓库中创建一个新的分支，用于进行你的修改：<code>git checkout -b 你的分支名</code></li><li>进行修改：在新创建的分支中进行你需要的修改，包括修复错误、改进现有功能或添加新功能。</li><li>提交修改：使用 <code>git add</code> 和 <code>git commit</code> 命令将修改提交到本地仓库中： <pre><code>git add .
git commit -m &quot;提交信息&quot;
</code></pre></li><li>推送分支：使用 <code>git push</code> 命令将你的本地分支推送到你的 GitHub 仓库中：<code>git push origin 你的分支名</code></li><li>提交拉取请求：在你的 GitHub 仓库页面上切换到你刚刚推送的分支，点击 &quot;New pull request&quot; 按钮，填写一些说明信息，然后点击 <code>Create pull request</code> 按钮，即可提交拉取请求。 </li><li>等待审核：等待项目维护者审核你的拉取请求，如果通过审核，你的修改将会被合并到项目的主分支中</li><li>接着你就可以在右边的<code>contributors</code>中看到你的名字了。</li></ol><h3 id="-issues">七、为什么要提交issues</h3><ol><li>提交issues可以帮助我们更好的改进项目，提高项目的质量</li></ol><h3 id="-issues-">八、提交issues方法</h3><p><a href="https://github.com/xaoyaoo/PyWxDump/issues"><img src="https://github.com/xaoyaoo/PyWxDump/assets/37209452/22d15ea6-05d6-4f30-8b24-04a51a59d56d" alt="image"></a><a href="https://github.com/xaoyaoo/PyWxDump/issues"><img src="https://github.com/xaoyaoo/PyWxDump/assets/37209452/9bdc2961-694a-4104-a1c7-05403220c0fe" alt="image"></a><a href="https://github.com/xaoyaoo/PyWxDump/issues"><img src="https://github.com/xaoyaoo/PyWxDump/assets/37209452/be1d8913-5a6e-4fff-9fcd-00edb33d255b" alt="image"></a></p><h3 id="-">九、版本差异</h3><ol><li>版本 &lt; 3.7.0.30 只运行不登录能获取个人信息，登录后可以获取数据库密钥</li><li>版本 &gt; 3.7.0.30 只运行不登录不能获取个人信息，登录后都能获取</li></ol><h3 id="-">十、为什么会有解密失败的情况</h3><ol><li> 非当前登录微信的数据库--eg：当前登录微信为A，但是曾经登录过的微信为B，也会尝试解密B的数据库，但是密钥不匹配，所以解密失败 </li><li>部分数据库本来就是未加密的</li></ol><h3 id="-">十一、参数无效</h3><ol><li>请检查参数是否正确，如果正确，请检查是否使用了中文输入法，如果使用了中文输入法，请切换为英文输入法</li><li>检查路径是否正确，如果路径中有空格，请使用英文双引号包裹路径</li></ol><h3 id="-">十二、如何获取微信数据库路径/数据库目录是什么/数据库在哪</h3><ol><li>打开微信电脑版，登录微信</li><li>打开微信</li><li>打开设置</li><li>选择文件管理</li><li>点打开文件夹</li><li>进入MSG文件夹</li><li>就是这个文件夹就是微信数据库目录</li></ol><h3 id="-">十三、关于命令没有找到、命令无效、命令无法识别</h3><ol><li>请检查是否使用了中文输入法，如果使用了中文输入法，请切换为英文输入法</li><li>检查是否输入为<code>wxdump.exe info</code>，而不是<code>info</code></li><li>检查当前目录是否为exe文件所在目录，如果不是，请切换到exe文件所在目录</li><li>如果还是无法识别，选中exe文件，拖动到命令行窗口，然后输入 <code>info</code>，回车键确认</li></ol><h3 id="-">十四、微信锁定情况下能否获取数据库密钥</h3><ol><li>可以</li></ol><h3 id="-sqlite-">十五、什么是数据库/什么是sqlite数据库</h3><ol><li>数据库是一个文件，里面存储了微信的聊天记录、好友信息、群信息等等 ，以.db结尾的文件就是数据库文件，这种数据库文件叫做sqlite数据库 </li><li> 位置：打开微信电脑版，登录微信，打开设置，选择文件管理，点打开文件夹，进入MSG文件夹，就是这个文件夹就是微信数据库目录 </li></ol><h3 id="-decrypted-multi-multi-micromsg"> 十六、导出的decrypted文件夹里面的内容是什么东西，哪些是重要要，它与Multi目录下的是又是什么关系，Multi目录里面没有MicroMsg</h3><ol><li><code>decrypted</code>文件夹里面的内容是解密后的数据库，对应的是微信数据库目录下的文件（都是相对路径）</li><li><code>Multi</code>目录下的是微信数据目录下<code>Msg</code>下<code>Multi</code>内的数据库解密后的相对路径</li><li><code>decrypted</code>根目录下的<code>MicroMsg</code>是微信数据目录下<code>Msg</code>下<code>MicroMsg</code>的数据库解密后的相对路径 </li><li><code>Multi</code>目录下的<code>MSG0</code>-<code>MSG5</code>是微信数据目录下<code>Msg</code>下<code>Multi</code>内的数据库解密后的相对路径 </li><li><code>Multi</code>目录下的<code>de_MediaMsg0</code>~<code>de_MediaMsg5</code>是微信数据目录下<code>Msg</code>下<code>Multi</code>内的<code>MediaMsg0</code>的数据库解密后的相对路径 </li></ol><h3 id="-msg0-4-">十七、MSG0~4是什么关系 应该怎么选择用哪一个</h3><ol><li><code>MSG0</code>~<code>MSG5</code>是微信聊天记录不同时间段下的数据库，<code>MSG0</code>是最旧的，<code>MSG5</code>是最新的 </li><li><code>MediaMsg0</code>~<code>MediaMsg5</code>是微信聊天记录不同时间段下的数据库，<code>MediaMsg0</code>是最旧的，<code>MediaMsg5</code>是最新的 </li><li> 一般来说，如果想看最新的聊天记录，就选择<code>MSG5</code>和<code>MediaMsg5</code>，如果想看最旧的聊天记录，就选择<code>MSG0</code>和<code>MediaMsg0</code>，如果想看中间的聊天记录，就选择<code>MSG1</code>~<code>MSG4</code>和<code>MediaMsg1</code>~<code>MediaMsg4</code></li></ol><h3 id="-">十八、如何合并数据库文件？</h3><p>使用命令<code>wxdump.exe merge</code>，然后根据提示输入参数，回车键确认。 eg：<code>wxdump.exe merge -i &quot;C:\\Users\\user\\Desktop\\decrypted\\MSG0.db,C:\\Users\\user\\Desktop\\decrypted\\MSG1.db,C:\\Users\\user\\Desktop\\decrypted\\MSG2.db&quot; -o &quot;C:\\Users\\user\\Desktop\\decrypted\\merge.db&quot;</code></p><h3 id="-qq-">十八、qq交流群密码</h3><p>相信你看到这里，已经可以自己解决所有问题了。</p><p>如果实在还有疑问，更加建议提交issues。</p><p>如果还是想添加qq群，那么关注公众号：<code>逍遥之芯</code>，回复<code>qq群密码</code>即可获取qq群密码。（因为qq群又快满了，群主又没钱买vip，所以只能这样了） </p><h3 id="-">十九、是否可以查看别人的聊天记录</h3><p>不可以，只能看到有密钥的数据库的聊天记录，如果你有别人的密钥，那么可以查看别人的聊天记录。</p><h3 id="-">二十、不登录微信，能获取到密钥吗</h3><p>不能，必须登录微信才能获取到密钥。 但是可以保存密钥，下次再次使用时候，不需要登录即可。</p>`,48),t=[s];function p(h,u){return o(),i("div",c,t)}const r=e(l,[["render",p]]);export{r as default};
