// console.log("question No. 2");
// var person: string = "Eric";
// console.log(`Hello ${person}! would you like to learn some Python today?\n`);

// console.log("Question No. 3");
// let personTwo: string = "Erica";

// console.log("Upper Case:", personTwo.toUpperCase());
// console.log("Lower Case:", personTwo.toLowerCase());
// console.log("Title Case:", personTwo.replace(/\w\S*/g,(txt)=> txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase()));

// console.log("\nQuestion No. 4");
// let scientist:string = "Albert Einstein";
// let quote: string = "A person who never made a mistake never tried anything new.";
// console.log(`${scientist} once said, ${quote}\n`);

// console.log("\nQuestion No. 5");
// let famous_person:string = "Allama Iqbal";
// let message: string = "Develop the self so that before every decree God will ascertain from you: “What is your wish?";
// console.log(`${famous_person} once said, ${message}\n`);

// console.log("\nQuestion No. 6");
// let nameWithWhiteSpaces: string = "\t Angelina Jolie \n";
// console.log(`Name with White Spaces: ${nameWithWhiteSpaces}`);

// let strippedName: string = nameWithWhiteSpaces.trim();

// console.log(`Stripped Name: ${strippedName}`);

// console.log("\nQuestion No. 7");
// let addition: number = 4+4;
// console.log(`Addition: ${addition}`);
// let substraction: number = 12-4;
// console.log(`Substraction: ${substraction}`);
// let multiplication: number = 2*4;
// console.log(`Multiplication: ${multiplication}`);
// let division: number = 16/2;
// console.log(`division: ${division}`);

// console.log("\nQuestion No. 8");
// console.log(5+3);
// console.log(3+5);
// console.log(4+4);
// console.log(6+2);

// console.log("\nQuestion No. 9");
// let favNumber = 1;
// console.log(`This is my Favorite Number: ${favNumber}`);

// console.log("\nQuestion No. 11");

// let names: string[] = ["Farooq", "Talha", "Haider", "Sufyan"];
// for(let i = 0; i<names.length; i++){
//     console.log(`My Friend ${i+1} name is: ${names[i]}`);
// }

// console.log("\nQuestion No. 12");
// for(let index = 0; index<names.length; index++){
//     console.log(`Hello ${names[index]} you are invited for dinner today!`);
// }

// console.log("\nQuestion No. 13");
// let transpot: string[] = ["motorcyle","car", "scooter", "bicyle"];

// transpot.forEach((value)=>{
//     console.log(`I would like to own a ${value}`);
// });

console.log("\nQuestion No. 14");
let invitationList: string[] = ["Christiano Ronaldo", "Karim Benzema", "Sergio Ramos"];

invitationList.forEach((value)=>{
    console.log("You are invited to dinner in FSD",value);
});

console.log("\nQuestion No. 15, 16, 17");
let guestCantMake: string = invitationList[2];
invitationList.splice(2, 1, "Mbappe");
invitationList.forEach((value)=>{
    console.log(`You are invited to dinner tonight! ${value} but unfortunately ${guestCantMake} can't join us.`);
});

//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
invitationList.push("Hakimi", "Salah", "Ozil");
console.log(invitationList);
invitationList.forEach((value)=>{
    console.log(`We are delighted to inform you that we have found bigger dinner table ${value}`);
});

//• Add one new guest to the beginning of your array.
invitationList.splice(0, 0, "Halland");
console.log(invitationList);

invitationList.splice(3,0,"Marcello");
invitationList.push("Pepe")
console.log(invitationList);

invitationList.forEach((value)=>{
    console.log(`Please join us at dinner tonight ${value}`);

})

//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
invitationList.forEach((value)=>{
    console.log(`We are apologize! New dinner table did not arrive on time and we have space for only 2 people ${value}`);
});

//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.


