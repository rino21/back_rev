pipeline {
    agent any
    environment {
        DOCKER_COMPOSE = "docker-compose"
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url:'https://github.com/rino21/back_rev.git'
            }
        }
        stage('Build and Deploy') {
            steps {
                sh "${DOCKER_COMPOSE} down"
                sh "${DOCKER_COMPOSE} up -d --build"
            }
        }
        stage('Test') {
            steps {
                sh 'curl -f http://localhost || exit 1'
            }
        }
    }
    post {
        success {
            echo 'Déploiement fullstack avec Nginx réussi !'
        }
        failure {
            echo 'Échec du déploiement'
        }
    }
}
