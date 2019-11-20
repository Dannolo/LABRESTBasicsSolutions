module.exports = function(name){
    this.name = name,
    this.level = 1,
    this.health_points = 20,
    this.experience = 0,
    this.power = 9,
    this.equipment = {
        sword: {
            power: 9,
        },
        potion: {
            power: 10,
        } 
    },
    this.max_stats = {
        max_exp: 10,
        max_hp: 20
    }
}

