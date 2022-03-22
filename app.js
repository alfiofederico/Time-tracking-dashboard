const button =  document.querySelectorAll('.button');
const text = document.querySelectorAll('.cardText');


  async function fetchData(){
     this.classList.add("white");
      const response = await fetch('./data.json');
      const Data = await response.json();
      text.forEach((text,i)=>{
        const{title,timeframes}= Data[i];
         if(this.textContent==="Daily"){
            const{current,previous}=timeframes.daily;
            text.innerHTML=`
             <h1>${current} hrs</h1>
             <p>Last Week -${previous} hrs</p>
            `
         }else if(this.textContent==="Weekly"){
            const{current,previous}=timeframes.weekly;
            text.innerHTML=`
             <h1>${current} hrs</h1>
             <p>Last Week -${previous} hrs</p>
            `
         }else{
            const{current,previous}=timeframes.monthly;
            text.innerHTML=`
             <h1>${current} hrs</h1>
             <p>Last Week -${previous} hrs</p>
            `
         }
      })
  }
  function mouseOver(){
     this.style.color = "white";
  } 
  function mouseOut(){
     this.style.color = "hsl(235, 45%, 61%)";
  }



button.forEach(button=>button.addEventListener('click',fetchData));
button.forEach(button=>button.addEventListener('mouseover',mouseOver));
button.forEach(button=>button.addEventListener('mouseout',mouseOut));
