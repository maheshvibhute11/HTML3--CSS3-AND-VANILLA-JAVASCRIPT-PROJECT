let maha = document.querySelector('#play1')
let visnu =document.getElementById('play2');
let brama = document.getElementById('play3');
let back = document.querySelector('body')
back.style.background = "#de90bf"
const aud1 = document.createElement('Audio')
const aud2 = document.createElement('Audio')
const aud3 = document.createElement('Audio')
const a= aud1.innerHTML = `

<source src="Audio/shiv.mp3" type="audio/mp3">
`
const b= aud2.innerHTML = `

<source src="Audio/Vishnu Mantra.mp3" type="audio/mp3">
`
const c= aud3.innerHTML = `

<source src="Audio/Bha.mp3" type="audio/mp3">
`

maha.addEventListener('click',()=>{
    back.style.backgroundColor ="#7b1682"

 //   const aud = document.createElement('Audio');

    //aud.controls = true;
    
    


   // aud.innerHTML = `
    
    //<source src="Audio/shiv.mp3" type="audio/mp3">
    //`
    maha.onclick = aud1.play();
    maha.onclick = aud2.pause();
    maha.onclick = aud3.pause();
    
    


    
    

    
    

  //.setAttribute("src" ,"Audio/shiv.mp4");
    //console.log(aud)
    

} )
//visnu.addEventListener("click",()=>{

    

    

//})
visnu.addEventListener('click',()=>{
  back.style.backgroundColor = "pink"
    
    visnu.onclick = aud2.play();
    visnu.onclick = aud1.pause();
    visnu.onclick = aud3.pause();
    
    

})
brama.addEventListener('click',()=>{
    back.style.backgroundColor = "#8aedbd"
    const aud= document.createElement("Audio")
   // aud.innerHTML = `
    //<source src="Audio/shiv.mp3" type="audio/mp3">
    
    //`
    brama.onclick = aud3.play()
    brama.onclick  = aud2.pause();
    brama.onclick = aud1.pause();
    
    
})
