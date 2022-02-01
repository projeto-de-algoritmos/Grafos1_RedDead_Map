from server import server

app = server.app

cities = {
    "title": "Red Dead Redemption II cities",
    "cities": [
        "Blackwater",
        "Valentine",
        "Annesburg",
        "Saint Denis",
        "Mount Hagen",
        "Rhodes",
        "Strawberry",
        "Lagras"
    ]
}

class RedDeadCitiesView():
    """main view of Red Dead API"""

    @app.route('/', methods=['GET'])
    def get() -> dict:
        """get method"""
        return cities
