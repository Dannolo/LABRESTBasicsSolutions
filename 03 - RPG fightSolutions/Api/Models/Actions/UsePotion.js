module.exports = function(player){
    if(player.equipment.potion != null){
        player.health_points += player.equipment.potion.power
        if(player.health_points > 20) player.health_points = 20
        console.log('\n\nYou healed for ' + player.equipment.potion.power)
        console.log('\n\nPlayer life: ' + player.health_points)
        }
        else{
            console.log('\n\nNo Potions!')
        }
}


