pipeline {
    agent any

    stages {
        stage("Checkout and build react app") {
            when { expression { true }  }
            steps {
                git(url: 'http://git.abilityell.com/william/react-project.git', branch: 'main')
                
                withEnv(['CI=false']) {     //ignore warning
                    bat 'npm install'
                    // bat 'npm i -g firebase-tools -f'
                    // bat 'npm run build'
                    bat 'npm run dev'
                }    

                // bat '''
                //     echo "${FIREBASE_TOKEN}"
                //    npx firebase login --interactive --token "${FIREBASE_TOKEN}"
                //    npx firebase init
                //    echo %cd%
                //    dir
                // '''
            }
        }
        stage("Deploy React App") {
            when { expression { true }  }
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: 'docker-ssh', keyFileVariable: 'SSH_KEY')]) {
                    bat '''
                        scp -i $SSH_KEY -o StrictHostKeyChecking=no -r build/* $DOCKER_HOST:/var/www/html/
                        
                        ssh -i $SSH_KEY -o StrictHostKeyChecking=no $DOCKER_HOST 'chmod -R 755 /var/www/html/*'
                    '''
                }
            }
        }    
    }
    post {
        success {
            echo "Pipeline succeeded! ✅"
        }
        failure {
            echo "Pipeline failed! ❌"
        }
    }
}
