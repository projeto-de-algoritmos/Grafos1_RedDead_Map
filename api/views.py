from server import server

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

class RedDeadCitiesView():
    """main view of Red Dead API"""

    @app.route('/', methods=['GET'])
    def get() -> dict:
        """get method"""
        return cities
