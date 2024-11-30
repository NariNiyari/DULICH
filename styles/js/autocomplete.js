const avaivblekeyword = [
    'Bana Hill',
    'Hội An',
    'Phú Quốc'
];

const resultbox = document.querySelector(".result-box");
const inputbox = document.getElementById("input-box");

inputbox.onkeyup = function (event) {
    let result = [];
    let input = inputbox.value;

    if (input.length) {
        result = avaivblekeyword.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }

    display(result);

    // Điều hướng khi nhấn Enter
    if (event.key === "Enter" && result.length > 0) {
        // Lưu từ khóa tìm kiếm vào localStorage
        localStorage.setItem("searchKeyword", inputbox.value);
        // Chuyển hướng trực tiếp đến offer.html
        window.location.href = "offers.html";
    }
};

function display(result) {
    const content = result.map((list) => {
        return "<li onclick=selectinput(this)>" + list + "</li>";
    });

    resultbox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectinput(list) {
    inputbox.value = list.innerHTML;
    resultbox.innerHTML = '';
    // Lưu từ khóa tìm kiếm vào localStorage
    localStorage.setItem("searchKeyword", list.innerHTML);
    // Chuyển hướng trực tiếp đến offer.html
    window.location.href = "offers.html";
}
