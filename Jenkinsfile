#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node'
            args '-u root'

        }
    }
    environment {
            AWS_ACCESS_KEY_ID = credentials('aws_access_key_id')
            AWS_SECRET_ACCESS_KEY = credentials('aws_secret_access_key')


        }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'
                sh 'npm run build'
                sh 'apt-get update'
                sh 'apt-get install python-pip -y'
                sh 'apt-get install -y python-pip python-dev'
                sh 'pip install awscli'

            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                sh 'npm run deploy'
            }
        }
    }
}
