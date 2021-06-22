let methods = document.querySelectorAll('.delivery-method')

let payMethods = document.querySelectorAll('.payment-method')

let cards = document.querySelectorAll('div.card')

methods.forEach(method =>{
    method.addEventListener('click',()=>{
        methods.forEach(el =>{el.classList.remove("choosen")})
        method.classList.toggle('choosen')
    })
})

payMethods.forEach(method =>{
    method.addEventListener('click',()=>{
        payMethods.forEach(el =>{el.classList.remove("choosen")})
        method.classList.toggle('choosen')
    })
})

function updateProgressBar () {
    let progressBar = document.querySelector('.progress-bar')
   
    let activeCard 
    for (let i = 0; i < cards.length; i++) {
        if(cards[i].classList.contains('active')){
            activeCard = i + 1
        }
    
    progressBar.style.width = `${25 * activeCard}%`
    progressBar.innerText = `${25 * activeCard}%`
        
    }
}

let savedAdd = document.querySelectorAll('.savedAddress')

function updateAddress () {    
    savedAdd.forEach(n => {
        let storedAdd =  document.querySelector('#address').value
        let storedCity =  document.querySelector('#miasto').value
        let storedZip =  document.querySelector('#kod-pocztowy').value
        n.innerText = storedAdd + ', ' + storedZip + ', ' + storedCity
    })
   
}

let prevButtons = document.querySelectorAll('button.prev')

prevButtons.forEach(btn => {
    btn.addEventListener('click', ()=> {
        let activeCard 
        for (let i = 0; i < cards.length; i++) {
            if(cards[i].classList.contains('active')){
                activeCard = i + 1
            }} 
        
        cards.forEach(card => {
            card.classList.remove('active')
        })
        cards[activeCard-2].classList.add('active')
        updateProgressBar()
        updateInfo()
        updateAddress()
    })
})

let nextButtons = document.querySelectorAll('button.next')

nextButtons.forEach(btn => {
    btn.addEventListener('click', ()=> {
        let activeCard 
        for (let i = 0; i < cards.length; i++) {
            if(cards[i].classList.contains('active')){
                activeCard = i + 1
            }} 
        cards.forEach(card => {
            card.classList.remove('active')
        })
        cards[activeCard].classList.add('active')
        updateProgressBar()
        updateInfo()
        updateAddress()
    })
})


function updateInfo () {
    let storedAdd =  document.querySelector('#address').value
    let storedCity =  document.querySelector('#miasto').value
    let storedZip =  document.querySelector('#kod-pocztowy').value
    let storedName =  document.querySelector('#firstName').value
    let storedSurname =  document.querySelector('#lastName').value
    let storedPhone =  document.getElementById('phone').value
    let storedEmail =  document.getElementById('email').value
    let storedDelivery =  document.querySelector('.delivery-method.choosen .delivery-description p').innerText
    let storedPayment =  document.querySelector('.payment-method.choosen .payment-description p').innerText
    
    let orderName = document.getElementById('orderName')
    let orderSurname = document.getElementById('orderSurname')
    let orderEmail = document.getElementById('orderEmail')
    let orderPhone = document.getElementById('orderPhone')
    let orderAddress = document.getElementById('orderAddress')
    let orderDelivery = document.getElementById('orderDelivery')
    let orderPayment = document.getElementById('orderPayment')

    orderName.innerText = storedName
    orderSurname.innerText = storedSurname

    orderAddress.innerText = storedAdd + ', ' + storedZip + ', ' + storedCity
    orderPhone.innerText = storedPhone
    orderEmail.innerText = storedEmail
    orderPayment.innerText = storedPayment
    orderDelivery.innerText = storedDelivery
}

updateProgressBar()


