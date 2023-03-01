var familyMembers = ["Phil", "Lee", "Fay", "Meagan", "Rachel"]
var familyMembersAges = [60, 65, 42, 36, 29]
var booleans = [0 < 1, 0 === 0, 5 !== 10, 3 >= 4, 2 > 5]

console.log(familyMembers)
console.log(familyMembersAges)
console.log(booleans)

// The .shift() method removes the first item in the array
familyMembers.shift()
console.log(familyMembers)

// The .slice() method returns the items within the range of index positions specified, excluding the endpoint/last index position specified
console.log(familyMembersAges.slice(2, 6))

// The .push() method adds a specified item to the end of an array
booleans.push(5 !== 5)
console.log(booleans)