$("#pop").hide();
var $currentTeam = $(".NFLteam:first-child");
function bubbleThis() {
  var teamNumbers = 16;
  var $nextTeam = $currentTeam.next();
  var currentRank = Number($currentTeam.attr("data-ranking"));
  var nextRank = Number($nextTeam.attr("data-ranking"));
  if(currentRank > nextRank){
    $currentTeam.detach().fadeOut("slow");
    $currentTeam.insertAfter($nextTeam).fadeIn("slow");
    // $currentTeam = $currentTeam.next();
  } else if (currentRank < nextRank) {
   $currentTeam = $currentTeam.next();
  }
  else if (currentRank >= teamNumbers){
   $currentTeam = $(".NFLteam:first-child");
   teamNumbers--;
  }
  setTimeout(bubbleThis, 200);
  $("#pop").show();
}
$("#bubblify").on("click", bubbleThis);

function popThis(){
  var $lastTeam = $(".teamList p:last-child");
    if($(".teamList p:only-child").length !== 1){
      $lastTeam.detach().fadeOut("slow");
    } else{
    $(".NFLteam").append("<h1>YOU MAD BRO?</h1>");
    }
  // setTimeout(popThis, 300);
}

$("#pop").on("click", popThis);
