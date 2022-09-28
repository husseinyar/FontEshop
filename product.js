// var errorMsg = document.querySelector('.errmessge')
// var successMsg = document.querySelector('.successMsg')
// var Name = document.querySelector('input[name="Name"]')
// var email = document.querySelector('input[name="email"]')
// var password = document.querySelector('input[name="password"]')
// var Adress = document.querySelector('input[name="Adress"]')
// var loginForm = document.getElementById('form')
// var SignUpFrom = document.getElementById('SignUp')
// var modal = document.querySelector('.container-msg-modal')
// var modalContent = document.querySelectorAll('.container-modal-content')
// console.log(email)
// // only using default value for now


// window.onload = init()

// const myLogin = {
//   Email: 'codepen',
//     password: 'codepen'
// }


// function init() {
//     loginForm.addEventListener('submit', function(event) {
//         event.preventDefault()
//         userLogin()
//     })
// }

// function userLogin() {
//     var nameVal = Email.value,
//       passwordVal = Password.value
    
//     var isLogin = true
    
//     if(nameVal === myLogin.Email && passwordVal === myLogin.password) {
//       loginCheck(isLogin)
//     } else {
//       loginCheck(!isLogin)
//     }
// }

// function loginCheck(isLogin) {
//   modal.classList.add('enabled')  
// console.log("okej")
  
//   if(isLogin) {
//     successMsg.classList.add('success')
    
//   } else {
//     errorMsg.classList.add('enabled')
//   }
  
//   setTimeout(function() {
//     modal.classList.remove('enabled')
//     loginForm.reset();
//     modalContent.forEach(function(content) {
//       content.classList.remove('enabled')
//     });
//   }, 3000)
// };
