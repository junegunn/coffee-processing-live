$(function() {
  window.p5 = null;

  $("#run").click(function() {
    $.ajax({
      url: '/',
      type: 'POST',
      data: { code: $("#left textarea").val() },
      success: function(data) {
        if (window.p5) window.p5.exit()
        eval(data)
        window.p5 = new Processing($("canvas")[0], this.sketch)
      }
    })
  })

  $("#apply").click(function() {
    $.ajax({
      url: '/',
      type: 'POST',
      data: { code: $("#left textarea").val() },
      success: function(data) {
        if (window.p5) {
          window.p5.noLoop()
          eval(data)
          this.sketch(window.p5)
          window.p5.loop()
        } else {
          window.p5 = new Processing($("canvas")[0], this.sketch)
        }
      }
    })
  })

  $("#stop").click(function() {
    if (window.p5) window.p5.noLoop()
  })
})
