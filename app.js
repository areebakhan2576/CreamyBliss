let userName = document.getElementById('name');
let email = document.getElementById('email');
let btn = document.getElementById('submit');

btn.addEventListener('click', ()=>{
    if(
        userName.value.trim() ==='' ||
        email.value.trim() ===''){
            swal.fire({
                title: "Incomplete Form",
                text: "Please fill in all required fields before sending your message.",
                icon: "warning",
                confirmButtonText: "OK",
                confirmButtonColor: "#ec4899"
            });
        }
        else{
            swal.fire({
                 title: "Message Sent Successfully!",
                 text: "Thank you for contacting us. We will get back to you soon.",
                 icon: "success",
                 confirmButtonText: "Great!", 
                 confirmButtonColor: "#ec4899"
            });
        }

})