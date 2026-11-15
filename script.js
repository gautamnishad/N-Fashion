// N FATION — edit the WhatsApp number below when you are ready.
const WHATSAPP_NUMBER = ""; // Example: "919876543210" (country code, no + or spaces)

const photo = (id, width=900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
const products = [
  ["Essential Black Tee","T-Shirts",799,"A clean everyday cotton-look tee with a relaxed modern silhouette.",["S","M","L","XL","XXL"],["Black","White"],"photo-1521572163474-6864f9cf17ab","NEW"],
  ["Relaxed White Tee","T-Shirts",699,"An easy, versatile essential for everyday styling.",["S","M","L","XL","XXL"],["White","Cream"],"photo-1503342217505-b0a15ec3261c",""],
  ["Graphic Street Tee","T-Shirts",899,"A statement graphic-inspired streetwear piece.",["S","M","L","XL"],["Black","Grey"],"photo-1503341455253-b2e723bb3dbb",""],
  ["Classic Oxford Shirt","Shirts",1299,"A timeless button-down look for smart casual days.",["S","M","L","XL","XXL"],["White","Blue"],"photo-1596755094514-f87e34085b2c","NEW"],
  ["Everyday Overshirt","Shirts",1499,"A versatile layering piece with a relaxed fit.",["M","L","XL","XXL"],["Olive","Black"],"photo-1603252109303-2751441dd157",""],
  ["Linen Blend Shirt","Shirts",1399,"A light, effortless shirt for warm-weather looks.",["S","M","L","XL"],["Beige","White"],"photo-1602810318383-e386cc2a3ccf",""],
  ["Urban Blue Denim","Jeans",1799,"A versatile denim-inspired look for everyday wear.",["28","30","32","34","36"],["Blue","Dark Blue"],"photo-1542272604-787c3835535d",""],
  ["Straight Fit Denim","Jeans",1899,"A classic straight silhouette with a clean finish.",["28","30","32","34","36"],["Indigo","Black"],"photo-1511196044526-5cb3bcb7071b","NEW"],
  ["Black Denim Jeans","Jeans",1699,"An easy black denim style for day-to-night outfits.",["28","30","32","34","36"],["Black"],"photo-1541099649105-f69ad21f3246",""],
  ["Tailored Everyday Trouser","Trousers",1499,"A refined trouser style for smart everyday dressing.",["28","30","32","34","36"],["Black","Charcoal"],"photo-1473966968600-fa801b869a1a",""],
  ["Relaxed Cargo Trouser","Trousers",1599,"Utility-inspired styling with a relaxed profile.",["28","30","32","34","36"],["Olive","Black"],"photo-1517438476312-10d79c077509",""],
  ["Pleated Smart Trouser","Trousers",1699,"A contemporary tailored look with a clean drape.",["30","32","34","36"],["Beige","Black"],"photo-1506629905607-d9a3a3e3c4c4",""],
  ["Classic Pullover Hoodie","Hoodies",1799,"A comfortable layering essential with a minimal look.",["S","M","L","XL","XXL"],["Black","Grey"],"photo-1556821840-3a63f95609a7","NEW"],
  ["Everyday Zip Hoodie","Hoodies",1899,"An easy zip-up layer for relaxed outfits.",["S","M","L","XL"],["Charcoal","Navy"],"photo-1556821840-3a63f95609a7",""],
  ["Minimal Track Jacket","Jackets",2299,"A sporty outer layer with a clean modern shape.",["M","L","XL","XXL"],["Black","Navy"],"photo-1551028719-00167b16eac5","NEW"],
  ["Utility Overshirt Jacket","Jackets",2499,"A structured layer that adds depth to everyday looks.",["M","L","XL"],["Olive","Tan"],"photo-1591047139829-d91aecb6caea",""],
  ["Everyday Sneakers","Shoes",2199,"A versatile sneaker-inspired style for daily outfits.",["7","8","9","10","11"],["White","Black"],"photo-1525966222134-fcfa99b8ae77",""],
  ["Minimal Low-Top Shoes","Shoes",2399,"A clean low-top profile made to pair with everything.",["7","8","9","10"],["White","Grey"],"photo-1542291026-7eec264c27ff","NEW"],
  ["Classic Cap","Accessories",499,"A simple finishing touch for relaxed everyday styling.",["Free Size"],["Black","Beige"],"photo-帽",""],
  ["Everyday Backpack","Accessories",1299,"A practical carry-all with a minimal aesthetic.",["Free Size"],["Black"],"photo-1553062407-98eeb64c6a62",""],
  ["Leather-look Belt","Accessories",599,"A versatile belt-inspired accessory for smart looks.",["Free Size"],["Black","Brown"],"photo-1624222247344-550fb8c7c5b2",""],
  ["Textured Polo Tee","T-Shirts",999,"A smart-casual polo-inspired essential.",["S","M","L","XL"],["Black","Cream"],"photo-1625910513413-5fc45e5b4f6a",""],
  ["Striped Casual Shirt","Shirts",1399,"A relaxed striped look for effortless weekend dressing.",["S","M","L","XL"],["Blue","White"],"photo-1603252109303-2751441dd157",""],
  ["Washed Denim Jacket","Jackets",2699,"A timeless denim-inspired outer layer.",["M","L","XL"],["Blue"],"photo- 남","NEW"],
  ["Cargo Denim","Jeans",1999,"A utility-inspired denim look with everyday versatility.",["28","30","32","34"],["Blue","Black"],"photo-1542272604-787c3835535d",""],
  ["Weekend Sweatshirt","Hoodies",1499,"A soft-looking crewneck layer for laid-back days.",["S","M","L","XL","XXL"],["Grey","Navy"],"photo-1578681994506-b8f463449011",""],
  ["Smart Casual Shirt","Shirts",1599,"A polished shirt style for work and after-hours.",["S","M","L","XL"],["Black","Stone"],"photo-1598033129183-c4f50c736f10",""],
  ["Minimal Crossbody Bag","Accessories",999,"A compact accessory to keep your essentials close.",["Free Size"],["Black"],"photo-1548036328-c9fa89d128fa",""],
  ["Streetwear Sneakers","Shoes",2599,"A bold sneaker-inspired style for urban outfits.",["7","8","9","10","11"],["Black","White"],"photo-1495555961986-6d4c1ecb7be3",""],
  ["Premium Knit Polo","T-Shirts",1199,"A refined knit-inspired polo for a sharper casual look.",["S","M","L","XL"],["Cream","Black"],"photo-1627225924765-552d49cf47ad","NEW"]
];

// Remove unavailable/invalid photo IDs and use a reliable fashion image fallback.
const fallbackPhotos = [
 "photo-1521572163474-6864f9cf17ab","photo-1596755094514-f87e34085b2c",
 "photo-1542272604-787c3835535d","photo-1556821840-3a63f95609a7",
 "photo-1591047139829-d91aecb6caea","photo-1525966222134-fcfa99b8ae77",
 "photo-1553062407-98eeb64c6a62","photo-1515886657613-9f3515b0c78f"
];
const normalized = products.map((p,i)=>({...p, image: photo((p[6] && !p[6].includes("帽") && !p[6].includes(" ")) ? p[6] : fallbackPhotos[i%fallbackPhotos.length]), id:i+1}));

const grid = document.getElementById("productGrid");
const filters = document.getElementById("filters");
const searchInput = document.getElementById("searchInput");
let activeCategory = "All";
let currentProduct = null;
let selectedSize = "";
let selectedColour = "";

function money(value){return "₹"+Number(value).toLocaleString("en-IN");}
function renderProducts(){
  const term = searchInput.value.trim().toLowerCase();
  const visible = normalized.filter(p => (activeCategory==="All" || p[1]===activeCategory) && (p[0].toLowerCase().includes(term) || p[1].toLowerCase().includes(term)));
  grid.innerHTML = visible.map((p,i)=>`
    <article class="product-card" data-id="${p.id}" tabindex="0" role="button" aria-label="View ${p[0]}" style="animation-delay:${Math.min(i*35,300)}ms">
      <div class="product-image"><img loading="lazy" src="${p.image}" alt="${p[0]}" onerror="this.src='${photo(fallbackPhotos[p.id%fallbackPhotos.length])}'">${p[7]?`<span class="product-tag">${p[7]}</span>`:""}<span class="quick-view">QUICK VIEW&nbsp; ↗</span></div>
      <div class="product-meta"><span class="product-name">${p[0]}</span><span class="product-price">${money(p[2])}</span></div>
      <div class="product-category">${p[1].toUpperCase()}</div>
    </article>`).join("");
  if(!visible.length) grid.innerHTML='<p class="empty-state">No pieces found. Try another search.</p>';
  grid.querySelectorAll(".product-card").forEach(card=>{
    const open=()=>showProduct(Number(card.dataset.id));
    card.addEventListener("click",open);
    card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open();}});
  });
}
filters.addEventListener("click",e=>{
  const btn=e.target.closest(".filter"); if(!btn)return;
  activeCategory=btn.dataset.category;
  filters.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b===btn));
  renderProducts();
});
searchInput.addEventListener("input",renderProducts);
document.getElementById("searchToggle").addEventListener("click",()=>{
  document.getElementById("searchBox").scrollIntoView({behavior:"smooth",block:"center"});
  searchInput.focus();
});
function showProduct(id){
  currentProduct=normalized.find(p=>p.id===id); if(!currentProduct)return;
  selectedSize="";selectedColour="";
  document.getElementById("modalImage").src=currentProduct.image;
  document.getElementById("modalImage").alt=currentProduct[0];
  document.getElementById("modalName").textContent=currentProduct[0];
  document.getElementById("modalCategory").textContent=currentProduct[1].toUpperCase();
  document.getElementById("modalPrice").textContent=money(currentProduct[2]);
  document.getElementById("modalDescription").textContent=currentProduct[3];
  document.getElementById("sizeOptions").innerHTML=currentProduct[4].map(s=>`<button class="size-option" data-value="${s}">${s}</button>`).join("");
  document.getElementById("colourOptions").innerHTML=currentProduct[5].map((c,i)=>`<button class="colour-option" data-value="${c}"><i class="colour-dot" style="background:${colourHex(c)}"></i>${c}</button>`).join("");
  document.querySelectorAll(".size-option").forEach(b=>b.addEventListener("click",()=>{selectedSize=b.dataset.value;document.querySelectorAll(".size-option").forEach(x=>x.classList.toggle("selected",x===b));document.getElementById("sizeHint").textContent=selectedSize;}));
  document.querySelectorAll(".colour-option").forEach(b=>b.addEventListener("click",()=>{selectedColour=b.dataset.value;document.querySelectorAll(".colour-option").forEach(x=>x.classList.toggle("selected",x===b));document.getElementById("colourHint").textContent=selectedColour;}));
  document.getElementById("modalBackdrop").classList.add("open");
  document.getElementById("modalBackdrop").setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
}
function colourHex(c){return ({Black:"#111",White:"#eee",Cream:"#d9ceb5",Grey:"#888",Charcoal:"#444",Navy:"#18253c",Blue:"#41658c","Dark Blue":"#172c51",Indigo:"#303d68",Olive:"#68704a",Beige:"#c7b18c",Tan:"#a77c50",Brown:"#67452f",Stone:"#aaa18e"})[c]||"#aaa";}
function closeModal(){document.getElementById("modalBackdrop").classList.remove("open");document.getElementById("modalBackdrop").setAttribute("aria-hidden","true");document.body.classList.remove("modal-open");}
document.getElementById("modalClose").addEventListener("click",closeModal);
document.getElementById("modalBackdrop").addEventListener("click",e=>{if(e.target.id==="modalBackdrop")closeModal();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});
function whatsappUrl(message){
  if(!WHATSAPP_NUMBER){alert("WhatsApp number abhi add nahi hua hai. script.js me WHATSAPP_NUMBER set karne ke baad ordering kaam karegi.");return "#";}
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
document.getElementById("orderButton").addEventListener("click",()=>{
  if(!currentProduct)return;
  if(!selectedSize || !selectedColour){alert("Please select a size and colour first.");return;}
  const message=`Hello N FATION!\\nI am interested in this product.\\n\\nProduct: ${currentProduct[0]}\\nPrice: ${money(currentProduct[2])}\\nSize: ${selectedSize}\\nColour: ${selectedColour}\\n\\nPlease confirm actual availability and price.`;
  const url=whatsappUrl(message);if(url!=="#")window.open(url,"_blank","noopener");
});
function contactWhatsApp(){
  const url=whatsappUrl("Hello N FATION! I would like to know more about your collection.");
  if(url!=="#")window.open(url,"_blank","noopener");
}
document.getElementById("contactWhatsapp").addEventListener("click",e=>{e.preventDefault();contactWhatsApp();});
document.getElementById("floatingWhatsapp").addEventListener("click",e=>{e.preventDefault();contactWhatsApp();});
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("mobileMenu").classList.toggle("open"));
document.querySelectorAll("#mobileMenu a").forEach(a=>a.addEventListener("click",()=>document.getElementById("mobileMenu").classList.remove("open")));
renderProducts();
window.addEventListener("load",()=>setTimeout(()=>{
  document.getElementById("splash").classList.add("hide");
  document.getElementById("site").classList.add("ready");
},1750));
setTimeout(()=>{document.getElementById("splash").classList.add("hide");document.getElementById("site").classList.add("ready");},4500);
