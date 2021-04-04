## Edge Case
```
CLICK RESET DATA FIRST
> topup 100
Please login first

> pay alice 100
Please login first
```

## Edge Case
```
> login alice
Hello, alice!
Your balance is 0

> pay bob 100
Aborted. Recipient not found
```

## Edge Case
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

## Edge Case
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

## Edge Case
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
