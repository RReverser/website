(function($) {





    function selectText(element) {
      var doc = document;
      var text = element;
      var range;

      if (doc.body.createTextRange) { // ms
        range = doc.body.createTextRange();
        range.moveToElementText(text);
        range.select();
      } else if (window.getSelection) { // moz, opera, webkit
        var selection = window.getSelection();
        range = doc.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }



    // UserApp Integration

    UserApp.initialize({
      appId: "5343d12871774"
    });
    var currentUser = null; // This will contain the logged in user

    // Check if there is a session cookie
    var token = Kaka.get("ua_session_token");
    if (token) {
      // Yes, there is
      UserApp.setToken(token);

      // Get the logged in user
      getCurrentUser(function(user) {
        if (user) {
          console.log(user);
          currentUser = user;
          onUserLoaded();
        }
      });
    }

    // When the user has loaded
    function get_gravatar(email, size) {
     
        // MD5 (Message-Digest Algorithm) by WebToolkit
        // 
     
        var MD5=function(s){function L(k,d){return(k<<d)|(k>>>(32-d))}function K(G,k){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d){return(x^2147483648^F^H)}if(I|d){if(x&1073741824){return(x^3221225472^F^H)}else{return(x^1073741824^F^H)}}else{return(x^F^H)}}function r(d,F,k){return(d&F)|((~d)&k)}function q(d,F,k){return(d&k)|(F&(~k))}function p(d,F,k){return(d^F^k)}function n(d,F,k){return(F^(d|(~k)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(G){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]|(G.charCodeAt(H)<<d));H++}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa}function B(x){var k="",F="",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F="0"+G.toString(16);k=k+F.substr(F.length-2,2)}return k}function J(k){k=k.replace(/rn/g,"n");var d="";for(var F=0;F<k.length;F++){var x=k.charCodeAt(F);if(x<128){d+=String.fromCharCode(x)}else{if((x>127)&&(x<2048)){d+=String.fromCharCode((x>>6)|192);d+=String.fromCharCode((x&63)|128)}else{d+=String.fromCharCode((x>>12)|224);d+=String.fromCharCode(((x>>6)&63)|128);d+=String.fromCharCode((x&63)|128)}}}return d}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase()};
     
        var size = size || 80;
     
        return 'http://www.gravatar.com/avatar/' + MD5(email) + '.jpg?s=' + size;
    }
    function onUserLoaded() {
      $('.sponsors').slideUp(200);
      $('.logged-in').slideDown();

      $("#name").text(currentUser.login);
      $("#gravatar").attr('src', get_gravatar(currentUser.email, 64));
      getFavorites(putClassOnFavorites);
      $('body').addClass('authenticated');
      $('.login-box').hide();

    }

    // Get the logged in user

    function getCurrentUser(callback) {
      UserApp.User.get({
        user_id: "self"
      }, function(error, user) {
        if (error) {
          callback && callback(null);
        } else {
          callback && callback(user[0]);
        }
      });
    }

    // Get this user's articles from the back-end


    // Logout function
    window.logout = function() {
      Kaka.remove("ua_session_token");
      UserApp.User.logout(function() {
        window.location.href = "login.html";
      });
    }



    // TODO - This is some pretty ugly code by Thomas </honesty>

    var favorites = [];

    function getFavorites(callback) {
      $.get("http://cdnjs-server.herokuapp.com/favorites?token=" + token, function(data) {
        if (data) {
          favorites = data;
          callback(data);
        }
      }, "json");
    }

    function putClassOnFavorites(favorites) {
      _.each(favorites, function(favId) {
        favId = '#' + favId;
        var $element = $(favId);
        var $clonedElement = $element.clone(true);
        $element.remove();
        $clonedElement.addClass('favorite');
        $('#example tbody').prepend($clonedElement);
      });
    }

    $('#example .change-favorite').on('click', function(e) {

        var rowId = $(e.currentTarget).parents('tr')[0].id;
        if (!_.contains(favorites, rowId)) {
          favorites.push(rowId);
          _gaq.push(['_trackEvent', 'favorite', 'added', rowId]);

          $.ajax({
            url: 'http://cdnjs-server.herokuapp.com/favorites?token=' + token,
            success: function() {
              console.log(arguments)
            },
            type: 'POST',
            data: {
              library: rowId
            }
          })
        } else if (_.isArray(favorites) && favorites.length > 0) {
          _gaq.push(['_trackEvent', 'favorite', 'removed', rowId]);
          favorites = _.without(favorites, rowId);

          $.ajax({
            url: 'http://cdnjs-server.herokuapp.com/favorites?token=' + token,
            success: function() {
              console.log(arguments)
            },
            type: 'DELETE',
            data: {
              library: rowId
            }
          })
        }

        var favRow = $('#' + rowId);
        console.log(favRow);
        if (favRow.hasClass('favorite')) {
          $(favRow).appendTo('#example tbody');
          favRow.removeClass('favorite');
        } else {
          window.a =favRow;
          favRow.addClass('favorite');
          $(favRow).prependTo('#example tbody');

        }
      //$('#example tr').removeClass('favorite');
      //putClassOnFavorites(favorites);
    });


  $('p.library-url').on('mouseenter', function(event) {

    selectText($(event.currentTarget)[0]);
  });

  //http://www.merriampark.com/ld.htm, http://www.mgilleland.com/ld/ldjavascript.htm, Damerau–Levenshtein distance (Wikipedia)

  function levDist(s, t) {
    var d = []; //2d matrix

    // Step 1
    var n = s.length;
    var m = t.length;

    if (n == 0) return m;
    if (m == 0) return n;

    //Create an array of arrays in javascript (a descending loop is quicker)
    for (var i = n; i >= 0; i--) d[i] = [];

    // Step 2
    for (var i = n; i >= 0; i--) d[i][0] = i;
    for (var j = m; j >= 0; j--) d[0][j] = j;

    // Step 3
    for (var i = 1; i <= n; i++) {
      var s_i = s.charAt(i - 1);

      // Step 4
      for (var j = 1; j <= m; j++) {

        //Check the jagged ld total so far
        if (i == j && d[i][j] > 4) return n;

        var t_j = t.charAt(j - 1);
        var cost = (s_i == t_j) ? 0 : 1; // Step 5

        //Calculate the minimum
        var mi = d[i - 1][j] + 1;
        var b = d[i][j - 1] + 1;
        var c = d[i - 1][j - 1] + cost;

        if (b < mi) mi = b;
        if (c < mi) mi = c;

        d[i][j] = mi; // Step 6

        //Damerau transposition
        if (i > 1 && j > 1 && s_i == t.charAt(j - 2) && s.charAt(i - 2) == t_j) {
          d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + cost);
        }
      }
    }

    // Step 7
    return d[n][m];
  }

  // TODO: generate this as part of the template
  rowSelector = '#example > tbody > tr'; 
  matchedRowSelector = '#example tr.search-result'; 
  libraryNameCache = _.pluck($(rowSelector), 'id'); 
  //$rowCache = null;

  function filterLibraries(searchVal) {
    //$rowCache = $rowCache || $(rowSelector);
    $(rowSelector).removeClass('search-result');
    if (searchVal.length > 0) {
      var libraryRanking = [];
      //var favorites = getFavorites();

      cleanSearchVal = searchVal.replace(/\./g, '').toLowerCase();

      for (var i = 0; i < libraryNameCache.length; i++) {
        var libraryName = libraryNameCache[i];
        var elem = $('#' + libraryName);
        var levDistVal = levDist(libraryName, searchVal);
        var subStringMatch = libraryName.toLowerCase().indexOf(cleanSearchVal) !== -1;
        var favorite = _.contains(favorites, libraryName);
        if(libraryName === 'jquery') {
          console.log(levDistVal);
        }
        if (subStringMatch || levDistVal < 2) {

        if(libraryName === 'jquery') {
          console.log('made it');
        }
          libraryRanking.push({
            name: libraryName,
            levDist: levDistVal,
            favorite: favorite
          });
        }
      }

      libraryRanking = _.sortBy(libraryRanking, function(libraryMetaData) {
        // Push favorites to the top
        var modifier = libraryMetaData.favorite ? -1000 : 0;
        return modifier + libraryMetaData.levDist;
      });

     // $(matchedRowSelector).empty();
      //$rowCache.hide();
      $(rowSelector).hide();
      // reverse loop prepend to top
      for (var j = libraryRanking.length; j > 0; j--) {
        var libraryMetaData = libraryRanking[j-1];
        var element = _.findWhere($(rowSelector), {
          id: libraryMetaData.name
        });
        $(element).addClass('search-result');
        $(element).prependTo('#example > tbody');
      }
      $(matchedRowSelector).show();

    } else {
      //$(matchedRowSelector).empty();
      //$rowCache.show();
      $(rowSelector).show();
      putClassOnFavorites(favorites);

    }
  }

  function searchHandler(ev) {
    var val = $(ev.currentTarget).val();
    filterLibraries(val);
  }

  $('#search-box').on('keyup', _.debounce(searchHandler, 300));

  // Put favorite libraries at the top of the list
  //putClassOnFavorites(getFavorites());
  $('#search-box').focus();

})(jQuery);
