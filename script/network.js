(function(window){
  var h = {};
  h.NEW_HOST = "http://api.yxke12.com/"
  var toast = new auiToast({});
  h.post = function(url, parames, suc, err_fun, isLoad) {
    // var xmlhttp;
    // if (window.XMLHttpRequest){
    //   // code for IE7+, Firefox, Chrome, Opera, Safari
    //   xmlhttp=new XMLHttpRequest();
    // } else {// code for IE6, IE5
    //   xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    // }
    // xmlhttp.onreadystatechange=function(){
    //   if (xmlhttp.readyState==4 && xmlhttp.status==200){
    //     suc(xmlhttp.responseText);
    //   }else{
    //     err_fun(xmlhttp.responseText);
    //   }
    // }
    // xmlhttp.open("POST",url,true);
    // xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    // xmlhttp.send();
    if (isLoad) {
      toast.loading({
        title:"加载中",
        duration:2000
    });
    }
    

    $.post(url, parames, function(result){
      if (isLoad) {
        toast.hide();
      }
      if (result.status == 100) {
        suc(result.data);

      }else{
        if (typeof result.data == "string") {
          toast.fail({
            title: result.data,
            duration:2000
          });
        }else if(result.data.error != null){
          toast.fail({
            title: result.data.error,
            duration:2000
          });
        }else if (result.data.err != null) {
          toast.fail({
            title: result.data.err,
            duration:2000
          });
        }
        if (err_fun != null) {
          err_fun(result);
        }  
      }
    });
  }

  h.newpost = function(url, parames, suc, err_fun, isLoad) {
    if (isLoad) {
      toast.loading({
        title:"加载中",
        duration:2000
    });
    }
    
    url = this.NEW_HOST + url;
    $.post(url, parames, function(result){
      if (isLoad) {
        toast.hide();
      }
      if (result.status == 200) {
        suc(result.data);

      }else{
        if (typeof result.data == "string") {
          toast.fail({
            title: result.data,
            duration:2000
          });
        }else if(result.message != null){
          toast.fail({
            title: result.message,
            duration:2000
          });
        }
        if (err_fun != null) {
          err_fun(result);
        }  
      }
    });
  }

  h.ajax = function(url, parames, suc, err_fun, isLoad) {
    var fd = new FormData();
    for(var key in parames){
      fd.append(key, parames[key]);
    }
    $.ajax({
      url: url,
      type: "POST",
      processData: false,
      contentType: false,
      data: fd,
      success: function(d) {
        suc(d.data);
      }
    });
  }

  h.download = function(url, path, suc) {
    api.showProgress({
        style: 'default',
        animationType: 'fade',
        title: '下载中...',
        text: '先喝杯茶...',
        modal: true
    });
    api.download({
        url: url,
        savePath: path,
        report: false,
        cache: true,
        allowResume: true
    }, function(ret, err) {
      api.hideProgress();
        if (ret){
          if (ret.state == 1) {
              if (suc != null) {
                  suc(ret);
              }
          } else if (ret.state == 2) {
              api.toast({
                  msg: '下载失败',
                  duration: 2000,
                  location: 'bottom'
              });

          }
        }else{
            api.toast({
                msg: err.msg,
                duration: 2000,
                location: 'bottom'
            });
        }

    });
  }

  window.zhc = h;
  })(window);

  (function(window) {
    var z = {};
    z.post =function (url,datas,fun,toast) {
      if (toast) {
        api.showProgress({
            style: 'default',
            animationType: 'fade',
            title: '努力加载中...',
            text: '先喝杯茶...',
            modal: true
        });
      }
      api.ajax({
          url: url,
          method: 'post',
          data: datas
      },function(ret, err){
        api.hideProgress();
          if (ret) {
              if (fun!=null) {
                fun(ret)
              }
          } else {
            api.toast({
                msg: "网络错误",
                duration: 2000,
                location: 'bottom'
            });
          }
      });

    }
    window.zn = z;
  }(window))
