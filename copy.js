// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS
// @formatting pretty_print
// ==/ClosureCompiler==

javascript:(
    function(){
        const url = location.href.replace(/#.*/, '');
        let title_and_url = "";
        if (url.indexOf("wiki") != -1) {
            let wiki_url = "";
            document.querySelectorAll("link")
                .forEach((item) => { if (item.href.indexOf("alias") != -1) {wiki_url = item.href} });
            const wiki_title = document.querySelector("title").innerText.match(/\] (.*) \|/)[1];
            title_and_url = "[" + wiki_title + "](" + wiki_url + ")";
        } else if (url.indexOf("view") != -1) {
            const title = document.querySelector(".title-group__title-text").innerText;
            const project_key = url.split("/").pop();
            title_and_url =  "[" + project_key + " " + title + "]" + "(" + url + ")";
        } else {
            alert("failed.");
            return null;
        }
        // execCopy https://qiita.com/simiraaaa/items/2e7478d72f365aa48356
        const temp = document.createElement('div');
        temp.appendChild(document.createElement('pre')).textContent = title_and_url;
        const s = temp.style;
        s.position = 'fixed';
        s.left = '-100%';
        document.body.appendChild(temp);
        document.getSelection().selectAllChildren(temp);
        const result = document.execCommand('copy');
        document.body.removeChild(temp);
        if (result) {
            alert("copied!")
        } else {
            alert("copy failed...")
        }
    }
)();