pipeline {
    agent any

    tools {
        nodejs 'node23.11.0' // Make sure this matches your Jenkins Node.js installation name
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/rahulcr2020/Playwright-Practice.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright install'  // Ensures browsers are installed
                sh 'npx playwright test'
            }
        }

        stage('Build') {
            steps {
                echo 'Add build steps if needed'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}
