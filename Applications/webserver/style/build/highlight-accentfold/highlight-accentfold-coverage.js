if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/highlight-accentfold/highlight-accentfold.js']) {
   __coverage__['build/highlight-accentfold/highlight-accentfold.js'] = {"path":"build/highlight-accentfold/highlight-accentfold.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":32},"end":{"line":1,"column":51}}},"2":{"name":"(anonymous_2)","line":36,"loc":{"start":{"line":36,"column":13},"end":{"line":36,"column":51}}},"3":{"name":"(anonymous_3)","line":58,"loc":{"start":{"line":58,"column":22},"end":{"line":58,"column":62}}},"4":{"name":"(anonymous_4)","line":112,"loc":{"start":{"line":112,"column":15},"end":{"line":112,"column":44}}},"5":{"name":"(anonymous_5)","line":128,"loc":{"start":{"line":128,"column":15},"end":{"line":128,"column":44}}},"6":{"name":"(anonymous_6)","line":132,"loc":{"start":{"line":132,"column":20},"end":{"line":132,"column":45}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":144,"column":69}},"2":{"start":{"line":15,"column":0},"end":{"line":141,"column":3}},"3":{"start":{"line":37,"column":8},"end":{"line":40,"column":41}},"4":{"start":{"line":42,"column":8},"end":{"line":75,"column":36}},"5":{"start":{"line":59,"column":16},"end":{"line":59,"column":24}},"6":{"start":{"line":62,"column":16},"end":{"line":64,"column":17}},"7":{"start":{"line":63,"column":20},"end":{"line":63,"column":33}},"8":{"start":{"line":66,"column":16},"end":{"line":66,"column":42}},"9":{"start":{"line":68,"column":16},"end":{"line":71,"column":19}},"10":{"start":{"line":73,"column":16},"end":{"line":73,"column":37}},"11":{"start":{"line":80,"column":8},"end":{"line":80,"column":84}},"12":{"start":{"line":84,"column":8},"end":{"line":86,"column":9}},"13":{"start":{"line":85,"column":12},"end":{"line":85,"column":54}},"14":{"start":{"line":89,"column":8},"end":{"line":97,"column":9}},"15":{"start":{"line":90,"column":12},"end":{"line":90,"column":47}},"16":{"start":{"line":92,"column":12},"end":{"line":94,"column":13}},"17":{"start":{"line":93,"column":16},"end":{"line":93,"column":72}},"18":{"start":{"line":96,"column":12},"end":{"line":96,"column":31}},"19":{"start":{"line":99,"column":8},"end":{"line":99,"column":32}},"20":{"start":{"line":113,"column":8},"end":{"line":113,"column":72}},"21":{"start":{"line":129,"column":8},"end":{"line":129,"column":43}},"22":{"start":{"line":131,"column":8},"end":{"line":139,"column":11}},"23":{"start":{"line":133,"column":16},"end":{"line":135,"column":17}},"24":{"start":{"line":134,"column":20},"end":{"line":134,"column":73}},"25":{"start":{"line":137,"column":16},"end":{"line":137,"column":41}}},"branchMap":{"1":{"line":62,"type":"if","locations":[{"start":{"line":62,"column":16},"end":{"line":62,"column":16}},{"start":{"line":62,"column":16},"end":{"line":62,"column":16}}]},"2":{"line":62,"type":"binary-expr","locations":[{"start":{"line":62,"column":20},"end":{"line":62,"column":22}},{"start":{"line":62,"column":26},"end":{"line":62,"column":52}}]},"3":{"line":75,"type":"binary-expr","locations":[{"start":{"line":75,"column":11},"end":{"line":75,"column":18}},{"start":{"line":75,"column":22},"end":{"line":75,"column":34}}]},"4":{"line":84,"type":"if","locations":[{"start":{"line":84,"column":8},"end":{"line":84,"column":8}},{"start":{"line":84,"column":8},"end":{"line":84,"column":8}}]},"5":{"line":92,"type":"if","locations":[{"start":{"line":92,"column":12},"end":{"line":92,"column":12}},{"start":{"line":92,"column":12},"end":{"line":92,"column":12}}]},"6":{"line":133,"type":"if","locations":[{"start":{"line":133,"column":16},"end":{"line":133,"column":16}},{"start":{"line":133,"column":16},"end":{"line":133,"column":16}}]}},"code":["(function () { YUI.add('highlight-accentfold', function (Y, NAME) {","","/**","Adds accent-folding highlighters to `Y.Highlight`.","","@module highlight","@submodule highlight-accentfold","**/","","/**","@class Highlight","@static","**/","","var AccentFold = Y.Text.AccentFold,","    Escape     = Y.Escape,","","    EMPTY_OBJECT = {},","","Highlight = Y.mix(Y.Highlight, {","    // -- Public Static Methods ------------------------------------------------","","    /**","    Accent-folding version of `all()`.","","    @method allFold","    @param {String} haystack String to apply highlighting to.","    @param {String|String[]} needles String or array of strings that should be","      highlighted.","    @param {Object} [options] Options object.","    @param {Boolean} [options.startsWith=false] If `true`, matches must be","        anchored to the beginning of the string.","    @return {String} Escaped and highlighted copy of _haystack_.","    @static","    **/","    allFold: function (haystack, needles, options) {","        var template = Highlight._TEMPLATE,","            results  = [],","            startPos = 0,","            chunk, i, len, match, result;","","        options = Y.merge({","            // This tells Highlight.all() not to escape HTML, in order to ensure","            // usable match offsets. The output of all() is discarded, and we","            // perform our own escaping before returning the highlighted string.","            escapeHTML: false,","","            // While the highlight regex operates on the accent-folded strings,","            // this replacer will highlight the matched positions in the","            // original string.","            //","            // Note: this implementation doesn't handle multi-character folds,","            // like \"æ\" -> \"ae\". Doing so correctly would be prohibitively","            // expensive both in terms of code size and runtime performance, so","            // I've chosen to take the pragmatic route and just not do it at","            // all. This is one of many reasons why accent folding is best done","            // on the server.","            replacer: function (match, p1, foldedNeedle, pos) {","                var len;","","                // Ignore matches inside HTML entities.","                if (p1 && !(/\\s/).test(foldedNeedle)) {","                    return match;","                }","","                len = foldedNeedle.length;","","                results.push([","                    haystack.substring(startPos, pos), // substring between previous match and this match","                    haystack.substr(pos, len)          // match to be highlighted","                ]);","","                startPos = pos + len;","            }","        }, options || EMPTY_OBJECT);","","        // Run the highlighter on the folded strings. We don't care about the","        // output; our replacer function will build the canonical highlighted","        // string, with original accented characters.","        Highlight.all(AccentFold.fold(haystack), AccentFold.fold(needles), options);","","        // Tack on the remainder of the haystack that wasn't highlighted, if","        // any.","        if (startPos < haystack.length) {","            results.push([haystack.substr(startPos)]);","        }","","        // Highlight and escape the string.","        for (i = 0, len = results.length; i < len; ++i) {","            chunk = Escape.html(results[i][0]);","","            if ((match = results[i][1])) {","                chunk += template.replace(/\\{s\\}/g, Escape.html(match));","            }","","            results[i] = chunk;","        }","","        return results.join('');","    },","","    /**","    Accent-folding version of `start()`.","","    @method startFold","    @param {String} haystack String to apply highlighting to.","    @param {String|String[]} needles String or array of strings that should be","      highlighted.","    @return {String} Escaped and highlighted copy of _haystack_.","    @static","    **/","    startFold: function (haystack, needles) {","        return Highlight.allFold(haystack, needles, {startsWith: true});","    },","","    /**","    Accent-folding version of `words()`.","","    @method wordsFold","    @param {String} haystack String to apply highlighting to.","    @param {String|String[]} needles String or array of strings containing words","      that should be highlighted. If a string is passed, it will be split","      into words; if an array is passed, it is assumed to have already been","      split.","    @return {String} Escaped and highlighted copy of _haystack_.","    @static","    **/","    wordsFold: function (haystack, needles) {","        var template = Highlight._TEMPLATE;","","        return Highlight.words(haystack, AccentFold.fold(needles), {","            mapper: function (word, needles) {","                if (needles.hasOwnProperty(AccentFold.fold(word))) {","                    return template.replace(/\\{s\\}/g, Escape.html(word));","                }","","                return Escape.html(word);","            }","        });","    }","});","","","}, 'patched-v3.18.1', {\"requires\": [\"highlight-base\", \"text-accentfold\"]});","","}());"]};
}
var __cov_oQgMSDYk8Uh6TIT7xBYemQ = __coverage__['build/highlight-accentfold/highlight-accentfold.js'];
__cov_oQgMSDYk8Uh6TIT7xBYemQ.s['1']++;YUI.add('highlight-accentfold',function(Y,NAME){__cov_oQgMSDYk8Uh6TIT7xBYemQ.f['1']++;__cov_oQgMSDYk8Uh6TIT7xBYemQ.s['2']++;var AccentFold=Y.Text.AccentFold,Escape=Y.Escape,EMPTY_OBJECT={},Highlight=Y.mix(Y.Highlight,{allFold:function(haystack,needles,options){__cov_oQgMSDYk8Uh6TIT7xBYemQ.f['2']++;__cov_oQgMSDYk8Uh6TIT7xBYemQ.s['3']++;var template=Highlight._TEMPLATE,results=[],startPos=0,chunk,i,len,match,result;__cov_oQgMSDYk8Uh6TIT7xBYemQ.s['4']++;options=Y.merge({escapeHTML:false,replacer:function(match,p1,foldedNeedle,pos){__cov_oQgMSDYk8Uh6TIT7xBYemQ.f['3']++;__cov_oQgMSDYk8Uh6TIT7xBYemQ.s['5']++;var len;__cov_oQgMSDYk8Uh6TIT7xBYemQ.s['6']++;if((__cov_oQgMSDYk8Uh6TIT7xBYemQ.b['2'][0]++,p1)&&(__cov_oQgMSDYk8Uh6TIT7xBYemQ.b['2'][1]++,!/\s/.test(foldedNeedle))){__cov_oQgMSDYk8Uh6TIT7xBYemQ.b['1'][0]++;__cov_oQgMSDYk8Uh6TIT7xBYemQ.s['7']++;return match;}else{__cov_oQgMSDYk8Uh6TIT7xBYemQ.b['1'][1]++;}__cov_oQgMSDYk8Uh6TIT7xBYemQ.s['8']++;len=foldedNeedle.length;__cov_oQgMSDYk8Uh6TIT7xBYemQ.s['9']++;results.push([haystack.substring(startPos,pos),haystack.substr(pos,len)]);__cov_oQgMSDYk8Uh6TIT7xBYemQ.s['10']++;startPos=pos+len;}},(__cov_oQgMSDYk8Uh6TIT7xBYemQ.b['3'][0]++,options)||(__cov_oQgMSDYk8Uh6TIT7xBYemQ.b['3'][1]++,EMPTY_OBJECT));__cov_oQgMSDYk8Uh6TIT7xBYemQ.s['11']++;Highlight.all(AccentFold.fold(haystack),AccentFold.fold(needles),options);__cov_oQgMSDYk8Uh6TIT7xBYemQ.s['12']++;if(startPos<haystack.length){__cov_oQgMSDYk8Uh6TIT7xBYemQ.b['4'][0]++;__cov_oQgMSDYk8Uh6TIT7xBYemQ.s['13']++;results.push([haystack.substr(startPos)]);}else{__cov_oQgMSDYk8Uh6TIT7xBYemQ.b['4'][1]++;}__cov_oQgMSDYk8Uh6TIT7xBYemQ.s['14']++;for(i=0,len=results.length;i<len;++i){__cov_oQgMSDYk8Uh6TIT7xBYemQ.s['15']++;chunk=Escape.html(results[i][0]);__cov_oQgMSDYk8Uh6TIT7xBYemQ.s['16']++;if(match=results[i][1]){__cov_oQgMSDYk8Uh6TIT7xBYemQ.b['5'][0]++;__cov_oQgMSDYk8Uh6TIT7xBYemQ.s['17']++;chunk+=template.replace(/\{s\}/g,Escape.html(match));}else{__cov_oQgMSDYk8Uh6TIT7xBYemQ.b['5'][1]++;}__cov_oQgMSDYk8Uh6TIT7xBYemQ.s['18']++;results[i]=chunk;}__cov_oQgMSDYk8Uh6TIT7xBYemQ.s['19']++;return results.join('');},startFold:function(haystack,needles){__cov_oQgMSDYk8Uh6TIT7xBYemQ.f['4']++;__cov_oQgMSDYk8Uh6TIT7xBYemQ.s['20']++;return Highlight.allFold(haystack,needles,{startsWith:true});},wordsFold:function(haystack,needles){__cov_oQgMSDYk8Uh6TIT7xBYemQ.f['5']++;__cov_oQgMSDYk8Uh6TIT7xBYemQ.s['21']++;var template=Highlight._TEMPLATE;__cov_oQgMSDYk8Uh6TIT7xBYemQ.s['22']++;return Highlight.words(haystack,AccentFold.fold(needles),{mapper:function(word,needles){__cov_oQgMSDYk8Uh6TIT7xBYemQ.f['6']++;__cov_oQgMSDYk8Uh6TIT7xBYemQ.s['23']++;if(needles.hasOwnProperty(AccentFold.fold(word))){__cov_oQgMSDYk8Uh6TIT7xBYemQ.b['6'][0]++;__cov_oQgMSDYk8Uh6TIT7xBYemQ.s['24']++;return template.replace(/\{s\}/g,Escape.html(word));}else{__cov_oQgMSDYk8Uh6TIT7xBYemQ.b['6'][1]++;}__cov_oQgMSDYk8Uh6TIT7xBYemQ.s['25']++;return Escape.html(word);}});}});},'patched-v3.18.1',{'requires':['highlight-base','text-accentfold']});
