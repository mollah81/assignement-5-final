
document.getElementById('btn-quota')
.addEventListener('click',function(event){
    event.preventDefault();
    const donateQuota=getInputFieldValueById('input-quota');
    const totalNeeded=getTextfieldValueById('total-needed'); 
    if(!isNaN(donateQuota) && donateQuota>0 && donateQuota<=totalNeeded){
        const currentDonation=getTextfieldValueById('total-quota');
        const updatedDonation=currentDonation+donateQuota;
        const updatedNeeded=totalNeeded-donateQuota
        document.getElementById('total-quota').innerText=updatedDonation;
        document.getElementById('total-needed').innerText=updatedNeeded;
        // clear input field
        document.getElementById('input-quota').value='';
        //show success messsage
        alert(`Thank you! your donation of ${donateQuota} for quota BDT was successful.`);
        //add to donation history
        const p =document.createElement('p');
        p.innerText= ` ${donateQuota} Taka is Donated for donate for Quota,Bangladesh 
        Dated  on ${new Date().toLocaleString()}`;
        console.log('p');
        p.style.border='1px solid black'
        p.style.borderRadius='5px';
        p.style.marginBottom='10px';
        p.style.borderRadius='5px';
        document.getElementById('history-container').appendChild(p);
  
    }
    else{
      alert  ("please enter a valid donation amount.");
        return;
    }
});

