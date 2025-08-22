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

let boss =
{
  Name: "Bill",
  Health: 100,
  Level: 1
}


let wizHealthCounterElm = document.getElementById('wizard-health')
let paulHealthCounterElm = document.getElementById('paul-health')
let jimmyHealthCounterElm = document.getElementById('jimmy-health')

function currentHealth() {
  heroes.forEach((hero) => heroes.Health == hero.Health)


}

// ----------BOSS SECTION----------------


let bossHealthElm = document.getElementById('boss-health')



function displayBossHealth() {
  bossHealthElm.innerHTML = `<p> Health: ${boss.Health}</p>`

}

displayBossHealth()

let multiplier = 1

function bossHealth() {
  boss.Health -= totalAttack
  // console.log(boss.Health)



  if (boss.Health <= 0) {

    multiplier *= 1.1
    boss.Level += 1

    boss.Health = 100
    boss.Health = boss.Health * multiplier


  }
  console.log(multiplier)
}

let totalAttack = 0

function attackBoss() {
  heroes.forEach((hero) => {
    totalAttack = 0
    totalAttack += hero.Level * 3
  }
  )
  bossHealth()
  displayBossHealth()
  return totalAttack
}



// -------------heroes-------------


function displayPaulHealth() {
  paulHealthCounterElm.innerHTML = `<p> Health: ${heroes[0].Health}</p>`

}

function displayWizardHealth() {
  bossHealthElm.innerHTML = `<p> Health: ${boss.Health}</p>`

}

function displayJimmyHealth() {
  Elm.innerHTML = `<p> Health: ${boss.Health}</p>`


}










setInterval(damageHeros, 1000 * 5)

function damageHeros() {

  heroes.forEach((hero) => {
    hero.Health -= boss.Level * 4
    console.log(hero.Health)
  })
}




let gold = 0



