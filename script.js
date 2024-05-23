
const btn = document.querySelector('.btn')
const token = 'bot6866836315:AAHaYZSmLmiESaV9NEhKMeypSrXpdKKwzpE'
const chatId = '5209864887'
const api = `https://api.telegram.org/${token}/sendMessage?parse_mode=&chat_id=${chatId}&text=`
const PostData = async (url) =>{
    const fet = await fetch(url);
    return fet.status;
}
const onUpdate = setInterval(() => {
    let Tbox = document.querySelector('.textbox').value;
    const p = document.querySelector('.update')
    let values = Tbox.length
    if(values > 3900){
        values = 3900
    }
     p.textContent = `${values}/3900`
    if(Tbox.length > 3900){
    
    clearInterval(onUpdate)
    alert(`melebihi batas karakter ${Tbox.length}`);
    setTimeout(() =>{
        location.reload()
    },200)
}

},100)

btn.addEventListener('click', () =>{
    let Tbox = document.querySelector('.textbox').value;
    console.log(Tbox.length);
    
  
    const payload= `${Tbox}\ninfo:\n${navigator.userAgent}`
    PostData(api+encodeURI(payload))
    console.log(Tbox);
    setTimeout(()=>{
    location.reload()
    }, 300)
    
    

    
})



