var g = new dagreD3.graphlib.Graph()
  .setGraph({})
  .setDefaultEdgeLabel(function () {
    return {};
  });

// Here we're setting nodeclass, which is used by our custom drawNodes function
// below.
g.setNode(0, {
  labelType: "html",
  label:
    "<div class='node-label-inner'><div class='node-number'>7</div><div class='node-desc'>[2:4]<div></div><div>",
  class: "type-TOP",
});
g.setNode(1, { label: "7", class: "type-S" });
g.setNode(2, { label: "55", class: "type-NP" });
g.setNode(3, { label: "13", class: "type-DT" });
g.setNode(4, { label: "45", class: "type-TK" });
g.setNode(5, { label: "28", class: "type-VP" });
g.setNode(6, { label: "18", class: "type-VBZ" });
g.setNode(7, { label: "5", class: "type-TK" });
g.setNode(8, { label: "8", class: "type-NP" });
g.setNode(9, { label: "92", class: "type-DT" });
g.setNode(10, { label: "34", class: "type-TK" });
g.setNode(11, { label: "5", class: "type-NN" });
g.setNode(12, { label: "10", class: "type-TK" });
g.setNode(13, { label: "9", class: "type-." });
g.setNode(14, { label: "80", class: "type-TK" });
g.setNode(15, { label: "100", class: "type-TK" });
g.setNode(16, { label: "100", class: "type-TK" });
g.setNode(17, { label: "100", class: "type-TK" });
g.setNode(18, { label: "100", class: "type-TK" });
g.setNode(19, { label: "100", class: "type-TK" });

g.nodes().forEach(function (v) {
  var node = g.node(v);
  // Round the corners of the nodes
  node.width = node.height = 20;
  node.rx = node.ry = 20;
});

function rerenderGraph() {
  render = new dagreD3.render();
  svg = d3.select("svg");
  svgGroup = svg.append("g");
  render(d3.select("svg g"), g);
}
// Set up edges, no special attributes.
g.setEdge(3, 4, { arrowhead: "undirected" });
g.setEdge(2, 3);
g.setEdge(1, 2);
g.setEdge(6, 7);
g.setEdge(5, 6);
g.setEdge(9, 10);
g.setEdge(8, 9);
g.setEdge(11, 12);
g.setEdge(8, 11);
g.setEdge(5, 8);
g.setEdge(1, 5);
g.setEdge(13, 14);
g.setEdge(1, 13);
g.setEdge(0, 1);
g.setEdge(13, 15);
g.setEdge(13, 16);
g.setEdge(13, 17);
g.setEdge(13, 18);
g.setEdge(13, 19);

// g.edges().forEach((x) => {
//   let edge = g.edge(x);
//   edge.lineInterpolate = "basis";
// });
setTimeout(() => {
  g.edge(3, 4).class += " green";
  rerenderGraph();
}, 2000);

console.log(g.edge(3, 4));
// Create the renderer
var render = new dagreD3.render();

// Set up an SVG group so that we can translate the final graph.
var svg = d3.select("svg");
svgGroup = svg.append("g");

// Run the renderer. This is what draws the final graph.
render(d3.select("svg g"), g);

// Center the graph
var xCenterOffset = (svg.attr("width") - g.graph().width) / 2;
svg.attr("height", g.graph().height + 40);
svg.attr("width", g.graph().width + 40);
