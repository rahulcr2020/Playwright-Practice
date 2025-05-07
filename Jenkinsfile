pipeline {
    agent any

    tools {
        nodejs 'node23.11.0' // or whatever exact name you see in the NodeJS section of Global Tool Configuration
    }

  stages {
    stage('Checkout Code') {
        steps {
            git branch: 'main', url: 'https://github.com/rahulcr2020/Playwright-Practice.git'
        }
    }
}

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        // Optional: deploy stage
        // stage('Deploy') {
        //     steps {
        //         sh './deploy.sh'
        //     }
        // }
    }
}
