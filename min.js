!function(){var e=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{};n.cdnjs=e(function(e,n,a,t,o){function r(e,n,t){var o,r="";return r+='\n    <tr class="version">\n        <td class="versionlabel">',(o=a.version)?o=o.call(e,{hash:{},data:n}):(o=e.version,o=typeof o===c?o.apply(e):o),r+=p(o)+"</td>\n    </tr>\n    ",o=a.each.call(e,e.files,{hash:{},inverse:u.noop,fn:u.programWithDepth(2,s,n,e,t),data:n}),(o||0===o)&&(r+=o),r+="\n"}function s(e,n,a,t){var o,r="";return r+='\n        <tr class="library">\n            <td>\n                <p>//cdnjs.cloudflare.com/ajax/libs/'+p((o=t.name,typeof o===c?o.apply(e):o))+"/"+p((o=a.version,typeof o===c?o.apply(e):o))+"/"+p(typeof e===c?e.apply(e):e)+"</p>\n            </td>\n        </tr>\n    "}this.compilerInfo=[4,">= 1.0.0"],a=this.merge(a,e.helpers),o=o||{};var i,l="",c="function",p=this.escapeExpression,u=this;return i=a.each.call(n,n.assets,{hash:{},inverse:u.noop,fn:u.programWithDepth(1,r,o,n),data:o}),(i||0===i)&&(l+=i),l+="\n"})}(),function(e){function n(e){var n,a=document,t=e;if(a.body.createTextRange)n=a.body.createTextRange(),n.moveToElementText(t),n.select();else if(window.getSelection){var o=window.getSelection();n=a.createRange(),n.selectNodeContents(t),o.removeAllRanges(),o.addRange(n)}}function a(){e("#name").text(s.login),o(r),e("body").addClass("authenticated"),e(".login-box").hide(),e(".logged-in").show()}function t(e){UserApp.User.get({user_id:"self"},function(n,a){n?e&&e(null):e&&e(a[0])})}function o(n){e.get("http://cdnjs-server.herokuapp.com/favorites?token="+i,function(e){e&&(l=e,n(e))},"json")}function r(n){_.each(n,function(n){n="#"+n;var a=e(n).clone(!0);a.addClass("favorite"),e(n).remove(),e("#example tbody").prepend(a)})}UserApp.initialize({appId:"5343d12871774"});var s=null,i=Kaka.get("ua_session_token");i&&(UserApp.setToken(i),t(function(e){e&&(s=e,a())})),window.logout=function(){Kaka.remove("ua_session_token"),UserApp.User.logout(function(){window.location.href="login.html"})};var l=[];e("#example .change-favorite").on("click",function(n){var a=e(n.currentTarget).parents("tr")[0].id;_.contains(l,a)?_.isArray(l)&&l.length>0&&(_gaq.push(["_trackEvent","favorite","removed",a]),l=_.without(l,a),e.ajax({url:"http://cdnjs-server.herokuapp.com/favorites?token="+i,success:function(){console.log(arguments)},type:"DELETE",data:{library:a}})):(l.push(a),_gaq.push(["_trackEvent","favorite","added",a]),e.ajax({url:"http://cdnjs-server.herokuapp.com/favorites?token="+i,success:function(){console.log(arguments)},type:"POST",data:{library:a}})),e("#example tr").removeClass("favorite"),r(l)}),e("p.library-url").on("mouseenter",function(a){n(e(a.currentTarget)[0])}),e(".search").focus(),e(".search").on("keyup",function(n){var a=e(n.currentTarget).val();console.log(a),a.length>0?(e("[data-library-name]").hide(),e('[data-library-name*="'+a+'"]').show(),e('[data-library-keywords*="'+a+'"]').show()):e("[data-library-name]").show()})}(jQuery);