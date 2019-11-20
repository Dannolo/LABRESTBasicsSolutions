module.exports = function(attacker, defender, fight){
    if(fight == true){
        if(attacker.equipment != null){
            let power = attacker.equipment.sword.power
        }
        else{
            let power = attacker.power
        }
        let power = attacker.power
        defender.health_points = defender.health_points - power
        if(defender.health_points <= 0){
            console.log(defender.name + ' got hit with ' + power + ' power.\n\n'+ defender.name + ' \x1b[0;31mis dead\x1b[0m')
            fight = false
        }
        else{
            console.log(defender.name + ' got hit with ' + power + ' power.\n\n'+ defender.name + ' life: ' + defender.health_points)
        }
    }
    else{
    console.log('There is no enemy to fight.')
    }

    return fight
}






    