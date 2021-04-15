pipeline {
       agent any
    /* agent {
        docker {
            image 'node:13.12.0-alpine'
            args '-p 3000:3000'
        }
    } */

    tools {
        jdk 'JAVA_HOME'
    }
    
    environment {
        CI = 'true'
        HOME = '.'
        npm_config_cache = 'npm-cache'
        DOCKER_HUB_PASSWORD = credentials('docker_hub_password')
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
                        sh 'chmod 777 ./jenkins/scripts/test.sh'
                        sh './jenkins/scripts/test.sh'
                        //junit 'coverage/junit.xml'
                    }
                }
                /* stage('Coverage') {
                    steps {
                        sh 'npm run test --coverage'
                        cobertura(autoUpdateHealth: true, autoUpdateStability: true, coberturaReportFile: '**//* coverage/clover.xml', failNoReports: true, classCoverageTargets: '70', lineCoverageTargets: '80', fileCoverageTargets: '90', sourceEncoding: 'ASCII', conditionalCoverageTargets: '70')
                    }
                } */
            }
        }

         stage('Quality Code') {
                agent { docker { image 'openjdk:8u111-jdk-alpine'} }
                environment {
                    scannerHome = tool 'SonarQube Scanner'
                }
            steps {
                withSonarQubeEnv('Sonarqube') {
                        sh '${scannerHome}/bin/sonar-scanner'

                }
                timeout(time: 15, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

/*         stage('Quality Gate') {
            steps {
                timeout(time: 1, unit: 'HOURS') { // Just in case something goes wrong, pipeline will be killed after a timeout
                def qg = waitForQualityGate() // Reuse taskId previously collected by withSonarQubeEnv
                if (qg.status != 'OK') {
                    error "Pipeline aborted due to quality gate failure: ${qg.status}"
                }
            }
        } */

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
                    sh 'docker login -u $USR --password $DOCKER_HUB_PASSWORD'
                    sh 'docker push stainley/portfolio-react:0.1.1'
                }
            }
        }
    }
}
