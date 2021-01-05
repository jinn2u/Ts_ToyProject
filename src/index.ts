import * as CryptoJS from "crypto-js"
class Block {
    public index: number
    public hash: string
    public previousHash: string
    public data: string
    public timestamp: number

    constructor(
        index: number, 
        hash: string, 
        previousHash: string, 
        data: string,
        timestamp: number
        ) {
        this.index = index
        this.hash = hash
        this.previousHash = previousHash
        this.data = data
        this.timestamp = timestamp
    }

// calculateBlockHash의 경우 Block Object가 없어도 밖에서 접근이 가능하다.
// non-static이라면 Block Object가 만들어져야 접근이 가능하다.
    static calculateBlockHash = (
            index: number, 
            previousHash: string, 
            timestamp: number, 
            data: string
        ): string => 
        CryptoJS.SHA256(index + previousHash + timestamp + data).toString()

    static validateStructure = (aBlock:Block): Boolean => 
        typeof aBlock.index === "number" &&
        typeof aBlock.hash === "string" &&
        typeof aBlock.previousHash === "string" &&
        typeof aBlock.timestamp === "number" &&
        typeof aBlock.data === "string"
}

const firstBlock: Block = new Block(0, "111111", "", "Hello", 1234)
let blockchain: Block[] = [firstBlock]

//가장 최근의 블록을 가져온다.
const getlatestBlock = (): Block => blockchain[blockchain.length-1]

//timeStamp생성하기
const getNewTimeStamp = (): number => Math.round(new Date().getTime()/1000)

const createNewBlock = (data:string): Block => {
    const previousBlock: Block = getlatestBlock()
    const newIndex: number = previousBlock.index + 1
    const newTimestamp: number = getNewTimeStamp()
    const newHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data)
    const newBlock: Block = new Block(
        newIndex, newHash, previousBlock.hash, data, newTimestamp
    )
    addBlock(newBlock)
    return newBlock
}

const getHashforBlock = (aBlock: Block):string => 
    Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data)
    
const isBlockValid = (candidateBlock: Block, previousBlock: Block): Boolean => {
    if(!Block.validateStructure(candidateBlock)){
        return false
    } else if(previousBlock.index+1 !== candidateBlock.index){
        return false
    } else if(previousBlock.hash !== candidateBlock.previousHash) {
        return false
    } else if(getHashforBlock(candidateBlock)!==candidateBlock.hash){
        return false;
    } else {
        return true
    }
}

const addBlock = (candidateBlock: Block): void => {
    if(isBlockValid(candidateBlock, getlatestBlock())){
        blockchain.push(candidateBlock)
    }
}

createNewBlock("second block")
createNewBlock("second block")
createNewBlock("fourth block")
console.log(blockchain)

export = {}
