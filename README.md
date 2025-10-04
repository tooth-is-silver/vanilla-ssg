# vanilla-ssr

블로그를 참고하여 vanilla로 ssr만들어보기

[프레임워크 없이 만드는 SSR](https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Server-Side-Rendering/)

# 목표

- [] 서버 구현하기
- [] CSR 구현하기
- [] 서버 + CSR = SSR 구현하기
- [] SSR에서 새로고침시 데이터가 왜 사라지는지 이해했는가?
- [] CSR에서 새로고침시 데이터가 왜 사라지는지 이해했는가?
- [] SSR구현시 데이터가 사라지지 않도록 구현한 로직을 이해했는가?

# 추가 목표

- [] input으로 할일 정보를 문자열로 받도록 구현하기
- [] 라우팅 구현 (블로그 참조)
- [] delete시 index를 받아서 특정 값을 삭제하도록 구현하기

---

# SSR를 구현하면서 배운 점 기록(작성중)

Nextjs에서 브라우저에서 window.**NEXT**로 데이터를 사용한 경우가 있었는데 왜 그 데이터가 있었는지 이해됨

CSR과 서버에서 데이터를 동기화 시키기위해 구현해야하는 로직을 이해함

SSR에서 새로고침시 데이터가 유지되지 않는 이유?

CSR만 구현시에 데이터가 유지되지 않는 이유?
