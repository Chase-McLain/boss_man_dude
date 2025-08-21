let heroes = [{
  Name: 'Paul The Barbarian',
  Health: 100,
  Level: 1
},
{
  Name: "Wizard",
  Health: 100,
  Level: 1
},
{
  Name: "Jimmy The Cleric",
  Health: 100,
  Level: 1
}
]

let boss = [
  {
    Name: "Bill",
    Health: 100,
    Level: 1
  }
]

let wizHealthCounterElm = document.getElementById('wizard-health')
let paulHealthCounterElm = document.getElementById('paul-health')
let jimmyHealthCounterElm = document.getElementById('jimmy-health')

function currentHealth() {

}

function attackBoss() {
  let totalAttack = 0
  heroes.forEach((hero) => {
    totalAttack += hero.Level * 2
  }


  )
  console.log(totalAttack)

}



let gold = 0
