javascript:(
    function () {
        const url = location.href.replace(/#.*/, '');
        let title_and_url = "";
        if (url.includes("backlog.com")) {
            if (url.includes("wiki")) {
                let wiki_url = Array.from(document.querySelectorAll("link"))
                    .filter(item => item.href.includes("alias"))[0];
                const wiki_title = document.querySelector("title").innerText.match(/\] (.*) \|/)[1];
                title_and_url = `[${wiki_title}](${wiki_url})`;
            } else if (url.includes("view")) {
                const title = document.querySelector(".title-group__title-text").innerText;
                const project_key = url.split("/").pop();
                title_and_url = `[${project_key} ${title}](${url})`;
            }
        } else if (url.includes("notion.so")) {
            const title = document.querySelector("title").innerText
            title_and_url = `[${title}](${url})`;
        } else if (url.includes("github.com")) {
            const title = document.querySelector(".gh-header-title").innerText
            title_and_url = `[${title}](${url})`;
        } else if (url.includes("esa.io")) {
            const title = document.querySelector(".post-title__name").innerText
            title_and_url = `[${title}](${url})`;
        } else {
            alert("failed.");
            return null;
        }
        console.log(title_and_url);
        navigator.clipboard.writeText(title_and_url).then(() => console.log("copied!"))
    }
)();

