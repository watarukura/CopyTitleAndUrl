javascript:(
    function () {
        const url = location.href.replace(/#.*/, '');
        const title = ((url) => {
            if (url.includes("backlog.com") || url.includes("backlog.jp")) {
                if (url.includes("wiki")) {
                    return document.querySelector("title").innerText.match(/\] (.*) \|/)[1];
                } else if (url.includes("view")) {
                    const title = document.querySelector(".title-group__title-text").innerText;
                    const project_key = url.split("/").pop();
                    return project_key.concat(' ', title);
                }
            } else if (url.includes("notion.so")) {
                return document.querySelector("title").innerText;
            } else if (url.includes("github.com")) {
                return document.querySelector(".gh-header-title").innerText;
            } else if (url.includes("esa.io")) {
                return document.querySelector(".floating-header__left").innerText.replace("\n", ": ").replaceAll(" \n", "/");
            } else if (url.includes("docbase.io")) {
                return document.querySelector("h2").innerText;
            }
        })(url);

        if (title == null) {
            alert("failed.");
            return;
        }
        const title_and_url = `[${title}](${url})`;
        console.log(title_and_url);
        navigator.clipboard.writeText(title_and_url).then(() => console.log("copied!"))
    }
)();
