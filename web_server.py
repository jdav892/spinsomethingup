from http.server import SimpleHTTPRequestHandler, HTTPServer
import os 
"""Can also use BaseHTTPRequestHandler rather than Simple depending on needs """
hostName = "localhost"
serverPort = 8080
"""Add other files to be read to fit needs"""
class CustomHTTPRequestHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.path = 'index.html'
        return super().do_GET()
    
def run(server_class = HTTPServer, handler_class = CustomHTTPRequestHandler, port = 8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f"Starting httpd server on port {port}....")
    httpd.serve_forever()
"""script is being executed directly and not imported"""
if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    run()
