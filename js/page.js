// Handel Imgs
let allImgs = document.querySelectorAll(".imgs-holder .box img");
let ImgToShow = document.getElementById("show-img");
allImgs.forEach(item => {
	item.addEventListener("click", _ => {
		res.textContent = 0;
		ImgToShow.src = item.src;
		ImgToShow.alt = item.alt;
	})
})
// Add To Cart
let myAlert = document.querySelector(".my-alert");
let addBtn = document.getElementById("addBtn");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let res = document.querySelector(".res");
addEventListener("DOMContentLoaded", _ => {
	res.textContent = 0;
	plus.addEventListener("click", _ => {
		res.textContent = +res.textContent + 1
	});
	minus.addEventListener("click", _ => {
		res.textContent -= 1;
	});
});
addBtn.addEventListener("click", _ => {
	myAlert.style.display = "flex";
	if(res.textContent < 1 ) {
		myAlert.textContent = `There is Nothing To Add`;
	} else {
		myAlert.textContent = `${res.textContent} ${ImgToShow.alt} Added To The Card`;
	}
	setTimeout(function(){
		myAlert.style.display = "none";
	}, 3000)
})
// 
let textDescription = [
	{
		desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem inventore non maiores, obcaecati officiis possimus dicta illo, voluptatum nihil quisquam fuga iure suscipit est ad.onsectetur adipisicing elit. Dolorem inventore non maiores, obcaecati officiis possimus dicta illo, voluptatum nihil quisquam fuga iure suscipit est ad.'
	},
	{
		desc: 'consectetur adipisicing elit. Dolorem inventore non maiores, obcaecati officiis possimus dicta illo, voluptatum nihil quisquam fuga iure suscipit est ad.onsectetur adipisicing elit. Dolorem inventore non maiores, obcaecati officiis possimus dicta illo, voluptatum nihil quisquam fuga iure suscipit est ad.'
	},
	{
		desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem inventore non maiores, obcaecati officiis possimus dicta illo, voluptatum nihil quisquam fuga iure suscipit est ad.onsectetur adipisicing elit. Dolorem inventore non maiores, obcaecati officiis possi quisquam fuga iure suscipit est ad.'
	},
]
let textList = document.querySelectorAll(".infos .text li");
let contentDesc = document.getElementsByClassName("contentDesc");
textList.forEach(list => {
	list.addEventListener("click", _ => {
		textList.forEach(list => {
			list.classList.remove("active");
		})
		list.classList.add("active");
		Array.from(contentDesc).forEach(item => {
			item.textContent = textDescription[list.dataset.idx].desc;
		})
	})
})
// console.log(textDescription[0])