# Function Execution Context (FEC)

Function Execution Context is the environment JavaScript creates when a function is invoked.

It contains:
- Parameters and the arguments object
- Local variables
- Inner function declarations
- Lexical environment (scope information)
- Its own `this` value

## Phases

### 1) Creation phase (before execution)

- Creates the arguments object
- Hoists variables (`var` -> `undefined`)
- Registers inner function declarations
- Sets up scope chain
- Assigns `this`

### 2) Execution phase

- Assigns runtime values
- Executes statements line by line
- Calls other functions (creating additional FECs)