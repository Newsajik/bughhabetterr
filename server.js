let Hashtag = location.hash;
            let Website = Hashtag.slice(1);
            let WebsiteFrame = document.querySelector("#website");
            WebsiteFrame.src = Website;
            document.querySelector("#link").innerHTML = `https://mark6132014.github.io/unblockedWeb/website.html#${Website}`;
            document.querySelector("#embed").innerHTML = `&lt;iframe src="https://mark6132014.github.io/unblockedWeb/website.html#${Website}"&gt;&lt;/iframe&gt;`;
            document.querySelector("#instructions").innerHTML += "<br>Website: " + Website
            if (Website == "https://fall-season.com") {
                WebsiteFrame.src = "fall.html";
            }
function hideOptions() {
            document.querySelector(".shadow").style.display = "none";
}
            document.querySelector("#optionsBtn").addEventListener("click", () => {
                if (document.querySelector(".shadow").style.display == "none") {
                    document.querySelector(".shadow").style.display = "block";
                            document.querySelector(".shadow").style.opacity = 0;
                            document.querySelector(".shadow").style.animation = "fadein 0.9s forwards";
                            document.querySelector(".shadow").style.opacity = 1;
                }
                else {
                            document.querySelector(".shadow").style.display = "block";
                            document.querySelector(".shadow").style.opacity = 1;
                            document.querySelector(".shadow").style.animation = "fadeout 0.9s forwards";
                                    document.querySelector(".shadow").style.opacity = 0;
                            setTimeout(hideOptions, 950);
                }
            });
            document.querySelector("#redirect").addEventListener("click", () => {
                let input = document.querySelector("#redirectInput").value;
                location.assign(`website.html#${input}`);
                location.reload();
            });
            document.querySelector("#newOpen").addEventListener("click", () => {
                let tab = window.open(Website, "blank");
                tab.focus();
            });
            document.querySelector("#fullscreen").addEventListener("click", () => {
                if (document.fullscreen == false) {
                    document.documentElement.requestFullscreen().catch((e) => {
                        console.log(e);
                    });
                    document.querySelector("#fullscreen").innerHTML = "Exit Fullscreen";
                    console.log(document.fullscreen);
                }
                else {
                    document.exitFullscreen().catch((e) => {
                        console.log(e);
                    });
                    document.querySelector("#fullscreen").innerHTML = "Fullscreen";
                }
            });
document.querySelector("#screenshot").addEventListener("click", async () => {
    try {
        document.querySelector("#optionsBtn").click();
        // Request screen capture
        const stream = await navigator.mediaDevices.getDisplayMedia({ video: { cursor: "always" } });
        const track = stream.getVideoTracks()[0];
        const imageCapture = new ImageCapture(track);

        // Take a screenshot
        const bitmap = await imageCapture.grabFrame();
        track.stop();
        // Create a canvas to draw the screenshot
        const canvas = document.createElement('canvas');
        canvas.width = bitmap.width;
        canvas.height = bitmap.height;
        const context = canvas.getContext('2d');
        context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);

        // Convert the canvas to an image and download it
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'screenshot.png';
        link.click();
    } catch (err) {
        console.error("Error: " + err);
    }
});
document.querySelector("#copy_link").addEventListener("click", () => {
    navigator.clipboard.writeText(document.querySelector("#link").innerHTML);
});
document.querySelector("#copy_embed").addEventListener("click", () => {
    navigator.clipboard.writeText(`<iframe src="https://mark6132014.github.io/unblockedWeb/website.html#${Website}"></iframe>`);
});
document.querySelector("#shareBtn").addEventListener("click", () => {
    document.querySelector(".share").style.display = "block";
});
document.querySelector("#reload").addEventListener("click", () => {
    WebsiteFrame.src = WebsiteFrame.src;
    document.querySelector("#optionsBtn").click();
});
document.querySelector("#setAttribute").addEventListener("click", () => {
    let attribute = document.querySelector("#attribute").value;
    let attribute_value = document.querySelector("#values").value;
    WebsiteFrame.setAttribute(attribute, attribute_value);
});
document.querySelector("#resetWebsite").addEventListener("click", () => {
    location.reload();
});
