

let clicked = false
let mint_progress = document.getElementById("progress_mint")
let amount_html = document.getElementById("percentage_minted")
let counter = 99
let mint_amount = 54
let mint_amount_before = 0


// while (true) {

let connect_wallet =document.getElementsByClassName("connect_hui")[0]
let block_of_elems = document.getElementById("wallet_connected")
let solana_connect = document.getElementById("solana_connect")

function interval_fr_to(from, to, time) {
    const interv = setInterval( () => {
    if ( from <= mint_amount && mint_amount < to) {
        // console.log(`mint am = ${mint_amount}, in if 50,450`)

            counter = 100 - 100*mint_amount/3223
            mint_progress.style.transform = `translateX(-${counter}%)`
            if (mint_amount_before != mint_amount){
                amount_html.innerHTML = `${(100-counter).toFixed(2)}% sold (${mint_amount.toFixed(0)}/3223)`
            }
            mint_amount_before = mint_amount
            mint_amount += Math.random()*5
            if (mint_amount >=3223) {
            amount_html.innerHTML = `100.00% sold (3223/3223)`
            clearInterval(interv)
        } 
            if (mint_amount >= to) {
                clearInterval(interv)
            }}
    }, time)
}

interval_fr_to(50, 123, 600)
interval_fr_to(123, 320, 400)
interval_fr_to(320, 360, 440)
interval_fr_to(360, 839, 180)
interval_fr_to(839, 905, 344)
interval_fr_to(905, 1020, 414)
interval_fr_to(1020, 1111, 800)
interval_fr_to(1111, 3223, 400)

// function popup(){
//     console.log("hui")
//     document.getElementById("popup").classList.toggle("css-vubbuv")
//     document.getElementById("popup").style.display = "block";
// }


function stop_popup(){
    document.getElementById("popup").style.display = "none";
}


function disconnectFuc() {
    console.log("discon")
    connect_wallet.hidden = false
    block_of_elems.style.display = "none"
    solana_connect.innerHTML = "Connect Solana Wallet"
    solana_connect.style.color = "#fff"
    
}




function connect_wal() {
    let connect_wallet =document.getElementsByClassName("connect_hui")[0]
    let block_of_elems = document.getElementById("wallet_connected")
    let solana_connect = document.getElementById("solana_connect")

    if (!clicked){
    connect_wallet.hidden = true
    block_of_elems.style.display = "block"
    solana_connect.innerHTML = "Mint"
    solana_connect.style.color = "#000"
    }
    
}

// invisible => visible => height 200% => height normal
let last = 0;
async function make_demand(){
    let roll_img = 130
    let max_nfts = 9
    let starting = 130

    
    // document.getElementsByClassName("picture_num")[0].innerHTML = "MoonDogz #111111"
    let terval =  setInterval( async ()=> {
            // num from 1 to 3
        if (last < mint_amount){

        
            let random = Math.round((1+Math.random()*2))       
            hide(random)
            


            // change num between invisible and visible
            for (let i =0; i < document.getElementsByClassName("picture_num").length; i++){
                    let element = document.getElementsByClassName("picture_num")[i]
                    let bundle = document.getElementsByClassName("SolanaNFTCard_nftCard__nomnC")[i]
                    let img = document.getElementsByClassName("SolanaNFTCard_nftCardImage__rmZ3W")[i]
                    bundle.style.height = "109%"
                    
                    let html = element.innerHTML
                    let number = parseInt(html.slice(8, html.length))
                    last = number
                    img.src = `./nft_img/${(roll_img-starting)%max_nfts+starting}.png`
                    roll_img++
                    if (number >= 3223){
                        clearInterval(terval)
                        // clearTimeout(timaut)
                    }
                    element.innerHTML = `Creepz #${number + random}`

                }
            
             setTimeout( () => {
                
                recover(random)
            }, 400)

             setTimeout ( () => {
                for (let i=0; i<document.getElementsByClassName("SolanaNFTCard_nftCard__nomnC").length; i++){
                    document.getElementsByClassName("SolanaNFTCard_nftCard__nomnC")[i].style.height = "100%" 
                }
              
            }, 400)
            
        }
            
            
            // }, Math.random*1000)
    }, 1400)//(100+Math.random())*5)

    
    
}

make_demand()



function hide(n){
    for (let i=0; i<n; i++){

        document.getElementsByClassName("SolanaNFTCard_nftCard__nomnC")[i].style.visibility = "hidden"
        
    }
}
function recover(n) {
    for (let i=0; i<5; i++){
        
        document.getElementsByClassName("SolanaNFTCard_nftCard__nomnC")[i].style.height = "109%"
        
    }

    for (let i =0; i < n+1; i++) {
         document.getElementsByClassName("SolanaNFTCard_nftCard__nomnC")[i].style.visibility ="visible"
    }
}
