pipeline {
    agent any

    environment {
        // 환경 변수 설정
        DOCKERHUB_CREDENTIALS_ID = 'dockerHub'
        DOCKERHUB_USERNAME = 'heebin00'
        IMAGE_TAG = 'v2.3' // !!!! yml파일이랑 똑같이 버전 맞추기
    }

    stages {
        stage('Checkout') {
            steps {
                // GitHub 저장소에서 소스 코드 체크아웃
                git branch: 'main', url: 'https://github.com/shinhanInternProject/FrontEnd.git'
                
            }
        }

        stage('Build & Push Docker Images') {
            steps {
                script {
                    // Docker Hub에 로그인
                    withCredentials([usernamePassword(credentialsId: "${env.DOCKERHUB_CREDENTIALS_ID}", usernameVariable: 'DOCKERHUB_USER', passwordVariable: 'DOCKERHUB_PASS')]) {
                        sh 'echo $DOCKERHUB_PASS | docker login -u $DOCKERHUB_USER --password-stdin'
                    }
                    // db 이미지 빌드 및 푸시
                    sh 'docker build -t $DOCKERHUB_USERNAME/client:$IMAGE_TAG ./'
                    sh 'docker push $DOCKERHUB_USERNAME/client:$IMAGE_TAG'
                  
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    // Jenkins 서버에 저장된 kubeconfig 파일의 경로를 설정
                    def kubeconfigPath = '/var/jenkins_home/.kube/config'

                    // KUBECONFIG 환경 변수 설정 (등호 양 옆에 공백이 없도록 주의)
                    withEnv(["KUBECONFIG=$kubeconfigPath"]) {
                        // Kubernetes 클러스터에 Deployment 적용
                        sh 'kubectl apply -f client-deployment.yml'

                    }
                }
            }
        }
    }

    post {
        always {
            // 항상 실행되는 작업, 예를 들어 클린업
            echo '이 작업은 실행 결과에 상관없이 항상 실행됩니다.'
        }
        success {
            // 빌드 성공 시 실행되는 작업
            echo '이 작업은 빌드가 성공하면 실행됩니다.'
        }
        failure {
            // 빌드 실패 시 실행되는 작업
            echo '이 작업은 빌드가 실패하면 실행됩니다.'
        }
    }
}