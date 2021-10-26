export function GenNum() {
    return Math.ceil(Math.random()*10)
}

export function ValidNum(num1:number, num2:number,userResult:number){
    const result = num1*num2;
    return (userResult==result? true : false)

}