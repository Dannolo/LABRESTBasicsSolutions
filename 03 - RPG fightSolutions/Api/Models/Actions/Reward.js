module.exports = function(player, enemy){
    player.experience += enemy.reward.experience
    console.log('\x1b[0;32m\nCongratulation, you killed ' + enemy.name + '!\x1b[0m')
    console.log('\x1b[0;31m\nReward: \nExperience:\x1b[0m' + enemy.reward.experience )
    if(player.experience >= player.max_stats.max_exp){
        player.level += 1
        player.power += 2
        player.max_stats.max_hp += 6
        player.health_points = player.max_stats.max_hp
        player.experience = player.experience - player.max_stats.max_exp
        player.max_stats.max_exp += 10
        console.log('\x1b[4;29m\nCongratulation, you leveled up!\x1b[0m')
    }
}
