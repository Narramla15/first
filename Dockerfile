FROM python:3.9-slim

WORKDIR /app

# Copy your app file
COPY server.py .

# Install Flask
RUN pip install --no-cache-dir flask

# Expose the port the app runs on
EXPOSE 5000

# Run the app
CMD ["python", "server.py"]
