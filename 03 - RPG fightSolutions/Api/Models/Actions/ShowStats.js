module.exports = function(player){
    let stats = '\nName: ' + player.name + '\nlevel: ' + player.level + '\nHP: ' + player.health_points + '/' + player.max_stats.max_hp + ' \nExperience: ' + player.experience + '/' + player.max_stats.max_exp
        return stats
}

