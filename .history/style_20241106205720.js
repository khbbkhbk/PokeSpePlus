function add_icon_check(class_name){
    // 创建SVG元素
    const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("t", "1730718794814");
    svgElement.setAttribute("class", "icon_check");
    svgElement.setAttribute("viewBox", "0 0 1024 1024");
    svgElement.setAttribute("version", "1.1");
    svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgElement.setAttribute("p-id", "9758");

    // 创建path元素
    const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement.setAttribute("d", "M0 512C0 229.234759 229.234759 0 512 0s512 229.234759 512 512-229.234759 512-512 512S0 794.765241 0 512z m419.310345 194.630621a35.310345 35.310345 0 0 0 49.399172 1.271172l335.518897-311.931586a35.310345 35.310345 0 0 0-48.075035-51.729655l-309.124413 289.544827-145.125518-149.645241a35.310345 35.310345 0 1 0-50.688 49.169655l168.112552 173.320828z");
    pathElement.setAttribute("fill", "#00D26A");
    pathElement.setAttribute("p-id", "9759");

    // 将path元素添加到svg元素中
    svgElement.appendChild(pathElement);

    // 获取容器元素
    const container_list = document.querySelectorAll("." + class_name);
    container_list.forEach(container => {
        // 将svg元素添加到容器中
        container.appendChild(svgElement.cloneNode(true));  // 使用cloneNode(true)来复制svg元素及其子元素
    })
}

function add_icon_check(class_name){
    // 创建SVG元素
    const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("t", "1730717079128");
    svgElement.setAttribute("class", "icon");
    svgElement.setAttribute("viewBox", "0 0 1024 1024");
    svgElement.setAttribute("version", "1.1");
    svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgElement.setAttribute("p-id", "1912");

    // 创建path元素
    const pathElement1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement1.setAttribute("d", "M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z");
    pathElement1.setAttribute("fill", "#FF6582");
    pathElement1.setAttribute("p-id", "1913");

    const pathElement2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement2.setAttribute("d", "M601.6 207.616a228.608 228.608 0 0 0-195.712 346.432l-65.6 54.784L253.632 506.24l-56.128 47.36 86.4 102.4L192.64 732.16l47.104 56.448 91.52-76.48 86.528 102.4 56.192-47.36-86.272-102.208 65.728-54.912a226.56 226.56 0 0 0 148.16 54.592c61.376 0 118.976-23.68 162.176-66.752a227.2 227.2 0 0 0 67.072-162.048A229.056 229.056 0 0 0 601.6 207.616z m0 383.552a155.008 155.008 0 1 1 0-310.08 155.456 155.456 0 0 1 155.712 154.88A155.648 155.648 0 0 1 601.6 591.104z");
    pathElement2.setAttribute("fill", "#FFFFFF");
    pathElement2.setAttribute("p-id", "1914");

    // 将path元素添加到svg元素中
    svgElement.appendChild(pathElement1);
    svgElement.appendChild(pathElement2);

    // 获取容器元素
    const container = document.getElementById("svg-container");

    // 将svg元素添加到容器中
    container.appendChild(svgElement);
}

 <svg t="1730717079128" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1912">
 <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#FF6582" p-id="1913"></path>
 <path d="M601.6 207.616a228.608 228.608 0 0 0-195.712 346.432l-65.6 54.784L253.632 506.24l-56.128 47.36 86.4 102.4L192.64 732.16l47.104 56.448 91.52-76.48 86.528 102.4 56.192-47.36-86.272-102.208 65.728-54.912a226.56 226.56 0 0 0 148.16 54.592c61.376 0 118.976-23.68 162.176-66.752a227.2 227.2 0 0 0 67.072-162.048A229.056 229.056 0 0 0 601.6 207.616z m0 383.552a155.008 155.008 0 1 1 0-310.08 155.456 155.456 0 0 1 155.712 154.88A155.648 155.648 0 0 1 601.6 591.104z" fill="#FFFFFF" p-id="1914"></path></svg>


