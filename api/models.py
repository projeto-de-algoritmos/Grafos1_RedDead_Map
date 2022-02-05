class GraphModel():
    
    def __init__(self, edges) -> None: 
        """
        Init graph as a dictionary

        edges = { "A": ["B", "C"], "B": ["A"] }
        """
        self.graph = dict
        self.add_edges(edges)
    
    def add_egdes(self, edges) -> None:
        """
        Add edges to graph as dictionary of lists
        """
        self.graph = edges

    def get_edges(self) -> None:
        """
        Returns all graph's edges
        """
        edges = []
        for key in self.graph.keys():
          edges.append(key)
        return edges

    def get_nodes(self) -> list:
        """
        Returns all graph's nodes
        """
        return list(self.graph.keys())

    def get_neighbors(self) -> dict:
        return self.graph
