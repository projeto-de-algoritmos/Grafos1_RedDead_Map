from flask import Flask

class Server():
    """
    Instance class of API server
    """
    def __init__(self) -> None:
        self.app = Flask(__name__)

    def run(self) -> None:
        self.app.run(debug=True, host="0.0.0.0")


server = Server()
