// Create the playable character
const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300)


// have the NPC start walking east immediately
//npc.walk('east', 1500, 
//    ()=> npc.walk('north', 1500, 
//        ()=> npc.walk('west', 1500, undefined))) 
//npc.walkEast(2000).then(()=>console.log("DONE"))  
npc.walkNow('north', 1400)
   .then(()=> npc.walkNow('east', 1200))
   .then(()=> npc.walkNow('south', 300))
   .then(()=> npc.walkNow('east', 1500))
   .then(()=> npc.walkNow('south', 1500))
   .then(()=> npc.walkNow('west', 2700))
   .then(()=> npc.walkNow('north', 400))
  


// Create the inventory
const inventory = newInventory()
move(inventory).to(0, 0)

// Create everything else
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)