# Ts_ToyProject

# 🐶TypeScript 연습을 위한 코드입니다.

### 💻 Referenced Libraries

👀 crypto-js: ^4.0.0

👀 typescript: ^4.1.3

<br><br><br>
### 🐳주요 코드<br><br>
🍎tsconfig.json

```json
{
    /*컴파일 옵션을 정의.*/
    "compilerOptions": { 
        "module": "commonjs",
        "target": "ES2015",
        /*트랜스파일 디렉터리에 .js.map 파일이 만들어진다. 소스맵 파일은 변환된 js코드가 ts의 어디에 해당하는 지를 알려준다.*/
        "sourceMap": true,
        /*소스디렉토리에 그대로 똑같이 구조를 컴파일된 상태로 옮길 때 outDir 를 사용*/
        "outDir": "dist"
    },
    "include": ["src/**/*"],    
    "exclude": ["node_modules"]
}
```
🍄 tsconfig.js란

디렉토리에 tsconfig.json 파일이 있다면 해당 디렉토리가 TypeScript 프로젝트의 루트가 됩니다.tsconfig.json 파일은 프로젝트를 컴파일하는 데 필요한 루트 파일과 컴파일러 옵션을 지정합니다. 입력 파일 없이 tsc를 호출하면 컴파일러는 현재 디렉토리에서부터 시작하여 상위 디렉토리 체인으로 tsconfig.json 파일을 검색합니다.그후 tsfile을 jsfile로 transfile합니다.

🍄 include 속성

include/exclude는 glob 패턴을 사용하여 트랜스파일할 혹은 제외할 대상을 정할 수 있습니다. include는 exclude보다 약하기 때문에 include에 포함되어 있어도 exclude에 의해 제외될 수 있습니다. include에 *만 쓰고 확장자를 적지 않아도 자동으로 .ts .tsx. .d.ts 만 트랜스파일합니다.js가 껴있다고 해서 오류를 내지 않습니다.

🍄 exclude 속성

exclude는 아무 설정을 하지 않아도 node_modules, bower_components, jspm_packages, outDir를 default로 제외합니다.

<br>
🍎 CryptoJs의 SHA256을 통하여 블록의 hash를 생성합니다.

```tsx
static calculateBlockHash = (
	index: number, 
	previousHash: string, 
	timestamp: number, 
	data: string
): string =>
```

<br>
🍎 블록의 속성타입이 올바른지 검증합니다.

```tsx
static validateStructure = (aBlock:Block): Boolean =>
```

<br>
🍎 새로 만들어진 블록과  이전블록의 속성값을 비교한다.

```tsx
const isBlockValid = (
	candidateBlock: Block, 
	previousBlock: Block
): Boolean => 
```

<br>
🍎 블록의 구조

```tsx
class Block {
    public index: number
    public hash: string
    public previousHash: string
    public data: string
    public timestamp: number
}
```

<br>

## 🍏결과
<img src = "https://github.com/jinn2u/Ts_ToyProject/blob/main/gitimg/result.png" height="488" width="1216">
