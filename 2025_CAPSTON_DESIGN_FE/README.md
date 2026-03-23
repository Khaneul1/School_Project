# 2025_CAPSTON_DESIGN_FE
2025년 백석대학교 컴퓨터공학부 캡스톤디자인 수업 졸업 프로젝트 (프론트엔드)

** 설치해야 할 라이브러리
(1) React Navigation
npm install @react-navigation/native @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context

** 각자 로컬에 local.properties 생성
android/local.properties
해당 파일에는 sdk.dir=주소 가 들어가야 함!!

예시 : sdk.dir=/Users/khaneul/Library/Android/sdk
-> 안드로이드 스튜디오 sdk manager 상단에 뜨는 경로 복사해서 붙여넣으면 됨

** .gitignore 파일에
# React Native
node_modules/
android/local.properties
ios/Pods/

추가할 것! (없을 경우)
