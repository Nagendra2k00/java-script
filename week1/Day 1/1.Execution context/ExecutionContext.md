# Execution Context

An execution context is the environment where JavaScript evaluates and executes code.

## Types

1. Global Execution Context (GEC)
2. Function Execution Context (FEC)

Only one execution context runs at a time.  
Other contexts wait in the call stack.

## Phases of Every Execution Context

### 1) Creation phase

This is also called the setup phase. JavaScript scans code and prepares memory:

1. Allocates memory for variables
2. Registers function declarations
3. Sets up scope information
4. Determines `this`

### 2) Execution phase

JavaScript runs code line by line using what was prepared in the creation phase.
