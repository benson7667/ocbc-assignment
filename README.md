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
