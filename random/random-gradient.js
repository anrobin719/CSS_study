var bgGradient = [];
bgGradient[0] = "linear-gradient(140deg, #f37298, #fe9273)";
bgGradient[1] = "linear-gradient(140deg, #509aaf, #73cbc1 50%, #f5ffc3)";
bgGradient[2] = "linear-gradient(140deg, #8b62d0, #76a1e5, #b0eff4)";
bgGradient[3] = "linear-gradient(140deg, #ff5a6d, #774ce7)";
bgGradient[4] = "linear-gradient(140deg, #f32f64, #f7b83d)";
bgGradient[5] = "linear-gradient(140deg, #4d2875, #5567c9)";
bgGradient[6] = "linear-gradient(140deg, #e03537, #fbcaf6)";
bgGradient[7] = "linear-gradient(140deg, #9182c4, #ebd9dd)";
bgGradient[8] = "linear-gradient(140deg, #dcc4fc, #9ac6fd)";
bgGradient[9] = "linear-gradient(140deg, #7d59fc, #dab9fc)";

var index = Math.floor(Math.random() * bgGradient.length);
var bg = bgGradient[index];
document.body.style.backgroundImage = bg;

document.querySelector("#desc").innerHTML = `You can just add this code!<br><span id="code">${bg}</span><br><input id="copyBtn" type="button" value="COPY">`;

function copy() {
    var copyText = document.querySelector("#code").innerText.select();
    copyText.execCommand("copy");
}

document.querySelector("#copyBtn").addEventListener("click", copy);