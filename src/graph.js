import './general'

class Graph {
    constructor() {
        this.$canvas = document.getElementById('canvasImg');
        this.$context = this.$canvas.getContext("2d");

        this.drawAxes = this.drawAxes.bind(this);

        this.drawAxes();
    }

    drawAxes(baseX, baseY, chartWidth) {
        let leftY, rightX;
        leftY = 5;
        rightX = baseX + chartWidth;
        // Draw y axis.
        this.$context.moveTo(baseX, leftY);
        this.$context.lineTo(baseX, baseY);
        // Draw arrow for y axis.
        this.$context.moveTo(baseX, leftY);
        this.$context.lineTo(baseX + 5, leftY + 5);
        this.$context.moveTo(baseX, leftY);
        this.$context.lineTo(baseX - 5, leftY + 5);
        // Draw x axis.
        this.$context.moveTo(baseX, baseY);
        this.$context.lineTo(rightX, baseY);
        // Draw arrow for x axis.
        this.$context.moveTo(rightX, baseY);
        this.$context.lineTo(rightX - 5, baseY + 5);
        this.$context.moveTo(rightX, baseY);
        this.$context.lineTo(rightX - 5, baseY - 5);
        // Define style and stroke lines.
        this.$context.strokeStyle = "red";
        this.$context.stroke();
     }
}
new Graph();