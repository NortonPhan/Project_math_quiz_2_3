function play(){
    console.log("play");

    player1_name = document.getElementById("player_1_user").value;
    player2_name = document.getElementById("player_2_user").value;

    

    localStorage.setItem("player1", player1_name);
    localStorage.setItem("player2", player2_name);

    window.location = "game.html";
}