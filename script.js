document.addEventListener('DOMContentLoaded', function() {
    const htmlCode = document.getElementById('html-code');
    const cssCode = document.getElementById('css-code');
    const jsCode = document.getElementById('js-code');
    const outputFrame = document.getElementById('output-frame').contentWindow.document;

    function updateOutput() {
        const html = htmlCode.value;
        const css = `<style>${cssCode.value}</style>`;
        const js = `<script>${jsCode.value}<\/script>`;

        outputFrame.open();
        outputFrame.write(html + css + js);
        outputFrame.close();
    }

    htmlCode.addEventListener('input', updateOutput);
    cssCode.addEventListener('input', updateOutput);
    jsCode.addEventListener('input', updateOutput);

    // Initial render
    updateOutput();
});