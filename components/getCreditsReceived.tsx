export default function getCreditsReceived(credits:number, grade:string) {
    if(grade === "A" || grade === "A*") return credits
    if(grade === "B") return credits*0.8
    if(grade === "C") return credits*0.6
    if(grade === "D") return credits*0.4
    if(grade === "E") return credits*0.2
    if(grade === "F") return 0    
    return 0
}