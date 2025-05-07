pipeline {
    agent any

    tools {
        nodejs 'NodeJS_20' // Adjust based on your Jenkins NodeJS tool name
    }

    environment {
        PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = "1"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/rahulcr2020/Playwright-Practice.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}
