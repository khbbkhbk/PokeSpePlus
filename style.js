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

function add_icon(class_name){
    // 创建SVG元素
    const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("class", "icon");
    svgElement.setAttribute("viewBox", "0 0 1024 1024");
    svgElement.setAttribute("version", "1.1");
    svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    // 创建path元素
    const pathElement1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement1.setAttribute("d", "M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z");

    const pathElement2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement2.setAttribute("fill", "#FFFFFF");

    if (class_name ==="icon_F_father"){
        svgElement.setAttribute("t", "1730717079128");
        svgElement.setAttribute("p-id", "1912");

        pathElement1.setAttribute("fill", "#FF6582");
        pathElement1.setAttribute("p-id", "1913");

        pathElement2.setAttribute("d", "M601.6 207.616a228.608 228.608 0 0 0-195.712 346.432l-65.6 54.784L253.632 506.24l-56.128 47.36 86.4 102.4L192.64 732.16l47.104 56.448 91.52-76.48 86.528 102.4 56.192-47.36-86.272-102.208 65.728-54.912a226.56 226.56 0 0 0 148.16 54.592c61.376 0 118.976-23.68 162.176-66.752a227.2 227.2 0 0 0 67.072-162.048A229.056 229.056 0 0 0 601.6 207.616z m0 383.552a155.008 155.008 0 1 1 0-310.08 155.456 155.456 0 0 1 155.712 154.88A155.648 155.648 0 0 1 601.6 591.104z");

        pathElement2.setAttribute("p-id", "1914");
        // 将path元素添加到svg元素中
        svgElement.appendChild(pathElement1);
        svgElement.appendChild(pathElement2);
    }
    else if (class_name ==="icon_M_father"){
        svgElement.setAttribute("t", "1730716487085");
        svgElement.setAttribute("p-id", "5742");

        pathElement1.setAttribute("fill", "#4F90F8");
        pathElement1.setAttribute("p-id", "5743");

        pathElement2.setAttribute("d", "M457.408 391.68c-99.2 0-179.648 79.616-179.648 177.536s80.576 177.536 179.648 177.536c99.008 0 179.712-79.68 179.712-177.536-0.064-97.92-80.64-177.536-179.712-177.536z m373.312 45.056h-85.12v-95.36l-74.624 73.856c33.152 44.48 51.136 98.432 51.2 153.92 0 144.256-118.784 261.568-264.768 261.568-145.984 0-264.768-117.312-264.768-261.568 0-144.192 118.784-261.568 264.768-261.568 57.088 0 109.76 18.112 152.96 48.512l80.512-79.488H582.592V192.576h248.128v244.16z");

        pathElement2.setAttribute("p-id", "5744");
        // 将path元素添加到svg元素中
        svgElement.appendChild(pathElement1);
        svgElement.appendChild(pathElement2);
    }
    else{
        svgElement.setAttribute("t", "1730717986002");
        svgElement.setAttribute("p-id", "2238");

        pathElement1.setAttribute("fill", "#909399");
        pathElement1.setAttribute("p-id", "1913");

        // 创建g元素
        const gElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
        gElement.setAttribute("transform", "translate(170, 120) scale(0.7)");

        pathElement2.setAttribute("d", "M923.496569 583.465285a53.535499 53.535499 0 0 1-11.055131 72.267805l-6.653552 4.503943-306.57518 176.882107 150.063176 86.700894a53.535499 53.535499 0 0 1-46.472498 96.220591l-7.165363-3.582682-203.598675-117.511955L288.543032 1016.457943a53.535499 53.535499 0 0 1-60.086688-88.236329l6.551189-4.40158 149.960815-86.700894L78.49553 660.237033a53.535499 53.535499 0 0 1 46.472498-96.220591l7.063001 3.377957 360.008317 207.897893 360.213041-207.795531a53.535499 53.535499 0 0 1 71.346545 15.968524zM492.24407 0a329.606705 329.606705 0 1 1 0 659.213409 329.606705 329.606705 0 0 1 0-659.213409z m0 107.17336a222.535707 222.535707 0 1 0 0 444.969052 222.535707 222.535707 0 0 0 0-444.969052z");

        pathElement2.setAttribute("p-id", "2239");

        // 将path元素添加到svg元素中
        svgElement.appendChild(pathElement1);
        gElement.appendChild(pathElement2);
        svgElement.appendChild(gElement);
    }

    // 获取容器元素
    const container_list = document.querySelectorAll("." + class_name);
    container_list.forEach(container => {
        // 将svg元素添加到容器中
        container.appendChild(svgElement.cloneNode(true));  // 使用cloneNode(true)来复制svg元素及其子元素
    })
}





