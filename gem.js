
function gemstones(arr) {
    // Write your code here
    let rock1 = []
    for (let i =0;i<arr.length;i++){
      for(let j =0;j<arr.length;j++){
          if(i==0){
        rock1 = arr[i].split("");
        console.log(rock1)
      }
        
    }
    

}
gemstones([ 'abcdde', 'baccd', 'eeabg' ])