//your code here!
let olid = document.getElementById("infi-list");
for (let i = 1; i <= 10; i++) {
  let liele = document.createElement("li");
  liele.textContent = "Item " + i;
  olid.appendChild(liele);
}
let i=11;
olid.addEventListener("scroll",function(){
	for( let j=0 ; j<2 ; j++){
		let liele = document.createElement("li");
		liele.textContent = "Item " + i;
		i++;
		olid.appendChild(liele);
	}
});
