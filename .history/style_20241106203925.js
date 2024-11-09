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


