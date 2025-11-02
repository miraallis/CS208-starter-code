document.getElementById("submitBtn").addEventListener("click", lineUp);
//This function should take the selections made by the user and display them 
// to both the console and the webpage
function lineUp(event) {
    //Final or Draft?
    let status = document.querySelector('input[name="status"]:checked').value;
    //Which day?
    let gameDate = document.getElementById("gameDate").value;
    //Which players?
    let checkedPlayers = document.querySelectorAll('input[name="players"]:checked');
    //turn the values in checkedPlayers into an array
    let players = [];
    checkedPlayers.forEach(player => players.push(player.value));
    // Console Output
    console.log("Status:", status);
    console.log("Game Date:", gameDate);
    console.log("Players:", players);
    let output = `Status: ${status} | Date: ${gameDate} | Players: ${players.join(", ")}`;
    document.getElementById("output").innerText = output;
}