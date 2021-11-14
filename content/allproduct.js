
//products
const products=[
    {
        "name":"Red-shirt",
        "img":"../pictures/product-1_adobespark-min.png",
        "price":"$42.00",
        "description":"This is red half hand T-shirt for both men and women. This is available in all sizes.",
        "stars": 4
    },
    {
        "name":"Black Shoe",
        "img":"../pictures/product-2_adobespark-min.png",
        "price":"$21.60",
        "description":"This is unisex shoe and it is very comfortable to wear. This is available in all sizes.",
        "stars": 4
    },
    {
        "name":"Men's Pant",
        "img":"../pictures/product-3_adobespark-min.png",
        "price":"$13.80",
        "description":"This is black coloured track pant for men's. This is available in all sizes.",
        "stars": 3
    },
    {
        "name":"T-Shirt",
        "img":"../pictures/product-4_adobespark-min.png",
        "price":"$16.70",
        "description":"This is Blacked colored T-shirt for men's. This is available in all sizes.",
        "stars": 5
    },
    {
        "name":"Shoe",
        "img":"../pictures/product-5_adobespark-min.png",
        "price":"$121.60",
        "description":"This is unisex shoe and it is very comfortable to wear.. This is available in all sizes.",
        "stars": 4
    },
    {
        "name":"T-Shirt",
        "img":"../pictures/product-6_adobespark-min.png",
        "price":"$9.60",
        "description":"This is black colored T-shirt with branding of puma for both men and women. This is available in all sizes.",
        "stars": 2
    },
    {
        "name":"Shocks",
        "img":"../pictures/product-7_adobespark-min.png",
        "price":"$2.20",
        "description":"This is pack of two white colored shocks for both men and women and it is very comfortable to wear. This is available in all sizes.",
        "stars": 4
    },
    {
        "name":"Watch",
        "img":"../pictures/product-8_adobespark-min.png",
        "price":"$21.60",
        "description":"This is men's watch with black strip and digital monitor.",
        "stars": 5
    },
    {
        "name":"Watch",
        "img":"../pictures/product-9_adobespark-min.png",
        "price":"$39.10",
        "description":"This is men's watch with black strip and digital monitor. ",
        "stars": 4
    },
    {
        "name":"Shoe",
        "img":"../pictures/product-10_adobespark-min.png",
        "price":"$27.30",
        "description":"This is men's shoe with combination od black and red color. It looks very attractive.This is available in different sizes." ,
        "stars": 5
    },
    {
        "name":"Shoe",
        "img":"../pictures/product-11_adobespark-min.png",
        "price":"$22.10",
        "description":"This is men's shoe with combination od grey and white color. It looks very attractive.This is available in different sizes." ,
        "stars": 4
    },
    {
        "name":"Pant",
        "img":"../pictures/product-12_adobespark-min.png",
        "price":"$11.80",
        "description":"This is black colored track pant for both men and women.This is available in different sizes." ,
        "stars": 5
    },
];

for(let i=0;i<products.length;i++){
    document.getElementById(`productimage${i}`).src=products[i].img;
    document.getElementById(`productname${i}`).innerText=products[i].name;
    document.getElementById(`productprice${i}`).innerText=products[i].price;
}

// product assign

function addcart(n)
{
    alert(`${products[n].name} is added to the cart`)
    console.log(cart)
}
