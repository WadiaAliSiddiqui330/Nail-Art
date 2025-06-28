// home page navbar background property//
window.onscroll = function(){
  var navbar = document.getElementById("navbar")
  if(window.pageYOffset==0){
    navbar.style.backgroundColor = "transparent"
    console.log(window.pageYOffset)
  }
  else{
    navbar.style.backgroundColor = "rgb(212, 141, 154)"
    console.log(window.pageYOffset)
  }
} 
        //  NAILCARE webpage
         $(document).ready(function(){
            $(".problem-title").click(function(){
                $(this).next(".solution").toggle()
            }) 
        })
        // FAQ WEBPAGE
        $(document).ready(function(){
            $(".label").click(function(){
                $(this).next(".content").slideToggle()
            })
        })
        // Products webpage//
        var products = [
  {
    name: "Pearly Nude",
    price: "Rs: 2300",
    desc: "Vibrant color, lasting shine.",
    image1: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/fa24_ecommerce_2024_jpg_hires_supernova_pearl_nlf013_nail_lacquer_99399000700_2000x2477_7c0e2724-0102-49fd-b113-af52a48834f1.jpg?v=1722464466&width=1080",
    image2: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/supernova_pearl_nlf013_gif_b597047c-dea7-48e8-bfe4-26aeaa1f69c0.gif?v=1720423390&width=1080"
  },
  {
    name: "Dusty Lilac",
    price: "Rs: 2000",
    desc: "Vibrant color, lasting shine.",
    image1: "https://cdn.shopify.com/s/files/1/0649/4879/7673/products/arigato-from-tokyo-nlt82-nail-lacquer-22500328182_60700669-e66e-42a8-9c9c-ee38d18ff45e.jpg?v=1675376604&width=1080",
    image2: "https://cdn.shopify.com/s/files/1/0649/4879/7673/products/arigato-from-tokyo-gif_401c61df-ce2f-4a07-9cd3-4db19b9332d2.gif?v=1675376604&width=1080"
  },
  {
    name: "Metallic Blue",
    price: "Rs: 2400",
    desc: "Vibrant color, lasting shine.",
    image1: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/am_2_pm_isl128_long_lasting_nail_polish_99399000364_2000x2477_25a62b53-d7b2-41b5-ab0e-10684e0bcee5.jpg?v=1704310186&width=1080",
    image2: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/am_2_pm_gif_2000x2477_6a8d0df4-5111-4f6a-89f8-4b795f91fe14.gif?v=1704310186&width=1080"
  },
   {
    name: "Peach Sorbet",
    price: "RS : 2000",
    desc: "Vibrant color, lasting shine.",
    image1: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/bright_on_top_of_it_isl115_long_lasting_nail_polish_99399000351_2000x2477_eadc8ac0-81ff-46ea-97f2-eca13e8366ca.jpg?v=1704310365&width=1080",
    image2: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/bright_on_top_of_it_gif_2000x2477_ce3069a3-15a0-411d-8c2b-d41aa0bd3fd5.gif?v=1704310365&width=1080"
  },
   {
    name: "Charcoal Shine",
    price: "RS : 2000",
    desc: "Vibrant color, lasting shine.",
    image1: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/lincoln_park_after_park_islw42_long_lasting_nail_polish_99399000396_2000x2477_a646e7a5-5825-425a-84f7-bd4facabb086.jpg?v=1706193616&width=1080",
    image2: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/lincoln_park_after_dark_gif_2000x2477_2d126c56-db56-4c4e-8870-cd20a904f8d7.gif?v=1706193616&width=1080g"
  },
   {
    name: "Cherry Velvet",
    price: "RS : 2000",
    desc: "Vibrant color, lasting shine.",
    image1: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/strawberry_margarita_islr44_long_lasting_nail_polish_99399000391_2000x2477_93a6211c-1815-4cbd-9dce-96c63418eb78.jpg?v=1706194041&width=1080",
    image2: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/strawberry_margarita_gif_2000x2477_87154823-56ea-4ad3-8a0a-261e4c94f3d7.gif?v=1706194041&width=1080"
  },
   {
    name: "Sparkling Mint",
    price: "RS : 2000",
    desc: "Vibrant color, lasting shine.",
    image1: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/celebrate_that_isl172_long_wear_polish_99399001045_2000x2477_2d012448-1e13-4d56-8114-e22b7e185128.jpg?v=1743453625&width=1080",
    image2: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/celebrate-that_isl159_long_lasting_nail_polish_99399000881_hand_and_bottle.jpg?v=1743453647&width=1080"
  },
   {
    name: "Blush Nude",
    price: "RS : 2000",
    desc: "Vibrant color, lasting shine.",
    image1: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/it_never_ends_ISL29_long_lasting_nail_polish_99399000371_2000x2477_9a002271-dc13-412b-bddb-aa0190d3dc3b.jpg?v=1706193436&width=1080",
    image2: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/it_never_ends_gif_2000x2477_334a1811-4cab-4b21-9fee-18340709dca7.gif?v=1706193436&width=1080"
  },
   {
    name: "Ivory Glow",
    price: "RS : 2000",
    desc: "Vibrant color, lasting shine.",
    image1: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/steel_waters_run_deep_isl27_long_lasting_nail_polish_99399000370_2000x2477_07a10c6f-bc71-4e1a-89ae-cfbcc84c3cff.jpg?v=1706193996&width=1080",
    image2: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/steel_waters_run_deep_gif_2000x2477_366017cb-8c77-493a-bbdd-ee8cd8041ef8.gif?v=1706193996&width=1080"
  },
   {
    name: "Shiny Light Blue",
    price: "RS : 2000",
    desc: "Vibrant color, lasting shine.",
    image1: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/SP25_ecommerce_2025_JPG_living_the_fanta-sea_isl170_long_lasting_nail_polish_99399000892_2000x2477_8eb05802-2dc8-4e9e-af05-6ad7e9bf34de.jpg?v=1734424422&width=1080",
    image2: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/sp25_ecommerce_jpg_living_the_fanta-sea_isl170_long_lasting_nail_polish_99399000892_hand_and_bottle.jpg?v=1734472413&width=1080"
  },
   {
    name: "Lemon Shine",
    price: "RS : 2000",
    desc: "Vibrant color, lasting shine.",
    image1: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/SP25_ecommerce_2025_JPG_slay_hello_to_yellow_isl168_long_lasting_nail_polish_99399000890_2000x2477_6882f19f-2840-4bc3-96c0-8a2c6261f7c4.jpg?v=1734331544&width=1080",
    image2: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/sp25_ecommerce_jpg_slay_hello_to_yellow_isl168_long_lasting_nail_polish_99399000890_hand_and_bottle_57e8bce6-85b6-4996-bab8-713661c0a02a.jpg?v=1734472922&width=1080"
  },
   {
    name: "Petal Pink",
    price: "RS : 2000",
    desc: "Vibrant color, lasting shine.",
    image1: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/SP25_ecommerce_2025_JPG_suzis_pedicure_throne_isl163_long_lasting_nail_polish_99399000885_2000x2477_124f4f9c-4363-4573-96ae-2d06e739656f.jpg?v=1734457052&width=1080",
    image2: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/sp25_ecommerce_jpg_suzis_pedicure_throne_isl163_long_lasting_nail_polish_99399000885_hand_and_bottle.jpg?v=1734472957&width=1080"
  },
   {
    name: "Sugar Blush",
    price: "RS : 2000",
    desc: "Vibrant color, lasting shine.",
    image1: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/SP25_ecommerce_2025_JPG_skeak_a_pink_isl160_long_lasting_nail_polish_99399000882_2000x2477_f62d894e-d010-4291-a899-080d96241c82.jpg?v=1734394017&width=1080",
    image2: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/sp25_ecommerce_jpg_sneak_a_pink_isl160_long_lasting_nail_polish_99399000882_hand_and_bottle.jpg?v=1734472929&width=1080"
  },
   {
    name: "Peachy Rose",
    price: "RS : 2000",
    desc: "Vibrant color, lasting shine.",
    image1: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/strawberry_slay_isl178_long_wear_polish_99399001051_2000x2477_9c9012cf-a407-4d7a-88fc-601ea14cc9b5.jpg?v=1743454860&width=1080",
    image2: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/strawberry-slay_isl159_long_lasting_nail_polish_99399000881_hand_and_bottle.jpg?v=1743454860&width=1080 "
  },
   {
    name: "Ocean Pop",
    price: "RS : 2000",
    desc: "Vibrant color, lasting shine.",
    image1: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/it_s_in_your_jeans_isl175_long_wear_polish_99399001048_2000x2477_a4eaa180-e8bb-4619-8100-11cf7382ffa2.jpg?v=1743454620&width=1080",
    image2: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/its-in-your-jeans_isl159_long_lasting_nail_polish_99399000881_hand_and_bottle.jpg?v=1743454624&width=1080"
  },
   {
    name: "Frosted Pistachio",
    price: "RS : 2000",
    desc: "Vibrant color, lasting shine.",
    image1: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/jelly_green_with_envy_isl173_long_wear_polish_99399001046_2000x2477_2fa91dc8-8265-4b9f-b7aa-c7668324ef9c.jpg?v=1743454712&width=1080",
    image2: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/jelly-green-with-envy_isl159_long_lasting_nail_polish_99399000881_hand_and_bottle.jpg?v=1743454712&width=1080"
  },
   {
    name: "Sunbeam Yellow",
    price: "RS : 2000",
    desc: "Vibrant color, lasting shine.",
    image1: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/vogue_into_the_sunset_isl181_long_wear_polish_99399001054_2000x2477_5048cc1a-c2a0-49f0-baf2-7fc6cbdd558a.jpg?v=1743454894&width=1080",
    image2: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/vogue-into-the-sunset_isl159_long_lasting_nail_polish_99399000881_hand_and_bottle.jpg?v=1743454902&width=1080"
  },
   {
    name: "Icy Lavender",
    price: "RS : 2000",
    desc: "Vibrant color, lasting shine.",
    image1: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/SP25_ecommerce_2025_JPG_where_time_stuns_still_isl166_long_lasting_nail_polish_99399000888_2000x2477_41d21a13-5abb-4047-ae4d-2bf4a2fa1024.jpg?v=1734456853&width=1080",
    image2: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/sp25_ecommerce_jpg_where_time_stuns_still_isl166_long_lasting_nail_polish_99399000888_hand_and_bottle.jpg?v=1734473030&width=1080"
  },
{
    name: "Tropical Teal",
    price: "RS : 2200",
    desc: "Vibrant color, lasting shine.",
    image1: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/fa24_ecommerce_2024_jpg_hires_milleniyum_isl155_long_lasting_nail_polish_99399000733_2000x2477_7a4c5c69-0a20-44c2-9608-b463972bfde6.jpg?v=1720460202&width=1080",
    image2: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/millenniyum_isl155_gif.gif?v=1720460201&width=1080"
  },
  {
    name: "Fuchsia Pop",
    price: "RS : 2200",
    desc: "Vibrant color, lasting shine.",
    image1: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/fa24_ecommerce_2024_jpg_hires_deja_rouge_isl152_long_lasting_nail_polish_99399000730_2000x2477_723e3587-baf6-4b5c-8bc2-cf9de422c12d.jpg?v=1719978588&width=1080",
    image2: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/deja_rouge_isl152_gif.gif?v=1719978588&width=10800"
  },
  {
    name: "Copper Gleam",
    price: "RS : 2200",
    desc: "Vibrant color, lasting shine.",
    image1: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/fa24_ecommerce_2024_jpg_hires_2000_karats_isl157_long_lasting_nail_polish_99399000735_2000x2477_88354128-a47c-44dc-944a-762d17ad9405.jpg?v=1720422046&width=1080",
    image2: "https://cdn.shopify.com/s/files/1/0649/4879/7673/files/2000_karats_isl157_gif.gif?v=1720422046&width=1080  "
  },
];

// Product webpage//
var container = document.getElementById('product-list');

for (var i = 0; i < products.length; i++) {

  var card = `
    <div class="col-md-4 mb-4">
      <div class="product-card">
        <img src="${ products[i].image1}" 
             class="card-img-top product-image" 
             data-img1="${products[i].image1}" 
             data-img2="${products[i].image2}" 
             alt="${products[i].name}">
        <div class="card-body">
          <h5 class="card-title mt-3 fw-bold">${products[i].name}</h5>
          <p class="card-text mb-0">${products[i].desc}</p>
          <p class="card-text"><strong>${products[i].price}</strong></p>
        </div>
      </div>
    </div>
  `;

  container.innerHTML += card;
}

$(document).on('mouseenter', '.product-image', function() {
  $(this).attr('src', $(this).data('img2'));
});

$(document).on('mouseleave', '.product-image', function() {
  $(this).attr('src', $(this).data('img1'));
});
