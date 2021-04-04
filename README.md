## Live Demo
https://relaxed-golick-1f8f9b.netlify.app/

## Assignment Instruction
https://github.com/benson7667/ocbc-assignment/blob/master/INSTRUCTION.md

## Getting Started
```
npm install
npm start
```
The application should start at `localhost:3000`

## Edge Test Case Given
```
> login Alice
Hello, Alice!
Your balance is 0.

> topup 100
Your balance is 100.

> login Bob
Hello, Bob!
Your balance is 0.

> topup 80
Your balance is 80.

> pay Alice 50
Transferred 50 to Alice.
Your balance is 30.

> pay Alice 100
Transferred 30 to Alice.
Your balance is 0.
Owing 70 to Alice.

> topup 30
Transferred 30 to Alice.
Your balance is 0.
Owing 40 to Alice.

> login Alice
Hello, Alice!
Owing 40 from Bob.
Your balance is 210.

> pay Bob 30
Owing 10 from Bob.
Your balance is 210.

> login Bob
Hello, Bob!
Your balance is 0.
Owing 10 to Alice.

> topup 100
Transferred 10 to Alice.
Your balance is 90.
```

## Edge Test Case #1
```
CLICK RESET DATA FIRST
> topup 100
Please login first

> pay alice 100
Please login first
```

## Edge Test Case #2
```
> login alice
Hello, alice!
Your balance is 0

> pay bob 100
Aborted. Recipient not found
```

## Edge Test Case #3
```
> login alice
Hello, alice!
Your balance is 0

> topup 100
Your balance is 100

> login bob
Hello, bob!
Your balance is 0

> topup 100
Your balance is 100

> pay alice 150
Transferred 100 to alice
Your balance is 0
Owing 50 to alice

> login alice
Hello, alice!
Owing 50 from bob
Your balance is 200

> pay bob 100
Transferred 50 to bob
Your balance is 150
```

## Edge Test Case #4
```
> login alice
Hello, alice!
Your balance is 0

> login bob
Hello, bob!
Your balance is 0

> pay alice 100
Your balance is 0
Owing 100 to alice

> pay alice 100
Your balance is 0
Owing 200 to alice


> pay alice 100
Your balance is 0
Owing 300 to alice

> topup 1000
Transferred 300 to alice
Your balance is 700
```

## Edge Test Case #5
```
> login alice
Hello, alice!
Your balance is 0

> topup 300
Your balance is 300

> login bob
Hello, bob!
Your balance is 0

> topup 300
Your balance is 300

> pay alice 500
Transferred 300 to alice
Your balance is 0
Owing 200 to alice

> login alice
Hello, alice!
Owing 200 from bob
Your balance is 600

> pay bob 500
Transferred 300 to bob
Your balance is 300

> login bob
Hello, bob!
Your balance is 300
```

## Edge Test Case #6
```
> login alice
Hello, alice!
Your balance is 0

> login bob
Hello, bob!
Your balance is 0

> login amy
Hello, amy!
Your balance is 0

> pay bob 100
Your balance is 0
Owing 100 to bob

> pay alice 100
Your balance is 0
Owing 100 to bob
Owing 100 to alice

> topup 400
Transferred 100 to bob
Transferred 100 to alice
Your balance is 200

> login alice
Hello, alice!
Your balance is 100

> login bob
Hello, bob!
Your balance is 100
```

## Edge Test Case #7
```
> login alice
Hello, alice!
Your balance is 0

> topup 300
Your balance is 300

> login bob
Hello, bob!
Your balance is 0

> topup 300
Your balance is 300

> pay alice 100
Transferred 100 to alice
Your balance is 200

> pay alice 100
Transferred 100 to alice
Your balance is 100

> login alice
Hello, alice!
Your balance is 500

> login bob
Hello, bob!
Your balance is 100
```

## Edge Test Case #8
```
> login alice
Hello, alice!
Your balance is 0

> topup 300
Your balance is 300

> login bob
Hello, bob!
Your balance is 0

> topup 300
Your balance is 300

> pay alice 600
Transferred 300 to alice
Your balance is 0
Owing 300 to alice

> login alice
Hello, alice!
Owing 300 from bob
Your balance is 600

> pay bob 300
Your balance is 600

> login bob
Hello, bob!
Your balance is 0
```


