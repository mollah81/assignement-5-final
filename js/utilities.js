function getInputFieldValueById(id){
    const inputValue=document.getElementById(id).value;
    const inputNumber=parseFloat(inputValue);
   
    return inputNumber;
}
function getTextfieldValueById(id){
    const textValue=document.getElementById(id).innerText;
    const textNumber= parseFloat(textValue);
    return textNumber;
     
}
function showSectionById(id){
    document.getElementById('add-donate-form').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    
    document.getElementById(id).classList.remove('hidden');
}