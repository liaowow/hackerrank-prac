function toAdjacencyList(vertexList, edgeList, isUndirected=false) {
  let output = new Map();
  
  // Seed the adjacency list with every vertex
  vertexList.forEach(v => output.set(v, []));
  // Build out the adjacency list
  edgeList.forEach(
    edge => {
      output.get(edge[0]).push(edge[1]);
      if (isUndirected) {
        output.get(edge[1]).push(edge[0]);
      }
    }
  );
  
  return output;
}

vertexList = [1, 2, 3, 4];
edgeList = [
    [1, 2],
    [1, 3],
    [3, 4],
];

const output = document.getElementById('output');
const adjList = toAdjacencyList(vertexList, edgeList);


const outputAdjList = JSON.stringify(Object.fromEntries(adjList));
output.innerHTML = "Vertex List: " + JSON.stringify(vertexList) + "<br/>" + 
                   "Edge List: " + JSON.stringify(edgeList) + "<br/>" +
                   "Adjacency List: " + outputAdjList;