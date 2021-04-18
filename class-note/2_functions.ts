// TS 함수 파라미터 타입정의, return 타입정의
function sum(a: number, b: number): number {
    return a+b;
}

// TS 함수의 옵셔널 파라미터
function log(a: string, b?: string, c?: string) {

}
log("hello");
log("hello", "str");
log("hello", "str", "str2");