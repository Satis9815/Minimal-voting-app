console.log("Welcome to the voting app system");
let candidateOneButton=document.getElementById('candidate1');
let candidateTwoButton=document.getElementById('candidate2');
console.log(candidateOneButton,candidateTwoButton);
// add event Listener to candidate 1 button 
let candidateOneCount=0;
let candidateTwoCount=0
candidateOneButton.addEventListener('click',()=>{
    console.log("Candidate one vote now button clicked");
    let countVote1=document.getElementById('countVote1');
    countVote1.innerHTML =`<p id="candiOneVote">${candidateOneCount+1}</p>`
    candidateOneCount++;
    let candiOneVote=document.getElementById('candiOneVote').innerText;
    let numCandiOneVote=Number.parseInt(candiOneVote);
    let candidateName1=document.getElementById('candidateName1').innerText;
    if(numCandiOneVote>15){
        alert(`${candidateName1} is a winner and the number of total vote is ${numCandiOneVote}`);
        window.location.reload();
    }
  

});

// add event Listener to candidate 2 button 
candidateTwoButton.addEventListener('click',()=>{
    console.log("Candidate Two vote now button clicked");
    let countVote2=document.getElementById('countVote2');
    countVote2.innerHTML =`<p id="candiTwoVote">${candidateTwoCount+1}</p>`
    candidateTwoCount++;
    let candiTwoVote=document.getElementById('candiTwoVote').innerText;
    let numCandiTwoVote=Number.parseInt(candiTwoVote);
    let candidateName2=document.getElementById('candidateName2').innerText;
    if(numCandiTwoVote>15){
        alert(`${candidateName2} is a winner and the number of total vote is ${numCandiTwoVote}`)
        window.location.reload();
    }

});
