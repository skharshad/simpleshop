pipeline {
    agent any
    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/skharshad/simpleshop.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'cd backend && npm install'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t simpleshop .'
            }
        }
        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 3000:3000 simpleshop'
            }
        }
    }
}
