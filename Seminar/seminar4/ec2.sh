$ sudo apt-get install curl
$ curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
$ sudo apt-get install -y nodejs
$ sudo apt-get install build-essential

$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.39.1/install.sh | bash
$ export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
$ nvm install --lts
$ npm install -g yarn

$ sudo apt-get install vim

$ vim .env

$ npm install -g pm2

// 프로젝트 루트 경로로 이동해서 빌드
$ yarn run build

// pm2 start 명령어
$ pm2 start dist

// 프로세스 별 상태 확인
$ pm2 monit

// 로그 확인
$ pm2 logs

// 라인 수 지정 로그 확인
$ pm2 logs --lines 100

// 프로세스 리스트 보기
$ pm2 list 

// 중지
$ pm2 stop <id|name|all|json|stdin>

// 삭제
$ pm2 delete <id|name|all|json|stdin>

// 재시작
$ pm2 restart <id|name|all|json|stdin>