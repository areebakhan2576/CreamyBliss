let userName =document.getElementById('name');
let userEmail =document.getElementById('email');
let userContact =document.getElementById('contact');
let userAddress=document.getElementById('location');
let userMessage =document.getElementById('message');
let userBtn =document.getElementById('order');

userBtn.addEventListener ('click', ()=>{

    if(userName.value.trim() === '' ||
    userEmail.value.trim() === '' ||
    userAddress.value.trim() === '' ||
    userContact.value.trim() === ''
){
    swal.fire({
         title: "Incomplete Form",
         text: "Please fill in all required details to place your order.",
         icon: "warning",
         confirmButtonText: "Fill Form",
         confirmButtonColor: "#ec4899"
        });
    }
    else{
        swal.fire({
            title: "Order Confirmed! 🍦",
            text: "Your order has been placed successfully.",
            icon: "success",
            confirmButtonText: "Great!",
            confirmButtonColor: "#ec4899"
        });
    }
});

