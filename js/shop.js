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
})