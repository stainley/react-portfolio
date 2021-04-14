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

        stage('Test'){
            parallel {
                stage('Unit Test') {
                    steps {
                        sh 'echo grand permission'
                        sh 'chmod 777 ./jenkins/scripts/test.sh'
                        sh 'echo  Permission granted'
                        sh './jenkins/scripts/test.sh'
                    }
                }
                stage('Integration Test') {

                    steps {
                        sh 'chmod 777 ./jenkins/scripts/test.sh'
                        sh './jenkins/scripts/test.sh'
                    }
                }
            }
        }

        stage('Build and Deploy - QA') {
            when {
                branch 'development'
            }
            steps {
                sh 'chmod 777 ./jenkins/scripts/deploy-for-qa.sh'
                sh './jenkins/scripts/deploy-for-qa.sh'
            }
        }

        stage('Build and Deploy - Production') {
            when {
                branch 'master'
            }            
            steps {
                sh 'chmod 777 ./jenkins/scripts/deploy-for-production.sh'
                sh './jenkins/scripts/deploy-for-production.sh'
                withCredentials([usernamePassword(credentialsId: 'docker_hub', passwordVariable: 'PWD', usernameVariable: 'USR')]){
                    sh 'echo username $USR and password $PWD | base64'
                    sh '$PWD | docker login -u stainley --password-stdin'
                    sh 'echo Logging Successful at DOCKER HUB'
                    sh 'docker push stainley/portfolio-react:0.1.1'
                }
            }
        }
    }
}
