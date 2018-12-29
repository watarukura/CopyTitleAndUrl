javascript:(
    function(){
        const title = document.querySelector(".title-group__title-text").innerText;
        const url = location.href.replace(/#.*/, '');
        const project_key = url.split("/").pop();
        const title_and_url =  "[" + project_key + " " + title + "]" + "(" + url + ")";
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