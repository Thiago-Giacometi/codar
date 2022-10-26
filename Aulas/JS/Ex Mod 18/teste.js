function reduceLista (...nums) {
  return nums.reduce((acc,num) => {
    return acc + num
  })

}

console.log(reduceLista(10, 20,30))