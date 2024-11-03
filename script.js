
const url =  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdown=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("button");
const fromcurr=document.querySelector(".from select");
const tocurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");

for(let select of dropdown){
  for(let currency in countryList){
    let option=document.createElement("option");
    option.value=currency;
    option.innerText=currency;
    if (select.name === "from" && currency === "USD") {
        option.selected = "selected";
      } else if (select.name === "to" && currency === "INR") {
        option.selected = "selected";
      }
    select.append(option);
  }
  select.addEventListener("change",(e)=>{
    updateFlag(e.target);
});
}
const updateFlag=(e)=>{
  let currCode=e.value;
  let countryCode=countryList[currCode];
  let img=e.parentNode.querySelector("img");
  img.src=`https://flagsapi.com/${countryCode}/flat/64.png`;
  
};

const exchange=async()=>{
  const URL = `${url}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[tocurr.value.toLowerCase()];
  
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  exchange();
});
window.addEventListener("load", () => {
  exchange();
});