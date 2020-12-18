pipeline {
	environment {
    		def APP_NAME = "petclinic"
    		def GIT_REPO_NAME = "VD3352"
    		def DEPLOY_ENV = "dev"
	}
    	agent any
    	stages {
		stage('Code Checkout') {
			steps {
				sh "if [ -d ${APP_NAME} ]; then rm -rf ${APP_NAME}; fi"
				sh "git clone https://github.com/${GIT_REPO_NAME}/${APP_NAME}.git"
			}
		}
		stage('Run protractor script'){
			steps {
				sh "cd /petclinic"
				sh "npm install"
				sh "npm start"
				sh "npm test"			
			}
		}		
    	}
	post { 
		success { 
		    echo "TEsting completed, results will found at - /petclinic/Reports/2020-12-18.html"
		}
		failure { 
		    echo "Please check logs for more details."
		}
    	}
}
