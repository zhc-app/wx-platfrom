(function(window){
    var zhc = {}
    var zhc1 = {}
    var zhc2 = {}
    zhc.url = "http://www.yxke12.com/index.php/Apa/"
    zhc.post = function(url,dataJson,fun,toast){
        console.log(JSON.stringify(dataJson))
            if (toast) {
                var toast = new auiToast();
                toast.loading({
                    title:"加载中",
                    duration:2000
                },function(ret){
                    
                });
            }

         $.ajax({
            type: "POST",
            url: zhc.url+url,
            data: dataJson,
            // contentType: "application/json; charset=utf-8",
            dataType: "json",
            // processData: false, 
            success: function (data) {
                // console.log(data)
                toast.hide();
                if (data) {
                    
                        if (fun!=null) {
                            fun(data)
                       
                    }
                                     
                }else{
                     toast.fail({
                        title:data.message,
                        duration:2000
                    });
                }
                // Play with returned data in JSON format
            },
            error: function (msg) {
                toast.hide();
                console.log(JSON.stringify(msg))
            }
        });
    }
    window.z=zhc

    zhc1.url = "http://www.yxke12.com/index.php/App/"
    zhc1.post = function(url,dataJson,fun,toast){
        console.log(JSON.stringify(dataJson))
            if (toast) {
                var toast = new auiToast();
                toast.loading({
                    title:"加载中",
                    duration:2000
                },function(ret){
                    
                });
            }

         $.ajax({
            type: "POST",
            url: zhc1.url+url,
            data: dataJson,
            // contentType: "application/json; charset=utf-8",
            dataType: "json",
            // processData: false, 
            success: function (data) {
                // console.log(data)
                toast.hide();
                if (data) {
                    
                        if (fun!=null) {
                            fun(data)
                       
                    }
                                     
                }else{
                     toast.fail({
                        title:data.message,
                        duration:2000
                    });
                }
                // Play with returned data in JSON format
            },
            error: function (msg) {
                // alert(msg);
            }
        });
    }
    window.zz=zhc1



    zhc2.url = "http://www.yxke12.com/index.php/Ate/"
    zhc2.post = function(url,dataJson,fun,toast){
        console.log(JSON.stringify(dataJson))
            if (toast) {
                var toast = new auiToast();
                toast.loading({
                    title:"加载中",
                    duration:2000
                },function(ret){
                    
                });
            }

         $.ajax({
            type: "POST",
            url: zhc2.url+url,
            data: dataJson,
            // contentType: "application/json; charset=utf-8",
            dataType: "json",
            // processData: false, 
            success: function (data) {
                // console.log(data)
                toast.hide();
                if (data) {
                    
                        if (fun!=null) {
                            fun(data)
                       
                    }
                                     
                }else{
                     toast.fail({
                        title:data.message,
                        duration:2000
                    });
                }
                // Play with returned data in JSON format
            },
            error: function (msg) {
                alert(msg);
            }
        });
    }
    window.zn=zhc2
}(window))





       function getUrlVars() {
            var vars = [],
                hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars[hash[0]] = hash[1];
            }
            return vars;
        }
        // var aa = getUrlVars()["b"];