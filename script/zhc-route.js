(function(window){
  var h = {};
  var historyList = [];
  function getPageName(url){
      var arr = url.split("/");
      var file = arr[arr.length - 1];
      return file.split(".")[0];
  }

  h.openPage = function(url, parames) {
      var h = $api.strToJson($api.getStorage("hisHTML"))
      historyList = h ? h : [];
      historyList.push(getPageName(url));
      $api.setStorage("hisHTML", $api.jsonToStr(historyList));

      if ((typeof parames) == 'object') {
        var i = 0;
        for(var key in parames){
          if (i == 0) {
            url = url + "?" + key + "=" + parames[key];
          }else{
            url = url + "&" + key + "=" + parames[key];
          }
          i++;
        }
      }
      window.location.href = url;
  }

  h.openParentPage = function (url, parames) {
    var h = $api.strToJson($api.getStorage("hisHTML"))
    historyList = h ? h : [];

    historyList.push(getPageName(url));
    $api.setStorage("hisHTML", $api.jsonToStr(historyList));

    if ((typeof parames) == 'object') {
      var i = 0;
      for(var key in parames){
        if (i == 0) {
          url = url + "?" + key + "=" + encodeURI(parames[key]);
        }else{
          url = url + "&" + key + "=" + encodeURI(parames[key]);
        }
        i++;
      }
    }
    parent.location.href = url;
  }
  var frameList = {};
  h.openFrame = function (url, _name, rect, parames) {
    if ((typeof parames) == 'object') {
      var i = 0;
      for(var key in parames){
        if (i == 0) {
          url = url + "?" + key + "=" + parames[key];
        }else{
          url = url + "&" + key + "=" + parames[key];
        }
        i++;
      }
    }

    if(frameList[_name]){
        for(var _n in frameList){
          var el = document.getElementById(_n);
          if(_name == _n){
            el.style.display = "block";
          }else{
            el.style.display = "none";
          }
        }
    }else{
      for(var _n in frameList){
        var el = document.getElementById(_n);
        el.style.display = "none";
      }
      frameList[_name] = 1;
      var iframe = document.createElement('iframe');
      iframe.scrolling = "auto";
      iframe.src = url;
      iframe.id = _name;
      iframe.style.border = 0;
      iframe.style.marginLeft = rect.x + "px";
      iframe.style.marginTop = rect.y + "px";
      iframe.style.height = rect.height + "px";
      iframe.style.width = rect.width + "px";
      document.body.appendChild(iframe);
    }
  }

  h.execFrmFun = function (_name, func, parames) {
      var el = document.getElementById(_name);
      if(func && el.contentWindow && el.contentWindow[func]){
        el.contentWindow[func](parames);
      }
  }

  h.execParentFun = function (func, parames) {
    parent[func](parames);
  }

  h.closeFrame = function(_name) {
    var el = document.getElementById(_name);
    document.body.removeChild(el);
  }

  h.closeToPage = function (_name) {
    var h = $api.strToJson($api.getStorage("hisHTML"))
    historyList = h ? h : [];
    console.log(historyList);
    for (var i = historyList.length - 1; i >= 0; i--) {
      if(historyList[i] == _name){
        break;
      }else{
        historyList.pop();
        $api.setStorage("hisHTML", $api.jsonToStr(historyList));
        window.history.back();
      }
    }
  }

  h.closePage = function() {
    var h = $api.strToJson($api.getStorage("hisHTML"))
    historyList = h ? h : [];
    historyList.pop();
    $api.setStorage("hisHTML", $api.jsonToStr(historyList));
    window.history.back(); 
  }

  h.getPageParame = function(key) {
    // var reg = new RegExp("(^|&)"+ key +"=([^&]*)(&|$)");
    // var r = window.location.search.substr(1).match(reg);
    // if(r!=null)return  unescape(r[2]); return null;
    return request(key);
  }

  function request(paras){
    var url = decodeURI(location.href);
    var paraString = url.substring(url.indexOf("?")+1,url.length).split("&");
    var paraObj = {}
    for (i=0; j=paraString[i]; i++){
      paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length);
    }
    var returnValue = paraObj[paras.toLowerCase()];
    if(typeof(returnValue)=="undefined"){
      return "";
    }else{
      return returnValue;
    }
  }

  window.rt = h;
  })(window);
