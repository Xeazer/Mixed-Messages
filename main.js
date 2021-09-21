//Declaring 3 list for the messages generator to use
const part1 = ['Maybe you need to','Try your best to','Sometime, you just need to','To be happy you need to'];
const part2 = ['take', 'think about','eat','sleep with','get rid of'];
const part3 = ['an apple','a puppy','a marshmallow','a friend','familly'];


// Generate a random message based on the 3 parts
function generateMessage(){
    console.log(part1[Math.floor(Math.random() * part1.length)]+ ' ' + part2[Math.floor(Math.random() * part2.length)]+ ' ' + part3[Math.floor(Math.random() * part3.length)] );
};


//Calling the function
generateMessage();