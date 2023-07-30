const contentLetterSrart_actived = "helo lê hiếu đây, đây là 6 tiếng ngồi sửa và fix rất nhiều lỗi để có món quà này dành tặng bạn đó, mặc dù đơn sơ với không đặc sắc nhưng mà mong bạn có thể nhận nó nhé:3 " //Lời mở đầu cho bức thư
const mainContentLetter = "hmm 3/8 là snhat quỳnh chim rồi, cmsn quỳnh chim nhiều nhé, mặc dù mới chơi lại chắc được hơn 1 năm gi đấy thôi nhưng mà bạn giúp đỡ tôi rất nhiều trong thời gian vừa qua, chúc quỳnh chim tuổi mới vui vẻ hạnh phúc nhá, nhưng mà có gì đừng cục lên nhé, m cục lên t sợ đấy, lên lớp 11 nhớ nhiều thành công trong cuộc sống cũng như trong học tập nhé, t vào hod có gi giúp đỡ t và đặc biệt bỏ thói rep chậm di nhé kh t xiên đấy=)))), hmm chắc có lẽ m là đứa bạn mà t coi là bạn thân và tin tưởng nhất đấy, những lúc t khó khăn m đều nghe t than vãn là thấy m đỉnh như nào rồi, kh từ nào diễn tả=))) mong mqh của cta tốt hơn sau mỗi ngày=)) chúc mừng snhat nhiều nhé" //Nội dung của bức thư

// Gắn 1 đường link ảnh bất kì
let imgStart = document.querySelector(".myAI"); //Hình ảnh xuất hiện trong lời mở đầu của bức thư
imgStart.src = "./img/cute-young-boy-kid-wearing-vest-and-hat-free-png.png";

// Gắn 1 link ảnh bất kì
let imgLetter = document.querySelector(".img");
imgLetter.src = "./img/b4bbdb54b7152338d7143cb444a77f09.png"; //Hình ảnh xuất hiện trong nội dung của bức thư sau khi bức thư được viết ra hết

const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

document.querySelector(".sticker").addEventListener("click", function () { //Hiệu ứng gõ chữ cho phần mở đầu của bức thư
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active")
    setTimeout(() => {
        splitContentLetterSrart_actived.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index == contentLetterSrart_actived.length - 1) {
                    setTimeout(() => {
                        document.querySelector(".recieve").setAttribute("style", "opacity: 1; transition: .5s") 
                    }, 1000)
                }
            }, 50 * index)
        })
    }, 1000)
})

document.querySelector("#mess").addEventListener("change", function () { //Hiệu ứng gõ chữ cho phần nội dung của bức thư
    if (this.checked == true) {
        document.querySelector(".content").classList.add("actived")
        const splitMainContentLetter = mainContentLetter.split("");

        splitMainContentLetter.forEach((val, index) => {
            const effectType = setTimeout(() => {
                document.querySelector(".mainContent").innerHTML += val;
                const mainContent = document.querySelector(".mainContent");
                mainContent.scrollTop = mainContent.scrollHeight;
                if (index == mainContentLetter.length - 1) {
                    document.querySelector(".img1").setAttribute("style", "opacity: 1; transition: .5s")
                    clearTimeout(effectType);
                }
            }, 50 * index)
        })

    } else {
        document.querySelector(".content").classList.remove("actived")
        document.querySelector(".img1").setAttribute("style", "opacity: 0; transition: .5s")
        document.querySelector(".mainContent").innerHTML = "";
    }
})

document.querySelector(".recieve").addEventListener("click", () => {
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document.querySelector(".startForm").setAttribute("style", "bottom: 100%");
            
            let getTypeDevice = document.documentElement.clientWidth;
            if (getTypeDevice <= 768) {
                createLight(20)
            } else {
                createLight(40)
            }

        }, 500)
    }, 500)
})

// Animation Drop light _ Tạo hiệu ứng kim tuyến rơi
//Bạn có thể thiết kế lại để trông chân thật hơn nhé, thiết kế của mình hơi bị cứng và thiếu sự tự nhiên
const getBackground = document.querySelector(".backgroundParty");
var width = getBackground.offsetWidth;
var height = getBackground.offsetHeight;

function createLight(a) {
    var container = document.querySelector(".backgroundParty");
    const blurLv = [2, 4];
    const count = a;
    const allDefaultColor = ["red", "lime", "yellow", "orange", "blue"]

    for (var i = 0; i < count; i++) {
        var randomLeft = 0;
        randomLeft = Math.floor(Math.random() * width);
        var randomTop = 0;
        randomTop = Math.floor(Math.random() * height / 2);
        var color = "white";
        var blur = Math.floor(Math.random() * 2);
        var widthEle = Math.floor(Math.random() * 5) + 15;
        var moveTime = Math.floor(Math.random() * 4) + 4;

        var div = document.createElement("div");
        div.classList.add = "snow";
        div.style.position = "absolute";
        div.style.backgroundColor = allDefaultColor[Math.floor(Math.random() * 5)]
        div.style.borderRadius = Math.floor(Math.random() * 10 + 10).toString() + "px"

        div.style.height = "0px";
        div.style.width = "0px";

        div.style.height = widthEle * Math.floor(Math.random() * 4 + 1) + "px";
        div.style.width = widthEle + "px";
        div.style.marginLeft = randomLeft + "px"
        div.style.marginTop = randomTop + "px"
        div.style.filter = "blur(" + blurLv[blur] + "px" + ")"
        div.style.animation = "moveLight " + moveTime + "s ease-in-out infinite";

        container.appendChild(div);
    }
}
