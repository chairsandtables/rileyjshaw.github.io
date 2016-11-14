!function(){for(var a,b=function(){},c=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],d=c.length,e=window.console=window.console||{};d--;)a=c[d],e[a]||(e[a]=b)}();var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var a=/\blang(?:uage)?-(\w+)\b/i,b=0,c=_self.Prism={util:{encode:function(a){return a instanceof d?new d(a.type,c.util.encode(a.content),a.alias):"Array"===c.util.type(a)?a.map(c.util.encode):a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).match(/\[object (\w+)\]/)[1]},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++b}),a.__id},clone:function(a){var b=c.util.type(a);switch(b){case"Object":var d={};for(var e in a)a.hasOwnProperty(e)&&(d[e]=c.util.clone(a[e]));return d;case"Array":return a.map&&a.map(function(a){return c.util.clone(a)})}return a}},languages:{extend:function(a,b){var d=c.util.clone(c.languages[a]);for(var e in b)d[e]=b[e];return d},insertBefore:function(a,b,d,e){e=e||c.languages;var f=e[a];if(2==arguments.length){d=arguments[1];for(var g in d)d.hasOwnProperty(g)&&(f[g]=d[g]);return f}var h={};for(var i in f)if(f.hasOwnProperty(i)){if(i==b)for(var g in d)d.hasOwnProperty(g)&&(h[g]=d[g]);h[i]=f[i]}return c.languages.DFS(c.languages,function(b,c){c===e[a]&&b!=a&&(this[b]=h)}),e[a]=h},DFS:function(a,b,d,e){e=e||{};for(var f in a)a.hasOwnProperty(f)&&(b.call(a,f,a[f],d||f),"Object"!==c.util.type(a[f])||e[c.util.objId(a[f])]?"Array"!==c.util.type(a[f])||e[c.util.objId(a[f])]||(e[c.util.objId(a[f])]=!0,c.languages.DFS(a[f],b,f,e)):(e[c.util.objId(a[f])]=!0,c.languages.DFS(a[f],b,null,e)))}},plugins:{},highlightAll:function(a,b){var d={callback:b,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};c.hooks.run("before-highlightall",d);for(var e,f=d.elements||document.querySelectorAll(d.selector),g=0;e=f[g++];)c.highlightElement(e,a===!0,d.callback)},highlightElement:function(b,d,e){for(var f,g,h=b;h&&!a.test(h.className);)h=h.parentNode;h&&(f=(h.className.match(a)||[,""])[1].toLowerCase(),g=c.languages[f]),b.className=b.className.replace(a,"").replace(/\s+/g," ")+" language-"+f,h=b.parentNode,/pre/i.test(h.nodeName)&&(h.className=h.className.replace(a,"").replace(/\s+/g," ")+" language-"+f);var i=b.textContent,j={element:b,language:f,grammar:g,code:i};if(c.hooks.run("before-sanity-check",j),!j.code||!j.grammar)return void c.hooks.run("complete",j);if(c.hooks.run("before-highlight",j),d&&_self.Worker){var k=new Worker(c.filename);k.onmessage=function(a){j.highlightedCode=a.data,c.hooks.run("before-insert",j),j.element.innerHTML=j.highlightedCode,e&&e.call(j.element),c.hooks.run("after-highlight",j),c.hooks.run("complete",j)},k.postMessage(JSON.stringify({language:j.language,code:j.code,immediateClose:!0}))}else j.highlightedCode=c.highlight(j.code,j.grammar,j.language),c.hooks.run("before-insert",j),j.element.innerHTML=j.highlightedCode,e&&e.call(b),c.hooks.run("after-highlight",j),c.hooks.run("complete",j)},highlight:function(a,b,e){var f=c.tokenize(a,b);return d.stringify(c.util.encode(f),e)},tokenize:function(a,b){var d=c.Token,e=[a],f=b.rest;if(f){for(var g in f)b[g]=f[g];delete b.rest}a:for(var g in b)if(b.hasOwnProperty(g)&&b[g]){var h=b[g];h="Array"===c.util.type(h)?h:[h];for(var i=0;i<h.length;++i){var j=h[i],k=j.inside,l=!!j.lookbehind,m=!!j.greedy,n=0,o=j.alias;if(m&&!j.pattern.global){var p=j.pattern.toString().match(/[imuy]*$/)[0];j.pattern=RegExp(j.pattern.source,p+"g")}j=j.pattern||j;for(var q=0,r=0;q<e.length;r+=e[q].length,++q){var s=e[q];if(e.length>a.length)break a;if(!(s instanceof d)){j.lastIndex=0;var t=j.exec(s),u=1;if(!t&&m&&q!=e.length-1){if(j.lastIndex=r,t=j.exec(a),!t)break;for(var v=t.index+(l?t[1].length:0),w=t.index+t[0].length,x=q,y=r,z=e.length;z>x&&w>y;++x)y+=e[x].length,v>=y&&(++q,r=y);if(e[q]instanceof d||e[x-1].greedy)continue;u=x-q,s=a.slice(r,y),t.index-=r}if(t){l&&(n=t[1].length);var v=t.index+n,t=t[0].slice(n),w=v+t.length,A=s.slice(0,v),B=s.slice(w),C=[q,u];A&&C.push(A);var D=new d(g,k?c.tokenize(t,k):t,o,t,m);C.push(D),B&&C.push(B),Array.prototype.splice.apply(e,C)}}}}}return e},hooks:{all:{},add:function(a,b){var d=c.hooks.all;d[a]=d[a]||[],d[a].push(b)},run:function(a,b){var d=c.hooks.all[a];if(d&&d.length)for(var e,f=0;e=d[f++];)e(b)}}},d=c.Token=function(a,b,c,d,e){this.type=a,this.content=b,this.alias=c,this.length=0|(d||"").length,this.greedy=!!e};if(d.stringify=function(a,b,e){if("string"==typeof a)return a;if("Array"===c.util.type(a))return a.map(function(c){return d.stringify(c,b,a)}).join("");var f={type:a.type,content:d.stringify(a.content,b,e),tag:"span",classes:["token",a.type],attributes:{},language:b,parent:e};if("comment"==f.type&&(f.attributes.spellcheck="true"),a.alias){var g="Array"===c.util.type(a.alias)?a.alias:[a.alias];Array.prototype.push.apply(f.classes,g)}c.hooks.run("wrap",f);var h="";for(var i in f.attributes)h+=(h?" ":"")+i+'="'+(f.attributes[i]||"")+'"';return"<"+f.tag+' class="'+f.classes.join(" ")+'"'+(h?" "+h:"")+">"+f.content+"</"+f.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(a){var b=JSON.parse(a.data),d=b.language,e=b.code,f=b.immediateClose;_self.postMessage(c.highlight(e,c.languages[d],d)),f&&_self.close()},!1),_self.Prism):_self.Prism;var e=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return e&&(c.filename=e.src,document.addEventListener&&!e.hasAttribute("data-manual")&&("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(c.highlightAll):window.setTimeout(c.highlightAll,16):document.addEventListener("DOMContentLoaded",c.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/i,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:{pattern:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript,!function(a){var b={variable:[{pattern:/\$?\(\([\w\W]+?\)\)/,inside:{variable:[{pattern:/(^\$\(\([\w\W]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\([^)]+\)|`[^`]+`/,inside:{variable:/^\$\(|^`|\)$|`$/}},/\$(?:[a-z0-9_#\?\*!@]+|\{[^}]+\})/i]};a.languages.bash={shebang:{pattern:/^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,alias:"important"},comment:{pattern:/(^|[^"{\\])#.*/,lookbehind:!0},string:[{pattern:/((?:^|[^<])<<\s*)(?:"|')?(\w+?)(?:"|')?\s*\r?\n(?:[\s\S])*?\r?\n\2/g,lookbehind:!0,greedy:!0,inside:b},{pattern:/(["'])(?:\\\\|\\?[^\\])*?\1/g,greedy:!0,inside:b}],variable:b.variable,function:{pattern:/(^|\s|;|\||&)(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|\s|;|\||&)/,lookbehind:!0},keyword:{pattern:/(^|\s|;|\||&)(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|\s|;|\||&)/,lookbehind:!0},boolean:{pattern:/(^|\s|;|\||&)(?:true|false)(?=$|\s|;|\||&)/,lookbehind:!0},operator:/&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];]/};var c=b.variable[1].inside;c.function=a.languages.bash.function,c.keyword=a.languages.bash.keyword,c.boolean=a.languages.bash.boolean,c.operator=a.languages.bash.operator,c.punctuation=a.languages.bash.punctuation}(Prism),!function(a){var b=/#(?!\{).+/,c={pattern:/#\{[^}]+\}/,alias:"variable"};a.languages.coffeescript=a.languages.extend("javascript",{comment:b,string:[{pattern:/'(?:\\?[^\\])*?'/,greedy:!0},{pattern:/"(?:\\?[^\\])*?"/,greedy:!0,inside:{interpolation:c}}],keyword:/\b(and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),a.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:b,interpolation:c}}}),a.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\?[\s\S])*?`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},rest:a.languages.javascript}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:c}}]}),a.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete a.languages.coffeescript["template-string"]}(Prism),Prism.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(\\?.)*?\1/m,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s(--|-)\w+/m}},coord:/^@@.*@@$/m,commit_sha1:/^commit \w{40}$/m},Prism.languages.json={property:/"(?:\\.|[^|"])*"(?=\s*:)/gi,string:/"(?!:)(?:\\.|[^|"])*"(?!:)/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/g,punctuation:/[{}[\]);,]/g,operator:/:/g,boolean:/\b(true|false)\b/gi,null:/\bnull\b/gi},Prism.languages.jsonp=Prism.languages.json,Prism.languages.python={"triple-quoted-string":{pattern:/"""[\s\S]+?"""|'''[\s\S]+?'''/,alias:"string"},comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:{pattern:/("|')(?:\\\\|\\?[^\\\r\n])*?\1/,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)[a-z0-9_]+/i,lookbehind:!0},keyword:/\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,boolean:/\b(?:True|False)\b/,number:/\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,punctuation:/[{}[\];(),.:]/},!function(a){var b=a.util.clone(a.languages.javascript);a.languages.jsx=a.languages.extend("markup",b),a.languages.jsx.tag.pattern=/<\/?[\w\.:-]+\s*(?:\s+[\w\.:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+|(\{[\w\W]*?\})))?\s*)*\/?>/i,a.languages.jsx.tag.inside["attr-value"].pattern=/=[^\{](?:('|")[\w\W]*?(\1)|[^\s>]+)/i;var c=a.util.clone(a.languages.jsx);delete c.punctuation,c=a.languages.insertBefore("jsx","operator",{punctuation:/=(?={)|[{}[\];(),.:]/},{jsx:c}),a.languages.insertBefore("inside","attr-value",{script:{pattern:/=(\{(?:\{[^}]*\}|[^}])+\})/i,inside:c,alias:"language-javascript"}},a.languages.jsx.tag)}(Prism),!function(a){a.languages.sass=a.languages.extend("css",{comment:{pattern:/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,lookbehind:!0}}),a.languages.insertBefore("sass","atrule",{"atrule-line":{pattern:/^(?:[ \t]*)[@+=].+/m,inside:{atrule:/(?:@[\w-]+|[+=])/m}}}),delete a.languages.sass.atrule;var b=/((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i,c=[/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,{pattern:/(\s+)-(?=\s)/,lookbehind:!0}];a.languages.insertBefore("sass","property",{"variable-line":{pattern:/^[ \t]*\$.+/m,inside:{punctuation:/:/,variable:b,operator:c}},"property-line":{pattern:/^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,inside:{property:[/[^:\s]+(?=\s*:)/,{pattern:/(:)[^:\s]+/,lookbehind:!0}],punctuation:/:/,variable:b,operator:c,important:a.languages.sass.important}}}),delete a.languages.sass.property,delete a.languages.sass.important,delete a.languages.sass.selector,a.languages.insertBefore("sass","punctuation",{selector:{pattern:/([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,lookbehind:!0}})}(Prism),!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var a=[],b={},c=function(){};Prism.plugins.toolbar={};var d=Prism.plugins.toolbar.registerButton=function(c,d){var e;e="function"==typeof d?d:function(a){var b;return"function"==typeof d.onClick?(b=document.createElement("button"),b.type="button",b.addEventListener("click",function(){d.onClick.call(this,a)})):"string"==typeof d.url?(b=document.createElement("a"),b.href=d.url):b=document.createElement("span"),b.textContent=d.text,b},a.push(b[c]=e)},e=Prism.plugins.toolbar.hook=function(d){var e=d.element.parentNode;if(e&&/pre/i.test(e.nodeName)){e.classList.add("code-toolbar");var f=document.createElement("div");f.classList.add("toolbar"),document.body.hasAttribute("data-toolbar-order")&&(a=document.body.getAttribute("data-toolbar-order").split(",").map(function(a){return b[a]||c})),a.forEach(function(a){var b=a(d);if(b){var c=document.createElement("div");c.classList.add("toolbar-item"),c.appendChild(b),f.appendChild(c)}}),e.appendChild(f)}};d("label",function(a){var b=a.element.parentNode;if(b&&/pre/i.test(b.nodeName)&&b.hasAttribute("data-label")){var c,d=b.getAttribute("data-label"),e=document.querySelector("template#"+d);return e?c=e.content:(b.hasAttribute("data-url")?(c=document.createElement("a"),c.href=b.getAttribute("data-url")):c=document.createElement("span"),c.innerHTML=d),c}}),Prism.hooks.add("complete",e)}}(),!function(){"undefined"!=typeof self&&self.Prism&&self.document&&Prism.hooks.add("before-sanity-check",function(a){if(a.code){var b=a.element.parentNode,c=/\s*\bkeep-initial-line-feed\b\s*/;!b||"pre"!==b.nodeName.toLowerCase()||c.test(b.className)||c.test(a.element.className)||(a.code=a.code.replace(/^(?:\r?\n|\r)/,""))}})}(),!function(){if("undefined"!=typeof self&&self.Prism&&self.document){if(!Prism.plugins.toolbar)return void console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.");var a=window.Clipboard||void 0;a||"function"!=typeof require||(a=require("clipboard"));var b=[];if(!a){var c=document.createElement("script"),d=document.querySelector("head");c.onload=function(){if(a=window.Clipboard)for(;b.length;)b.pop()()},c.src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.8/clipboard.min.js",d.appendChild(c)}Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(c){function d(){var b=new a(f,{text:function(){return c.code}});b.on("success",function(){f.textContent="Copied!",e()}),b.on("error",function(){f.textContent="Press Ctrl+C to copy",e()})}function e(){setTimeout(function(){f.textContent="Copy"},5e3)}var f=document.createElement("a");return f.textContent="Copy",a?d():b.push(d),f})}}();var dialogPolyfill=function(){var a=window.document.addEventListener?function(a,b,c){a.addEventListener(b,c)}:function(a,b,c){a.attachEvent("on"+b,c)},b=(window.document.removeEventListener?function(a,b,c){a.removeEventListener(b,c)}:function(a,b,c){a.detachEvent("on"+b,c)},{});return b.reposition=function(a){var b=document.body.scrollTop||document.documentElement.scrollTop,c=b+(window.innerHeight-a.offsetHeight)/2;a.style.top=c+"px",a.dialogPolyfillInfo.isTopOverridden=!0},b.inNodeList=function(a,b){for(var c=0;c<a.length;++c)if(a[c]==b)return!0;return!1},b.isInlinePositionSetByStylesheet=function(a){for(var c=0;c<document.styleSheets.length;++c){var d=document.styleSheets[c],e=null;try{e=d.cssRules}catch(a){}if(e)for(var f=0;f<e.length;++f){var g=e[f],h=null;try{h=document.querySelectorAll(g.selectorText)}catch(a){}if(h&&b.inNodeList(h,a)){var i=g.style.getPropertyValue("top"),j=g.style.getPropertyValue("bottom");if(i&&"auto"!=i||j&&"auto"!=j)return!0}}}return!1},b.needsCentering=function(a){var c=getComputedStyle(a);return"absolute"==c.position&&(!("auto"!=a.style.top&&""!=a.style.top||"auto"!=a.style.bottom&&""!=a.style.bottom)&&!b.isInlinePositionSetByStylesheet(a))},b.showDialog=function(a){if(this.open)throw"InvalidStateError: showDialog called on open dialog";this.open=!0,this.setAttribute("open","open");var c=null,d=null,e=function(a){for(var b=0;b<a.children.length;b++){var f=a.children[b];if(null!==c||f.disabled||"BUTTON"!=f.nodeName&&"INPUT"!=f.nodeName&&"KEYGEN"!=f.nodeName&&"SELECT"!=f.nodeName&&"TEXTAREA"!=f.nodeName||(c=f),f.autofocus)return void(d=f);if(e(f),null!==d)return}};e(this),null!==d?d.focus():null!==c&&c.focus(),b.needsCentering(this)&&b.reposition(this),a&&(this.dialogPolyfillInfo.modal=!0,b.dm.pushDialog(this))},b.close=function(a){if(!this.open)throw new InvalidStateError;this.open=!1,this.removeAttribute("open"),"undefined"!=typeof a&&(this.returnValue=a),this.dialogPolyfillInfo.isTopOverridden&&(this.style.top="auto"),this.dialogPolyfillInfo.modal&&b.dm.removeDialog(this);var c;return document.createEvent?(c=document.createEvent("HTMLEvents"),c.initEvent("close",!0,!0)):c=new Event("close"),this.dispatchEvent(c),this.returnValue},b.registerDialog=function(c){c.show&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly."),a(c,"dialog_submit",function(a){c.close(a.detail.target.value),a.preventDefault(),a.stopPropagation()}),c.show=b.showDialog.bind(c,!1),c.showModal=b.showDialog.bind(c,!0),c.close=b.close.bind(c),c.dialogPolyfillInfo={}},TOP_LAYER_ZINDEX=1e5,MAX_PENDING_DIALOGS=1e5,b.DialogManager=function(){this.pendingDialogStack=[],this.overlay=document.createElement("div"),this.overlay.style.width="100%",this.overlay.style.height="100%",this.overlay.style.position="fixed",this.overlay.style.left="0px",this.overlay.style.top="0px",this.overlay.style.backgroundColor="rgba(0,0,0,0.0)",a(this.overlay,"click",function(a){var b=document.createEvent("MouseEvents");b.initMouseEvent(a.type,a.bubbles,a.cancelable,window,a.detail,a.screenX,a.screenY,a.clientX,a.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.button,a.relatedTarget),document.body.dispatchEvent(b)}),a(window,"load",function(){var b=document.getElementsByTagName("form");Array.prototype.forEach.call(b,function(b){"dialog"==b.getAttribute("method")&&a(b,"click",function(a){if("submit"==a.target.type){var b;CustomEvent?b=new CustomEvent("dialog_submit",{bubbles:!0,detail:{target:a.target}}):(b=document.createEvent("HTMLEvents"),b.initEvent("dialog_submit",!0,!0),b.detail={target:a.target}),this.dispatchEvent(b),a.preventDefault()}})})})},b.dm=new b.DialogManager,b.DialogManager.prototype.blockDocument=function(){document.body.contains(this.overlay)||document.body.appendChild(this.overlay)},b.DialogManager.prototype.unblockDocument=function(){document.body.removeChild(this.overlay)},b.DialogManager.prototype.updateStacking=function(){if(0==this.pendingDialogStack.length)return void this.unblockDocument();this.blockDocument();for(var a=TOP_LAYER_ZINDEX,b=0;b<this.pendingDialogStack.length;b++){b==this.pendingDialogStack.length-1&&(this.overlay.style.zIndex=a++);var c=this.pendingDialogStack[b];c.dialogPolyfillInfo.backdrop.style.zIndex=a++,c.style.zIndex=a++}},b.DialogManager.prototype.cancelDialog=function(a){if(27===a.keyCode&&this.pendingDialogStack.length>0){a.preventDefault(),a.stopPropagation();var b,c=this.pendingDialogStack.slice(-1)[0];c&&(CustomEvent?b=new CustomEvent("cancel",{bubbles:!1}):(b=document.createEvent("HTMLEvents"),b.initEvent("cancel",!1,!0)),c.dispatchEvent(b)&&c.close())}},b.DialogManager.prototype.pushDialog=function(b){if(this.pendingDialogStack.length>=MAX_PENDING_DIALOGS)throw"Too many modal dialogs";var c=document.createElement("div");c.classList.add("backdrop"),a(c,"click",function(a){var c=document.createEvent("MouseEvents");c.initMouseEvent(a.type,a.bubbles,a.cancelable,window,a.detail,a.screenX,a.screenY,a.clientX,a.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,a.button,a.relatedTarget),b.dispatchEvent(c)}),b.parentNode.insertBefore(c,b.nextSibling),b.dialogPolyfillInfo.backdrop=c,this.pendingDialogStack.push(b),this.updateStacking()},b.DialogManager.prototype.removeDialog=function(a){var b=this.pendingDialogStack.indexOf(a);if(b!=-1){this.pendingDialogStack.splice(b,1);var c=a.dialogPolyfillInfo.backdrop;c.parentNode.removeChild(c),a.dialogPolyfillInfo.backdrop=null,this.updateStacking()}},a(document,"keydown",b.dm.cancelDialog.bind(b.dm)),b}();!function(a,b,c){function d(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)}function e(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);return a.shiftKey||(b=b.toLowerCase()),b}return q[a.which]?q[a.which]:r[a.which]?r[a.which]:String.fromCharCode(a.which).toLowerCase()}function f(a){a=a||{};var b,c=!1;for(b in w)a[b]?c=!0:w[b]=0;c||(z=!1)}function g(a,b,c,d,e,f){var g,h,i=[],j=c.type;if(!u[a])return[];for("keyup"==j&&k(a)&&(b=[a]),g=0;g<u[a].length;++g)if(h=u[a][g],!(!d&&h.seq&&w[h.seq]!=h.level||j!=h.action||("keypress"!=j||c.metaKey||c.ctrlKey)&&b.sort().join(",")!==h.modifiers.sort().join(","))){var l=d&&h.seq==d&&h.level==f;(!d&&h.combo==e||l)&&u[a].splice(g,1),i.push(h)}return i}function h(a){var b=[];return a.shiftKey&&b.push("shift"),a.altKey&&b.push("alt"),a.ctrlKey&&b.push("ctrl"),a.metaKey&&b.push("meta"),b}function i(a,b,c,d){A.stopCallback(b,b.target||b.srcElement,c,d)||!1!==a(b,c)||(b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation?b.stopPropagation():b.cancelBubble=!0)}function j(a){"number"!=typeof a.which&&(a.which=a.keyCode);var b=e(a);b&&("keyup"==a.type&&x===b?x=!1:A.handleKey(b,h(a),a))}function k(a){return"shift"==a||"ctrl"==a||"alt"==a||"meta"==a}function l(a,b,c,d){function g(b){return function(){z=b,++w[a],clearTimeout(p),p=setTimeout(f,1e3)}}function h(b){i(c,b,a),"keyup"!==d&&(x=e(b)),setTimeout(f,10)}for(var j=w[a]=0;j<b.length;++j){var k=j+1===b.length?h:g(d||m(b[j+1]).action);n(b[j],k,d,a,j)}}function m(a,b){var c,d,e,f=[];for(c="+"===a?["+"]:a.split("+"),e=0;e<c.length;++e)d=c[e],t[d]&&(d=t[d]),b&&"keypress"!=b&&s[d]&&(d=s[d],f.push("shift")),k(d)&&f.push(d);if(c=d,e=b,!e){if(!o){o={};for(var g in q)95<g&&112>g||q.hasOwnProperty(g)&&(o[q[g]]=g)}e=o[c]?"keydown":"keypress"}return"keypress"==e&&f.length&&(e="keydown"),{key:d,modifiers:f,action:e}}function n(a,b,c,d,e){v[a+":"+c]=b,a=a.replace(/\s+/g," ");var f=a.split(" ");1<f.length?l(a,f,b,c):(c=m(a,c),u[c.key]=u[c.key]||[],g(c.key,c.modifiers,{type:c.action},d,a,e),u[c.key][d?"unshift":"push"]({callback:b,modifiers:c.modifiers,action:c.action,seq:d,level:e,combo:a}))}var o,p,q={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},r={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},s={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},t={option:"alt",command:"meta",return:"enter",escape:"esc",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},u={},v={},w={},x=!1,y=!1,z=!1;for(c=1;20>c;++c)q[111+c]="f"+c;for(c=0;9>=c;++c)q[c+96]=c;d(b,"keypress",j),d(b,"keydown",j),d(b,"keyup",j);var A={bind:function(a,b,c){a=a instanceof Array?a:[a];for(var d=0;d<a.length;++d)n(a[d],b,c);return this},unbind:function(a,b){return A.bind(a,function(){},b)},trigger:function(a,b){return v[a+":"+b]&&v[a+":"+b]({},a),this},reset:function(){return u={},v={},this},stopCallback:function(a,b){return!(-1<(" "+b.className+" ").indexOf(" mousetrap "))&&("INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.isContentEditable)},handleKey:function(a,b,c){var d,e=g(a,b,c);b={};var h=0,j=!1;for(d=0;d<e.length;++d)e[d].seq&&(h=Math.max(h,e[d].level));for(d=0;d<e.length;++d)e[d].seq?e[d].level==h&&(j=!0,b[e[d].seq]=1,i(e[d].callback,c,e[d].combo,e[d].seq)):j||i(e[d].callback,c,e[d].combo);e="keypress"==c.type&&y,c.type!=z||k(a)||e||f(b),y=j&&"keydown"==c.type}};a.Mousetrap=A,"function"==typeof define&&define.amd&&define(A)}(window,document),function(a){var b=document.body,c=document.getElementById("top-nav"),d=document.getElementById("drawer-nav-link"),e=(document.getElementById("drawer-nav"),document.getElementById("drawer-nav-overlay")),f=function(a,b){a.classList?a.classList.add(b):a.className+=" "+b},g=function(a,b){a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(^|\\b)"+b.split(" ").join("|")+"(\\b|$)","gi")," ")},h=function(a,b){if(a.classList)a.classList.toggle(b);else{var c=a.className.split(" "),d=c.indexOf(b);d>=0?c.splice(d,1):c.push(b),a.className=c.join(" ")}},i=function(a){function c(){a.open&&a.close()}function d(b){var c=a.getBoundingClientRect();return c.top<=b.clientY&&b.clientY<=c.top+c.height&&c.left<=b.clientX&&b.clientX<=c.left+c.width}return a&&(dialogPolyfill.registerDialog(a),b.addEventListener("click",function(d){a.open&&d.target===b&&c()}),a.addEventListener("click",function(a){d(a)||c()})),a},j=function(){dialog=i(document.getElementById("cdTerm")),dialog.showModal()},k=!1,l=function(a){k?window.pageYOffset<=0&&(g(b,"scrolled"),k=!1):window.pageYOffset>0&&(f(b,"scrolled"),k=!0)},m=function(a){a.preventDefault(),h(b,"drawer-nav-open")};Mousetrap.bind("up up down down left right left right b a enter",function(){alert("omg konami code!")}),Mousetrap.bind("c d space",function(){j()}),c&&document.addEventListener("scroll",l),d&&(d.addEventListener("click",m),e.addEventListener("click",m))}(this);