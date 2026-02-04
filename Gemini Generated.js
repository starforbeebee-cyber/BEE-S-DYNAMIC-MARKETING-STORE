// Sticky Navbar Effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(15, 23, 42, 0.95)';
        nav.style.padding = '1rem 10%';
    } else {
        nav.style.background = 'transparent';
        nav.style.padding = '1.5rem 10%';
    }
});

// Simple Cart Logic
let count = 0;
const cartCount = document.getElementById('cart-count');
const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        cartCount.innerText = count;
        
        // Animation effect for the count
        cartCount.style.transform = 'scale(1.5)';
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
        }, 200);

        // Feedback
        button.innerText = "Added!";
        button.style.background = "#10b981";
        button.style.color = "white";
        
        setTimeout(() => {
            button.innerText = "Add to Cart";
            button.style.background = "white";
            button.style.color = "#0f172a";
        }, 1500);
    });
});
