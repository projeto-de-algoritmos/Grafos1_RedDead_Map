from flask import json
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
        "Mount Hagen": ["Valetine"],
        "Rhodes": [
            "Valetine",
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
