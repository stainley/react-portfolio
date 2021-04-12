pipeline {
    agent {
        docker {
            image 'node:13.12.0-alpine'
            args '-p 3000:3000'
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
        stage ('Test and Build') {
            parallel {
                stage('Run Test') {
                    steps {
                        sh 'npm run test'
                    }
                }
                stage('Create Build') {
                    steps {
                        sh 'npm run build'
                    }
                }
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
