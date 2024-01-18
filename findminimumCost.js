function findminimumCost(tree_nodes, tree_from, tree_to, tree_weight, start, end) {
    // Create an adjacency list to represent the tree
    const adjList = new Map();
    for (let i = 1; i <= tree_nodes; i++) {
        adjList.set(i, []);
    }

    for (let i = 0; i < tree_from.length; i++) {
        adjList.get(tree_from[i]).push({ to: tree_to[i], weight: tree_weight[i] });
        adjList.get(tree_to[i]).push({ to: tree_from[i], weight: tree_weight[i] });
    }

    // Initialize variables to store minimum cost and visited nodes
    let minCost = Infinity;
    const visited = new Set();

    function dfs(node, pathCost, remainingNodes) {
        // Mark the current node as visited
        visited.add(node);

        // Check if all nodes have been visited
        if (remainingNodes.size === 0) {
            // Update the minimum cost
            minCost = Math.min(minCost, pathCost);
        } else {
            // Explore adjacent nodes
            for (const neighbor of adjList.get(node)) {
                if (!visited.has(neighbor.to)) {
                    const newRemainingNodes = new Set(remainingNodes);
                    newRemainingNodes.delete(neighbor.to);

                    // Calculate cost for the edge
                    const edgeCost = neighbor.weight * Math.ceil(newRemainingNodes.size / 2);

                    // Recursively explore the next node
                    dfs(neighbor.to, pathCost + edgeCost, newRemainingNodes);
                }
            }
        }

        // Unmark the current node as visited (backtrack)
        visited.delete(node);
    }

    // Start DFS from the given start node
    dfs(start, 0, new Set(Array.from({ length: tree_nodes }, (_, i) => i + 1).filter(node => node !== start)));

    return minCost;
}

// Example usage:
const tree_nodes = 4;
const tree_from = [1, 2, 2, 3];
const tree_to = [2, 3, 4, 2];
const tree_weight = [2, 3, 4, 1];
const start = 1;
const end = 4;

const result = findminimumCost(tree_nodes, tree_from, tree_to, tree_weight, start, end);
console.log(result);




















function findminimumCost(tree_nodes, tree_from, tree_to, tree_weight, start) {
    const adjList = new Map();

    for (let i = 1; i <= tree_nodes; i++) {
        adjList.set(i, []);
    }

    for (let i = 0; i < tree_from.length; i++) {
        adjList.get(tree_from[i]).push({ to: tree_to[i], weight: tree_weight[i] });
        adjList.get(tree_to[i]).push({ to: tree_from[i], weight: tree_weight[i] });
    }

    let minCost = Infinity;

    function dfs(node, pathCost, remainingNodes) {
        remainingNodes.delete(node);

        if (remainingNodes.size === 0) {
            minCost = Math.min(minCost, pathCost);
        } else {
            for (const neighbor of adjList.get(node)) {
                if (remainingNodes.has(neighbor.to)) {
                    const edgeCost = neighbor.weight * Math.ceil(remainingNodes.size / 2);
                    dfs(neighbor.to, pathCost + edgeCost, new Set(remainingNodes));
                }
            }
        }
    }

    dfs(start, 0, new Set(Array.from({ length: tree_nodes }, (_, i) => i + 1).delete(start)));

    return minCost;
}

// Example usage:
const tree_nodes = 4;
const tree_from = [1, 2, 2, 3];
const tree_to = [2, 3, 4, 2];
const tree_weight = [2, 3, 4, 1];
const start = 1;

const result = findminimumCost(tree_nodes, tree_from, tree_to, tree_weight, start);
console.log(result);

