from http.server import SimpleHTTPRequestHandler, HTTPServer
import os 

hostName = "localhost"
serverPort = 8080

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
    
if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    run()