let btn = document.querySelector("#browse");
            btn.addEventListener("click", () => {
                let input = document.querySelector("#address").value;
                if (input == "") {
                            alert("Please type a website here!");
                            location.reload();
                }
                        if (input.includes(" ")) {
                                    alert("Websites are not supposed to have spaces!");
                                    location.reload();
                        }
                        else {
                                    location.assign(`website.html#${input}`);
                        }
            });
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then((reg) => {
        console.log('Service worker registered:', reg);
      })
      .catch((error) => {
        console.error('Service worker registration failed:', error);
      });
  });
}
