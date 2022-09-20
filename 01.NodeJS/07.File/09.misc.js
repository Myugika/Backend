const fs = require('fs');

// 디렉토리에 있는 파일 목록 알아내기
fs.readdir('tmp', (err, files) => {
    console.log(files);
});

// 파일의 정보 알아내기
fs.stat('tmp/a.txt', (err, stats) => {
    console.log(stats.mtime);           // 최종 수정 시간
    console.log(stats.size);            // 파일의 크기
});