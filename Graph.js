class Graph {
    constructor() {
        this.adj = {};
        this.vertices = 0;
    }

    connect(a, b) {
        if (this.adj[a]) {
            this.adj[a].push(b);
        } else {
            this.adj[a] = [b];
        }
    }

    dfsUtil(root, visited) {
        visited[root] = true;
        this.adj[root]?.forEach(next => {
            if(!visited[next]) {
                this.dfsUtil(next, visited); 
            }
        });
        console.log(root);
        
    }
    
    dfs(root) {
        const visited = {};
        this.dfsUtil(root, visited);
    }
}

const graph = new Graph();
graph.connect('a', 'b');
graph.connect('b', 'c');
graph.connect('a', 'd');
graph.connect('c', 'e');
graph.connect('b', 'k');

graph.connect('e', 9);
graph.dfs('a');