const fs = require('fs');
let treesAraoundTheEdge = 0;
let interiorVisibleTrees = 0;
let visibleTrees = 0;

let allTrees = []

 fs.readFileSync("treesData.txt", {
  encoding: "utf8",
  flag: "r"
 }).split('\n').map(line => allTrees.push(line.split('')));

allTrees = allTrees.map(dataLine => {
    return dataLine.map(allTrees => parseInt(allTrees))
})


treesAraoundTheEdge = (allTrees.length) * 2 + (allTrees[0].length) * 2 - 4;

for (let i = 1; i < allTrees.length - 1; i++) {

    for (let j = 1; j < allTrees[i].length - 1; j++) {
        let leftCounter = 0;
        let rightCounter = j + 1;
        let frontCounter = i + 1;
        let rearCounter = 0;
        let treeVisibleOnLeft = true;
        let treeVisibleOnRight = true;
        let treeVisibleInFront = true;
        let treeVisibleAtBack = true;
        

        while (leftCounter < j) {

          if (allTrees[i][leftCounter] >= allTrees[i][j]) {      

                treeVisibleOnLeft = false;    
            }
            leftCounter++;
        }


      while (rightCounter < allTrees[i].length) {

        if (allTrees[i][rightCounter] >= allTrees[i][j]) {

              treeVisibleOnRight = false;
            }
            rightCounter++;
        }

      while (frontCounter < allTrees.length) {
            
        if (allTrees[frontCounter][j] >= allTrees[i][j]) {

          treeVisibleInFront = false;
          }
          frontCounter++;
        }


      while (rearCounter < i) {

        if (allTrees[rearCounter][j] >= allTrees[i][j]) {

            treeVisibleAtBack = false;
          }
          rearCounter++;
        }

        if (treeVisibleOnLeft || treeVisibleOnRight || treeVisibleInFront || treeVisibleAtBack) {
            interiorVisibleTrees++;
        }

    } 
    
}

visibleTrees = treesAraoundTheEdge + interiorVisibleTrees;
console.log(treesAraoundTheEdge);
console.log(visibleTrees);




