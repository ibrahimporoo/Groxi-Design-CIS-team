let showFilter = document.querySelector(".show-filter");
let filterIcon = showFilter.querySelector("i");
let filterItems = document.querySelectorAll(".our-products .container .left-side ul:not(.stars)");
showFilter.addEventListener("click", _ => {
	filterItems.forEach(item => {
		if (item.classList.contains("fade")) {
			item.style.display = "none";
			item.classList.toggle("fade");
			showFilter.innerHTML = "<i class='fa-solid fa-filter' style='text-decoration: none'></i> Show Filters";
		} else {
			item.style.transform = "translateY(0)";
			item.style.display = "block";
			item.classList.toggle("fade");
			showFilter.innerHTML = "<i class='fa-solid fa-filter' style='text-decoration: line-through'></i> Hide Filter";
		}
	})
});
// Search Field
let searchField = document.getElementById("searchInput");
let namedItems = document.querySelectorAll(".products .box h3");
searchField.addEventListener("keyup", function(e) {
	namedItems.forEach(item => {
		let categoryName = item.textContent.toLowerCase();
		let userSearchInput = e.target.value.toLowerCase();
		if(categoryName.indexOf(userSearchInput) !== -1 || searchField.value === '' ) {
			console.log(item.parentElement, "flex")
			item.parentElement.style.display = "flex";
		} else {
			console.log(item.parentElement, "none");
			item.parentElement.style.display = "none";
		}
	})
})
// View Show
let views = document.querySelectorAll(".show i");
views.forEach(view => {
	view.addEventListener("click", e => {
		views.forEach(view => {
			view.classList.remove("on");
		})
		e.target.classList.add("on");
	})
})
// Categories
let categoriesItems = document.querySelectorAll(".categories li");
categoriesItems.forEach(item => {
	item.addEventListener("click", e => {
		item.classList.toggle("on");
		// console.log(item);
	})
})