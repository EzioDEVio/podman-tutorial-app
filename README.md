[![Podman Build and Trivy Scan](https://github.com/EzioDEVio/podman-tutorial-app/actions/workflows/podman-trivy.yml/badge.svg)](https://github.com/EzioDEVio/podman-tutorial-app/actions/workflows/podman-trivy.yml)

# **Podman Interactive Web App**

### A simple, interactive Node.js web application demonstrating how to use **Podman** to containerize and deploy apps in a secure, scalable way.

## **Overview**

This project is an open-source example of how to containerize and deploy a basic web application using **Podman**, a daemonless container engine. The app provides users with an interactive experience, including the ability to toggle dark and light modes and submit their names to get personalized greetings. This is a simple example of using modern web technologies inside containers to create engaging applications.

The app has been built using **Node.js** and **Express.js** and includes:

- **Dynamic feedback** on user interactions.
- A **theme toggle** feature to switch between dark and light modes.
- A secure, production-ready Dockerfile for containerization.
- Deployment with **Podman** for enhanced security and ease of use.
- Exclusion of unnecessary files from the image build using `.dockerignore`.

## **Table of Contents**
1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Podman Setup](#podman-setup)
5. [Running the App](#running-the-app)
6. [Building the Docker Image](#building-the-docker-image)
7. [Running the Docker Image](#running-the-docker-image)
8. [Contributing](#contributing)
9. [License](#license)

---

## **Features**

- **Interactive Web App**: The app allows users to input their names and receive personalized greetings.
- **Theme Switching**: Users can toggle between dark and light modes for the interface.
- **Loading Animation**: Provides a dynamic loading animation when the form is submitted.
- **Secure Containerization**: The project includes a secure Dockerfile that adheres to container security best practices using **Podman**.
- **Open Source**: Contributions are welcome to extend the project further.

---

## **Prerequisites**

Before you begin, ensure you have the following:

- **Node.js** (v14 or higher) installed on your system. You can download it [here](https://nodejs.org/en/download/).
- **Podman** installed. Instructions can be found [here](https://podman.io/getting-started/installation).
- Basic knowledge of **Docker** or **Podman**.
- A GitHub or GitLab account to contribute to the project.

---

## **Installation**

To get started with this project, you need to clone the repository and install the required dependencies.

1. **Clone the repository**:

```bash
git clone https://github.com/your-username/podman-tutorial-app.git
cd podman-tutorial-app
```

2. **Install dependencies**:

```bash
npm install
```

---

## **Podman Setup**

To run the application within a Podman container, you need to ensure that Podman is installed and set up correctly on your machine.

1. **Install Podman**:
   - You can install Podman using a package manager like **winget** or **brew**.
   - Alternatively, follow the instructions for your operating system [here](https://podman.io/getting-started/installation).

2. **Initialize and start Podman Machine** (if on MacOS or Windows):

```bash
podman machine init
podman machine start
```

3. **Verify Podman installation**:

```bash
podman --version
```

---

## **Running the App**

Once you have installed the dependencies, you can run the app locally to verify everything works before containerizing it.

1. **Start the app**:

```bash
node app.js
```

2. **Access the app**:
   Open a browser and navigate to `http://localhost:3000`. You should see the welcome page with the interactive features.

---

## **Building the Docker Image**

We will use **Podman** to build the Docker image for this application. Podman is Docker-compatible and provides additional security by not requiring a root daemon.

1. **Build the image**:

```bash
podman build -t podman-tutorial-app .
```

This command builds the image and tags it as `podman-tutorial-app`.

---

## **Running the Docker Image**

After building the image, you can run it in a Podman container.

1. **Run the container**:

```bash
podman run -d -p 3000:3000 --name podman-tutorial-app podman-tutorial-app
```

This command runs the container in detached mode (`-d`) and maps port `3000` on the host to port `3000` in the container.

2. **Access the app**:
   - Open a browser and navigate to `http://localhost:3000` to view the running app inside the Podman container.

---

## **Development Workflow**

If you're making changes to the project and testing them, the following workflow will help you work efficiently with Podman.

1. **Stop and remove the running container**:

```bash
podman stop podman-tutorial-app
podman rm podman-tutorial-app
```

2. **Rebuild the image** (after making code changes):

```bash
podman build -t podman-tutorial-app .
```

3. **Re-run the container**:

```bash
podman run -d -p 3000:3000 --name podman-tutorial-app podman-tutorial-app
```

---

## **Contributing**

We welcome contributions to improve this project. Here are a few ways you can help:

1. **Reporting Bugs**: If you find any bugs, please create an issue in this repository.
2. **Adding Features**: Want to add a feature? Fork the repo, make the changes, and create a pull request (PR).
3. **Documentation Improvements**: Help us improve the README or other documentation by submitting PRs.

### **Steps to Contribute**:
1. Fork this repository.
2. Create a branch with a descriptive name.
3. Make your changes in your branch.
4. Push the changes to your forked repo.
5. Open a pull request on the main repo.

---

## **License**

This project is licensed under the **MIT License**. You’re free to use, modify, and distribute this software. See the `LICENSE` file for more details.

---

### **Contact**
If you have any questions or need further assistance, feel free to open an issue on the GitHub repository or contact us via the project's discussion board.

