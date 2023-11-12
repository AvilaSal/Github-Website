
// Sample data
const data = [10, 20, 30, 40, 50];

// Create an SVG element
const svg = d3.select("#chart-container")
    .append("svg")
    .attr("width", 500)
    .attr("height", 300);

// Create bars for each data point
svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 60)
    .attr("y", (d) => 300 - d)
    .attr("width", 50)
    .attr("height", (d) => d)
    .attr("fill", "blue");

// Add labels to the bars
svg.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .text((d) => d)
    .attr("x", (d, i) => i * 60 + 20)
    .attr("y", (d) => 300 - d - 5)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .attr("fill", "white");
