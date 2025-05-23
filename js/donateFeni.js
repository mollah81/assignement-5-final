
document.getElementById('btn-feni')
.addEventListener('click',function(event){
    event.preventDefault();
    const donateFeni=getInputFieldValueById('input-feni');
    const totalNeeded=getTextfieldValueById('total-needed'); 
    if(!isNaN(donateFeni) && donateFeni>0 && donateFeni<=totalNeeded){
        const currentDonation=getTextfieldValueById('total-feni');
        const updatedDonation=currentDonation+donateFeni;
        const updatedNeeded=totalNeeded-donateFeni;
        document.getElementById('total-feni').innerText=updatedDonation;
        document.getElementById('total-needed').innerText=updatedNeeded;
        // clear input field
        document.getElementById('input-feni').value='';
        //show success messsage
        alert(`Thank you! your donation of ${donateFeni} BDT for feni was successful.`);
        //add to donation history
        const p =document.createElement('p');
        p.innerText= ` ${donateFeni} Taka is Donated for donate for Feni,Bangladesh 
        Dated  on ${new Date().toLocaleString()}`;
        p.style.border='1px solid black'
        p.style.borderRadius='5px';
        p.style.marginBottom='10px';
        p.style.borderRadius='5px';
        document.getElementById('history-container').appendChild(p);
  
    }
    else{
       alert("please enter a valid donation amount.");
       return;
    }
});
