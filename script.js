
const url =  "https://latest.currency-api.pages.dev/v1/currencies/";
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
  const URL = `${url}/${fromcurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  console.log("fetching done");
  let data = await response.json();
  console.log(data);
  console.log(tocurr.value.toLowerCase());
  console.log("fetching2 done");
  let rate = data[fromcurr.value.toLowerCase()][tocurr.value.toLowerCase()];
  
  
  console.log(rate);
  
 
  let amount = document.querySelector(".amount input").value;
  let total = rate * amount;
  console.log(total);
  msg.innerText = `${amount} ${fromcurr.value} = ${total} ${tocurr.value}`;
};

btn.addEventListener("click", (evt) => {
  
  exchange();
});
