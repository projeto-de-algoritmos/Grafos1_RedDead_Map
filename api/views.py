from flask import json, request
from server import server
from models import GraphModel

app = server.app

cities = {
        "Blackwater": [
            "Strawberry",
            "Valentine",
            "Armadillo"
        ],
        "Valentine": [
            "Rhodes",
            "Blackwater",
            "Mount Hagen"
        ],
        "Annesburg": [
            "Van Horn",
            "Saint Denis",
            "Rhodes"
        ],
        "Van Horn": ["Annesburg"],
        "Saint Denis": [
            "Annesburg",
            "Rhodes"
        ],
        "Mount Hagen": ["Valentine"],
        "Rhodes": [
            "Valentine",
            "Saint Denis",
            "Annesburg"
        ],
        "Strawberry": [
            "Blackwater",
            "Armadillo"
        ],
        "Tumbleweed": ["Armadillo"],
        "Armadillo": [
            "Tumbleweed",
            "Strawberry",
            "Blackwater"
        ]
}

graph = GraphModel(edges=cities)

class RedDeadCitiesView():
    """main view of Red Dead API"""

    @app.route('/', methods=['GET'])
    def get() -> dict:
        """get method"""
        return json.dumps(cities), 200

    @app.route('/path', methods=['POST'])
    def post() -> list:
        """returns shortest path between two cities"""
        body = request.get_json()
        start = body.get("start")
        end = body.get("end")
        return json.dumps(graph.find_shortest_path(start=start, end=end))

    @app.route('/cities', methods=['GET'])
    def get_cities() -> dict:
        """returns all nodes"""
        return json.dumps(graph.get_nodes()), 200
