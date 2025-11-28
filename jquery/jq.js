// alustetaan muuttuja
$(document).ready(function(){
    // funktio lisää napille
    $("#addBtn").click(function(){
        let task = $("#myInput").val().trim();
        //validointi
        if(task === ""){
            alert("You must write something!");
            return;
        }

        if(task.length > 20){
            alert("The task must be less than 20 characters!");
            return;
        }

        // tallennetaan localStorage
        localStorage.setItem("myInput", task);

        // luodaan li piilotettuna, sitten animoidaan hitaasti näkyviin näkyviin
        let newTask = $(`<li style='display:none;'>
                            <span>${task}</span>
                            <button class="delete-btn">Delete</button>
                         </li>`);

        $("#lista").append(newTask);
        newTask.fadeIn("slow");   

        $("#myInput").val("");

        $("#lista").append(newTask);
        newTask.slideDown("slow");   

        $("#myInput").val("");
    });

    // tehtävän merkitseminen tehdyksi
    $(document).on("click", "li", function(e){
        if(!$(e.target).hasClass("delete-btn")){
            $(this).toggleClass("checked");
        }
    });

    // poisto animaatiolla hitaasti
    $(document).on("click", ".delete-btn", function(){
        let li = $(this).closest("li");

        if(confirm("Haluatko poistaa tämän rivin?")){
            li.fadeOut("slow", function(){  
                li.remove();
            });
        }
    });

});
//