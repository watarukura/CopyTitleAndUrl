javascript:(
    function () {
        const url = location.href.replace(/#.*/, '');
        const title = document.querySelector('title').innerText;
        if (title == null) {
            alert("failed.");
            return;
        }
        const title_and_url = `[${title}](${url})`;
        console.log(title_and_url);
        navigator.clipboard.writeText(title_and_url).then(() => console.log("copied!"))
    }
)();
