$(document).ready(function(){

    $("#change").mousedown(function(){
        $("#title").text("Welcome Student")
    })

    $("#change").mouseup(function(){
        $("#title").text("Student Profile")
    })

    $("#change").dblclick(function(){
        $("#title").text("HAHAHA BISAYA")
    })

    $("#hide").click(function(){
        $("#profile").hide("slow")
    })

    $("#show").click(function(){
        $("#profile").show("2000")
    })

    $("#select").change(function(){
        $("#course").text($(this).val())
    })

    $("th").css("background", "orange")

    $("#odd").click(function(){
       $("tr:odd").css("background","lightgreen") 
    })

    $("#even").click(function(){
        $("tr:even").css("background","lightblue")
    })

    $("#hide1").click(function(){
        $("table").hide("slow")
    })



})