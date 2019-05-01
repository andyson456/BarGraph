import './general'

class Graph {
    constructor() {
        this.$canvas = document.getElementById('canvasImg');
        this.$context = this.$canvas.getContext("2d");

        this.salesData = [{
            category: "Customer1",
            sales: 150
         }, {
            category: "Customer2",
            sales: 125
         }, {
            category: "Customer3",
            sales: 300
         }];

        this.drawAxes = this.drawAxes.bind(this);

        this.drawAxes(120, 400, 500);
        this.createLabels();
        this.drawBars();
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
        this.$context.strokeStyle = "black";
        this.$context.stroke();
     }

     createLabels() {
        let height, widthOffset;
        height = this.$context.canvas.height;
        widthOffset = this.$context.canvas.width/2;
        this.$context.font = "bold 18px sans-serif";
        this.$context.fillText("Product", widthOffset, height - 10);
        this.$context.fillText("Units Sold", 0, 100);
        this.$context.fillText("(In Hundreds)", 0, 120);
     }

     drawBars() {
        let i, length, category, sales;
        let barWidth = 80;
        let xPos = 180;
        let baseY = 400;       
        for (i = 0, length = this.salesData.length; i < length; i++) {
           category = this.salesData[i].category;
           sales = this.salesData[i].sales;
           this.$context.fillRect(xPos, baseY - sales-1, barWidth, sales);
           this.$context.fillText(category, xPos, baseY + 13, sales);
           xPos += 125;
        }
     }
}
new Graph();