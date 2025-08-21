let heroes = [{
  Name: 'Paul The Barbarian',
  Health: 100,
  Level: 1
},
{
  Name: "Wizard",
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


function attackBoss() {
  let totalAttack = 0
  heroes.forEach((hero) => {
    totalAttack += hero.Level * 2
  }



  )

}
