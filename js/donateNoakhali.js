document.getElementById('btn-donate')
.addEventListener('click',function(event){
    event.preventDefault();
    const donateNow=getInputFieldValueById('input-noakhali');
    const totalNeeded=getTextfieldValueById('total-needed'); 
    if(!isNaN(donateNow) && donateNow>0 && donateNow<=totalNeeded){
        const currentDonation=getTextfieldValueById('total-noakhali');
        const updatedDonation=currentDonation+donateNow;
        const updatedNeeded=totalNeeded-donateNow
        document.getElementById('total-noakhali').innerText=updatedDonation;
        document.getElementById('total-needed').innerText=updatedNeeded;
        // clear input field
        document.getElementById('input-noakhali').value='';
        //show success messsage
        alert(`Thank you! your donation of ${donateNow} BDT for noakhali was successful.`);
        // add to donation history
        const p =document.createElement('p');
        p.innerText= ` ${donateNow} Taka is Donated for donate for Noakhali,Bangladesh 
        Dated  on ${new Date().toLocaleString()}`;
        p.style.border='1px solid black'
        p.style.borderRadius='5px';
        p.style.marginBottom='10px';
        p.style.borderRadius='5px';
        p.style.marginTop="0";
    
        document.getElementById('history-container').appendChild(p);
    }
    else{
       alert ("please enter a valid donation amount.");
       return;
    }
});

