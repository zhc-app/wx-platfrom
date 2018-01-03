(function(window){
  var h = {};
  h.pushHistory = function() {
      var state = {
          title: "title",
          url: "#"
      };
      window.history.pushState(state, "title", "#");
  }

  window.bk = h;
  })(window);
