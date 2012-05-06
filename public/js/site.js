$(function() {
  window.p5 = null;
  canvas = $("canvas")[0]

  $("#run").click(function() {
    $.ajax({
      url: '/',
      type: 'POST',
      data: { code: $("#left textarea").val() },
      success: function(data) {
        if (window.p5) window.p5.exit()
        eval(data)
        window.p5 = new Processing(canvas, this.sketch)
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
          window.p5 = new Processing(canvas, this.sketch)
        }
      }
    })
  })

  $("#stop").click(function() {
    if (window.p5) window.p5.noLoop()
  })

  $("#capture").click(function() {
    window.open(canvas.toDataURL("image/png"), '_blank')
  })
})
