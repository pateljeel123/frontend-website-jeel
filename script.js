let form = document.getElementById("signupform");
let arr = []


signupform.addEventListener("submit", (event) => {
    event.preventDefault();
    let ExsistCheck = false;


    let signupFname = document.getElementById("signupFname").value;
    let signupLname = document.getElementById("signupLname").value;
    let signupEmail = document.getElementById("signupEmail").value;
    let signupPassword = document.getElementById("signupPassword").value;
    let signupName = signupFname + " " + signupLname

    if (localStorage.getItem("arr") !== null) {
        let oldExsist = JSON.parse(localStorage.getItem("arr"))
        for (let i = 0; i < oldExsist.length; i++) {
            if (oldExsist[i].signupName == signupName || oldExsist[i].signupEmail == signupEmail) {
                // alert("Your Name or email already Exsist Please Enter Another")
                ExsistCheck = true;
                break;
            }
        }
    }

    if (ExsistCheck) {
        alert("Your Name or email already Exsist Please Enter Another")
    } else {
        let obj = {
            signupName: signupName,
            signupEmail: signupEmail,
            signupPassword: signupPassword
        };
        arr.push(obj);

        localStorage.setItem("arr", JSON.stringify(arr));
        alert("Account Created Successfully....");
    }
});


//login Form Data

let loginform = document.getElementById("loginform");
loginform.addEventListener("submit", (e) => {
    e.preventDefault();
    // let loginEmail=document.getElementById("loginEmail");
    // let loginpassword= document.getElementById("loginpassword");
    // console.log(loginEmail,loginpassword)
})