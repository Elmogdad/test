window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import "bootstrap/dist/css/bootstrap.min.css";
import './css/style.css';
import "@fortawesome/fontawesome-free/js/all.min"

//Tooltip
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(item => new bootstrap.Tooltip(item));

document.querySelectorAll('.add-to-cart-btn').forEach(item => {
    item.addEventListener("click", () =>{
        alert("أضيف المنتج الي عربة الشراء")
    })
})

console.log("هلا بك في متجر عربي")

console.log("هلا بك في متجر مقو")