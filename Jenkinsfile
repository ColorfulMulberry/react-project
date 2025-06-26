pipeline {
  agent any
  environment {
    VERCEL_HOOK_URL = 'https://api.vercel.com/v1/integrations/deploy/prj_uAnNe1Kge0maXJnf2ScuPTgd1sv5/oNLzKdT830'
  }
  stages {
    stage('Git Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/ColorfulMulberry/react-project.git'
      }
    }
    stage('Install Dependencies') {
      steps {
        bat 'npm install'
      }
    }
    stage('Build') {
      steps {
        bat 'npm run build'
      }
    }
    stage('Deploy to Vercel') {
      steps {
        bat "curl -X POST $VERCEL_HOOK_URL"
      }
    }
  }
}