javascript:(
    function(){
        const url = location.href.replace(/#.*/, '');
        let title_and_url = "";
        if (url.includes("wiki")) {
            let wiki_url = "";
            document.querySelectorAll("link")
                .forEach((item) => { if (item.href.includes("alias")) {wiki_url = item.href} });
            const wiki_title = document.querySelector("title").innerText.match(/\] (.*) \|/)[1];
            title_and_url = `[${wiki_title}](${wiki_url})`;
        } else if (url.includes("view")) {
            const title = document.querySelector(".title-group__title-text").innerText;
            const project_key = url.split("/").pop();
            title_and_url =  `[${project_key} ${title}](${url})`;
        } else if (url.includes("notion.so")) {
            const title = document.querySelector("title").innerText
            title_and_url =  `[${title}](${url})`;
            console.log(title_and_url)
        } else if (url.includes("github.com")) {
            const title = document.querySelector(".gh-header-title").innerText
            title_and_url =  `[${title}](${url})`;
            console.log(title_and_url)
        } else {
            alert("failed.");
            return null;
        }
        navigator.clipboard.writeText(title_and_url).then(() => console.log("copied!"))
    }
)();
