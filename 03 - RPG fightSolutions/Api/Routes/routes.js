module.exports = function(app) {
  const player = require('../Models/Player')
  const enemy = require('../Models/Enemy')
  const stats = require('../Models/Actions/ShowStats')
  const EnemyStats = require('../Models/Actions/ShowEnemy')
  const attack = require('../Models/Actions/Fight')
  const heal = require('../Models/Actions/UsePotion')
  const getReward = require('../Models/Actions/Reward')

  let hero = null
  let golem = null

  let fight = false

  app.route('/player')
    .get(function(req, res){
      try {
      console.log(stats(hero))
      res.json(hero)
      } catch (error) {
        console.log('\nYou need to create the hero before readying it!')
        res.json('Wrong use, you need to do a POST call to /player before.')
      }
      
      })
    .post(function(req, res){
      hero = new player(req.body.name)
      console.log('\x1b[0;31m\nCongratulation\x1b[0m ' + hero.name + '. \nYour adventure is about to start!')
      res.json(hero)
    });

  app.route('/encounter')
    .post(function(req, res){
      try {
        golem = new enemy()
        fight = true
        console.log('\nAttention ' + hero.name + ', a ' + golem.name + ' has appeared!\n\x1b[0;31mFIGHT STARTED!\x1b[0m')
        res.json(golem)
      } catch (error) {
        console.log('\nThere is no enemy to fight!')
        res.json('Wrong use, you need to do a POST call to /player before.')
      }
        
    });

  app.route('/encounter/:idenemy')
    .get(function(req,res){
      try {
        if(golem.id = req.params.idenemy){
          console.log(EnemyStats(golem))
          res.json(golem)
        }
      } catch (error) {
        console.log('\nThere is no enemy to fight!')
        res.json(error)
      }
    })
    .put(function(req, res){
      switch(req.body.action){
        default:
            try {
              fight = attack(hero, golem, fight)
              if(fight === false){
                getReward(hero, golem)
                res.json(golem.reward)
                golem = null
                console.log('\nWhat do you wanna do next?')
                break
              }
              else{
                fight = attack(golem, hero, fight)
                if(fight === false){
                  hero = null
                  res.json("GAME OVER")
                  console.log('\nYOU DIED. GAME OVER.')
                  break
                }
              }
            res.json(golem)
            console.log('\nWhat do you wanna do next?')
            } catch (error) {
              console.log('\nThere is no enemy to fight!')
              res.json(error)
            }
            break;
        case "potion": {
              heal(hero)
              attack(golem, hero,fight)
              console.log('\nWhat do you wanna do next?')
              res.json(hero)
              }
              break;
        }
    })
    .delete(function(req, res){
      try {
        if(golem != null){
          golem = null
          res.json("You run away from the fight!")
          console.log("\nYou run away from the fight!")
        }
      } catch (error) {
        console.log('\nThere is no enemy to run away')
        res.json('Wrong use, you need to do a POST call to /encounter before.')
      }
      console.log('\nWhat do you wanna do next?')
    })
};
