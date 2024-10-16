const input = document.getElementByClass('textboxdiv');
input.addEventListener('input',event=>{
  if(input.value===''){
    input.style.backgroundColor='skyblue';
  }else{
    input.style.backgroundColor='';
  }
  
});
