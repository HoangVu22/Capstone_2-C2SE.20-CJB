const profileGenaral = document.querySelector('.profile-genaral')
const profileTitleBtn = document.querySelector('.profile-title button')
const profileGenaralEdit = document.querySelector('.profile-genaral-edit')
const profileSaveBtn = document.querySelector(".profile-save button");
const profileSaveP = document.querySelector(".profile-save p");

profileTitleBtn.onclick = function () {
    if (profileGenaralEdit) {
        if (profileGenaralEdit.style.display === "block") {
            profileGenaralEdit.style.display = "none";
            profileGenaral.style.display = "block";
        } else {
            profileGenaralEdit.style.display = "block";
            profileGenaral.style.display = "none";
        }
    }
};

function edit () {
    profileGenaralEdit.style.display = "none";
    profileGenaral.style.display = "block";
}

// profileSaveBtn.onclick = edit;
profileSaveP.onclick = edit;