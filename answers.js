////////////////////////////////
// Easy Going
////////////////////////////////
// for (let i=1; i<= 20; i++) {
//     console.log(i);
// }

////////////////////////////////
// Get Even
////////////////////////////////
// for (let i=0; i<=200; i++){
//     if (i % 2 === 0)
//     console.log(i)
// }

////////////////////////////////
// Fizz Buzz
////////////////////////////////
// 1. Write a javascript application that logs all numbers from 1 - 100.
    // for (let i=1; i<=100; i++){
    //     console.log(i)
    // }

// 2.If a number is divisible by 3 log "Fizz" instead of the number.
//     for (let i=0; i<=30; i++){    
//     if (i % 3 === 0){
//         console.log ("fizz") 
//         }else {
//             console.log(i)
//     }
// }
    
// 3. If a number is divisible by 5 log "Buzz" instead of the number.
// for (let i=0; i<=45; i ++) {
//     if (i % 5 === 0){
//         console.log ("Buzz")
//     } else {
//         console.log(i)
//     }
// }

// 4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

// for (let i=0; i <= 45; i ++) {
//     if (i % 3 === 0){
//         console.log("fizzbuzz")
//     } else if (i % 5 === 0) {
//         console.log ("fizzbuzz")
//     } 
//     else {
//         console.log (i)
//     }
// }


////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// 1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] = 5001;
console.log(plantee)

// 2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy [3] = "Gotham City";
console.log(wolfy);

// 3. Give D'Art a second hometown by adding "Hawkins"
dart.push ("Hawkins")
console.log(dart);

// 4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy.splice(0, 1, 'Gameboy')
console.log(wolfy)


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']

// 2. Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.
    for (let ninjaTurtle of ninjaTurtles) {

        console.log(ninjaTurtle.toUpperCase());
    }

////////////////////////////////
// Methods, Revisited
////////////////////////////////
// const favMovies = [
//     'Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

//     console.log(favMovies[0])

// 1. use the .sort method Thought question: what did this do to the array? Did it permanently alter it?


// 2. Use the method pop


// 3. push "Guardians of the Galaxy"


// 4. Reverse the array


// 5. Use the shift method


// 6. unshift - what does it return?


// 7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?


// 8. slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?


// 9. store the value of your slice in a variable, console.log it - Thought question: what is going on here?


// 10. console.log your final results


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////


