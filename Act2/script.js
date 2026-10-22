$(document).ready(function(){
    $("#title").text("Watzzup Ayasib!")

    $("h1").css("color","brown")

    //$("#btn2").click(function(){
       // $(this).css("background","green")
    //})

    $("[href]").css("color","red")

    $("ul li:first-child").css("color","pink")

    $("th").css("background","orange")

    $("tr:even").css("background","grey")

    $("tr:odd").css("background","lightgreen")

    $("#btn").click(function(){
        $("#message").text("You clicked the button")
    })
    $("#btn").dblclick(function(){
        $("#message").text("You duobled click the button")
    })

    $("#btn").mouseenter(function(){
        $("#message").text("Your mouse reached the button!")
    })

    $("#btn").mouseleave(function(){
        $("#message").text("Your mouse leave the button!")
    })

    $("#btn").mousedown(function(){
        $(this).css("background","cyan")
    })

    $("#btn").mouseup(function(){
        $(this).css("background","brown")
    })

    $("#name").focus(function(){
        $("message").text("You select the text box!")
        $(this).css("background","yellow")
    })
    
    $("#name").blur(function(){
        $("#message").text("You leave the text input")
        $(this).css("background","green")
    })

    $("#course").change(function(){
        $("message").text($(this).val())
    })

    $("#btn2").click(function(){
        $("#table").hide("slow")
    })

    $("#btn2").dblclick(function(){
        $("#table").show(2000)
    })

    
})