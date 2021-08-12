// JavaScript Document


	const moreText = document.querySelectorAll("#moreText");
			console.log(this);
			for (let i = 0; i < moreText.length; i++) {
				moreText[i].style.display = "none";
			}
			
			const button = document.querySelectorAll("#readMore");
			console.log(button);
			for (let i = 0; i < button.length; i++) {
				button[i].addEventListener("click", wholeTxt);
			}
			function wholeTxt() {
				let moreText = this.previousElementSibling;
				if (moreText.style.display === "none") {
					console.log(moreText);
					moreText.style.display = "block";
				} else {
					moreText.style.display = "none";
				}

			}


