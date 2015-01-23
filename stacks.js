var $currentTeam = $(".NFLteam:first-child");
function stackThis() {
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
  setTimeout(stackThis, 200);
}
$("button").on("click", stackThis);