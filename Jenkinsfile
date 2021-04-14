pipeline {
    agent {
        docker {
            image 'node:13.12.0-alpine'
            args '-p 3000:3000 -p 5000:5000'
        }
    }

    environment {
        CI = 'true'
        HOME = '.'
        npm_config_cache = 'npm-cache'
    }

    stages {
        stage('Clone git') {
            steps {
                git 'https://github.com/stainley/react-portfolio.git'
            }
        }
        stage('Install Packages') {
            steps {
                sh 'npm install'
            }
        }

        parallel {
            stage('Unit Test') {
                steps {
                    sh './jenkins/scripts/test.sh'
                }
            }
            stage('Integration Test') {
                steps {
                    sh './jenkins/scripts/test.sh'
                }
            }
        }

        stage('Build and Deploy - Production') {
            when {
                branch 'master'
            }
            steps {
                sh './jenkins/scripts/deploy-for-production.sh'
            }
        }

        stage('Build and Deploy - QA') {
            when {
                branch 'development'
            }
            steps {
                sh './jenkins/scripts/deploy-for-qa.sh'
            }
        }

        /* stage('Production') {
            steps {
                withAWS(region:'YOUR_BUCKET_REGION',credentials:'CREDENTIALS_FROM_JENKINS_SETUP') {
                    s3Delete(bucket: 'YOUR_BUCKET_NAME', path:'** /* *//*')
                    s3Upload(bucket: 'YOUR_BUCKET_NAME', workingDir:'build', includePathPattern:'** /* *//*');
                }
            }
        } */
    }
}
