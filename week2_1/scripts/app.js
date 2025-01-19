(function(){

    function Start()
    {
        console.log("App Started!");
    }
    window.addEventListener("load", Start);
})();

function DisplayHomePage(){

    let AboutUsButton = document.getElementById("AboutUsBtn");
    AboutUsButton.addEventListener("click", function()
    {
        location.href = "about.html";
    });
}

function DisplayProductsPage(){

    let AboutUsButton = document.getElementById("ProductsBtn");
    AboutUsButton.addEventListener("click", function()
    {
        location.href = "products.html";
    });
}

function DisplayServicesPage(){

    let AboutUsButton = document.getElementById("ServicesBtn");
    AboutUsButton.addEventListener("click", function()
    {
        location.href = "services.html";
    });
}

function DisplayContactPage(){

    let AboutUsButton = document.getElementById("ContactUsBtn");
    AboutUsButton.addEventListener("click", function()
    {
        location.href = "contact.html";
    });
}